import * as React from "react";
import { Brain, Video, Eye, Radio, Cpu } from "lucide-react";
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
import { researchVectors, type ResearchVector } from "@/data/research";

const ID = "research";

function getResearchIcon(id: string) {
  switch (id) {
    case "human-centered-ai":
      return <Brain className="size-4" />;
    case "vms-architectures":
      return <Video className="size-4" />;
    case "edge-video-analytics":
      return <Eye className="size-4" />;
    case "android-bufferbloat":
      return <Radio className="size-4" />;
    case "llm-agent-architectures":
      return <Cpu className="size-4" />;
    default:
      return <Brain className="size-4" />;
  }
}

function ResearchRowItem({
  vector,
  defaultOpen = false,
}: {
  vector: ResearchVector;
  defaultOpen?: boolean;
}) {
  return (
    <Collapsible
      defaultOpen={defaultOpen}
      className="border-b border-line last:border-b-0"
    >
      <div className="relative flex items-center hover:bg-accent-muted transition-colors">
        <IconTile className="mx-4">{getResearchIcon(vector.id)}</IconTile>

        <div className="flex flex-1 items-center gap-2 border-l border-dashed border-line p-4">
          <div className="flex-1 min-w-0">
            <h3 className="mb-1 leading-snug font-medium text-balance">
              <CollapsibleTrigger className="text-left w-full cursor-pointer">
                <span className="absolute inset-0" aria-hidden />
                {vector.title}
              </CollapsibleTrigger>
            </h3>

            <dl className="flex flex-wrap items-center gap-x-2 text-xs font-mono text-muted-foreground">
              <div>
                <dt className="sr-only">Status</dt>
                <dd>
                  <Tag className="flex h-5 w-fit uppercase">{vector.status}</Tag>
                </dd>
              </div>

              <span className="text-muted-foreground/60 select-none">·</span>

              <div>
                <dt className="sr-only">Domain</dt>
                <dd className="font-sans text-xs text-muted-foreground">{vector.domain}</dd>
              </div>
            </dl>

            <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 font-sans">
              {vector.summary}
            </p>
          </div>

          <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
            <CollapsibleChevronsUpDownIcon duration={0.15} />
          </div>
        </div>
      </div>

      <CollapsibleContent className="overflow-hidden">
        <div className="space-y-4 border-t border-line p-4 bg-muted/15">
          <div>
            <h4 className="text-[10px] font-mono font-semibold tracking-wider text-muted-foreground uppercase mb-1">
              Current Work
            </h4>
            <p className="text-xs text-foreground/90 leading-relaxed font-sans">
              {vector.currentWork}
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-mono font-semibold tracking-wider text-muted-foreground uppercase mb-1.5">
              Methods
            </h4>
            <ul className="flex flex-wrap gap-1.5">
              {vector.methods.map((method, i) => (
                <li key={i} className="flex">
                  <Tag>{method}</Tag>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-mono font-semibold tracking-wider text-muted-foreground uppercase mb-1">
              Outputs
            </h4>
            <ul className="space-y-1 text-xs text-muted-foreground font-mono">
              {vector.outputs.map((out, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-foreground/60 shrink-0" />
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function ResearchPanel() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Research</a>
          <PanelTitleSup>({researchVectors.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div>
        {researchVectors.map((vector, index) => (
          <ResearchRowItem
            key={vector.id}
            vector={vector}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </Panel>
  );
}
