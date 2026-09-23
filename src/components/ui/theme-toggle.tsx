"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const switchTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={switchTheme}
      aria-label="Toggle theme mode"
      title={mounted ? `Toggle ${resolvedTheme === "dark" ? "light" : "dark"} mode` : "Toggle mode"}
      className={cn(
        "relative flex size-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/50 cursor-pointer",
        className
      )}
    >
      <svg
        className="size-4 text-current transition-transform duration-300 dark:rotate-180"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden
      >
        <path d="M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z" />
      </svg>
    </button>
  );
}
