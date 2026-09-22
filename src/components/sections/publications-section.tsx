"use client";

import * as React from "react";
import { publications } from "@/data/publications";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, Quote, ExternalLink } from "lucide-react";

export function PublicationsSection() {
  const [copiedBibtex, setCopiedBibtex] = React.useState<string | null>(null);

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBibtex(id);
    setTimeout(() => setCopiedBibtex(null), 2000);
  };

  return (
    <section id="publications" className="py-16 border-b border-zinc-800/80 bg-zinc-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
            <span>// 07</span>
            <span>·</span>
            <span>Academic Dissemination</span>
          </div>
          <span className="font-mono text-xs text-zinc-500">
            {publications.length} Verified Entries
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-4 font-sans">
          Publications & Conference Proceedings
        </h2>
        <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-2xl mb-8 leading-relaxed">
          Peer-reviewed conference proceedings and collaborative academic research papers. Unavailable metadata fields are preserved without synthetic placeholders.
        </p>

        <div className="space-y-4">
          {publications.map((paper) => (
            <Card
              key={paper.id}
              variant="default"
              className="p-5 border-zinc-800 hover:border-zinc-700/80 transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <Badge variant="cyan">{paper.year}</Badge>
                    {paper.publisher && (
                      <Badge variant="outline">{paper.publisher}</Badge>
                    )}
                    <Badge variant="green">{paper.status}</Badge>
                  </div>

                  <h3 className="text-base font-semibold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 leading-snug">
                    {paper.title}
                  </h3>
                </div>

                {paper.bibtex && (
                  <button
                    onClick={() => copyToClipboard(paper.id, paper.bibtex!)}
                    className="self-start sm:self-auto inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded border border-zinc-800 bg-zinc-900/60 hover:text-white text-zinc-400 transition-colors"
                    title="Copy BibTeX Citation"
                  >
                    {copiedBibtex === paper.id ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Quote className="w-3 h-3" />
                        <span>BibTeX</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Authors list with highlight for Rujul Talekar */}
              <p className="text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
                {paper.authors.map((author, idx) => (
                  <span key={author}>
                    {author === "Rujul Talekar" ? (
                      <strong className="text-cyan-300 font-semibold underline decoration-cyan-500/50">
                        {author}
                      </strong>
                    ) : (
                      author
                    )}
                    {idx < paper.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>

              {/* Venue & Pages */}
              {paper.venue && (
                <p className="text-xs text-zinc-400 dark:text-zinc-500 light:text-zinc-600 italic">
                  {paper.venue} {paper.pages && `· pp. ${paper.pages}`}
                </p>
              )}

              {/* Optional Links */}
              {(paper.ieeeUrl || paper.doi || paper.scholarUrl) && (
                <div className="pt-2 flex items-center gap-3 text-xs font-mono">
                  {paper.ieeeUrl && (
                    <a
                      href={paper.ieeeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
                    >
                      <span>IEEE Xplore</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {paper.doi && (
                    <a
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-200"
                    >
                      <span>DOI: {paper.doi}</span>
                    </a>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
