export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  venue?: string;
  publisher?: string;
  year: number;
  pages?: string;
  doi?: string;
  ieeeUrl?: string;
  scholarUrl?: string;
  bibtex?: string;
  abstract?: string;
  status: "Published" | "Under Review" | "Accepted" | "Preprint";
}

export const publications: PublicationItem[] = [
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
      "2024 International Conference on Artificial Intelligence and Quantum Computation-Based Sensor Application (ICAIQSA)",
    publisher: "IEEE",
    year: 2024,
    pages: "1–6",
    status: "Published",
    bibtex: `@inproceedings{waikar2024student,
  title={Student Career Guidance Using Generative AI},
  author={Waikar, Rahul and Tamhane, Shraddhesh and Tale, Tanmai and Talekar, Rujul and Tangde, Ayush and Singla, Tanish and Kalokhe, Tanishka},
  booktitle={2024 International Conference on Artificial Intelligence and Quantum Computation-Based Sensor Application (ICAIQSA)},
  pages={1--6},
  year={2024},
  organization={IEEE}
}`
  },
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
    year: 2025,
    status: "Published",
    bibtex: `@article{chaudhari2025junkfood,
  title={A Machine Learning Pipeline for Checking Junk Food Ingredients},
  author={Chaudhari, Archana and Tale, Tanmai and Mundhada, Suraj and Shinde, Makarand and Talekar, Rujul},
  year={2025}
}`
  }
];
