import * as React from "react";
import { cn } from "@/lib/utils";

export function Panel({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="panel"
      className={cn(
        "screen-line-top screen-line-bottom border-x screen-line-bottom-border",
        className
      )}
      {...props}
    />
  );
}

export function PanelHeader({
  className,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="panel-header"
      className={cn(
        "screen-line-bottom px-4 has-data-[slot=panel-description]:*:data-[slot=panel-title]:screen-line-bottom",
        className
      )}
      {...props}
    />
  );
}

export function PanelTitle({
  as: Comp = "h2",
  className,
  ...props
}: React.ComponentProps<"h2"> & { as?: "h2" | "div" | "h1" }) {
  return (
    <Comp
      data-slot="panel-title"
      className={cn(
        "group/panel-title font-heading text-2xl sm:text-3xl font-medium tracking-tight text-balance text-foreground",
        className
      )}
      {...props}
    />
  );
}

export function PanelTitleSup({
  className,
  ...props
}: React.ComponentProps<"sup">) {
  return (
    <sup
      className={cn(
        "top-[-0.75em] ml-1 text-sm font-medium tracking-normal text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export function PanelDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-description"
      className={cn(
        "py-4 text-sm sm:text-base text-balance text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export function PanelContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div data-slot="panel-body" className={cn("p-4", className)} {...props} />
  );
}
