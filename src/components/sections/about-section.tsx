import React from "react";
import { profile } from "@/data/profile";
import { Compass } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2">
          <span>// 02</span>
          <span>·</span>
          <span>About & Research Methodology</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-8 font-sans">
          Engineering Philosophy & Technical Grounding
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-4 text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-sans">
            {profile.bio.map((paragraph, index) => (
              <p key={index} className="text-justify sm:text-left">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-zinc-800/80">
              <div className="p-4 rounded-md border border-cyan-900/40 bg-cyan-950/20 text-xs font-mono text-cyan-300">
                <span className="font-semibold block mb-1">CORE WORKING POSTULATE</span>
                Configured State → Observed State → Measured Behavior → Defensible Conclusion.
              </div>
            </div>
          </div>

          {/* Principles Sidebar */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>Methodological Principles</span>
            </div>

            {profile.principles.map((principle, idx) => (
              <div
                key={principle.title}
                className="p-3.5 rounded border border-zinc-800/80 bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-zinc-50 text-xs"
              >
                <div className="flex items-center gap-2 font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800 mb-1">
                  <span className="font-mono text-[10px] text-cyan-400">0{idx + 1}.</span>
                  <span>{principle.title}</span>
                </div>
                <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-[11px] leading-normal">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
