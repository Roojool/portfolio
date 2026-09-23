export type PatentStatus = "Granted Patent" | "Published Patent Application";

export interface PatentItem {
  id: string;
  title: string;
  identifier: string;
  jurisdiction: string;
  status: PatentStatus;
  date: string;
  year: string;
  dateLabel: string;
  summary: string;
  ipcClassification?: string[];
}

export const patents: PatentItem[] = [
  {
    id: "harmful-ingredients-junk-food-detection",
    title:
      "A System for Detection of Harmful Ingredients from Junk Food Label Images",
    identifier: "2025/08682",
    jurisdiction: "South Africa",
    status: "Granted Patent",
    date: "27 May 2026",
    year: "2026",
    dateLabel: "Granted",
    summary:
      "Granted South African patent for a system designed to detect harmful ingredients from junk food label images."
  },
  {
    id: "personalized-voice-control-car",
    title: "Personalized Voice Control Car",
    identifier: "IND 202521125250",
    jurisdiction: "India",
    status: "Published Patent Application",
    date: "23 January 2026",
    year: "2026",
    dateLabel: "Published",
    summary:
      "Published Indian patent application for a secure, voice-authenticated robotic vehicle control system.",
    ipcClassification: [
      "G10L 17/00",
      "G10L 17/22",
      "G10L 15/22",
      "G10L 17/04",
      "G10L 17/02"
    ]
  },
  {
    id: "ai-assistant-drone",
    title: "AI Assistant Drone",
    identifier: "IND 202521095451",
    jurisdiction: "India",
    status: "Published Patent Application",
    date: "17 October 2025",
    year: "2025",
    dateLabel: "Published",
    summary:
      "Published Indian patent application for an AI-powered autonomous drone assistant designed for natural interaction and assistance."
  }
];
