import type { Metadata } from "next";
import { ResumeActionBar } from "@/components/resume/resume-action-bar";
import { getResumeData } from "@/data/resume";

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
        className="mx-auto w-full max-w-[210mm] bg-card p-6 sm:p-8 text-foreground border border-border shadow-xs print:m-0 print:w-full print:max-w-none print:border-none print:bg-white print:p-0 print:text-black print:shadow-none font-sans text-[13px] leading-[1.4] print:text-[9.5pt] print:leading-[1.3] focus:outline-none"
      >
        {/* Header */}
        <header className="border-b border-border pb-3 print:border-zinc-300 print:pb-2 text-center">
          <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground print:text-black">
            {data.header.name}
          </h1>
          <p className="text-xs sm:text-sm font-medium text-muted-foreground print:text-zinc-600 mt-0.5 mb-1.5">
            {data.header.subtitle}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-2.5 gap-y-1 text-xs font-mono text-muted-foreground print:text-zinc-700">
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
        <section className="mt-3 print:mt-2.5">
          <h2 className="text-xs font-mono uppercase font-bold tracking-wider text-foreground print:text-black border-b border-border print:border-zinc-300 pb-0.5 mb-1.5">
            Research Experience
          </h2>
          <div className="space-y-1">
            <div className="flex flex-wrap justify-between items-baseline gap-x-2">
              <span className="font-semibold text-foreground print:text-black">
                {data.experience.role}
              </span>
              <span className="text-xs font-mono text-muted-foreground print:text-zinc-600">
                {data.experience.period}
              </span>
            </div>
            <div className="flex flex-wrap justify-between items-baseline gap-x-2 text-xs text-muted-foreground print:text-zinc-600">
              <span className="font-medium">{data.experience.organization}</span>
              <span className="font-mono">Pune, India · Hybrid</span>
            </div>
            <ul className="list-disc list-inside mt-1 space-y-0.5 text-muted-foreground print:text-zinc-800">
              {data.experience.highlights.map((h, i) => (
                <li key={i} className="pl-1">
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mt-3 print:mt-2.5">
          <h2 className="text-xs font-mono uppercase font-bold tracking-wider text-foreground print:text-black border-b border-border print:border-zinc-300 pb-0.5 mb-1.5">
            Education
          </h2>
          <div className="space-y-0.5">
            <div className="flex flex-wrap justify-between items-baseline gap-x-2">
              <span className="font-semibold text-foreground print:text-black">
                {data.education.institution}
              </span>
              <span className="text-xs font-mono text-muted-foreground print:text-zinc-600">
                Pune, India
              </span>
            </div>
            <div className="flex flex-wrap justify-between items-baseline gap-x-2 text-xs text-muted-foreground print:text-zinc-700">
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
        <section className="mt-3 print:mt-2.5">
          <h2 className="text-xs font-mono uppercase font-bold tracking-wider text-foreground print:text-black border-b border-border print:border-zinc-300 pb-0.5 mb-1.5">
            Publications
          </h2>
          <div className="space-y-1.5">
            {data.publications.map((pub) => (
              <div key={pub.id} className="space-y-0.5">
                <div className="flex flex-wrap justify-between items-baseline gap-x-2">
                  <a
                    href={pub.scholarUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground print:text-black hover:underline focus-visible:underline underline-offset-2"
                  >
                    {pub.title}
                  </a>
                  <span className="text-xs font-mono text-muted-foreground print:text-zinc-600">
                    {pub.venueAbbr}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground print:text-zinc-700">
                  <span>{pub.authors.join(", ")}</span>
                </div>
                <div className="text-xs text-muted-foreground print:text-zinc-600">
                  <span>
                    {pub.venue} · Pages {pub.pages} · {pub.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Projects */}
        <section className="mt-3 print:mt-2.5">
          <h2 className="text-xs font-mono uppercase font-bold tracking-wider text-foreground print:text-black border-b border-border print:border-zinc-300 pb-0.5 mb-1.5">
            Selected Systems & Research Projects
          </h2>
          <div className="space-y-1.5">
            {data.projects.map((proj) => (
              <div key={proj.id} className="space-y-0.5">
                <div className="flex flex-wrap justify-between items-baseline gap-x-2">
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground print:text-black hover:underline focus-visible:underline underline-offset-2"
                  >
                    {proj.name}
                  </a>
                  <span className="text-xs font-mono text-muted-foreground print:text-zinc-600">
                    {proj.stack.slice(0, 4).join(" · ")}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground print:text-zinc-700">
                  {proj.description}
                </p>
                {proj.highlights && proj.highlights.length > 0 && (
                  <ul className="list-disc list-inside space-y-0.5 text-xs text-muted-foreground print:text-zinc-800">
                    {proj.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="pl-1">
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
        <section className="mt-3 print:mt-2.5">
          <h2 className="text-xs font-mono uppercase font-bold tracking-wider text-foreground print:text-black border-b border-border print:border-zinc-300 pb-0.5 mb-1.5">
            Intellectual Property
          </h2>
          <div className="space-y-1">
            {data.patents.map((pat) => (
              <div
                key={pat.id}
                className="flex flex-wrap justify-between items-baseline gap-x-2 text-xs"
              >
                <div>
                  <span className="font-semibold text-foreground print:text-black">
                    {pat.status === "Granted Patent"
                      ? "Granted Patent"
                      : "Published Patent Application"}
                    :
                  </span>{" "}
                  <span className="text-muted-foreground print:text-zinc-800">
                    {pat.title}
                  </span>{" "}
                  <span className="text-muted-foreground/75 font-mono print:text-zinc-600">
                    ({pat.jurisdiction}, ID: {pat.identifier})
                  </span>
                </div>
                <span className="font-mono text-muted-foreground print:text-zinc-600">
                  {pat.date}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mt-3 print:mt-2.5">
          <h2 className="text-xs font-mono uppercase font-bold tracking-wider text-foreground print:text-black border-b border-border print:border-zinc-300 pb-0.5 mb-1.5">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
            <div>
              <span className="font-semibold text-foreground print:text-black">
                Languages:{" "}
              </span>
              <span className="text-muted-foreground print:text-zinc-800">
                Python, C, C++, Java, Kotlin, JavaScript, TypeScript, SQL
              </span>
            </div>
            <div>
              <span className="font-semibold text-foreground print:text-black">
                AI & Vision:{" "}
              </span>
              <span className="text-muted-foreground print:text-zinc-800">
                OpenCV, Computer Vision, Video Analytics, LLMs, RAG, LangChain
              </span>
            </div>
            <div>
              <span className="font-semibold text-foreground print:text-black">
                Systems & Tools:{" "}
              </span>
              <span className="text-muted-foreground print:text-zinc-800">
                Android SDK/NDK, JNI, Linux, Docker, CMake, Git, GitHub Actions
              </span>
            </div>
            <div>
              <span className="font-semibold text-foreground print:text-black">
                Web & Backend:{" "}
              </span>
              <span className="text-muted-foreground print:text-zinc-800">
                React, Next.js, Node.js, Express, FastAPI, MongoDB, MySQL
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
