export interface ProjectItem {
  id: string;
  name: string;
  displayName?: string;
  repo: string;
  url: string;
  domain: string;
  description: string;
  status: string;
  stack: string[];
  featured: boolean;
  demoUrl?: string;
  period?: {
    start: string;
    end?: string;
  };
  highlights?: string[];
}

export const projects: ProjectItem[] = [
  {
    id: "5g-bufferbloat-app",
    name: "5G-Bufferbloat-App",
    displayName: "5G Bufferbloat App",
    repo: "Roojool/5G-Bufferbloat-App",
    url: "https://github.com/Roojool/5G-Bufferbloat-App",
    domain: "Android Networking / Transport Research",
    description:
      "Experimental exploration of bufferbloat behavior, queue latency, and transport dynamics under cellular connectivity on Android endpoints.",
    status: "EXPERIMENTAL",
    stack: ["Android", "Kotlin", "Java", "Networking", "Telemetry"],
    featured: true,
    period: { start: "2025" },
    highlights: [
      "Investigates round-trip latency behavior under controlled network load.",
      "Implements lightweight mobile telemetry to measure transport behavior without synthetic kernel modifications.",
      "Separates configured/API-visible transport state from measurements that still require physical validation."
    ]
  },
  {
    id: "frigate-vms-lab",
    name: "Frigate-VMS-Lab",
    displayName: "Frigate VMS Lab",
    repo: "Roojool/Frigate-VMS-Lab",
    url: "https://github.com/Roojool/Frigate-VMS-Lab",
    domain: "Video Management Systems / Experimental Tooling",
    description:
      "Experimental VMS research tooling for Frigate, RTSP pipelines, integrated go2rtc, telemetry collection and reproducible benchmarking.",
    status: "EARLY RESEARCH TOOLING",
    stack: [
      "Python",
      "Frigate",
      "Docker",
      "RTSP",
      "go2rtc",
      "FFmpeg",
      "Telemetry"
    ],
    featured: true,
    period: { start: "2026" },
    highlights: [
      "Automated harness for deploying containerized Frigate NVR instances alongside simulated camera workloads.",
      "Integrates go2rtc stream multiplexing and RTSP re-streaming to profile live ingest behavior.",
      "Provides structured tooling for reproducible telemetry collection without premature physical claims."
    ]
  },
  {
    id: "ai-video-analytics-showcase",
    name: "ai-video-analytics-showcase",
    displayName: "AI Video Analytics Showcase",
    repo: "Roojool/ai-video-analytics-showcase",
    url: "https://github.com/Roojool/ai-video-analytics-showcase",
    domain: "AI Video Analytics / VMS Research Showcase",
    description:
      "Interactive presentation and research showcase cataloging 28 AI Video Analytics capabilities with verified video demonstrations.",
    status: "ACTIVE SHOWCASE",
    stack: ["Computer Vision", "Video Analytics", "VMS Architectures", "Web Architecture"],
    featured: true,
    period: { start: "2025" },
    highlights: [
      "Systematic catalog of 28 distinct perceptual video analytics capabilities.",
      "Visual verification matrix detailing operational constraints and edge inference limits.",
      "Structured reference for video surveillance engineers and computer vision researchers."
    ]
  },
  {
    id: "pmc-cctv-surveillance-editorial",
    name: "pmc-cctv-surveillance-editorial",
    displayName: "PMC CCTV Surveillance Editorial",
    repo: "Roojool/pmc-cctv-surveillance-editorial",
    url: "https://github.com/Roojool/pmc-cctv-surveillance-editorial",
    domain: "Interactive CCTV / VMS Technical Showcase",
    description:
      "Interactive technical showcase exploring CCTV infrastructure, AI video analytics and VMS architecture in a municipal-scale scenario.",
    status: "ACTIVE SHOWCASE",
    stack: ["CCTV", "VMS Architectures", "Surveillance Systems", "Editorial Analysis"],
    featured: true,
    period: { start: "2025" },
    highlights: [
      "Explores architectural layers of large-scale camera telemetry and video ingest pipelines.",
      "Analyzes network bandwidth trade-offs, storage retention math, and distributed NVR topologies.",
      "Examines operational challenges of integrating computer vision analytics into existing camera grids."
    ]
  },
  {
    id: "5g-india-gaming-guide",
    name: "5G-India-Gaming-Guide",
    displayName: "5G India Gaming Guide",
    repo: "Roojool/5G-India-Gaming-Guide",
    url: "https://github.com/Roojool/5G-India-Gaming-Guide",
    domain: "Network Optimization Guide",
    description:
      "Android 5G hotspot optimization guide for Airtel/Jio and Windows laptop users.",
    status: "PUBLISHED GUIDE",
    stack: ["Android", "5G Hotspot", "Windows Networking", "Routing Optimization"],
    featured: false,
    period: { start: "2024" },
    highlights: [
      "Documents practical Android hotspot and tethering configuration for Indian 5G networks.",
      "Focuses on signal quality, hotspot configuration, packet loss, jitter, and repeatable troubleshooting."
    ]
  }
];
