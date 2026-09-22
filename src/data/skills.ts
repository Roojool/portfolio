export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "C", "C++", "Java", "Kotlin", "JavaScript", "TypeScript", "SQL", "POSIX Shell"]
  },
  {
    title: "Systems & Infrastructure",
    skills: ["Android SDK", "JNI / NDK", "CMake", "Linux Runtimes", "Docker Containers", "Git", "GitHub Actions"]
  },
  {
    title: "AI & Perceptual Systems",
    skills: ["Computer Vision", "OpenCV", "Video Analytics", "LLM Applications", "RAG Systems", "LangChain", "Model APIs"]
  },
  {
    title: "Web & Backend",
    skills: ["React", "Next.js", "Node.js", "Express", "FastAPI", "MongoDB", "MySQL"]
  }
];
