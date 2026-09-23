import * as React from "react";
import { GraduationCap } from "lucide-react";
import { Panel, PanelHeader, PanelTitle } from "@/components/ui/panel";
import { education } from "@/data/education";

export function EducationPanel() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>
          <a href="#education">Education</a>
        </PanelTitle>
      </PanelHeader>

      <div className="p-4 space-y-4">
        {education.map((edu) => (
          <div key={edu.id} className="flex items-start gap-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-muted/30 text-muted-foreground">
              <GraduationCap className="size-4" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-base font-medium text-foreground">
                  {edu.institution}
                </h3>
                <span className="text-xs font-mono text-muted-foreground">
                  {edu.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                {edu.degree} in {edu.field}
              </p>
              <p className="text-xs font-mono text-muted-foreground/80 mt-1">
                {edu.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
