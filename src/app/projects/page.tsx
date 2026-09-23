import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { Panel, PanelHeader, PanelTitle, PanelDescription } from "@/components/ui/panel";
import { GithubIcon } from "@/components/ui/icons";
import { SITE_INFO } from "@/config/site";

export const metadata: Metadata = {
  title: "Engineering Projects",
  description:
    "Open engineering systems, technical showcases, and experimental telemetry tools authored by Rujul Talekar.",
};

export default function ProjectsPage() {
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
          <PanelTitle as="h1">Engineering Projects</PanelTitle>
          <PanelDescription>
            Repositories, research harnesses, and technical showcases developed by {SITE_INFO.name} spanning cellular transport, intelligent video pipelines, and surveillance topologies.
          </PanelDescription>
        </PanelHeader>

        <div className="divide-y divide-line">
          {projects.map((project) => {
            const isEarly = project.status.includes("EARLY");
            const isExp = project.status.includes("EXPERIMENTAL");

            return (
              <div key={project.id} className="p-4 sm:p-5 space-y-3 font-sans">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider block mb-0.5">
                      {project.domain}
                    </span>
                    <h2 className="text-base sm:text-lg font-medium text-foreground">
                      {project.displayName ?? project.name}
                    </h2>
                  </div>

                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground shrink-0">
                    <span
                      className={`size-1.5 rounded-full ${
                        isEarly
                          ? "bg-zinc-400 dark:bg-zinc-500"
                          : isExp
                          ? "bg-amber-600 dark:bg-amber-400"
                          : "bg-emerald-600 dark:bg-emerald-400"
                      }`}
                      aria-hidden
                    />
                    <span>{project.status}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="space-y-1 text-xs text-muted-foreground list-disc list-inside">
                    {project.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-line/60">
                  <div className="flex flex-wrap gap-1">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-muted/60 dark:bg-zinc-900 px-2 py-0.5 font-mono text-[10px] text-muted-foreground border border-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 link-underline text-foreground"
                    >
                      <GithubIcon className="size-3.5" />
                      <span>{project.repo}</span>
                    </a>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 link-underline text-foreground"
                      >
                        <span>Demo</span>
                        <ExternalLink className="size-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Panel>
    </div>
  );
}
