"use client";

import * as React from "react";
import { ChevronDown, ExternalLink, FolderGit2 } from "lucide-react";
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/ui/panel";
import { projects, type ProjectItem } from "@/data/projects";

export function ProjectsPanel() {
  const [openIds, setOpenIds] = React.useState<Record<string, boolean>>({
    "5g-bufferbloat-app": true,
    "frigate-vms-lab": true,
  });
  const [showAll, setShowAll] = React.useState(false);

  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const displayedProjects = showAll ? [...featured, ...secondary] : featured;

  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          <a href="#projects">Projects</a>
          <PanelTitleSup>({projects.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="divide-y divide-line">
        {displayedProjects.map((project) => (
          <ProjectRow
            key={project.id}
            project={project}
            isOpen={!!openIds[project.id]}
            onToggle={() => toggle(project.id)}
          />
        ))}
      </div>

      {secondary.length > 0 && !showAll && (
        <div className="flex items-center justify-center p-3 border-t border-line">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground border border-border rounded bg-muted/30 transition-colors cursor-pointer"
          >
            <span>Show more ({secondary.length})</span>
            <ChevronDown className="size-3.5" />
          </button>
        </div>
      )}
    </Panel>
  );
}

function ProjectRow({
  project,
  isOpen,
  onToggle,
}: {
  project: ProjectItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="group/project">
      {/* Row Header */}
      <div className="flex items-center hover:bg-accent-muted transition-colors">
        {/* Left Icon */}
        <div className="flex size-12 shrink-0 items-center justify-center text-muted-foreground select-none pl-2">
          <FolderGit2 className="size-5" />
        </div>

        {/* Middle Content */}
        <div className="flex flex-1 items-center gap-3 border-l border-dashed border-line p-3 sm:p-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-0.5">
              <button
                type="button"
                onClick={onToggle}
                className="font-medium text-sm sm:text-base text-foreground text-left hover:underline cursor-pointer"
              >
                {project.name}
              </button>
              <StatusLabel status={project.status} />
            </div>

            <p className="text-xs text-muted-foreground font-mono truncate">
              {project.domain}
            </p>
          </div>

          {/* GitHub / Demo Link */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open repository for ${project.name}`}
            className="flex size-8 shrink-0 items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="size-4" />
          </a>

          {/* Expand/Collapse Chevron */}
          <button
            type="button"
            onClick={onToggle}
            aria-label={isOpen ? "Collapse details" : "Expand details"}
            className="flex size-8 shrink-0 items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <ChevronDown
              className={`size-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Collapsible Details */}
      {isOpen && (
        <div className="space-y-3 border-t border-line bg-muted/20 p-4 text-xs font-sans">
          <p className="text-foreground/90 leading-relaxed">
            {project.description}
          </p>

          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-1 text-muted-foreground list-disc list-inside">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}

          {project.stack && project.stack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-line/60">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-muted/60 dark:bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-muted-foreground border border-border"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function StatusLabel({ status }: { status: string }) {
  const isEarly = status.includes("EARLY") || status.includes("TOOLING");
  const isExp = status.includes("EXPERIMENTAL");

  return (
    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-muted-foreground select-none">
      <span
        className={`size-1.5 rounded-full ${
          isEarly
            ? "bg-zinc-400 dark:bg-zinc-500"
            : isExp
            ? "bg-amber-600 dark:bg-amber-400"
            : "bg-emerald-600 dark:bg-emerald-400"
        }`}
      />
      <span>{status}</span>
    </span>
  );
}
