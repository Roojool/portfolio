import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "cyan" | "green" | "outline" | "subtle";
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "bg-zinc-800/60 text-zinc-300 border-zinc-700/60 dark:bg-zinc-900/80 dark:text-zinc-300 dark:border-zinc-800 light:bg-zinc-100 light:text-zinc-700 light:border-zinc-200",
    cyan:
      "bg-cyan-950/40 text-cyan-300 border-cyan-800/40 dark:bg-cyan-950/40 dark:text-cyan-300 dark:border-cyan-800/50 light:bg-cyan-50 light:text-cyan-700 light:border-cyan-200",
    green:
      "bg-emerald-950/40 text-emerald-300 border-emerald-800/40 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/50 light:bg-emerald-50 light:text-emerald-700 light:border-emerald-200",
    outline:
      "bg-transparent text-zinc-400 border-zinc-800 dark:border-zinc-800 light:border-zinc-300 light:text-zinc-600",
    subtle:
      "bg-zinc-900/40 text-zinc-400 border-transparent dark:bg-zinc-900/40 dark:text-zinc-400 light:bg-zinc-100 light:text-zinc-600"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono tracking-tight border transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
