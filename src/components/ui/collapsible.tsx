"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CollapsibleContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  disabled?: boolean;
}

const CollapsibleContext = React.createContext<CollapsibleContextValue | null>(null);

export function useCollapsible() {
  const context = React.useContext(CollapsibleContext);
  if (!context) {
    throw new Error("useCollapsible must be used within a Collapsible");
  }
  return context;
}

export interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
}

export function Collapsible({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  disabled = false,
  className,
  children,
  ...props
}: CollapsibleProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;

  const handleOpenChange = React.useCallback(
    (nextOpen: boolean) => {
      if (disabled) return;
      if (controlledOpen === undefined) {
        setUncontrolledOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [controlledOpen, disabled, onOpenChange]
  );

  return (
    <CollapsibleContext.Provider value={{ open, onOpenChange: handleOpenChange, disabled }}>
      <div
        data-slot="collapsible"
        data-state={open ? "open" : "closed"}
        data-disabled={disabled ? "" : undefined}
        className={cn("group/collapsible", className)}
        {...props}
      >
        {children}
      </div>
    </CollapsibleContext.Provider>
  );
}

export interface CollapsibleTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  render?: React.ReactElement<any>;
}

export function CollapsibleTrigger({
  className,
  onClick,
  children,
  render,
  ...props
}: CollapsibleTriggerProps) {
  const { open, onOpenChange, disabled } = useCollapsible();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    if (!e.defaultPrevented && !disabled) {
      onOpenChange(!open);
    }
  };

  if (render) {
    return React.cloneElement(render as React.ReactElement<any>, {
      "data-slot": "collapsible-trigger",
      "data-state": open ? "open" : "closed",
      "aria-expanded": open,
      disabled,
      onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
        (render.props as any)?.onClick?.(e);
        handleClick(e);
      },
      className: cn((render.props as any)?.className, className),
    } as any);
  }

  return (
    <button
      type="button"
      data-slot="collapsible-trigger"
      data-state={open ? "open" : "closed"}
      aria-expanded={open}
      disabled={disabled}
      onClick={handleClick}
      className={cn("cursor-pointer outline-none select-none", className)}
      {...props}
    >
      {children}
    </button>
  );
}

export interface CollapsibleContentProps extends React.HTMLAttributes<HTMLDivElement> {
  render?: React.ReactElement<any>;
}

export function CollapsibleContent({
  className,
  children,
  render,
  ...props
}: CollapsibleContentProps) {
  const { open } = useCollapsible();

  if (!open) return null;

  if (render) {
    return React.cloneElement(render as React.ReactElement<any>, {
      "data-slot": "collapsible-content",
      "data-state": open ? "open" : "closed",
      className: cn((render.props as any)?.className, className),
      children,
    } as any);
  }

  return (
    <div
      data-slot="collapsible-content"
      data-state={open ? "open" : "closed"}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}
