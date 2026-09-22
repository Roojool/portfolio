import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engineering Projects — Rujul Talekar",
  description:
    "Open engineering systems, technical showcases, and experimental telemetry tools authored by Rujul Talekar."
};

export default function ProjectsPage() {
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

        <div className="space-y-2 mb-10">
          <div className="font-mono text-xs uppercase tracking-wider text-cyan-400">
            Systems & Showcases
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 font-sans">
            Engineering Projects Directory
          </h1>
          <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-2xl leading-relaxed">
            Public repositories and technical showcases spanning cellular transport profiling, intelligent video analytics, and CCTV systems architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              variant="default"
              className="p-6 border-zinc-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                    {project.domain}
                  </span>
                  <Badge variant={project.featured ? "cyan" : "outline"}>
                    {project.status}
                  </Badge>
                </div>

                <h2 className="text-lg font-semibold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-2">
                  {project.name}
                </h2>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="mb-4 space-y-1 text-xs text-zinc-400">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-cyan-400">·</span>
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-4 border-t border-zinc-800/60 space-y-3">
                <div className="flex flex-wrap gap-1">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono pt-1">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-cyan-400 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>{project.repo}</span>
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
