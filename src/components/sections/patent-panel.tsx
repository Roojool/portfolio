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
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">{pat.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono pt-1 text-muted-foreground">
                <div>
                  <span className="font-semibold text-foreground">Filing Date: </span>
                  {pat.filingDate}
                </div>
                <div>
                  <span className="font-semibold text-foreground">Publication Date: </span>
                  {pat.publicationDate}
                </div>
                <div className="sm:col-span-2">
                  <span className="font-semibold text-foreground">Field: </span>
                  {pat.field}
                </div>
              </div>
            </div>
          );

          return (
            <RecordItem
              key={pat.id}
              icon={<ShieldCheck className="size-4" />}
              title={pat.title}
              type={pat.status}
              date="2026"
              metadata={`Field: ${pat.field}`}
              details={details}
              tags={pat.ipcClassification}
            />
          );
        })}
      </div>
    </Panel>
  );
}
