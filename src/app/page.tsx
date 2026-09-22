import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about-section";
import { CurrentResearchSection } from "@/components/sections/current-research";
import { ExperienceSection } from "@/components/sections/experience-timeline";
import { SelectedResearchSection } from "@/components/sections/selected-research";
import { EngineeringProjectsSection } from "@/components/sections/engineering-projects";
import { PublicationsSection } from "@/components/sections/publications-section";
import { PatentSection } from "@/components/sections/patent-section";
import { OpenSourceSection } from "@/components/sections/open-source-section";
import { EducationSection } from "@/components/sections/education-section";
import { SkillsMatrixSection } from "@/components/sections/skills-matrix";
import { GitHubActivitySection } from "@/components/sections/github-activity";
import { WritingSection } from "@/components/sections/writing-section";
import { ContactSection } from "@/components/sections/contact-section";
import { fetchGitHubTelemetry } from "@/lib/github";
import { getAllWritingPosts } from "@/lib/mdx";

export const revalidate = 3600; // 1 hour edge revalidation

export default async function HomePage() {
  const [telemetry, posts] = await Promise.all([
    fetchGitHubTelemetry(),
    getAllWritingPosts()
  ]);

  return (
    <div className="flex flex-col">
      {/* 01 Hero */}
      <HeroSection />

      {/* 02 About */}
      <AboutSection />

      {/* 03 Current Research */}
      <CurrentResearchSection />

      {/* 04 Experience */}
      <ExperienceSection />

      {/* 05 Selected Research */}
      <SelectedResearchSection />

      {/* 06 Engineering Projects */}
      <EngineeringProjectsSection />

      {/* 07 Publications */}
      <PublicationsSection />

      {/* 08 Patents */}
      <PatentSection />

      {/* 09 Open Source */}
      <OpenSourceSection />

      {/* 10 Education */}
      <EducationSection />

      {/* 11 Skills / Tooling */}
      <SkillsMatrixSection />

      {/* 12 GitHub Activity */}
      <GitHubActivitySection telemetry={telemetry} />

      {/* 13 Writing / Notes */}
      <WritingSection posts={posts} />

      {/* 14 Contact */}
      <ContactSection />
    </div>
  );
}
