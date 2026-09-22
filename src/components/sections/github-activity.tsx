import React from "react";
import { GitHubTelemetry } from "@/lib/github";
import { GitCommit, ExternalLink, Code } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface GitHubActivityProps {
  telemetry: GitHubTelemetry;
}

export function GitHubActivitySection({ telemetry }: GitHubActivityProps) {
  return (
    <section className="py-16 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
            <span>// 12</span>
            <span>·</span>
            <span>Public Telemetry</span>
          </div>
          <span className="font-mono text-xs text-zinc-500">
            @{telemetry.user} on GitHub
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-4 font-sans">
          GitHub Activity & Systems Telemetry
        </h2>
        <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-2xl mb-8 leading-relaxed">
          Public repositories, primary languages, and recent activity fetched via public GitHub REST endpoints with edge revalidation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Recent Repositories */}
          <div className="md:col-span-7 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 flex items-center justify-between">
              <span>Public Repositories</span>
              <a
                href={`https://github.com/${telemetry.user}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline inline-flex items-center gap-1"
              >
                <span>View all</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>

            {telemetry.repos.slice(0, 4).map((repo) => (
              <a
                key={repo.id}
                href={repo.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3.5 rounded-lg border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all text-xs"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-semibold font-mono text-zinc-200">
                    {repo.name}
                  </span>
                  {repo.language && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-cyan-300">
                      {repo.language}
                    </span>
                  )}
                </div>
                {repo.description && (
                  <p className="text-zinc-400 text-[11px] line-clamp-2 leading-relaxed">
                    {repo.description}
                  </p>
                )}
              </a>
            ))}
          </div>

          {/* Languages & Activity Stream */}
          <div className="md:col-span-5 space-y-5">
            {/* Top Languages Breakdown */}
            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block">
                Primary Repo Languages
              </span>
              <div className="flex flex-wrap gap-2">
                {telemetry.topLanguages.map((lang) => (
                  <div
                    key={lang.language}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-xs font-mono"
                  >
                    <Code className="w-3 h-3 text-cyan-400" />
                    <span className="text-zinc-200">{lang.language}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Public Events */}
            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block">
                Recent Public Events
              </span>

              {telemetry.recentEvents.length > 0 ? (
                <div className="space-y-2 text-xs font-mono">
                  {telemetry.recentEvents.slice(0, 3).map((event) => (
                    <div
                      key={event.id}
                      className="p-2 rounded bg-zinc-950/60 border border-zinc-900 flex items-start gap-2"
                    >
                      <GitCommit className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <div className="overflow-hidden">
                        <p className="text-zinc-300 truncate">
                          {event.type} on {event.repoName.replace(`${telemetry.user}/`, "")}
                        </p>
                        <p className="text-[10px] text-zinc-500">
                          {formatDate(event.createdAt)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs font-mono text-zinc-500 italic">
                  Public activity synchronized via GitHub REST API.
                </p>
              )}
            </div>

            <div className="p-3 rounded border border-zinc-800/60 bg-zinc-950/40 text-[11px] font-mono text-zinc-500">
              Note: Telemetry queries public GitHub API with 60m revalidation without requiring private bearer tokens.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
