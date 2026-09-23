export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://portfolio-sigma-gray-12.vercel.app";

export const SITE_INFO = {
  name: "Rujul Talekar",
  title: "AI Researcher × Systems Builder",
  headline:
    "Computer Engineering undergraduate and researcher working at the intersection of Human-Centered AI, Video Management Systems, edge video analytics, and cellular transport dynamics.",
  url: SITE_URL,
  githubUsername: "Roojool",
  sourceCodeUrl: "https://github.com/Roojool/portfolio",
  orcid: "0009-0008-5608-1512",
  orcidUrl: "https://orcid.org/0009-0008-5608-1512",
  linkedinUrl: "https://www.linkedin.com/in/rujul-talekar/",
  githubUrl: "https://github.com/Roojool",
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
