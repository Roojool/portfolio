import * as React from "react";
import { Panel, PanelHeader, PanelTitle } from "@/components/ui/panel";
import { skillCategories } from "@/data/skills";

export function TechStackPanel() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>
          <a href="#stack">Stack</a>
        </PanelTitle>
      </PanelHeader>

      <div className="relative [--badge-height:1.5rem] [--col-left-width:11rem]">
        {/* Dashed vertical divider between columns on desktop */}
        <div
          className="pointer-events-none absolute inset-y-0 left-[var(--col-left-width)] -z-1 w-px border-r border-dashed border-line max-sm:hidden"
          aria-hidden
        />

        {skillCategories.map((category, index) => {
          return (
            <div
              key={category.title}
              className="grid items-start gap-y-2 border-b border-line py-3 sm:py-3.5 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]"
            >
              {/* Left Column: Number + Category */}
              <div className="pl-4 text-sm font-medium text-foreground">
                <span
                  className="mr-2 font-mono text-muted-foreground/80 select-none text-xs"
                  aria-hidden
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {category.title}
              </div>

              {/* Right Column: Compact Tech Pills */}
              <ul className="flex flex-wrap gap-1.5 px-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex">
                    <span className="flex h-6 items-center justify-center rounded-full bg-muted/60 dark:bg-zinc-900/80 px-2.5 font-mono text-xs text-foreground border border-border select-none">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}
