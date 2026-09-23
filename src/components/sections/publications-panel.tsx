"use client";

import * as React from "react";
import { BookOpen, Copy, Check } from "lucide-react";
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/ui/panel";
import { publications } from "@/data/publications";

export function PublicationsPanel() {
  const [openBibId, setOpenBibId] = React.useState<string | null>(null);
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const toggleBib = (id: string) => {
    setOpenBibId((prev) => (prev === id ? null : id));
  };

  const copyBib = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <Panel id="publications">
      <PanelHeader>
        <PanelTitle>
          <a href="#publications">Publications</a>
          <PanelTitleSup>({publications.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="divide-y divide-line">
        {publications.map((pub) => {
          const isBibOpen = openBibId === pub.id;
          const isCopied = copiedId === pub.id;

          return (
            <div key={pub.id} className="p-4 space-y-2">
              <div className="flex items-start gap-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded border border-border bg-muted/30 text-muted-foreground">
                  <BookOpen className="size-3.5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-medium text-sm sm:text-base text-foreground leading-snug">
                      {pub.title}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground shrink-0">
                      {pub.year}
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground mt-1">
                    {pub.authors.join(", ")}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-muted-foreground/80 mt-1.5">
                    {pub.venue && <span>{pub.venue}</span>}
                    {pub.pages && <span>pp. {pub.pages}</span>}
                    {pub.publisher && <span>[{pub.publisher}]</span>}
                  </div>

                  {pub.bibtex && (
                    <div className="mt-2.5 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => toggleBib(pub.id)}
                        className="text-xs font-mono text-muted-foreground hover:text-foreground link-underline cursor-pointer"
                      >
                        {isBibOpen ? "Hide BibTeX" : "View BibTeX"}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {isBibOpen && pub.bibtex && (
                <div className="relative mt-2 p-3 rounded bg-muted/40 border border-line font-mono text-xs text-foreground/90 overflow-x-auto">
                  <button
                    type="button"
                    onClick={() => copyBib(pub.id, pub.bibtex!)}
                    aria-label="Copy BibTeX citation"
                    className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded bg-background border border-border text-[11px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="size-3 text-emerald-500" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <pre className="pr-16 whitespace-pre">{pub.bibtex}</pre>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Panel>
  );
}
