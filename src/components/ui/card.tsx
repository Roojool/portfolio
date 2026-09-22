import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "technical" | "subtle";
  glow?: boolean;
}

export function Card({
  className,
  variant = "default",
  glow = false,
  children,
  ...props
}: CardProps) {
  const variants = {
    default:
      "bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700/80 transition-all dark:bg-zinc-950/70 dark:border-zinc-800/80 light:bg-white light:border-zinc-200 shadow-sm",
    technical:
      "bg-zinc-900/40 border border-zinc-800/80 hover:border-cyan-900/60 dark:bg-zinc-900/40 dark:border-zinc-800/80 light:bg-zinc-50/70 light:border-zinc-200 transition-all relative",
    subtle:
      "bg-zinc-900/20 border border-zinc-900/80 dark:bg-zinc-900/20 dark:border-zinc-900/80 light:bg-zinc-50 light:border-zinc-100"
  };

  return (
    <div
      className={cn(
        "rounded-lg p-5 transition-all duration-200",
        variants[variant],
        glow && "hover:shadow-[0_0_24px_rgba(6,182,212,0.08)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col space-y-1.5 mb-3", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-base font-semibold leading-none tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
