export type BuildEnvironment = "production" | "preview" | "development";

export type BuildInfo = {
  commitShortSha: string | null;
  commitUrl: string | null;
  environment: BuildEnvironment;
  date: string;
};

const dateFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Kolkata",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const BUILD_DATE = dateFormatter.format(
  process.env.BUILD_TIMESTAMP
    ? new Date(process.env.BUILD_TIMESTAMP)
    : new Date()
);

function resolveEnvironment(): BuildEnvironment {
  const vercelEnv = process.env.VERCEL_ENV;
  return vercelEnv === "production" || vercelEnv === "preview"
    ? vercelEnv
    : "development";
}

export function getBuildInfo(): BuildInfo {
  const environment = resolveEnvironment();
  const commitSha = process.env.VERCEL_GIT_COMMIT_SHA;

  return {
    commitShortSha: commitSha ? commitSha.slice(0, 7) : null,
    commitUrl: commitSha
      ? `https://github.com/Roojool/portfolio/commit/${commitSha}`
      : null,
    environment,
    date: BUILD_DATE,
  };
}

export function getStack(): string[] {
  return ["Next.js", "React", "TypeScript", "Tailwind CSS"];
}
