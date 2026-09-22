import React from "react";
import { education } from "@/data/education";
import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

export function EducationSection() {
  return (
    <section className="py-16 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2">
          <span>// 10</span>
          <span>·</span>
          <span>Academic Background</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-8 font-sans">
          Education
        </h2>

        <div className="space-y-4">
          {education.map((item) => (
            <Card
              key={item.id}
              variant="default"
              className="p-5 border-zinc-800 hover:border-zinc-700/80 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded border border-zinc-800 bg-zinc-900 flex items-center justify-center shrink-0 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
                    {item.degree} — {item.field}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 light:text-zinc-600 mt-0.5">
                    {item.institution}
                  </p>
                  <p className="text-xs text-zinc-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" /> {item.location}
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right font-mono text-xs text-zinc-400 dark:text-zinc-500">
                <span className="inline-block px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-cyan-300 text-[11px]">
                  {item.status}
                </span>
                {item.period && <p className="mt-1 text-zinc-500">{item.period}</p>}
                {item.gpa && <p className="text-zinc-400 font-semibold">{item.gpa}</p>}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
