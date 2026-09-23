import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllWritingPosts } from "@/lib/mdx";
import { WritingPanel } from "@/components/sections/writing-panel";

export const metadata: Metadata = {
  title: "Writing & Field Notes",
  description:
    "Technical essays, research methodology notes, and systems instrumentation articles authored by Rujul Talekar.",
};

export default async function WritingPage() {
  const posts = await getAllWritingPosts();

  return (
    <div className="mx-auto md:max-w-3xl border-x">
      <div className="p-4 border-b border-line">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-3.5" /> Back to Home
        </Link>
      </div>

      <WritingPanel posts={posts} />
    </div>
  );
}
