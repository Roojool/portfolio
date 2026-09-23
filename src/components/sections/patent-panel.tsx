import * as React from "react";
import { Award } from "lucide-react";
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/ui/panel";
import { patents } from "@/data/patents";

export function PatentPanel() {
  return (
    <Panel id="patent">
      <PanelHeader>
        <PanelTitle>
          <a href="#patent">Intellectual Property</a>
          <PanelTitleSup>({patents.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="p-4 space-y-4">
        {patents.map((item) => (
          <div key={item.id} className="flex items-start gap-3">
            <div className="flex size-7 shrink-0 items-center justify-center rounded border border-border bg-muted/30 text-muted-foreground">
              <Award className="size-3.5" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-medium text-sm sm:text-base text-foreground leading-snug">
                  {item.title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.status}
                </span>
              </div>

              {item.description && (
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {item.description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-muted-foreground/80 mt-2">
                <span>Field: {item.field}</span>
                <span>Filed: {item.filingDate}</span>
                <span>Published: {item.publicationDate}</span>
              </div>

              {item.ipcClassification && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {item.ipcClassification.map((ipc) => (
                    <span
                      key={ipc}
                      className="px-1.5 py-0.5 rounded bg-muted/40 font-mono text-[10px] text-muted-foreground border border-border"
                    >
                      {ipc}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
