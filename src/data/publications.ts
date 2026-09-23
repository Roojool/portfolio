export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  venueAbbr: string;
  conferenceDates: string;
  date: string;
  year: number;
  publisher?: string;
  pages?: string;
  doi?: string;
  type: string;
  status: "Published" | "Under Review" | "Accepted" | "Preprint";
  summary: string;
  scholarUrl?: string;
  bibtex?: string;
  evidenceLabel?: string;
  evidenceUrl?: string;
}

export const publications: PublicationItem[] = [
  {
    id: "junk-food-ml-pipeline-2025",
    title: "A Machine Learning Pipeline for Checking Junk Food Ingredients",
    authors: [
      "Archana Chaudhari",
      "Tanmai Tale",
      "Suraj Mundhada",
      "Makarand Shinde",
      "Rujul Talekar"
    ],
    venue:
      "2025 IEEE 3rd Global Conference on Wireless Computing and Networking (GCWCN)",
    venueAbbr: "IEEE GCWCN 2025",
    conferenceDates: "22–23 November 2025",
    date: "22 Nov 2025",
    year: 2025,
    publisher: "IEEE",
    pages: "1–5",
    type: "Conference Paper",
    status: "Published",
    summary:
      "Developed and evaluated a machine-learning pipeline for analyzing food ingredients and identifying characteristics associated with junk food, demonstrating an applied ML approach to ingredient-based assessment.",
    scholarUrl:
      "https://scholar.google.com/citations?user=RWQN9K8AAAAJ&hl=en",
    bibtex: `@inproceedings{chaudhari2025machine,
  title={A Machine Learning Pipeline for Checking Junk Food Ingredients},
  author={Chaudhari, Archana and Tale, Tanmai and Mundhada, Suraj and Shinde, Makarand and Talekar, Rujul},
  booktitle={2025 IEEE 3rd Global Conference on Wireless Computing and Networking (GCWCN)},
  pages={1--5},
  year={2025},
  organization={IEEE}
}`
  },
  {
    id: "career-guidance-genai-2024",
    title: "Student Career Guidance Using Generative AI",
    authors: [
      "Rahul Waikar",
      "Shraddhesh Tamhane",
      "Tanmai Tale",
      "Rujul Talekar",
      "Ayush Tangde",
      "Tanish Singla",
      "Tanishka Kalokhe"
    ],
    venue:
      "2nd IEEE International Conference on Artificial Intelligence and Quantum Computation Based Sensor Applications (ICAIQSA-2024)",
    venueAbbr: "IEEE ICAIQSA 2024",
    conferenceDates: "20–21 December 2024",
    date: "20 Dec 2024",
    year: 2024,
    publisher: "IEEE",
    pages: "1–6",
    type: "Conference Paper",
    status: "Published",
    summary:
      "Research exploring the application of Generative AI to student career guidance, focusing on the use of AI-driven systems to provide personalized and context-aware guidance to students.",
    scholarUrl:
      "https://scholar.google.com/citations?user=RWQN9K8AAAAJ&hl=en",
    bibtex: `@inproceedings{waikar2024student,
  title={Student Career Guidance Using Generative AI},
  author={Waikar, Rahul and Tamhane, Shraddhesh and Tale, Tanmai and Talekar, Rujul and Tangde, Ayush and Singla, Tanish and Kalokhe, Tanishka},
  booktitle={2024 International Conference on Artificial Intelligence and Quantum Computation-Based Sensor Application (ICAIQSA)},
  pages={1--6},
  year={2024},
  organization={IEEE}
}`
  }
];
