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
      aria-orientation={orientation}
      data-orientation={orientation}
      data-vertical={orientation === "vertical" ? "" : undefined}
      className={cn(
        orientation === "horizontal"
          ? "h-px w-full bg-line"
          : "h-full w-px bg-line",
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
