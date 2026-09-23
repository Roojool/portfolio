import * as React from "react";
import {
  Brain,
  Video,
  Eye,
  Radio,
  Cpu,
} from "lucide-react";
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
      return <Brain />;
    case "vms-architectures":
      return <Video />;
    case "edge-video-analytics":
      return <Eye />;
    case "android-bufferbloat":
      return <Radio />;
    case "llm-agent-architectures":
      return <Cpu />;
    default:
      return <Brain />;
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
    <Collapsible defaultOpen={defaultOpen} className="border-b border-line last:border-b-0">
      <div className="relative flex items-center hover:bg-accent-muted">
        <IconTile className="mx-4">{getResearchIcon(vector.id)}</IconTile>

        <div className="flex flex-1 items-center gap-2 border-l border-dashed border-line p-4">
          <div className="flex-1">
            <h3 className="mb-1 leading-snug font-medium text-balance">
              <CollapsibleTrigger className="text-left w-full">
                <span className="absolute inset-0" aria-hidden />
                {vector.title}
              </CollapsibleTrigger>
            </h3>

            <dl className="text-sm text-muted-foreground">
              <dt className="sr-only">Status & Field</dt>
              <dd className="flex items-center gap-1.5 flex-wrap">
                <span className="font-mono text-xs">{vector.status}</span>
                <span className="font-mono text-muted-foreground/60 select-none">
                  ·
                </span>
                <span>{vector.category}</span>
              </dd>
            </dl>
          </div>

          <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
            <CollapsibleChevronsUpDownIcon duration={0.15} />
          </div>
        </div>
      </div>

      <CollapsibleContent className="overflow-hidden">
        <div className="space-y-3 border-t border-line p-4">
          <div className="typeset typeset-description">
            <p className="font-medium text-foreground">
              Q: {vector.researchQuestion}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {vector.currentState}
            </p>
          </div>

          <ul className="flex flex-wrap gap-1.5">
            {vector.methods.slice(0, 3).map((method, i) => (
              <li key={i} className="flex">
                <Tag>{method}</Tag>
              </li>
            ))}
          </ul>
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
