import * as React from "react";
import { Panel, PanelHeader, PanelTitle } from "@/components/ui/panel";
import { experiences } from "@/data/experience";

export function ExperiencePanel() {
  return (
    <Panel id="experience">
      <PanelHeader>
        <PanelTitle>
          <a href="#experience">Experience</a>
        </PanelTitle>
      </PanelHeader>

      <div className="px-4 py-2 divide-y divide-line">
        {experiences.map((exp) => (
          <div key={exp.id} className="py-4 space-y-3">
            <div className="flex items-start gap-3 sm:items-center">
              {/* Organization Indicator Dot */}
              <div className="flex size-6 shrink-0 items-center justify-center">
                <span className="flex size-2 rounded-full bg-foreground/60" />
              </div>

              <div className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-foreground">
                    {exp.organization}
                  </h3>
                  <div className="text-sm font-medium text-muted-foreground">
                    {exp.role}{" "}
                    {exp.advisor && (
                      <span className="text-xs text-muted-foreground">
                        (Advisor: {exp.advisor})
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <span>{exp.period}</span>
                  {exp.current && (
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                      <span className="relative inline-flex size-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Timeline content line */}
            <div className="relative pl-9 space-y-2 before:absolute before:left-3 before:top-1 before:h-full before:w-px before:bg-border">
              <p className="text-xs font-mono text-muted-foreground">
                Focus: {exp.focus}
              </p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="leading-relaxed">
                    · {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
