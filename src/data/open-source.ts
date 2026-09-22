export interface OpenSourceContribution {
  id: string;
  organization: string;
  repository: string;
  prNumber: number;
  title: string;
  status: "merged" | "open" | "reviewed";
  mergedDate?: string;
  url: string;
  contributionType: "feature" | "bugfix" | "docs" | "performance";
  description?: string;
}

export const openSourceContributions: OpenSourceContribution[] = [];

export const openSourceEmptyState = "No upstream contributions indexed yet.";
