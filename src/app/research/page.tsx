import type { Metadata } from "next";
import { researchVectors } from "@/data/research";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { Terminal, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research Dossier — Rujul Talekar",
  description:
    "Active and experimental research initiatives in Human-Centered AI, VMS architectures, edge computer vision, and cellular transport dynamics."
};

export default function ResearchPage() {
  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
        </div>

        <div className="space-y-2 mb-10">
          <div className="font-mono text-xs uppercase tracking-wider text-cyan-400">
            Comprehensive Index
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 font-sans">
            Research Dossiers & Vectors
          </h1>
          <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-2xl leading-relaxed">
            Detailed catalog of research tracks conducted at Vishwakarma Institute of Technology (VIT Pune) and experimental research sandboxes.
          </p>
        </div>

        <div className="space-y-6">
          {researchVectors.map((vector) => (
            <Card
              key={vector.id}
              variant="default"
              className="p-6 border-zinc-800 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                    {vector.category}
                  </span>
                  <CardTitle className="text-lg">{vector.title}</CardTitle>
                </div>
                <Badge
                  variant={
                    vector.status === "ACTIVE"
                      ? "green"
                      : vector.status === "EXPERIMENTAL"
                      ? "cyan"
                      : "outline"
                  }
                >
                  {vector.status}
                </Badge>
              </div>

              {/* Research Question */}
              <div className="p-3.5 rounded bg-zinc-950/60 border border-zinc-800/80 text-xs">
                <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1 font-semibold">
                  Core Investigative Hypothesis / Research Question
                </span>
                <p className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 italic">
                  &ldquo;{vector.researchQuestion}&rdquo;
                </p>
              </div>

              {/* Current State */}
              <div className="text-xs text-zinc-400 leading-relaxed">
                <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">
                  Operational State
                </span>
                {vector.currentState}
              </div>

              {/* Key Outputs */}
              {vector.keyOutputs.length > 0 && (
                <div className="text-xs space-y-1">
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">
                    Key Deliverables & Milestones
                  </span>
                  <ul className="space-y-1 text-zinc-300">
                    {vector.keyOutputs.map((out, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-cyan-400">▹</span>
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tooling and Project */}
              <div className="pt-3 border-t border-zinc-800/60 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-zinc-500 mr-1 flex items-center gap-1">
                    <Terminal className="w-3 h-3" /> Methods:
                  </span>
                  {vector.methods.map((method) => (
                    <span
                      key={method}
                      className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300"
                    >
                      {method}
                    </span>
                  ))}
                </div>

                {vector.relevantProject?.url && (
                  <a
                    href={vector.relevantProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
                  >
                    <span>View {vector.relevantProject.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
