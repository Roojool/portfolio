export interface Profile {
  name: string;
  title: string;
  role: string;
  institution: string;
  location: string;
  timezone: string;
  status: string;
  headline: string;
  bio: string[];
  principles: { title: string; description: string }[];
}

export const profile: Profile = {
  name: "Rujul Talekar",
  title: "AI Researcher × Systems Builder",
  role: "Artificial Intelligence Researcher & Systems Builder",
  institution: "Vishwakarma Institute of Technology (VIT Pune)",
  location: "Pune, India",
  timezone: "Asia/Kolkata (UTC+05:30)",
  status: "AI/HCI · VMS · NETWORK SYSTEMS",
  headline:
    "AI research, systems engineering, and experimental software. Working on Human-Centered AI, Video Management Systems, edge video analytics, and cellular transport dynamics.",
  bio: [
    "Computer Engineering undergraduate at Vishwakarma Institute of Technology (VIT Pune) and AI Researcher with ACM. Currently conducting Human-Centered AI and AI usability research.",
    "My work bridges empirical measurement and systems engineering: characterizing cellular bufferbloat on mobile runtimes, synthesizing architectural evidence from 60 VMS research papers, and experimenting with edge computer vision and video analytics pipelines.",
    "Driven by a core methodological principle: Configured State Is Not Wire Behavior. Systems must be characterized through empirical instrumentation, baseline comparisons, and reproducible telemetry rather than declared parameters."
  ],
  principles: [
    {
      title: "Measure Before Claiming",
      description: "No optimization or algorithmic improvement is accepted without baseline and post-intervention comparative instrumentation."
    },
    {
      title: "Distinguish Configuration from Behavior",
      description: "Parameterizing a pipeline does not guarantee runtime compliance; observable execution telemetry provides the ground truth."
    },
    {
      title: "Preserve Negative Results",
      description: "Null hypotheses, failed latency thresholds, and unviable inference topologies are preserved as valid engineering signal."
    },
    {
      title: "Defensible Limits",
      description: "State explicit boundaries, hardware constraints, and failure modes rather than claiming universal generalization."
    },
    {
      title: "Reproducible Tooling",
      description: "Maintain reproducible configurations, explicit seeds, and controlled environments wherever feasible."
    }
  ]
};
