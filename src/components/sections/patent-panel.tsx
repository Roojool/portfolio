import * as React from "react";
import { ShieldCheck } from "lucide-react";
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/ui/panel";
import { RecordItem } from "@/components/ui/record-item";
import { patents } from "@/data/patents";

const ID = "patents";

export function PatentPanel() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Intellectual Property</a>
          <PanelTitleSup>({patents.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div>
        {patents.map((pat) => {
          const details = (
            <div className="space-y-3">
              <p className="text-xs text-foreground/90 font-sans leading-relaxed">
                {pat.summary}
              </p>

              <div className="space-y-1.5 text-xs font-mono text-muted-foreground pt-1 border-t border-line">
                <div>
                  <span className="font-semibold text-foreground">Identifier: </span>
                  <span className="tabular-nums">{pat.identifier}</span>
                </div>

                <div>
                  <span className="font-semibold text-foreground">Jurisdiction: </span>
                  <span>{pat.jurisdiction}</span>
                </div>

                <div>
                  <span className="font-semibold text-foreground">Status: </span>
                  <span>{pat.status}</span>
                </div>

                <div>
                  <span className="font-semibold text-foreground">
                    {pat.dateLabel} Date:{" "}
                  </span>
                  <span className="tabular-nums">{pat.date}</span>
                </div>
              </div>
            </div>
          );

          const tags = [
            pat.jurisdiction,
            pat.status,
            ...(pat.ipcClassification || []),
          ];

          return (
            <RecordItem
              key={pat.id}
              icon={<ShieldCheck className="size-4" />}
              title={pat.title}
              type={pat.status}
              date={pat.date}
              metadata={`${pat.jurisdiction} · ${pat.identifier}`}
              details={details}
              tags={tags}
            />
          );
        })}
      </div>
    </Panel>
  );
}
