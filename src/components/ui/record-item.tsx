import * as React from "react";
import { ExternalLink } from "lucide-react";
import { IconTile } from "@/components/ui/icon-tile";
import { Tag } from "@/components/ui/tag";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { CollapsibleChevronsUpDownIcon } from "@/components/collapsible-animated";

export interface RecordItemProps {
  icon: React.ReactNode;
  title: string;
  type?: string;
  date?: string;
  metadata?: string;
  referenceLink?: string;
  details?: React.ReactNode;
  tags?: string[];
  defaultOpen?: boolean;
}

export function RecordItem({
  icon,
  title,
  type,
  date,
  metadata,
  referenceLink,
  details,
  tags,
  defaultOpen = false,
}: RecordItemProps) {
  const canExpand = Boolean(details);

  return (
    <Collapsible defaultOpen={defaultOpen} className="border-b border-line last:border-b-0">
      <div className="relative flex items-center hover:bg-accent-muted">
        <IconTile className="mx-4">{icon}</IconTile>

        <div className="flex flex-1 items-center gap-2 border-l border-dashed border-line p-4">
          <div className="flex-1">
            <h3 className="mb-1 leading-snug font-medium text-balance">
              {canExpand ? (
                <CollapsibleTrigger className="text-left w-full">
                  <span className="absolute inset-0" aria-hidden />
                  {title}
                </CollapsibleTrigger>
              ) : (
                title
              )}
            </h3>

            <dl className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
              {type && (
                <div>
                  <dt className="sr-only">Type</dt>
                  <dd>
                    <Tag className="flex h-5 w-fit">{type}</Tag>
                  </dd>
                </div>
              )}

              {metadata && (
                <>
                  <Separator
                    orientation="vertical"
                    className="data-vertical:h-4 data-vertical:self-center"
                    aria-hidden
                  />
                  <div>
                    <dt className="sr-only">Details</dt>
                    <dd className="truncate max-w-[200px] sm:max-w-md">
                      {metadata}
                    </dd>
                  </div>
                </>
              )}

              {date && (
                <>
                  <Separator
                    orientation="vertical"
                    className="data-vertical:h-4 data-vertical:self-center"
                    aria-hidden
                  />
                  <div>
                    <dt className="sr-only">Date</dt>
                    <dd className="tabular-nums">{date}</dd>
                  </div>
                </>
              )}
            </dl>
          </div>

          {referenceLink && (
            <a
              className="relative z-2 flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground cursor-pointer transition-colors"
              href={referenceLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open reference link"
              title="Open reference link"
            >
              <ExternalLink className="size-4" />
            </a>
          )}

          {canExpand && (
            <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
              <CollapsibleChevronsUpDownIcon duration={0.15} />
            </div>
          )}
        </div>
      </div>

      {canExpand && (
        <CollapsibleContent className="overflow-hidden">
          <div className="space-y-3 border-t border-line p-4">
            <div className="typeset typeset-description">{details}</div>

            {tags && tags.length > 0 && (
              <ul className="flex flex-wrap gap-1.5">
                {tags.map((tag, i) => (
                  <li key={i} className="flex">
                    <Tag>{tag}</Tag>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </CollapsibleContent>
      )}
    </Collapsible>
  );
}
