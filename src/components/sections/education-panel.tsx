import * as React from "react";
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

const ID = "education";

export function EducationPanel() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Education</a>
        </PanelTitle>
      </PanelHeader>

      <div className="screen-line-bottom scroll-mt-14 p-4">
        <div className="group/education-item relative before:absolute before:left-3 before:h-full before:w-px before:bg-border">
          <div
            className="pointer-events-none absolute bottom-0 left-3 hidden size-4 bg-background group-last/education-item:flex"
            aria-hidden
          >
            <span className="size-full -translate-y-2.25 rounded-bl-sm border-b border-l border-border" />
          </div>

          <Collapsible defaultOpen={true}>
            <CollapsibleTrigger className="group block w-full text-left relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg before:transition-[background-color] before:ease-out hover:before:bg-accent-muted outline-none">
              <div className="relative z-1 mb-1 flex items-start gap-3 text-base">
                <IconTile>
                  <span className="font-mono text-[9px] font-bold tracking-tighter text-foreground">
                    VIT
                  </span>
                </IconTile>

                <h3 className="flex-1 font-medium text-balance">
                  Vishwakarma Institute of Technology
                </h3>

                <div className="shrink-0 text-muted-foreground [&_svg]:h-lh [&_svg]:w-4">
                  <CollapsibleChevronsUpDownIcon duration={0.15} />
                </div>
              </div>

              <dl className="flex flex-wrap items-center gap-x-2 pl-9 text-sm text-muted-foreground">
                <div>
                  <dt className="sr-only">Degree</dt>
                  <dd>B.Tech Computer Engineering</dd>
                </div>

                <Separator
                  orientation="vertical"
                  className="data-vertical:h-4 data-vertical:self-center"
                  aria-hidden
                />

                <div>
                  <dt className="sr-only">Location</dt>
                  <dd>Pune, India</dd>
                </div>

                <Separator
                  orientation="vertical"
                  className="data-vertical:h-4 data-vertical:self-center"
                  aria-hidden
                />

                <div>
                  <dt className="sr-only">Status</dt>
                  <dd className="tabular-nums">In Progress</dd>
                </div>
              </dl>
            </CollapsibleTrigger>

            <CollapsibleContent className="overflow-hidden">
              <div className="typeset typeset-description pt-3 pb-1 pl-9">
                <p>
                  Undergraduate engineering curriculum emphasizing systems
                  programming, computer architecture, network protocols,
                  operating systems, and empirical software engineering.
                </p>
              </div>
            </CollapsibleContent>

            <ul className="flex flex-wrap gap-1.5 pt-3 pl-9">
              <li>
                <Tag>Computer Engineering</Tag>
              </li>
              <li>
                <Tag>Systems Programming</Tag>
              </li>
              <li>
                <Tag>Network Protocols</Tag>
              </li>
            </ul>
          </Collapsible>
        </div>
      </div>
    </Panel>
  );
}
