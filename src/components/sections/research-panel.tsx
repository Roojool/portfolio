"use client";

import * as React from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/ui/panel";
import { researchVectors, type ResearchVector } from "@/data/research";

export function ResearchPanel() {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <Panel id="research">
      <PanelHeader>
        <PanelTitle>
          <a href="#research">Research</a>
          <PanelTitleSup>({researchVectors.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="divide-y divide-line">
        {researchVectors.map((item) => {
          const isOpen = expandedId === item.id;
          return (
            <div key={item.id} className="group/research transition-colors">
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="w-full text-left p-4 hover:bg-accent-muted flex items-start justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-1">
                    <h3 className="font-medium text-base text-foreground">
                      {item.title}
                    </h3>
                    <StatusDot status={item.status} />
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.researchQuestion}
                  </p>
                </div>

                <div className="shrink-0 text-muted-foreground pt-1">
                  <ChevronDown
                    className={`size-4 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-1 space-y-3 bg-muted/30 border-t border-line text-xs font-sans">
                  <div>
                    <span className="font-mono text-muted-foreground uppercase text-[10px] tracking-wider block mb-1">
                      Current Operational State
                    </span>
                    <p className="text-foreground/90 leading-relaxed">
                      {item.currentState}
                    </p>
                  </div>

                  {item.keyOutputs.length > 0 && (
                    <div>
                      <span className="font-mono text-muted-foreground uppercase text-[10px] tracking-wider block mb-1">
                        Milestones & Deliverables
                      </span>
                      <ul className="space-y-1 text-foreground/80 list-disc list-inside">
                        {item.keyOutputs.map((out, idx) => (
                          <li key={idx}>{out}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-line/60">
                    <div className="flex flex-wrap gap-1 font-mono text-[11px] text-muted-foreground">
                      <span className="font-medium text-foreground">Methods:</span>{" "}
                      {item.methods.join(" · ")}
                    </div>

                    {item.relevantProject?.url && (
                      <a
                        href={item.relevantProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs link-underline text-foreground"
                      >
                        <span>Project: {item.relevantProject.name}</span>
                        <ExternalLink className="size-3" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Panel>
  );
}

function StatusDot({ status }: { status: ResearchVector["status"] }) {
  const isGreen = status === "ACTIVE";
  const isAmber = status === "EXPERIMENTAL";

  return (
    <span className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
      <span
        className={`size-1.5 rounded-full ${
          isGreen
            ? "bg-emerald-600 dark:bg-emerald-400"
            : isAmber
            ? "bg-amber-600 dark:bg-amber-400"
            : "bg-zinc-400 dark:bg-zinc-500"
        }`}
        aria-hidden
      />
      <span>{status}</span>
    </span>
  );
}
