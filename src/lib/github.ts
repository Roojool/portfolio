export interface GitHubRepo {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  htmlUrl: string;
  stargazersCount: number;
  forksCount: number;
  language: string | null;
  updatedAt: string;
  isFork: boolean;
}

export interface GitHubActivityEvent {
  id: string;
  type: string;
  repoName: string;
  createdAt: string;
  action?: string;
  payloadSummary?: string;
}

export interface GitHubTelemetry {
  user: string;
  publicRepoCount: number;
  repos: GitHubRepo[];
  recentEvents: GitHubActivityEvent[];
  topLanguages: { language: string; count: number }[];
}

const GITHUB_USERNAME = "Roojool";

export async function fetchGitHubTelemetry(): Promise<GitHubTelemetry> {
  const fallbackRepos: GitHubRepo[] = [
    {
      id: 1,
      name: "5G-Bufferbloat-App",
      fullName: "Roojool/5G-Bufferbloat-App",
      description: "Experimental exploration of bufferbloat behavior, queue latency, and transport dynamics under cellular connectivity.",
      htmlUrl: "https://github.com/Roojool/5G-Bufferbloat-App",
      stargazersCount: 0,
      forksCount: 0,
      language: "Kotlin",
      updatedAt: "2026-03-01T00:00:00Z",
      isFork: false
    },
    {
      id: 2,
      name: "ai-video-analytics-showcase",
      fullName: "Roojool/ai-video-analytics-showcase",
      description: "Interactive presentation and research showcase cataloging 28 AI Video Analytics capabilities with verified video demonstrations.",
      htmlUrl: "https://github.com/Roojool/ai-video-analytics-showcase",
      stargazersCount: 0,
      forksCount: 0,
      language: "TypeScript",
      updatedAt: "2026-03-01T00:00:00Z",
      isFork: false
    },
    {
      id: 3,
      name: "pmc-cctv-surveillance-editorial",
      fullName: "Roojool/pmc-cctv-surveillance-editorial",
      description: "Interactive technical showcase exploring CCTV infrastructure, AI video analytics and VMS architecture in a municipal-scale scenario.",
      htmlUrl: "https://github.com/Roojool/pmc-cctv-surveillance-editorial",
      stargazersCount: 0,
      forksCount: 0,
      language: "HTML",
      updatedAt: "2026-03-01T00:00:00Z",
      isFork: false
    }
  ];

  try {
    const reposRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Rujul-Talekar-Portfolio"
        },
        next: { revalidate: 3600 }
      }
    );

    if (!reposRes.ok) {
      return {
        user: GITHUB_USERNAME,
        publicRepoCount: fallbackRepos.length,
        repos: fallbackRepos,
        recentEvents: [],
        topLanguages: [
          { language: "Kotlin", count: 1 },
          { language: "TypeScript", count: 1 },
          { language: "Python", count: 1 }
        ]
      };
    }

    const reposData = await reposRes.json();
    const repos: GitHubRepo[] = reposData.map((r: any) => ({
      id: r.id,
      name: r.name,
      fullName: r.full_name,
      description: r.description,
      htmlUrl: r.html_url,
      stargazersCount: r.stargazers_count,
      forksCount: r.forks_count,
      language: r.language,
      updatedAt: r.updated_at,
      isFork: r.fork
    }));

    // Calculate language frequencies
    const langMap = new Map<string, number>();
    repos.forEach((r) => {
      if (r.language) {
        langMap.set(r.language, (langMap.get(r.language) || 0) + 1);
      }
    });
    const topLanguages = Array.from(langMap.entries())
      .map(([language, count]) => ({ language, count }))
      .sort((a, b) => b.count - a.count);

    // Fetch public events
    let recentEvents: GitHubActivityEvent[] = [];
    try {
      const eventsRes = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=6`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "Rujul-Talekar-Portfolio"
          },
          next: { revalidate: 1800 }
        }
      );
      if (eventsRes.ok) {
        const eventsData = await eventsRes.json();
        recentEvents = eventsData.map((e: any) => ({
          id: e.id,
          type: e.type.replace("Event", ""),
          repoName: e.repo?.name || "",
          createdAt: e.created_at,
          action: e.payload?.action || "activity"
        }));
      }
    } catch {
      // Graceful fallback
    }

    return {
      user: GITHUB_USERNAME,
      publicRepoCount: repos.length,
      repos,
      recentEvents,
      topLanguages
    };
  } catch {
    return {
      user: GITHUB_USERNAME,
      publicRepoCount: fallbackRepos.length,
      repos: fallbackRepos,
      recentEvents: [],
      topLanguages: [
        { language: "Kotlin", count: 1 },
        { language: "TypeScript", count: 1 },
        { language: "Python", count: 1 }
      ]
    };
  }
}
