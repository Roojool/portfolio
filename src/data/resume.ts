import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import { publications } from "@/data/publications";
import { projects } from "@/data/projects";
import { patents } from "@/data/patents";
import { skillCategories } from "@/data/skills";
import { SITE_INFO } from "@/config/site";

export const resumeConfig = {
  selectedProjectIds: [
    "5g-bufferbloat-app",
    "frigate-vms-lab",
    "ai-video-analytics-showcase",
  ] as const,
  links: [
    { label: "Pune, India", href: "https://www.google.com/maps/search/?api=1&query=Pune%2C+India", isExternal: true },
    { label: SITE_INFO.email, href: SITE_INFO.emailUrl, isExternal: false },
    { label: "LinkedIn", href: SITE_INFO.linkedinUrl, isExternal: true },
    { label: "GitHub", href: SITE_INFO.githubUrl, isExternal: true },
    { label: "Scholar", href: SITE_INFO.scholarUrl, isExternal: true },
    { label: "Portfolio", href: SITE_INFO.url, isExternal: true },
  ],
};

export function getResumeData() {
  const selectedProjects = resumeConfig.selectedProjectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  return {
    header: {
      name: SITE_INFO.name,
      subtitle: "AI Researcher × Systems / ML Engineer",
      links: resumeConfig.links,
    },
    experience: experiences[0],
    education: education[0],
    publications,
    projects: selectedProjects,
    patents,
    skills: skillCategories,
  };
}
