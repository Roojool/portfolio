import * as React from "react";
import { cn } from "@/lib/utils";

export function Separator({
  orientation = "horizontal",
  className,
  ...props
}: React.ComponentProps<"div"> & { orientation?: "horizontal" | "vertical" }) {
  return (
    <div
      role="separator"
      data-slot="separator"
      aria-orientation={orientation}
      data-orientation={orientation}
      data-horizontal={orientation === "horizontal" ? "" : undefined}
      data-vertical={orientation === "vertical" ? "" : undefined}
      className={cn(
        "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className
      )}
      {...props}
    />
  );
}

export function StripeSeparator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "stripe-divider h-[var(--separator-height)] w-full border-x",
        className
      )}
      aria-hidden
    />
  );
}
