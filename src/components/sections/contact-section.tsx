import React from "react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/links";

import { Award, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2">
          <span>// 14</span>
          <span>·</span>
          <span>Communication & Academic Record</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-4 font-sans">
          Connect & Academic Channels
        </h2>
        <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-2xl mb-8 leading-relaxed">
          Open for technical discussions on video systems, cellular network characterization, and collaborative research initiatives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* GitHub Channel */}
          <a
            href={socialLinks.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <GithubIcon className="w-5 h-5 text-zinc-300 group-hover:text-white" />
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-200 group-hover:text-white mb-1">
                GitHub
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                @{socialLinks.github.username}
              </p>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 pt-3">
              Source code, lab sandboxes, repositories
            </span>
          </a>

          {/* LinkedIn Channel */}
          <a
            href={socialLinks.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <LinkedinIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-200 group-hover:text-white mb-1">
                LinkedIn
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                in/{socialLinks.linkedin.username}
              </p>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 pt-3">
              Professional profile & networking
            </span>
          </a>

          {/* ORCID Channel */}
          <a
            href={socialLinks.orcid.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <Award className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-200 group-hover:text-white mb-1">
                ORCID
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                {socialLinks.orcid.id}
              </p>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 pt-3">
              Academic researcher identifier record
            </span>
          </a>
        </div>

        {/* Operational Context Card */}
        <div className="p-4 rounded-lg border border-zinc-800/80 bg-zinc-950/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{profile.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-zinc-500 shrink-0" />
            <span>Timezone: {profile.timezone}</span>
          </div>

          <div className="text-zinc-500">
            Dissemination: CHIuXD 2026 Scheduled
          </div>
        </div>
      </div>
    </section>
  );
}
