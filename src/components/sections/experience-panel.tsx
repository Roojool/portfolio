import * as React from "react";
import { Briefcase } from "lucide-react";
import { Panel, PanelHeader, PanelTitle } from "@/components/ui/panel";
import { IconTile } from "@/components/ui/icon-tile";
import { Tag } from "@/components/ui/tag";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { CollapsibleChevronsUpDownIcon } from "@/components/collapsible-animated";
import { experiences } from "@/data/experience";

const ID = "experience";

export function ExperiencePanel() {
  const exp = experiences[0];

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Experience</a>
        </PanelTitle>
      </PanelHeader>

      <div className="px-4">
        <div
          id={`experience-${exp.id}`}
          className="group/experience screen-line-bottom scroll-mt-14 space-y-4 py-4"
        >
          {/* Organization Header */}
          <div className="flex items-start gap-3 sm:items-center">
            <IconTile>
              <span className="flex size-2 rounded-full bg-foreground" />
            </IconTile>

            <div className="flex min-w-0 flex-1 flex-col gap-x-3 gap-y-1 pr-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl/6 font-medium">
                {exp.organization}
              </h3>

              <dl className="flex min-w-0 items-center gap-1.5 text-sm whitespace-nowrap text-muted-foreground">
                <dt className="sr-only">Location</dt>
                <dd className="truncate">{exp.location}</dd>

                <dt className="sr-only">Employment status</dt>
                <dd>
                  <span className="sr-only">Current</span>
                  <span className="relative flex size-2.5 translate-px items-center justify-center">
                    <span className="absolute inline-flex size-2.5 animate-ping rounded-full bg-emerald-500 opacity-50" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                  </span>
                </dd>
              </dl>
            </div>
          </div>

          {/* Timeline Structure */}
          <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
            <Collapsible
              className="group/experience-position relative"
              defaultOpen={true}
            >
              <div className="pointer-events-none absolute bottom-0 left-3 hidden size-4 bg-background group-last/experience-position:flex">
                <span className="size-full -translate-y-2.25 rounded-bl-sm border-b border-l border-border" />
              </div>

              <CollapsibleTrigger className="group block w-full text-left relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg before:transition-[background-color] before:ease-out hover:before:bg-accent-muted outline-none">
                <div className="relative z-1 mb-1 flex items-start gap-3 text-base">
                  <IconTile>
                    <Briefcase />
                  </IconTile>

                  <h4 className="flex-1 font-medium text-balance">
                    {exp.role}
                  </h4>

                  <div className="shrink-0 text-muted-foreground [&_svg]:h-lh [&_svg]:w-4">
                    <CollapsibleChevronsUpDownIcon duration={0.15} />
                  </div>
                </div>

                <dl className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
                  <div>
                    <dt className="sr-only">Advisor</dt>
                    <dd>Advisor: {exp.advisor}</dd>
                  </div>

                  <Separator
                    orientation="vertical"
                    className="data-vertical:h-4 data-vertical:self-center"
                    aria-hidden
                  />

                  <div>
                    <dt className="sr-only">Focus</dt>
                    <dd>{exp.focus}</dd>
                  </div>

                  <Separator
                    orientation="vertical"
                    className="data-vertical:h-4 data-vertical:self-center"
                    aria-hidden
                  />

                  <div>
                    <dt className="sr-only">Status</dt>
                    <dd className="tabular-nums">Present</dd>
                  </div>
                </dl>
              </CollapsibleTrigger>

              <CollapsibleContent className="overflow-hidden">
                <div className="typeset typeset-description pt-3 pb-1 pl-9">
                  <ul className="list-disc space-y-1.5 [&_li]:ps-0.5">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </CollapsibleContent>

              <ul className="flex flex-wrap gap-1.5 pt-3 pl-9">
                <li>
                  <Tag>Human-Centered AI</Tag>
                </li>
                <li>
                  <Tag>AI Usability</Tag>
                </li>
                <li>
                  <Tag>VMS Architectures</Tag>
                </li>
                <li>
                  <Tag>Empirical Evaluation</Tag>
                </li>
              </ul>
            </Collapsible>
          </div>
        </div>
      </div>
    </Panel>
  );
}
