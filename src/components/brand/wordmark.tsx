import Link from "next/link";
import { Monogram } from "./monogram";

interface WordmarkProps {
  className?: string;
  showSubtitle?: boolean;
}

export function Wordmark({ className = "", showSubtitle = true }: WordmarkProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 text-inherit no-underline transition-opacity hover:opacity-90 ${className}`}
    >
      <Monogram size={28} className="text-zinc-100 group-hover:text-cyan-400 transition-colors" />
      <div className="flex flex-col">
        <span className="text-sm font-semibold tracking-wider uppercase text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
          Rujul Talekar
        </span>
        {showSubtitle && (
          <span className="text-[10px] tracking-tight font-mono text-zinc-400 dark:text-zinc-500 light:text-zinc-600">
            AI Researcher × Systems Builder
          </span>
        )}
      </div>
    </Link>
  );
}
