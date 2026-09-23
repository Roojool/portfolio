export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  department?: string;
  location: string;
  advisor?: string;
  period: string;
  current: boolean;
  focus: string;
  highlights: string[];
  deliverables?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "vit-research-intern",
    role: "Research Intern",
    organization: "Vishwakarma Institute of Technology (VIT Pune)",
    department: "Department of Computer Engineering",
    location: "Pune, India",
    advisor: "Prof. Ganesh Bhutkar",
    period: "Present",
    current: true,
    focus: "Usability of AI ICT Applications",
    highlights: [
      "Investigating usability evaluation frameworks and quantitative human-interaction metrics in AI-assisted information and communication technology (ICT) systems.",
      "Developing experimental protocols and evaluation rubrics for an upcoming research presentation at CHIuXD 2026 (Indonesia, December 2026).",
      "Conducted a systematic synthesis of a 60-paper VMS research corpus (2015–2025) analyzing Video Management Systems, edge video inference topologies, and streaming pipeline latencies."
    ],
    deliverables: [
      "Scheduled CHIuXD 2026 presentation (Indonesia, December 2026)",
      "Structured literature-review corpus of 60 VMS-related academic papers (2015–2025)"
    ]
  }
];
