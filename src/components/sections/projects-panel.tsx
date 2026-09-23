import * as React from "react";
import { Box, Link as LinkIcon, Radio, Video, Camera, Gamepad2 } from "lucide-react";
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/ui/panel";
import { IconTile } from "@/components/ui/icon-tile";
import { Tag } from "@/components/ui/tag";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { CollapsibleChevronsUpDownIcon } from "@/components/collapsible-animated";
import { CollapsibleList } from "@/components/collapsible-list";
import { projects, type ProjectItem as ProjectItemType } from "@/data/projects";

const ID = "projects";

function getProjectIcon(id: string) {
  switch (id) {
    case "frigate-vms-lab":
      return <Video />;
    case "5g-bufferbloat-app":
      return <Radio />;
    case "ai-video-analytics-showcase":
      return <Camera />;
    case "pmc-cctv-surveillance-editorial":
      return <Video />;
    case "5g-india-gaming-guide":
      return <Gamepad2 />;
    default:
      return <Box />;
  }
}

export function ProjectRowItem({
  project,
  defaultOpen = false,
}: {
  project: ProjectItemType;
  defaultOpen?: boolean;
}) {
  return (
    <Collapsible defaultOpen={defaultOpen}>
      <div className="relative flex items-center hover:bg-accent-muted">
        <IconTile className="mx-4">{getProjectIcon(project.id)}</IconTile>

        <div className="flex flex-1 items-center gap-2 border-l border-dashed border-line p-4">
          <div className="flex-1">
            <h3 className="mb-1 leading-snug font-medium text-balance">
              <CollapsibleTrigger className="text-left w-full">
                <span className="absolute inset-0" aria-hidden />
                {project.displayName ?? project.name}
              </CollapsibleTrigger>
            </h3>

            <dl className="text-sm text-muted-foreground">
              <dt className="sr-only">Status & Domain</dt>
              <dd className="flex items-center gap-1.5 flex-wrap">
                <span className="font-mono text-xs">{project.status}</span>
                <span className="font-mono text-muted-foreground/60 select-none">
                  ·
                </span>
                <span>{project.domain}</span>
              </dd>
            </dl>
          </div>

          <a
            className="relative z-2 flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground cursor-pointer transition-colors"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.displayName ?? project.name} on GitHub`}
            title={`Open ${project.displayName ?? project.name} on GitHub`}
          >
            <LinkIcon className="pointer-events-none size-4" />
          </a>

          <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
            <CollapsibleChevronsUpDownIcon duration={0.15} />
          </div>
        </div>
      </div>

      <CollapsibleContent className="overflow-hidden">
        <div className="space-y-4 border-t border-line p-4">
          <div className="typeset typeset-description">
            <p>{project.description}</p>
            {project.highlights && project.highlights.length > 0 && (
              <ul className="list-disc space-y-1 mt-2 pl-4">
                {project.highlights.slice(0, 3).map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </div>

          {project.stack && project.stack.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {project.stack.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function ProjectsPanel() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Projects</a>
          <PanelTitleSup>({projects.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={projects}
        max={4}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <ProjectRowItem
            project={item}
            defaultOpen={item.id === "frigate-vms-lab"}
          />
        )}
      />
    </Panel>
  );
}
