import * as React from "react";
import { Panel, PanelHeader, PanelTitle } from "@/components/ui/panel";

interface StackCategory {
  title: string;
  items: string[];
}

const TECH_CATEGORIES: StackCategory[] = [
  {
    title: "Languages",
    items: [
      "Python",
      "C",
      "C++",
      "Java",
      "Kotlin",
      "TypeScript",
      "JavaScript",
      "SQL",
      "POSIX Shell",
    ],
  },
  {
    title: "AI / Vision",
    items: [
      "Computer Vision",
      "OpenCV",
      "Video Analytics",
      "Edge Inference",
      "LLM Applications",
      "RAG Pipelines",
      "Model APIs",
    ],
  },
  {
    title: "Systems",
    items: [
      "Android SDK",
      "JNI / NDK",
      "CMake",
      "Linux Runtimes",
      "Docker Containers",
      "RTSP Ingest",
      "go2rtc",
      "Git",
    ],
  },
  {
    title: "Web / Backend",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },
];

const ID = "stack";

export function TechStackPanel() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Stack</a>
        </PanelTitle>
      </PanelHeader>

      <div className="relative [--badge-height:theme(spacing.6)] [--col-left-width:theme(spacing.48)]">
        <div
          className="pointer-events-none absolute inset-y-0 left-[var(--col-left-width)] -z-1 w-px border-r border-dashed border-line max-sm:hidden"
          aria-hidden
        />

        {TECH_CATEGORIES.map((cat, index) => {
          const categoryId = `${ID}-${cat.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")}`;

          return (
            <div
              key={cat.title}
              className="grid items-start gap-y-2 border-b border-line py-4 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]"
            >
              <div id={categoryId} className="pl-4 text-sm/[var(--badge-height)] font-medium">
                <span
                  className="mr-1.5 font-mono text-muted-foreground/80 select-none"
                  aria-hidden
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {cat.title}
              </div>

              <ul
                aria-labelledby={categoryId}
                className="flex flex-wrap gap-1.5 px-4"
              >
                {cat.items.map((skill) => (
                  <li key={skill} className="flex">
                    <span className="flex h-[var(--badge-height)] items-center justify-center gap-1.25 rounded-full bg-zinc-50/80 px-2 font-mono text-xs text-foreground inset-ring-1 inset-ring-border dark:bg-zinc-900/80">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}
