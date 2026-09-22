import React from "react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/links";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { Button } from "@/components/ui/button";
import { ArrowDown, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-zinc-800/80 bg-grid-technical">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Live operational status pill */}
        <div className="mb-6">
          <StatusIndicator label={profile.status} prefix="CURRENTLY" />
        </div>

        {/* Identity & Core Hierarchy */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-block font-mono text-xs uppercase tracking-widest text-cyan-400">
            Research & Systems Dossier
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-950 font-sans">
            {profile.name}
          </h1>

          <p className="text-xl sm:text-2xl font-light text-zinc-300 dark:text-zinc-300 light:text-zinc-700 tracking-tight">
            AI Researcher <span className="text-cyan-400">×</span> Systems Builder
          </p>

          <p className="text-sm font-mono text-zinc-400 dark:text-zinc-500 light:text-zinc-600 flex items-center gap-2">
            <span>Computer Engineering @ {profile.institution}</span>
            <span className="text-zinc-700">·</span>
            <span>{profile.location}</span>
          </p>

          <p className="text-sm sm:text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed pt-2 max-w-2xl">
            {profile.headline}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button variant="primary" size="md" href="#research">
            View Research <ArrowDown className="w-3.5 h-3.5" />
          </Button>
          <Button variant="secondary" size="md" href="#projects">
            View Projects
          </Button>
          <Button
            variant="outline"
            size="md"
            href={socialLinks.github.url}
            external
          >
            <GithubIcon className="w-3.5 h-3.5" /> GitHub
          </Button>
          <Button
            variant="outline"
            size="md"
            href={socialLinks.linkedin.url}
            external
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" /> LinkedIn
          </Button>
          <Button
            variant="outline"
            size="md"
            href={socialLinks.orcid.url}
            external
          >
            <Award className="w-3.5 h-3.5 text-cyan-400" /> ORCID
          </Button>
        </div>

        {/* Micro Domain Pills */}
        <div className="mt-12 pt-6 border-t border-zinc-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          <div>
            <span className="text-zinc-500 block text-[10px] uppercase">Domain 01</span>
            <span className="text-zinc-300 dark:text-zinc-300 light:text-zinc-800 font-medium">Human-Centered AI</span>
          </div>
          <div>
            <span className="text-zinc-500 block text-[10px] uppercase">Domain 02</span>
            <span className="text-zinc-300 dark:text-zinc-300 light:text-zinc-800 font-medium">Video Management Systems</span>
          </div>
          <div>
            <span className="text-zinc-500 block text-[10px] uppercase">Domain 03</span>
            <span className="text-zinc-300 dark:text-zinc-300 light:text-zinc-800 font-medium">Edge Video Analytics</span>
          </div>
          <div>
            <span className="text-zinc-500 block text-[10px] uppercase">Domain 04</span>
            <span className="text-zinc-300 dark:text-zinc-300 light:text-zinc-800 font-medium">Cellular Transport</span>
          </div>
        </div>
      </div>
    </section>
  );
}
