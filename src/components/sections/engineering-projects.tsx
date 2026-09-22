import React from "react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export function EngineeringProjectsSection() {
  return (
    <section id="projects" className="py-16 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
            <span>// 06</span>
            <span>·</span>
            <span>Systems & Implementations</span>
          </div>
          <span className="font-mono text-xs text-zinc-500">
            {projects.length} Public Repositories
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-4 font-sans">
          Engineering Projects
        </h2>
        <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-2xl mb-8 leading-relaxed">
          Open engineering systems, technical showcases, and experimental telemetry tools published with verified source repositories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <Card
              key={project.id}
              variant="default"
              className="p-5 flex flex-col justify-between border-zinc-800 hover:border-zinc-700/80 transition-all"
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

                <h3 className="text-base font-semibold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-2">
                  {project.name}
                </h3>

                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="mb-4 space-y-1 text-xs text-zinc-400 dark:text-zinc-500 light:text-zinc-600">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-cyan-400 mt-0.5">·</span>
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-3 border-t border-zinc-800/60 space-y-3">
                <div className="flex flex-wrap gap-1">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
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
    </section>
  );
}
