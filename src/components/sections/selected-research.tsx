import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink, GitBranch } from "lucide-react";

interface FeaturedResearchItem {
  title: string;
  domain: string;
  scope: string;
  summary: string;
  publicRepo?: {
    name: string;
    url: string;
  };
  inDevelopmentRepo?: string;
  empiricalPrinciple?: string;
}

const selectedResearchItems: FeaturedResearchItem[] = [
  {
    title: "5G Bufferbloat & Android Cellular Transport Dynamics",
    domain: "Network Systems / Mobile Telemetry",
    scope: "Experimental Active Queue Delay Characterization",
    summary:
      "Investigating queue delay, latency inflation under loaded cellular connections, and transport telemetry on mobile devices. Profiles active RTT variance under variable uplink and downlink load.",
    publicRepo: {
      name: "5G-Bufferbloat-App",
      url: "https://github.com/Roojool/5G-Bufferbloat-App"
    },
    empiricalPrinciple: "Configured State Is Not Wire Behavior"
  },
  {
    title: "60-Paper VMS Evidence Synthesis (2015–2025)",
    domain: "Video Management Systems & Surveillance Architecture",
    scope: "Architectural Taxonomy & Comparative Synthesis",
    summary:
      "A structured literature-review corpus of 60 VMS-related academic papers from 2015–2025. Analyzes streaming protocol bottlenecks, camera telemetry hierarchies, and edge versus cloud video pipeline tradeoffs.",
    inDevelopmentRepo: "VMS-Literature-Evidence-Lab",
    empiricalPrinciple: "Systematic Multi-Paper Taxonomy Matrix"
  },
  {
    title: "Human-AI Usability Frameworks in ICT Applications",
    domain: "Human-Centered AI & Interaction Evaluation",
    scope: "Empirical Usability Evaluation under Prof. Ganesh Bhutkar",
    summary:
      "Developing quantitative usability rubrics and evaluation protocols for AI-augmented ICT tools for non-technical users, scheduled for presentation at CHIuXD 2026 (Indonesia).",
    inDevelopmentRepo: "Human-AI-Usability-Lab",
    empiricalPrinciple: "Empirical User Evaluation Protocol"
  },
  {
    title: "28-Capability Edge AI Video Analytics Showcase",
    domain: "Computer Vision & Edge Inference Topologies",
    scope: "Multi-Capability Telemetry Verification",
    summary:
      "Interactive research showcase cataloging 28 computer vision capabilities with verified visual demonstrations and operational constraints across edge-deployment surveillance environments.",
    publicRepo: {
      name: "ai-video-analytics-showcase",
      url: "https://github.com/Roojool/ai-video-analytics-showcase"
    },
    empiricalPrinciple: "Visual Verification Matrix"
  }
];

export function SelectedResearchSection() {
  return (
    <section className="py-16 border-b border-zinc-800/80 bg-zinc-950/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2">
          <span>// 05</span>
          <span>·</span>
          <span>Flagship Research Dossiers</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-4 font-sans">
          Selected Research Programs
        </h2>
        <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-2xl mb-8 leading-relaxed">
          Deep investigative efforts advancing empirical telemetry, architectural synthesis, and human-interaction usability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {selectedResearchItems.map((item) => (
            <Card
              key={item.title}
              variant="default"
              className="p-5 flex flex-col justify-between border-zinc-800 hover:border-zinc-700 transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                    {item.domain}
                  </span>
                  {item.publicRepo ? (
                    <Badge variant="cyan">PUBLIC REPO</Badge>
                  ) : (
                    <Badge variant="outline">IN DEVELOPMENT</Badge>
                  )}
                </div>

                <h3 className="text-base font-semibold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-1">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 light:text-zinc-600 mb-3">
                  Scope: {item.scope}
                </p>

                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono">
                {item.empiricalPrinciple && (
                  <span className="text-[10px] text-zinc-500">
                    {item.empiricalPrinciple}
                  </span>
                )}

                {item.publicRepo ? (
                  <a
                    href={item.publicRepo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-400 hover:underline ml-auto"
                  >
                    <span>{item.publicRepo.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-zinc-500 italic ml-auto">
                    <GitBranch className="w-3 h-3 text-zinc-600" />
                    <span>{item.inDevelopmentRepo} (IN DEVELOPMENT)</span>
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
