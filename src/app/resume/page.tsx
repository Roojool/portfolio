import type { Metadata } from "next";
import { ResumeActionBar } from "@/components/resume/resume-action-bar";
import { getResumeData } from "@/data/resume";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Rujul Talekar — Resume",
  description: "AI Researcher and Systems / ML Engineer",
};

export default function ResumePage() {
  const data = getResumeData();

  return (
    <div className="min-h-screen py-4 sm:py-8 print:p-0">
      <ResumeActionBar />

      <main
        tabIndex={-1}
        className="resume-sheet mx-auto w-full max-w-[210mm] bg-card p-6 sm:p-8 text-foreground border border-border shadow-xs print:m-0 print:w-[210mm] print:min-h-[297mm] print:max-w-none print:border-none print:bg-white print:p-[9mm_11mm_8mm_11mm] print:text-black print:shadow-none font-sans text-[13px] leading-[1.4] print:text-[9.25pt] print:leading-[1.24] focus:outline-none"
      >
        {/* Header */}
        <header className="border-b border-border pb-3 print:border-zinc-300 print:pb-1.5 text-center">
          <h1 className="text-xl sm:text-2xl print:text-[17pt] font-bold uppercase tracking-tight text-foreground print:text-black">
            {data.header.name}
          </h1>
          <p className="text-xs sm:text-sm print:text-[9pt] font-medium text-muted-foreground print:text-zinc-700 mt-0.5 mb-1.5 print:mb-1">
            {data.header.subtitle}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-2.5 gap-y-1 text-xs print:text-[8pt] font-mono text-muted-foreground print:text-zinc-700">
            {data.header.links.map((link, idx) => (
              <span key={link.label} className="inline-flex items-center gap-2">
                <a
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className="hover:underline focus-visible:underline underline-offset-2 text-foreground print:text-black"
                >
                  {link.label}
                </a>
                {idx < data.header.links.length - 1 && (
                  <span className="text-muted-foreground/50 select-none print:text-zinc-400">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </header>

        {/* Experience */}
        <section className="mt-3 print:mt-2">
          <h2 className="text-xs font-mono uppercase font-bold tracking-wider text-foreground print:text-black border-b border-border print:border-zinc-300 pb-0.5 mb-1.5 print:mb-1">
            Research Experience
          </h2>
          <div className="space-y-1 print:space-y-0.5">
            <div className="flex flex-wrap justify-between items-baseline gap-x-2">
              <span className="font-semibold text-foreground print:text-black">
                {data.experience.role}
              </span>
              <span className="text-xs print:text-[8.5pt] font-mono text-muted-foreground print:text-zinc-600">
                {data.experience.period}
              </span>
            </div>
            <div className="flex flex-wrap justify-between items-baseline gap-x-2 text-xs print:text-[8.5pt] text-muted-foreground print:text-zinc-600">
              <span className="font-medium">{data.experience.organization}</span>
              <span className="font-mono">Pune, India · Hybrid</span>
            </div>
            <ul className="list-disc list-inside mt-1 print:mt-0.5 space-y-0.5 text-muted-foreground print:text-zinc-800">
              {data.experience.highlights.map((h, i) => (
                <li
                  key={i}
                  className={cn("pl-1", i >= 2 && "print:hidden")}
                >
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mt-3 print:mt-2 break-inside-avoid">
          <h2 className="text-xs font-mono uppercase font-bold tracking-wider text-foreground print:text-black border-b border-border print:border-zinc-300 pb-0.5 mb-1.5 print:mb-1">
            Education
          </h2>
          <div className="space-y-0.5">
            <div className="flex flex-wrap justify-between items-baseline gap-x-2">
              <span className="font-semibold text-foreground print:text-black">
                {data.education.institution}
              </span>
              <span className="text-xs print:text-[8.5pt] font-mono text-muted-foreground print:text-zinc-600">
                Pune, India
              </span>
            </div>
            <div className="flex flex-wrap justify-between items-baseline gap-x-2 text-xs print:text-[8.5pt] text-muted-foreground print:text-zinc-700">
              <span>
                {data.education.degree} — {data.education.field}
              </span>
              <span className="font-mono">
                GPA: {data.education.gpa} · {data.education.period}
              </span>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="mt-3 print:mt-2">
          <h2 className="text-xs font-mono uppercase font-bold tracking-wider text-foreground print:text-black border-b border-border print:border-zinc-300 pb-0.5 mb-1.5 print:mb-1">
            Publications
          </h2>
          <div className="space-y-1.5 print:space-y-1">
            {data.publications.map((pub) => {
              const paperUrl = pub.doi || pub.evidenceUrl;
              return (
                <div key={pub.id} className="space-y-0.5 print:space-y-0 break-inside-avoid">
                  <div className="flex flex-wrap justify-between items-baseline gap-x-2">
                    {paperUrl ? (
                      <a
                        href={paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-foreground print:text-black hover:underline focus-visible:underline underline-offset-2"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      <span className="font-semibold text-foreground print:text-black">
                        {pub.title}
                      </span>
                    )}
                    <span className="text-xs font-mono text-muted-foreground print:hidden">
                      {pub.venueAbbr}
                    </span>
                  </div>
                  <div className="text-xs print:text-[8.5pt] text-muted-foreground print:text-zinc-700">
                    <span>{pub.authors.join(", ")}</span>
                  </div>
                  <div className="text-xs print:text-[8.5pt] text-muted-foreground print:text-zinc-600">
                    <span className="print:hidden">
                      {pub.venue} · Pages {pub.pages} · {pub.year}
                    </span>
                    <span className="hidden print:inline">
                      {pub.venueAbbr} · pp. {pub.pages} · {pub.year}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Selected Projects */}
        <section className="mt-3 print:mt-2">
          <h2 className="text-xs font-mono uppercase font-bold tracking-wider text-foreground print:text-black border-b border-border print:border-zinc-300 pb-0.5 mb-1.5 print:mb-1">
            Selected Systems &amp; Research Projects
          </h2>
          <div className="space-y-1.5 print:space-y-1">
            {data.projects.map((proj) => (
              <div key={proj.id} className="space-y-0.5 print:space-y-0 break-inside-avoid">
                {/* Screen header */}
                <div className="flex flex-wrap justify-between items-baseline gap-x-2 print:hidden">
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground hover:underline focus-visible:underline underline-offset-2"
                  >
                    {proj.displayName ?? proj.name}
                  </a>
                  <span className="text-xs font-mono text-muted-foreground">
                    {proj.stack.slice(0, 4).join(" · ")}
                  </span>
                </div>

                {/* Print header: name with stack underneath to avoid right overflow */}
                <div className="hidden print:block">
                  <a
                    href={proj.url}
                    className="font-semibold text-black hover:underline focus-visible:underline underline-offset-2"
                  >
                    {proj.displayName ?? proj.name}
                  </a>
                  <div className="text-[7.75pt] font-mono text-zinc-600 min-w-0 break-words -mt-0.5 mb-0.5">
                    {proj.stack.slice(0, 4).join(" · ")}
                  </div>
                </div>

                <p className="text-xs print:text-[8.5pt] text-muted-foreground print:text-zinc-700 min-w-0 break-words">
                  {proj.description}
                </p>

                {proj.highlights && proj.highlights.length > 0 && (
                  <ul className="list-disc list-inside space-y-0.5 text-xs print:text-[8.5pt] text-muted-foreground print:text-zinc-800">
                    {proj.highlights.slice(0, 2).map((h, i) => (
                      <li
                        key={i}
                        className={cn("pl-1 min-w-0 break-words", i >= 1 && "print:hidden")}
                      >
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mt-3 print:mt-2">
          <h2 className="text-xs font-mono uppercase font-bold tracking-wider text-foreground print:text-black border-b border-border print:border-zinc-300 pb-0.5 mb-1.5 print:mb-1">
            Intellectual Property
          </h2>
          {/* Screen version: flex row with jurisdiction & date */}
          <div className="space-y-1 print:hidden">
            {data.patents.map((pat) => (
              <div
                key={pat.id}
                className="flex flex-wrap justify-between items-baseline gap-x-2 text-xs"
              >
                <div>
                  <span className="font-semibold text-foreground">
                    {pat.status === "Granted Patent"
                      ? "Granted Patent"
                      : "Published Patent Application"}
                    :
                  </span>{" "}
                  <span className="text-muted-foreground">
                    {pat.title}
                  </span>{" "}
                  <span className="text-muted-foreground/75 font-mono">
                    ({pat.jurisdiction}, ID: {pat.identifier})
                  </span>
                </div>
                <span className="font-mono text-muted-foreground">
                  {pat.date}
                </span>
              </div>
            ))}
          </div>

          {/* Print version: 1 line per record */}
          <div className="hidden print:block space-y-0.5">
            {data.patents.map((pat) => (
              <div
                key={pat.id}
                className="text-[8.5pt] leading-tight break-inside-avoid min-w-0"
              >
                <span className="font-semibold text-black">{pat.status}</span>
                <span className="text-zinc-500 mx-1">—</span>
                <span className="text-zinc-800">
                  {pat.id === "harmful-ingredients-junk-food-detection"
                    ? "Harmful Ingredients Detection"
                    : pat.title}
                </span>
                <span className="text-zinc-500 mx-1">—</span>
                <span className="text-zinc-700">{pat.jurisdiction}</span>
                <span className="text-zinc-500 mx-1">—</span>
                <span className="font-mono text-zinc-600">{pat.identifier}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mt-3 print:mt-2 break-inside-avoid">
          <h2 className="text-xs font-mono uppercase font-bold tracking-wider text-foreground print:text-black border-b border-border print:border-zinc-300 pb-0.5 mb-1.5 print:mb-1">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-x-4 gap-y-1 text-xs print:text-[8.5pt] print:leading-[1.25]">
            {data.skills.map((category) => (
              <div key={category.title} className="min-w-0 break-words">
                <span className="font-semibold text-foreground print:text-black">
                  {category.label}:{" "}
                </span>
                <span className="text-muted-foreground print:text-zinc-800">
                  {category.skills.join(", ")}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
