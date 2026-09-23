"use client";

import * as React from "react";
import { format, parseISO } from "date-fns";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
  type Activity,
} from "@/components/ui/contribution-graph";

export function GitHubContributionsGraph({
  data,
  totalCount,
  githubProfileUrl,
}: {
  data: Activity[];
  totalCount: number;
  githubProfileUrl: string;
}) {
  return (
    <ContributionGraph
      className="mx-auto py-2 w-full"
      data={data}
      blockSize={11}
      blockMargin={3}
      blockRadius={2}
      totalCount={totalCount}
    >
      <ContributionGraphCalendar
        className="no-scrollbar px-2"
        title="GitHub Contributions"
      >
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip key={`${weekIndex}-${dayIndex}`}>
            <TooltipTrigger
              render={
                <g>
                  <ContributionGraphBlock
                    activity={activity}
                    dayIndex={dayIndex}
                    weekIndex={weekIndex}
                  />
                </g>
              }
            />
            <TooltipContent className="font-sans text-xs">
              <p>
                {activity.count}{" "}
                {activity.count === 1 ? "contribution" : "contributions"} on{" "}
                {format(parseISO(activity.date), "dd.MM.yyyy")}
              </p>
            </TooltipContent>
          </Tooltip>
        )}
      </ContributionGraphCalendar>

      <ContributionGraphFooter className="px-2 pt-2 border-t border-line mt-2">
        <ContributionGraphTotalCount>
          {({ totalCount: count, year }) => (
            <div className="text-muted-foreground text-xs font-mono">
              {count.toLocaleString("en")} contributions in {year} on{" "}
              <a
                className="text-foreground link-underline"
                href={githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </div>
          )}
        </ContributionGraphTotalCount>

        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  );
}
