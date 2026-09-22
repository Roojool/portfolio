import React from "react";
import { skillCategories } from "@/data/skills";
import { Card } from "@/components/ui/card";
import { Code2, Server, Cpu, Globe } from "lucide-react";

export function SkillsMatrixSection() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 1:
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 2:
        return <Cpu className="w-4 h-4 text-blue-400" />;
      case 3:
        return <Globe className="w-4 h-4 text-purple-400" />;
      default:
        return <Code2 className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section className="py-16 border-b border-zinc-800/80 bg-zinc-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2">
          <span>// 11</span>
          <span>·</span>
          <span>Tooling & Technologies</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-4 font-sans">
          Technical Skills & Infrastructure
        </h2>
        <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-2xl mb-8 leading-relaxed">
          Categorized technical stack spanning systems runtimes, machine perception pipelines, and scalable network architectures.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillCategories.map((category, idx) => (
            <Card
              key={category.title}
              variant="default"
              className="p-5 border-zinc-800 hover:border-zinc-700/80 transition-all space-y-3"
            >
              <div className="flex items-center gap-2">
                {getCategoryIcon(idx)}
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:border-zinc-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
