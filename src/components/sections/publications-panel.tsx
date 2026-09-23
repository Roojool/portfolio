"use client";

import * as React from "react";
import { BookOpen, Check, Copy } from "lucide-react";
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
      <pre className="p-3 rounded-lg bg-zinc-900/90 text-zinc-100 font-mono text-xs overflow-x-auto selection:bg-zinc-700">
        <code>{bibtex}</code>
      </pre>
      <Button
        variant="ghost"
        size="icon-xs"
        onClick={handleCopy}
        className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
        aria-label="Copy BibTeX citation"
      >
        {copied ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
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
          const venueStr = pub.venue
            ? `${pub.publisher ? `${pub.publisher} · ` : ""}${pub.venue}`
            : "Peer-Reviewed Article";

          const details = (
            <div className="space-y-2">
              <p className="text-xs font-mono text-muted-foreground">
                <span className="font-semibold text-foreground">Authors: </span>
                {pub.authors.join(", ")}
              </p>
              {pub.pages && (
                <p className="text-xs font-mono text-muted-foreground">
                  <span className="font-semibold text-foreground">Pages: </span>
                  {pub.pages}
                </p>
              )}
              {pub.bibtex && <BibTeXBlock bibtex={pub.bibtex} />}
            </div>
          );

          return (
            <RecordItem
              key={pub.id}
              icon={<BookOpen className="size-4" />}
              title={pub.title}
              type={pub.status}
              date={pub.year.toString()}
              metadata={venueStr}
              details={details}
              tags={[pub.publisher || "Research", pub.year.toString()]}
            />
          );
        })}
      </div>
    </Panel>
  );
}
