import React from "react";
import { researchVectors, ResearchStatus } from "@/data/research";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { Terminal, ExternalLink } from "lucide-react";

export function CurrentResearchSection() {
  const getStatusBadgeVariant = (status: ResearchStatus) => {
    switch (status) {
      case "ACTIVE":
        return "green";
      case "EXPERIMENTAL":
        return "cyan";
      case "IN DEVELOPMENT":
        return "outline";
      default:
        return "default";
    }
  };

  return (
    <section id="research" className="py-16 border-b border-zinc-800/80 bg-zinc-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
            <span>// 03</span>
            <span>·</span>
            <span>Research Vectors</span>
          </div>
          <span className="font-mono text-xs text-zinc-500">
            {researchVectors.length} Active Tracks
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-4 font-sans">
          Current Research Focus
        </h2>
        <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-2xl mb-8 leading-relaxed">
          Structured research initiatives covering human-AI interaction evaluation, video management architectures, real-time edge computer vision, and mobile cellular transport dynamics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {researchVectors.map((vector) => (
            <Card
              key={vector.id}
              variant="technical"
              className="flex flex-col justify-between border-zinc-800 hover:border-zinc-700/80 transition-all p-5"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    {vector.category}
                  </span>
                  <Badge variant={getStatusBadgeVariant(vector.status)}>
                    {vector.status}
                  </Badge>
                </div>

                <CardTitle className="text-base text-zinc-100 mb-3">
                  {vector.title}
                </CardTitle>

                {/* Research Question */}
                <div className="mb-3.5 p-3 rounded bg-zinc-950/60 border border-zinc-800/80 text-xs">
                  <span className="text-[10px] font-mono uppercase text-cyan-400 block mb-1 font-semibold">
                    Research Question
                  </span>
                  <p className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 italic leading-snug">
                    &ldquo;{vector.researchQuestion}&rdquo;
                  </p>
                </div>

                {/* Current State */}
                <div className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mb-4 leading-relaxed">
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">
                    Current Operational State
                  </span>
                  {vector.currentState}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/60 space-y-2.5">
                {/* Method & Tooling Chips */}
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] font-mono text-zinc-500 mr-1 flex items-center gap-1">
                    <Terminal className="w-3 h-3" /> Stack:
                  </span>
                  {vector.tooling.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Relevant Project Link if any */}
                {vector.relevantProject && (
                  <div className="pt-1 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-zinc-500">Linked Project:</span>
                    {vector.relevantProject.url ? (
                      <a
                        href={vector.relevantProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
                      >
                        {vector.relevantProject.name}
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    ) : (
                      <span className="text-zinc-400">{vector.relevantProject.name}</span>
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
