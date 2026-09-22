import React from "react";
import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  label?: string;
  prefix?: string;
  className?: string;
  dotColor?: "green" | "cyan" | "amber";
}

export function StatusIndicator({
  label = "AI/HCI · VMS · NETWORK SYSTEMS",
  prefix = "CURRENTLY",
  className = "",
  dotColor = "green"
}: StatusIndicatorProps) {
  const dotColorClass = {
    green: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]",
    cyan: "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.5)]",
    amber: "bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.5)]"
  }[dotColor];

  const pulseClass = {
    green: "bg-emerald-400/40",
    cyan: "bg-cyan-400/40",
    amber: "bg-amber-400/40"
  }[dotColor];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-2.5 py-1 rounded border border-zinc-800/80 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100/90 text-xs font-mono backdrop-blur-sm",
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", pulseClass)} />
        <span className={cn("relative inline-flex rounded-full h-2 w-2", dotColorClass)} />
      </span>
      {prefix && (
        <span className="text-[10px] tracking-wider uppercase font-semibold text-zinc-400 dark:text-zinc-500 light:text-zinc-500">
          {prefix}:
        </span>
      )}
      <span className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 tracking-tight font-medium">
        {label}
      </span>
    </div>
  );
}
