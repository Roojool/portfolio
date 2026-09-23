import * as React from "react";
import { format, parseISO } from "date-fns";
import { Panel } from "@/components/ui/panel";
import { SITE_INFO } from "@/config/site";

export interface ActivityDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionsApiResponse {
  total?: {
    [year: string]: number;
    lastYear: number;
  };
  contributions?: ActivityDay[];
}

async function fetchContributions(username: string): Promise<{
  totalCount: number;
  contributions: ActivityDay[];
} | null> {
  const apiUrl =
    process.env.NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL ||
    "https://github-contributions-api.jogruber.de/v4";

  try {
    const res = await fetch(`${apiUrl}/${username}?y=last`, {
      next: { revalidate: 86400 },
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) return null;

    const data = (await res.json()) as ContributionsApiResponse;
    if (!data.contributions || data.contributions.length === 0) return null;

    const totalCount =
      data.total?.lastYear ??
      data.contributions.reduce((acc, d) => acc + (d.count || 0), 0);

    return { totalCount, contributions: data.contributions };
  } catch {
    return null;
  }
}

export async function GitHubContributionsPanel() {
  const result = await fetchContributions(SITE_INFO.githubUsername);

  if (!result || result.contributions.length === 0) {
    return (
      <Panel className="screen-line-top-none">
        <h2 className="sr-only">GitHub Contributions</h2>
        <div className="p-4 text-xs font-mono text-muted-foreground text-center">
          GitHub activity temporarily unavailable.
        </div>
      </Panel>
    );
  }

  const { totalCount, contributions } = result;

  // Group into weeks of 7 days
  const weeks: ActivityDay[][] = [];
  let currentWeek: ActivityDay[] = [];

  for (const day of contributions) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  const startDate = contributions[0]?.date
    ? format(parseISO(contributions[0].date), "dd.MM.yyyy")
    : "";
  const endDate = contributions[contributions.length - 1]?.date
    ? format(parseISO(contributions[contributions.length - 1].date), "dd.MM.yyyy")
    : "";

  // Month labels calculation: identify weeks where month changes
  const monthLabels: { weekIndex: number; label: string }[] = [];
  let lastMonth = -1;

  weeks.forEach((week, weekIndex) => {
    const firstDay = week[0];
    if (firstDay) {
      const month = new Date(firstDay.date).getMonth();
      if (month !== lastMonth) {
        monthLabels.push({
          weekIndex,
          label: format(parseISO(firstDay.date), "MMM"),
        });
        lastMonth = month;
      }
    }
  });

  const blockSize = 11;
  const blockMargin = 2;
  const step = blockSize + blockMargin;
  const graphWidth = weeks.length * step;
  const graphHeight = 7 * step + 20;

  return (
    <Panel className="screen-line-top-none">
      <h2 className="sr-only">GitHub Contributions</h2>

      <figure className="py-4">
        {/* Scrollable container for mobile */}
        <div className="overflow-x-auto px-4 no-scrollbar">
          <svg
            className="w-full min-w-[650px] overflow-visible"
            viewBox={`0 0 ${graphWidth} ${graphHeight}`}
            fill="none"
            aria-label="GitHub Contributions Graph"
          >
            {/* Month Labels */}
            {monthLabels.map(({ weekIndex, label }) => (
              <text
                key={`${weekIndex}-${label}`}
                x={weekIndex * step}
                y={10}
                className="fill-muted-foreground text-[10px] font-mono select-none"
              >
                {label}
              </text>
            ))}

            {/* Contribution Blocks */}
            <g transform="translate(0, 18)">
              {weeks.map((week, wIdx) =>
                week.map((day, dIdx) => {
                  return (
                    <rect
                      key={day.date}
                      x={wIdx * step}
                      y={dIdx * step}
                      width={blockSize}
                      height={blockSize}
                      className={getLevelClass(day.level)}
                    >
                      <title>{`${day.count} contributions on ${day.date}`}</title>
                    </rect>
                  );
                })
              )}
            </g>
          </svg>
        </div>

        {/* Figure Caption & Legend */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 pt-4 text-xs font-mono border-t border-line mt-2">
          <figcaption className="text-muted-foreground tabular-nums">
            <span className="mr-2 text-foreground font-medium">Fig. 2.</span>
            {totalCount.toLocaleString()} contributions, {startDate} – {endDate}. Source:{" "}
            <a
              href={SITE_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-foreground"
            >
              GitHub
            </a>
            .
          </figcaption>

          {/* Legend */}
          <div className="flex items-center gap-1.5 text-muted-foreground select-none">
            <span className="text-[11px]">Less</span>
            <div className="flex items-center gap-0.5">
              <span className="size-2.5 bg-muted-foreground/10 border border-border" />
              <span className="size-2.5 bg-muted-foreground/30 border border-border" />
              <span className="size-2.5 bg-muted-foreground/50 border border-border" />
              <span className="size-2.5 bg-muted-foreground/75 border border-border" />
              <span className="size-2.5 bg-foreground border border-border" />
            </div>
            <span className="text-[11px]">More</span>
          </div>
        </div>
      </figure>
    </Panel>
  );
}

function getLevelClass(level: number): string {
  switch (level) {
    case 1:
      return "fill-muted-foreground/30 stroke-border stroke-[0.5]";
    case 2:
      return "fill-muted-foreground/50 stroke-border stroke-[0.5]";
    case 3:
      return "fill-muted-foreground/75 stroke-border stroke-[0.5]";
    case 4:
      return "fill-foreground stroke-border stroke-[0.5]";
    default:
      return "fill-muted-foreground/10 stroke-border stroke-[0.5]";
  }
}
