import type { Metadata } from "next";
import { getAllWritingPosts } from "@/lib/mdx";
import { WritingSection } from "@/components/sections/writing-section";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing & Research Notes — Rujul Talekar",
  description:
    "Technical essays, research methodology notes, and systems instrumentation articles authored by Rujul Talekar."
};

export default async function WritingPage() {
  const posts = await getAllWritingPosts();

  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
        </div>

        <WritingSection posts={posts} />
      </div>
    </div>
  );
}
