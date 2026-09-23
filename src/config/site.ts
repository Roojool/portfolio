export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://portfolio-sigma-gray-12.vercel.app";

function getHostname(urlStr: string): string {
  try {
    return new URL(urlStr).hostname;
  } catch {
    return "portfolio-sigma-gray-12.vercel.app";
  }
}

export const SITE_HOST = getHostname(SITE_URL);

export const SITE_INFO = {
  name: "Rujul Talekar",
  title: "AI Researcher × Systems Builder",
  tagline: "AI research, systems engineering, and experimental software.",
  headline:
    "AI research, systems engineering, and experimental software. Working on Human-Centered AI, Video Management Systems, edge video analytics, and cellular transport dynamics.",
  url: SITE_URL,
  domain: SITE_HOST,
  githubUsername: "Roojool",
  sourceCodeUrl: "https://github.com/Roojool/portfolio",
  scholarUrl: "https://scholar.google.com/citations?user=RWQN9K8AAAAJ&hl=en",
  orcid: "0009-0008-5608-1512",
  orcidUrl: "https://orcid.org/0009-0008-5608-1512",
  linkedinUrl: "https://www.linkedin.com/in/rujul-talekar/",
  githubUrl: "https://github.com/Roojool",
  xUrl: "https://x.com/Roojool1",
  xHandle: "@Roojool1",
  email: "roojool.talekar@gmail.com",
  emailUrl: "mailto:roojool.talekar@gmail.com",
};

export interface NavItem {
  title: string;
  href: string;
}

export const MAIN_NAV: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Research", href: "/research" },
  { title: "Projects", href: "/projects" },
  { title: "Writing", href: "/writing" },
];
