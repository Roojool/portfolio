import React from "react";
import { patents } from "@/data/patents";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";


export function PatentSection() {
  return (
    <section className="py-16 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2">
          <span>// 08</span>
          <span>·</span>
          <span>Intellectual Property & Patents</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-8 font-sans">
          Patents & Filings
        </h2>

        <div className="space-y-5">
          {patents.map((item) => (
            <Card
              key={item.id}
              variant="default"
              className="p-5 border-zinc-800 hover:border-zinc-700/80 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
                    {item.title}
                  </h3>
                  <Badge variant="cyan">{item.status}</Badge>
                </div>
                <span className="text-xs font-mono text-zinc-500">
                  Field: {item.field}
                </span>
              </div>

              {item.description && (
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-zinc-800/60 text-xs font-mono">
                <div className="space-y-1">
                  <div className="text-zinc-500 text-[10px] uppercase">Timeline</div>
                  <div className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 flex items-center gap-2">
                    <span>Filing Date:</span>
                    <span className="font-semibold text-zinc-200">{item.filingDate}</span>
                  </div>
                  <div className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 flex items-center gap-2">
                    <span>Publication Date:</span>
                    <span className="font-semibold text-zinc-200">{item.publicationDate}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-zinc-500 text-[10px] uppercase">
                    International Patent Classification (IPC)
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {item.ipcClassification.map((ipc) => (
                      <span
                        key={ipc}
                        className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300"
                      >
                        {ipc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
