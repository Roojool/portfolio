import React from "react";
import { experiences } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, UserCheck, CheckCircle2 } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2">
          <span>// 04</span>
          <span>·</span>
          <span>Academic & Industry Appointments</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-8 font-sans">
          Research Experience
        </h2>

        <div className="relative border-l border-zinc-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-cyan-400 bg-zinc-950 dark:bg-zinc-950 light:bg-white group-hover:scale-125 transition-transform" />

              <div className="p-5 rounded-lg border border-zinc-800/80 bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-zinc-50 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
                        {exp.role}
                      </h3>
                      {exp.current && <Badge variant="green">CURRENT</Badge>}
                    </div>
                    <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 light:text-zinc-600 mt-0.5">
                      {exp.organization} {exp.department && `· ${exp.department}`}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </span>
                  </div>
                </div>

                {exp.advisor && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-950/70 border border-zinc-800 text-xs font-mono text-cyan-300">
                    <UserCheck className="w-3 h-3" />
                    <span>Advisor: {exp.advisor}</span>
                    <span className="text-zinc-600">|</span>
                    <span className="text-zinc-400">Focus: {exp.focus}</span>
                  </div>
                )}

                <ul className="space-y-1.5 pt-2 text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {exp.deliverables && (
                  <div className="pt-3 border-t border-zinc-800/60 flex flex-wrap gap-2 text-[11px] font-mono">
                    <span className="text-zinc-500 self-center">Targets:</span>
                    {exp.deliverables.map((deliv, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        {deliv}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
