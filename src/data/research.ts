export type ResearchStatus = "ACTIVE" | "EXPERIMENTAL";

export interface ResearchVector {
  id: string;
  title: string;
  domain: string;
  status: ResearchStatus;
  summary: string;
  currentWork: string;
  methods: string[];
  outputs: string[];
  relevantProject?: {
    name: string;
    url?: string;
  };
}

export const researchVectors: ResearchVector[] = [
  {
    id: "human-centered-ai",
    title: "Human-Centered AI & AI Usability",
    domain: "AI / Human-Computer Interaction",
    status: "ACTIVE",
    summary:
      "Formulating empirical usability evaluation heuristics, interaction metrics, and protocol benchmarks for AI-augmented ICT tools.",
    currentWork:
      "Active research group under Prof. Ganesh Bhutkar formulating quantitative usability rubrics, task-completion latency profiling, and interaction evaluation protocols for emerging AI-enabled applications.",
    methods: [
      "Empirical usability testing",
      "Quantitative task latency analysis",
      "Heuristic interaction rubrics",
      "Evaluation protocol formulation"
    ],
    outputs: [
      "Scheduled research presentation at CHIuXD 2026 (Indonesia, December 2026)",
      "Structured evaluation rubric for AI-augmented ICT user interactions"
    ]
  },
  {
    id: "vms-architectures",
    title: "Video Management Systems",
    domain: "Distributed Video Systems",
    status: "ACTIVE",
    summary:
      "Architectural trade-offs across streaming latency, storage I/O throughput, and surveillance ingest topologies.",
    currentWork:
      "Synthesized a structured literature-review corpus of 60 VMS-related academic publications (2015–2025), extracting taxonomy and architectural patterns for distributed ingest, storage pipelines, and edge streaming topologies.",
    methods: [
      "Systematic literature review synthesis",
      "Streaming pipeline latency modeling",
      "Storage I/O bottleneck mapping",
      "Comparative topology analysis"
    ],
    outputs: [
      "Structured 60-paper VMS research corpus (2015–2025)",
      "Taxonomy of distributed VMS streaming & edge ingest topologies"
    ]
  },
  {
    id: "edge-video-analytics",
    title: "Edge Computer Vision & Video Analytics",
    domain: "Computer Vision & Edge Inference",
    status: "ACTIVE",
    summary:
      "Benchmarking hardware resource constraints, frame-drop telemetry, and inference continuity in edge video pipelines.",
    currentWork:
      "Cataloged and benchmarked 28 computer vision capabilities with verified demonstrations and operational constraints across simulated surveillance feeds.",
    methods: [
      "RTSP decode telemetry profiling",
      "Edge inference pipeline benchmarking",
      "Frame-drop rate instrumentation",
      "Multi-capability vision validation"
    ],
    outputs: [
      "28-capability verified video analytics research showcase",
      "ai-video-analytics-showcase repository"
    ],
    relevantProject: {
      name: "ai-video-analytics-showcase",
      url: "https://github.com/Roojool/ai-video-analytics-showcase"
    }
  },
  {
    id: "android-bufferbloat",
    title: "Android Cellular Transport & Bufferbloat",
    domain: "Network Systems / Mobile Telemetry",
    status: "EXPERIMENTAL",
    summary:
      "Active queue latency instrumentation and round-trip time inflation analysis on saturated mobile endpoints.",
    currentWork:
      "Developing native Android telemetry tooling to isolate bufferbloat bottlenecks without synthetic bias under variable 4G/5G cellular link loads.",
    methods: [
      "Active queue latency instrumentation",
      "RTT variance and jitter profiling under saturation",
      "Socket-level cellular link telemetry"
    ],
    outputs: [
      "5G-Bufferbloat-App measurement framework",
      "Empirical principle: Configured State Is Not Wire Behavior"
    ],
    relevantProject: {
      name: "5G-Bufferbloat-App",
      url: "https://github.com/Roojool/5G-Bufferbloat-App"
    }
  },
  {
    id: "llm-agent-architectures",
    title: "Grounded LLM Systems & Tool Execution",
    domain: "Applied AI / System RAG",
    status: "EXPERIMENTAL",
    summary:
      "Deterministic schema validation and bounded tool execution to eliminate hallucinated system operations.",
    currentWork:
      "Experimenting with structured retrieval pipelines, schema-bounded agent tool execution, and local inference orchestration.",
    methods: [
      "Retrieval-Augmented Generation (RAG) benchmarking",
      "Deterministic schema validation",
      "Bounded tool execution verification"
    ],
    outputs: [
      "Experimental multi-step agent verification workflows",
      "Domain document synthesis pipelines"
    ]
  }
];
