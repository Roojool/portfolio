export interface PatentItem {
  id: string;
  title: string;
  field: string;
  filingDate: string;
  publicationDate: string;
  ipcClassification: string[];
  status: "Published Patent Application" | "Granted Patent";
  description?: string;
}

export const patents: PatentItem[] = [
  {
    id: "personalized-voice-control-car",
    title: "Personalized Voice Control Car",
    field: "Electronics",
    filingDate: "11 December 2025",
    publicationDate: "23 January 2026",
    ipcClassification: [
      "G10L 17/00",
      "G10L 17/22",
      "G10L 15/22",
      "G10L 17/04",
      "G10L 17/02"
    ],
    status: "Published Patent Application",
    description:
      "Voice recognition and personalization control architecture designed for embedded vehicular systems, mapping speaker characteristics to tailored control commands."
  }
];
