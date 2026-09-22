import React from "react";
import { openSourceContributions, openSourceEmptyState } from "@/data/open-source";
import { Badge } from "@/components/ui/badge";
import { GitPullRequest, ExternalLink } from "lucide-react";

export function OpenSourceSection() {
  return (
    <section className="py-16 border-b border-zinc-800/80 bg-zinc-950/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2">
          <span>// 09</span>
          <span>·</span>
          <span>Open Source</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-4 font-sans">
          Open Source Contributions
        </h2>

        {openSourceContributions.length === 0 ? (
          <div className="p-6 rounded-lg border border-dashed border-zinc-800 bg-zinc-900/20 text-center font-mono text-xs text-zinc-500">
            {openSourceEmptyState}
          </div>
        ) : (
          <div className="space-y-3">
            {openSourceContributions.map((contrib) => (
              <div
                key={contrib.id}
                className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-3">
                  <GitPullRequest className="w-4 h-4 text-cyan-400" />
                  <div>
                    <span className="font-semibold text-zinc-200">
                      {contrib.title}
                    </span>
                    <span className="text-zinc-500 font-mono ml-2">
                      {contrib.organization}/{contrib.repository} #{contrib.prNumber}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="cyan">{contrib.status}</Badge>
                  <a
                    href={contrib.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
