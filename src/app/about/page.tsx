import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AboutPanel } from "@/components/sections/about-panel";
import { ExperiencePanel } from "@/components/sections/experience-panel";
import { EducationPanel } from "@/components/sections/education-panel";
import { StripeSeparator } from "@/components/ui/separator";
import { SITE_INFO } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `Academic background, research methodology, and systems philosophy of ${SITE_INFO.name}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto md:max-w-3xl border-x">
      <div className="p-4 border-b border-line">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-3.5" /> Back to Home
        </Link>
      </div>

      <AboutPanel />
      <StripeSeparator />
      <ExperiencePanel />
      <StripeSeparator />
      <EducationPanel />
    </div>
  );
}
