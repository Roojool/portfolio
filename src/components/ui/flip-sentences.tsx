"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface FlipSentencesProps {
  sentences: string[];
  className?: string;
  intervalMs?: number;
}

export function FlipSentences({
  sentences,
  className,
  intervalMs = 3200,
}: FlipSentencesProps) {
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
    if (isReduced || sentences.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [isReduced, sentences.length, intervalMs]);

  const activeSentence = sentences[index] ?? sentences[0];

  return (
    <div
      className={cn(
        "flex items-center text-xs sm:text-sm font-mono text-muted-foreground overflow-hidden",
        className
      )}
      aria-live="polite"
    >
      <span
        key={index}
        className="transition-opacity duration-300 ease-in-out truncate"
      >
        {activeSentence}
      </span>
    </div>
  );
}
