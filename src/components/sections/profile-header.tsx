import * as React from "react";
import Image from "next/image";
import { RujulMarkIsometric } from "@/components/brand/rujul-mark-isometric";
import { FlipSentences } from "@/components/ui/flip-sentences";
import { SITE_INFO } from "@/config/site";

const FLIP_SENTENCES = [
  "AI research × systems engineering.",
  "Human-Centered AI.",
  "Video Management Systems.",
  "Computer vision & edge analytics.",
  "Configured state ≠ measured behavior.",
];

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] overflow-y-clip border-x screen-line-bottom-border after:z-1">
      {/* Right Column: Isometric Figure */}
      <div className="relative col-span-2 p-2 sm:col-span-1 sm:col-start-2 sm:p-4">
        <RujulMarkIsometric />
      </div>

      {/* Left Column: Avatar */}
      <div className="flex flex-col sm:row-span-2 sm:row-start-1">
        <div className="screen-line-top mt-auto shrink-0 border-r border-line p-3 sm:p-4">
          <div className="relative size-28 min-[24rem]:size-32 sm:size-36 rounded-full overflow-hidden bg-muted">
            <Image
              src="https://avatars.githubusercontent.com/u/113801876?v=4"
              alt="Rujul Talekar"
              width={160}
              height={160}
              priority
              className="size-full object-cover select-none"
              unoptimized
            />
            <div className="pointer-events-none absolute inset-0 rounded-full inset-ring-1 inset-ring-foreground/20 dark:inset-ring-foreground/10" />
          </div>
        </div>
      </div>

      {/* Lower Right: Name & Flip Sentences */}
      <div className="flex flex-col col-span-2 sm:col-span-1">
        <div className="z-1 mt-auto border-t border-line">
          <div className="flex items-baseline justify-between gap-3 px-4 py-2 sm:py-2.5">
            <h1 className="text-2xl sm:text-[2rem] font-medium tracking-tight text-foreground">
              {SITE_INFO.name}
            </h1>
            <a
              href={SITE_INFO.orcidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
              title="ORCID Record"
            >
              ORCID: {SITE_INFO.orcid}
            </a>
          </div>

          <FlipSentences
            sentences={FLIP_SENTENCES}
            className="h-10 border-t border-line px-4"
          />
        </div>
      </div>
    </div>
  );
}
