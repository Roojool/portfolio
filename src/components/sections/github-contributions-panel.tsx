import * as React from "react";
import { Panel } from "@/components/ui/panel";
import { GitHubContributionsGraph } from "./github-contributions-graph";
import { SITE_INFO } from "@/config/site";
import type { Activity } from "@/components/ui/contribution-graph";

interface ContributionsApiResponse {
  total?: {
    [year: string]: number;
    lastYear: number;
  };
  contributions?: Activity[];
}

async function fetchContributions(username: string): Promise<{
  totalCount: number;
  contributions: Activity[];
} | null> {
  const apiUrl =
    process.env.NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL ||
    "https://github-contributions-api.jogruber.de/v4";

  // Official GitHub GraphQL contributionCalendar can replace the third-party API later
  // if stronger reliability or authenticated/private contribution support becomes necessary.
  try {
    const res = await fetch(`${apiUrl}/${username}?y=last`, {
      next: { revalidate: 21600 },
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

  return (
    <Panel className="screen-line-top-none">
      <h2 className="sr-only">GitHub Contributions</h2>

      <figure className="py-2">
        <GitHubContributionsGraph
          data={contributions}
          totalCount={totalCount}
          githubProfileUrl={SITE_INFO.githubUrl}
        />
      </figure>
    </Panel>
  );
}
