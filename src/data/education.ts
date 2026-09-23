export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  status: string;
  period?: string;
  gpa?: string;
  coursework?: string[];
  honors?: string[];
}

export const education: EducationItem[] = [
  {
    id: "vit-pune-btech",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Engineering",
    institution: "Vishwakarma Institute of Technology (VIT Pune)",
    location: "Pune, India",
    status: "Undergraduate Program (In Progress)",
    period: "2023 – 2027",
    gpa: "8.5"
  }
];
