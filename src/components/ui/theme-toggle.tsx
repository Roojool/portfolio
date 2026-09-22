"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className={`w-8 h-8 rounded border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-zinc-400 opacity-60 ${className}`}
        disabled
      >
        <Moon className="w-4 h-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`w-8 h-8 rounded border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/70 dark:bg-zinc-900/70 light:bg-zinc-100 flex items-center justify-center text-zinc-400 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-cyan-600 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
