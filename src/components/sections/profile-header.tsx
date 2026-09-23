import * as React from "react";
import Image from "next/image";
import { RujulMarkIsometric } from "@/components/brand/rujul-mark-isometric";
import { FlipSentences } from "@/components/ui/flip-sentences";
import { SITE_INFO } from "@/config/site";

const FLIP_SENTENCES = [
  "AI research × systems engineering.",
  "Human-Centered AI & AI usability.",
  "Video Management Systems & telemetry.",
  "Computer vision & edge analytics.",
  "Configured state ≠ measured behavior.",
];

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] overflow-y-clip border-x screen-line-bottom-border after:z-1">
      {/* Figure with Refined Isometric Wireframe Mark */}
      <figure className="relative col-span-2 p-3 sm:col-span-1 sm:col-start-2 sm:p-4">
        <RujulMarkIsometric />

        <figcaption className="pointer-events-none absolute right-3 bottom-2.5 text-xs/none font-mono tracking-wider text-muted-foreground/60 tabular-nums select-none sm:right-4 sm:bottom-3">
          Fig. 1.
        </figcaption>
      </figure>

      {/* Avatar Column with exact pixel-art portrait */}
      <div className="flex flex-col sm:row-span-2 sm:row-start-1">
        <div className="screen-line-top mt-auto shrink-0 border-r border-line">
          <div className="mx-0.5 my-0.75 flex outline-none">
            <div className="relative size-30 rounded-full min-[24rem]:size-32 sm:size-40 overflow-hidden bg-muted">
              <Image
                src="/images/rujul-hero.png"
                alt={SITE_INFO.name}
                width={160}
                height={160}
                priority
                className="size-full rounded-[inherit] object-cover select-none"
                style={{ imageRendering: "pixelated" }}
                unoptimized
              />
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] inset-ring-1 inset-ring-foreground/30 dark:inset-ring-foreground/15" />
            </div>
          </div>
        </div>
      </div>

      {/* Name and Flip Sentences Column */}
      <div className="flex flex-col">
        <div className="z-1 mt-auto border-t border-line">
          <div className="flex -translate-x-px items-center gap-2 pl-4 pt-1 sm:pt-0">
            <h1 className="-translate-y-px text-[2rem]/none font-medium tracking-tight">
              {SITE_INFO.name}
            </h1>
          </div>

          <FlipSentences className="h-12.5 border-t border-line py-1 pl-4 sm:h-9">
            {FLIP_SENTENCES}
          </FlipSentences>
        </div>
      </div>
    </div>
  );
}
