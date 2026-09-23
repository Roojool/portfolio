"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface FlipSentencesProps extends Omit<React.ComponentProps<"div">, "children"> {
  children?: string[];
  sentences?: string[];
  intervalMs?: number;
}

export function FlipSentences({
  children,
  sentences: sentencesProp,
  className,
  intervalMs = 3200,
  ...props
}: FlipSentencesProps) {
  const items = children ?? sentencesProp ?? [];
  const [index, setIndex] = React.useState(0);
  const [isReduced, setIsReduced] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReduced(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsReduced(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  React.useEffect(() => {
    if (isReduced || items.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [isReduced, items.length, intervalMs]);

  const activeSentence = items[index] ?? items[0] ?? "";

  return (
    <div
      className={cn("flex items-center overflow-hidden", className)}
      aria-live="polite"
      {...props}
    >
      <span
        key={index}
        className="font-mono text-sm text-balance text-muted-foreground transition-opacity duration-300 ease-in-out"
      >
        {activeSentence}
      </span>
    </div>
  );
}
