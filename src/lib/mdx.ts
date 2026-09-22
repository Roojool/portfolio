import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { calculateReadingTime } from "./reading-time";

const contentDirectory = path.join(process.cwd(), "content", "writing");

export interface WritingPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  author?: string;
  content: string;
}

export async function getAllWritingPosts(): Promise<WritingPost[]> {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const posts: WritingPost[] = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(mdx|md)$/, "");
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled",
        description: data.description || "",
        publishedAt: data.publishedAt || "2026-01-01",
        readingTime: data.readingTime || calculateReadingTime(content),
        tags: data.tags || [],
        author: data.author || "Rujul Talekar",
        content
      };
    })
    .sort((a, b) => (new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()));

  return posts;
}

export async function getWritingPostBySlug(slug: string): Promise<WritingPost | null> {
  const mdxPath = path.join(contentDirectory, `${slug}.mdx`);
  const mdPath = path.join(contentDirectory, `${slug}.md`);

  let targetPath = "";
  if (fs.existsSync(mdxPath)) {
    targetPath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    targetPath = mdPath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(targetPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "Untitled",
    description: data.description || "",
    publishedAt: data.publishedAt || "2026-01-01",
    readingTime: data.readingTime || calculateReadingTime(content),
    tags: data.tags || [],
    author: data.author || "Rujul Talekar",
    content
  };
}
