import { ProfileHeader } from "@/components/sections/profile-header";
import { OverviewPanel } from "@/components/sections/overview-panel";
import { SocialLinksPanel } from "@/components/sections/social-links-panel";
import { GitHubContributionsPanel } from "@/components/sections/github-contributions-panel";
import { AboutPanel } from "@/components/sections/about-panel";
import { ResearchPanel } from "@/components/sections/research-panel";
import { TechStackPanel } from "@/components/sections/tech-stack-panel";
import { ExperiencePanel } from "@/components/sections/experience-panel";
import { EducationPanel } from "@/components/sections/education-panel";
import { ProjectsPanel } from "@/components/sections/projects-panel";
import { PublicationsPanel } from "@/components/sections/publications-panel";
import { PatentPanel } from "@/components/sections/patent-panel";
import { WritingPanel } from "@/components/sections/writing-panel";
import { StripeSeparator } from "@/components/ui/separator";
import { getAllWritingPosts } from "@/lib/mdx";

export const revalidate = 3600; // 1 hour ISR

export default async function HomePage() {
  const posts = await getAllWritingPosts();

  return (
    <div className="[--separator-height:2rem] **:data-[slot=panel]:scroll-mt-[calc(var(--header-height)+var(--separator-height))]">
      <div className="mx-auto md:max-w-3xl">
        {/* 01 Profile Header */}
        <ProfileHeader />
        <StripeSeparator />

        {/* 02 Overview, Social Links, and GitHub Contributions */}
        <OverviewPanel />
        <SocialLinksPanel />
        <GitHubContributionsPanel />
        <StripeSeparator />

        {/* 03 About & Research Vectors */}
        <AboutPanel />
        <ResearchPanel />
        <StripeSeparator />

        {/* 04 Tech Stack */}
        <TechStackPanel />
        <StripeSeparator />

        {/* 05 Experience */}
        <ExperiencePanel />
        <StripeSeparator />

        {/* 06 Education */}
        <EducationPanel />
        <StripeSeparator />

        {/* 07 Projects */}
        <ProjectsPanel />
        <StripeSeparator />

        {/* 08 Publications */}
        <PublicationsPanel />
        <StripeSeparator />

        {/* 09 Intellectual Property / Patents */}
        <PatentPanel />
        <StripeSeparator />

        {/* 10 Writing / Research Notes */}
        <WritingPanel posts={posts} />
      </div>
    </div>
  );
}
