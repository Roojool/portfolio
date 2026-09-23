"use client";

import * as React from "react";
import { BookOpen, Check, Copy, ExternalLink } from "lucide-react";
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/ui/panel";
import { RecordItem } from "@/components/ui/record-item";
import { Button } from "@/components/ui/button";
import { publications } from "@/data/publications";

const ID = "publications";

function BibTeXBlock({ bibtex }: { bibtex: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mt-2">
      <pre className="p-3 rounded-lg bg-zinc-900/90 text-zinc-100 font-mono text-[11px] leading-relaxed overflow-x-auto selection:bg-zinc-700">
        <code>{bibtex}</code>
      </pre>
      <Button
        variant="ghost"
        size="icon-xs"
        onClick={handleCopy}
        className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
        aria-label="Copy BibTeX citation"
      >
        {copied ? (
          <Check className="size-3 text-emerald-400" />
        ) : (
          <Copy className="size-3" />
        )}
      </Button>
    </div>
  );
}

export function PublicationsPanel() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Publications</a>
          <PanelTitleSup>({publications.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div>
        {publications.map((pub) => {
          const details = (
            <div className="space-y-3">
              <p className="text-xs text-foreground/90 font-sans leading-relaxed">
                {pub.summary}
              </p>

              <div className="space-y-1.5 text-xs font-mono text-muted-foreground pt-1 border-t border-line">
                <div>
                  <span className="font-semibold text-foreground">Authors: </span>
                  <span>{pub.authors.join(", ")}</span>
                </div>

                <div>
                  <span className="font-semibold text-foreground">Venue: </span>
                  <span>{pub.venue}</span>
                </div>

                <div>
                  <span className="font-semibold text-foreground">Conference Dates: </span>
                  <span className="tabular-nums">{pub.conferenceDates}</span>
                </div>

                {pub.pages && (
                  <div>
                    <span className="font-semibold text-foreground">Pages: </span>
                    <span className="tabular-nums">{pub.pages}</span>
                  </div>
                )}

                {pub.doi && (
                  <div>
                    <span className="font-semibold text-foreground">DOI: </span>
                    <span className="tabular-nums">{pub.doi}</span>
                  </div>
                )}

                {pub.scholarUrl && (
                  <div className="pt-1">
                    <a
                      href={pub.scholarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 link text-foreground font-sans text-xs"
                    >
                      <span>Google Scholar</span>
                      <ExternalLink className="size-3" />
                    </a>
                  </div>
                )}

                {pub.evidenceUrl && (
                  <div className="pt-1">
                    <a
                      href={pub.evidenceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 link text-foreground font-sans text-xs"
                    >
                      <span>{pub.evidenceLabel || "Presentation Certificate"}</span>
                      <ExternalLink className="size-3" />
                    </a>
                  </div>
                )}
              </div>

              {pub.bibtex && <BibTeXBlock bibtex={pub.bibtex} />}
            </div>
          );

          return (
            <RecordItem
              key={pub.id}
              icon={<BookOpen className="size-4" />}
              title={pub.title}
              type={pub.venueAbbr}
              date={pub.date}
              metadata={`Conference: ${pub.conferenceDates}`}
              referenceLink={pub.scholarUrl}
              details={details}
              tags={[pub.publisher || "IEEE", pub.type, pub.year.toString()]}
            />
          );
        })}
      </div>
    </Panel>
  );
}
