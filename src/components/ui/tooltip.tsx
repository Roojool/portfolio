"use client";

import * as React from "react";
import { createContext, useContext, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

interface TooltipContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRect: DOMRect | null;
  setTriggerRect: (rect: DOMRect | null) => void;
}

const TooltipContext = createContext<TooltipContextType | null>(null);

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function Tooltip({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [triggerRect, setTriggerRect] = useState<DOMRect | null>(null);

  return (
    <TooltipContext.Provider
      value={{ open, setOpen, triggerRect, setTriggerRect }}
    >
      {children}
    </TooltipContext.Provider>
  );
}

export interface TooltipTriggerProps
  extends React.HTMLAttributes<HTMLElement> {
  render?: React.ReactElement<{
    onMouseEnter?: (e: React.MouseEvent) => void;
    onMouseLeave?: (e: React.MouseEvent) => void;
    onFocus?: (e: React.FocusEvent) => void;
    onBlur?: (e: React.FocusEvent) => void;
    ref?: React.Ref<HTMLElement>;
  }>;
}

export function TooltipTrigger({
  render,
  children,
  className,
  ...props
}: TooltipTriggerProps) {
  const context = useContext(TooltipContext);
  const ref = useRef<HTMLElement>(null);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const target = (e.currentTarget || ref.current) as HTMLElement;
    if (target && typeof target.getBoundingClientRect === "function") {
      context?.setTriggerRect(target.getBoundingClientRect());
    }
    context?.setOpen(true);
  };

  const handleMouseLeave = () => {
    context?.setOpen(false);
  };

  const handleFocus = (e: React.FocusEvent) => {
    const target = (e.currentTarget || ref.current) as HTMLElement;
    if (target && typeof target.getBoundingClientRect === "function") {
      context?.setTriggerRect(target.getBoundingClientRect());
    }
    context?.setOpen(true);
  };

  const handleBlur = () => {
    context?.setOpen(false);
  };

  if (render) {
    return React.cloneElement(render, {
      onMouseEnter: (e: React.MouseEvent) => {
        render.props.onMouseEnter?.(e);
        handleMouseEnter(e);
      },
      onMouseLeave: (e: React.MouseEvent) => {
        render.props.onMouseLeave?.(e);
        handleMouseLeave();
      },
      onFocus: (e: React.FocusEvent) => {
        render.props.onFocus?.(e);
        handleFocus(e);
      },
      onBlur: (e: React.FocusEvent) => {
        render.props.onBlur?.(e);
        handleBlur();
      },
    });
  }

  return (
    <span
      ref={ref as React.RefObject<HTMLSpanElement>}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={cn("inline-flex", className)}
      tabIndex={0}
      {...props}
    >
      {children}
    </span>
  );
}

export function TooltipContent({
  className,
  children,
  side = "top",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  side?: "top" | "bottom" | "left" | "right";
}) {
  const context = useContext(TooltipContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!context?.open || !context.triggerRect || !mounted) {
    return null;
  }

  const { triggerRect } = context;
  let top = triggerRect.top - 8;
  let left = triggerRect.left + triggerRect.width / 2;
  let transform = "translate(-50%, -100%)";

  if (side === "bottom") {
    top = triggerRect.bottom + 8;
    transform = "translate(-50%, 0)";
  } else if (side === "left") {
    top = triggerRect.top + triggerRect.height / 2;
    left = triggerRect.left - 8;
    transform = "translate(-100%, -50%)";
  } else if (side === "right") {
    top = triggerRect.top + triggerRect.height / 2;
    left = triggerRect.right + 8;
    transform = "translate(0, -50%)";
  }

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: `${top}px`,
        left: `${left}px`,
        transform,
      }}
      className={cn(
        "z-50 pointer-events-none origin-bottom select-none",
        "rounded-md bg-foreground px-2.5 py-1 text-xs font-sans font-medium text-background shadow-lg",
        "animate-in fade-in-0 zoom-in-95 duration-100",
        className
      )}
      role="tooltip"
      {...props}
    >
      {children}
    </div>,
    document.body
  );
}
