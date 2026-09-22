export type ResearchStatus = "ACTIVE" | "EXPERIMENTAL" | "IN DEVELOPMENT";

export interface ResearchVector {
  id: string;
  title: string;
  category: string;
  status: ResearchStatus;
  researchQuestion: string;
  currentState: string;
  relevantProject?: {
    name: string;
    url?: string;
  };
  methods: string[];
  tooling: string[];
  keyOutputs: string[];
}

export const researchVectors: ResearchVector[] = [
  {
    id: "human-centered-ai",
    title: "Human-Centered AI & AI Usability",
    category: "AI / Human-Computer Interaction",
    status: "ACTIVE",
    researchQuestion:
      "How can empirical usability heuristics and quantitative interaction metrics be structured to evaluate AI-augmented ICT tools for non-expert users?",
    currentState:
      "Active research group under Prof. Ganesh Bhutkar at VIT Pune. Formulating quantitative usability rubrics and protocol evaluations.",
    methods: [
      "Empirical usability testing",
      "Quantitative task-completion latency analysis",
      "Heuristic interaction rubrics"
    ],
    tooling: ["Statistical Analysis", "Evaluation Protocols", "HCI Usability Frameworks"],
    keyOutputs: [
      "Scheduled research presentation at CHIuXD 2026 (Indonesia, December 2026)",
      "Structured evaluation rubric for AI-augmented ICT user interactions"
    ]
  },
  {
    id: "vms-architectures",
    title: "Video Management Systems (VMS) Architecture",
    category: "Distributed Video Systems",
    status: "ACTIVE",
    researchQuestion:
      "What architectural trade-offs govern latency, storage throughput, and streaming reliability across modern distributed surveillance topologies?",
    currentState:
      "Synthesized a structured literature-review corpus of 60 VMS-related academic papers from 2015–2025, extracting taxonomy and architectural patterns.",
    methods: [
      "Systematic literature review and taxonomy synthesis",
      "Comparative streaming pipeline latency modeling",
      "Storage I/O bottleneck mapping"
    ],
    tooling: ["RTSP Telemetry", "VMS Protocols", "Comparative Matrix Analysis"],
    keyOutputs: [
      "Structured 60-paper VMS research corpus (2015–2025)",
      "Taxonomy of distributed VMS streaming & edge ingest topologies"
    ]
  },
  {
    id: "edge-video-analytics",
    title: "Edge Computer Vision & Video Analytics",
    category: "Computer Vision & Edge Inference",
    status: "ACTIVE",
    researchQuestion:
      "How do hardware resource constraints (CPU/GPU/thermal throttling) affect inference frame-drop rates and tracking continuity in edge video analytics?",
    currentState:
      "Cataloged and benchmarked 28 computer vision capabilities with verified visual demonstrations and operational constraints across simulated surveillance feeds.",
    relevantProject: {
      name: "ai-video-analytics-showcase",
      url: "https://github.com/Roojool/ai-video-analytics-showcase"
    },
    methods: [
      "Multi-capability video analytics validation",
      "RTSP decode telemetry and frame-dropping profiling",
      "Edge inference pipeline benchmarking"
    ],
    tooling: ["OpenCV", "Python", "Computer Vision Pipelines", "Video Telemetry"],
    keyOutputs: [
      "28-capability verified video analytics research showcase",
      "Interactive technical showcase exploring municipal-scale VMS scenarios"
    ]
  },
  {
    id: "android-bufferbloat",
    title: "Android Cellular Transport & Bufferbloat",
    category: "Network Systems / Mobile Telemetry",
    status: "EXPERIMENTAL",
    researchQuestion:
      "How does queuing latency under loaded cellular links (4G/5G) inflate round-trip times on mobile endpoints, and can socket-level telemetry isolate the bufferbloat bottleneck?",
    currentState:
      "Developing native Android telemetry tooling to measure latency inflation under variable cellular network loads without synthetic bias.",
    relevantProject: {
      name: "5G-Bufferbloat-App",
      url: "https://github.com/Roojool/5G-Bufferbloat-App"
    },
    methods: [
      "Active queue latency instrumentation",
      "RTT variance and jitter profiling under saturation",
      "Socket-level cellular link telemetry"
    ],
    tooling: ["Android SDK", "Kotlin", "Java", "Socket Telemetry", "Linux Network Stacks"],
    keyOutputs: [
      "5G-Bufferbloat-App measurement framework",
      "Empirical principle: Configured State Is Not Wire Behavior"
    ]
  },
  {
    id: "llm-agent-architectures",
    title: "Grounded LLM Systems & Tool Execution",
    category: "Applied AI / System RAG",
    status: "EXPERIMENTAL",
    researchQuestion:
      "How can autonomous agent execution workflows enforce strict schema validation and bounded tool execution to eliminate hallucinated system operations?",
    currentState:
      "Experimenting with structured retrieval pipelines, schema-bounded agent tool execution, and local inference orchestration.",
    methods: [
      "Retrieval-Augmented Generation (RAG) benchmarking",
      "Deterministic schema parsing and tool execution verification",
      "Grounded prompt architectures"
    ],
    tooling: ["LangChain", "Vector Indexes", "FastAPI", "Python"],
    keyOutputs: [
      "Experimental multi-step agent verification workflows",
      "Domain document synthesis pipelines"
    ]
  }
];
