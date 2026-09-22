import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-timeline";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Rujul Talekar",
  description:
    "Academic background, research methodology, and systems philosophy of Rujul Talekar."
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
        </div>

        <AboutSection />
        <ExperienceSection />
        <EducationSection />
      </div>
    </div>
  );
}
