import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { researchVectors } from "@/data/research";
import { projects } from "@/data/projects";
import { Panel, PanelHeader, PanelTitle, PanelDescription } from "@/components/ui/panel";
import { SITE_INFO } from "@/config/site";

export const metadata: Metadata = {
  title: "Research Dossier",
  description:
    "Active and experimental research initiatives in Human-Centered AI, VMS architectures, edge computer vision, and cellular transport dynamics.",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto md:max-w-3xl border-x">
      <div className="p-4 border-b border-line">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-3.5" /> Back to Home
        </Link>
      </div>

      <Panel className="screen-line-top-none">
        <PanelHeader>
          <PanelTitle as="h1">Research Dossiers</PanelTitle>
          <PanelDescription>
            Systematic investigation catalog conducted by {SITE_INFO.name} across Human-Centered AI, video management systems, edge video analytics, and network telemetry.
          </PanelDescription>
        </PanelHeader>

        <div className="divide-y divide-line">
          {researchVectors.map((vector) => {
            const isGreen = vector.status === "ACTIVE";
            const isAmber = vector.status === "EXPERIMENTAL";

            return (
              <div key={vector.id} className="p-4 sm:p-5 space-y-3 font-sans">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider block mb-0.5">
                      {vector.domain}
                    </span>
                    <h2 className="text-base sm:text-lg font-medium text-foreground">
                      {vector.title}
                    </h2>
                  </div>

                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground shrink-0">
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
                    <span>{vector.status}</span>
                  </span>
                </div>

                {/* Summary */}
                <div className="p-3 rounded bg-muted/30 border border-line text-xs font-sans">
                  <span className="text-[10px] font-mono uppercase text-muted-foreground block mb-1 font-semibold">
                    Core Focus
                  </span>
                  <p className="text-foreground/90 leading-relaxed text-xs sm:text-sm">
                    {vector.summary}
                  </p>
                </div>

                {/* Operational State / Current Work */}
                <div className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-mono text-[10px] uppercase text-foreground/70 block mb-0.5">
                    Current Work
                  </span>
                  <p className="text-foreground/80 font-sans">{vector.currentWork}</p>
                </div>

                {/* Key Outputs */}
                {vector.outputs.length > 0 && (
                  <div className="text-xs space-y-1">
                    <span className="font-mono text-[10px] uppercase text-foreground/70 block mb-0.5">
                      Outputs & Milestones
                    </span>
                    <ul className="space-y-1 text-muted-foreground list-disc list-inside font-mono text-xs">
                      {vector.outputs.map((out, idx) => (
                        <li key={idx}>{out}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tooling and Project Link */}
                <div className="pt-2 border-t border-line/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex flex-wrap gap-1 text-muted-foreground">
                    <span className="text-foreground font-medium">Methods:</span>{" "}
                    {vector.methods.join(" · ")}
                  </div>

                  {vector.relevantProject?.url && (
                    <a
                      href={vector.relevantProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 link-underline text-foreground"
                    >
                      <span>
                        View{" "}
                        {projects.find((p) => p.url === vector.relevantProject?.url)
                          ?.displayName ?? vector.relevantProject.name}
                      </span>
                      <ExternalLink className="size-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Panel>
    </div>
  );
}
