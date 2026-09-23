"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { useCollapsible, Collapsible } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export { Collapsible };

export function CollapsibleChevronsUpDownIcon({
  className,
  duration = 0.15,
  ...props
}: React.ComponentProps<"svg"> & { duration?: number }) {
  const { open } = useCollapsible();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-4 transition-transform ease-out", className)}
      style={{ transitionDuration: `${duration}s` }}
      aria-hidden
      {...props}
    >
      <path
        d="m7 15 5 5 5-5"
        className={cn("transition-transform ease-out", open && "translate-y-0.5")}
        style={{ transitionDuration: `${duration}s` }}
      />
      <path
        d="m7 9 5-5 5 5"
        className={cn("transition-transform ease-out", open && "-translate-y-0.5")}
        style={{ transitionDuration: `${duration}s` }}
      />
    </svg>
  );
}

export function CollapsibleChevronDownIcon({
  className,
  duration = 0.15,
  ...props
}: React.ComponentProps<"svg"> & { duration?: number }) {
  const { open } = useCollapsible();

  return (
    <ChevronDown
      className={cn(
        "size-4 transition-transform ease-out",
        open && "rotate-180",
        className
      )}
      style={{ transitionDuration: `${duration}s` }}
      aria-hidden
      {...props}
    />
  );
}
