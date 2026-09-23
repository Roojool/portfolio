export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  employmentType: string;
  location: string;
  mode: string;
  period: string;
  current: boolean;
  advisor?: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "acm-ai-researcher",
    role: "Artificial Intelligence Researcher",
    organization: "ACM, Association for Computing Machinery",
    employmentType: "Internship",
    location: "Pune District, Maharashtra, India",
    mode: "Hybrid",
    period: "Jun 2026 – Present",
    current: true,
    description:
      "Working on research involving Human-Computer Interaction, Human-Centered AI, usability, and emerging AI-enabled ICT applications.",
    highlights: [
      "Working on research involving Human-Computer Interaction, Human-Centered AI, usability, and emerging AI-enabled ICT applications.",
      "Conducting research in the ACM context on quantitative interaction metrics, usability evaluation rubrics, and protocol evaluations.",
      "Formulating experimental evaluation rubrics and protocol benchmarks for AI-augmented human interactions."
    ],
    skills: [
      "Artificial Intelligence (AI)",
      "Machine Learning",
      "Human-Centered AI",
      "Human-Computer Interaction (HCI)",
      "Usability"
    ]
  }
];
