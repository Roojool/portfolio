import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "secondary",
  size = "md",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded font-medium text-xs tracking-tight transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 disabled:opacity-50 disabled:pointer-events-none";

  const sizeClasses = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3.5 py-1.5 text-xs",
    lg: "px-4.5 py-2 text-sm"
  }[size];

  const variantClasses = {
    primary:
      "bg-zinc-100 text-zinc-900 hover:bg-white dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white light:bg-zinc-900 light:text-zinc-50 light:hover:bg-zinc-800 shadow-sm",
    secondary:
      "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-white light:bg-zinc-100 light:text-zinc-700 light:border-zinc-200 light:hover:bg-zinc-200",
    outline:
      "border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 bg-transparent dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 light:border-zinc-300 light:text-zinc-600 light:hover:text-zinc-900",
    ghost:
      "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40 bg-transparent dark:text-zinc-400 dark:hover:text-zinc-100 light:text-zinc-600 light:hover:text-zinc-900 light:hover:bg-zinc-100",
    cyan:
      "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/30 light:bg-cyan-50 light:text-cyan-700 light:border-cyan-200 light:hover:bg-cyan-100"
  }[variant];

  const combinedClass = cn(baseClasses, sizeClasses, variantClasses, className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClass}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
}
