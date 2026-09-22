import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWritingPostBySlug, getAllWritingPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";

interface ArticleProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllWritingPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getWritingPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found"
    };
  }

  return {
    title: `${post.title} — Rujul Talekar`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author || "Rujul Talekar"]
    }
  };
}

export default async function ArticlePage({ params }: ArticleProps) {
  const { slug } = await params;
  const post = await getWritingPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/writing"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Writing
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4 pb-8 border-b border-zinc-800/80">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="cyan">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 leading-tight font-sans">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {formatDate(post.publishedAt)}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {post.readingTime}
            </span>
            <span>·</span>
            <span>By {post.author}</span>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-sans pt-2">
            {post.description}
          </p>
        </header>

        {/* Article Body Content */}
        <div className="mt-8 prose prose-invert prose-zinc max-w-none text-sm leading-relaxed space-y-6">
          <div className="whitespace-pre-wrap font-sans text-zinc-300 dark:text-zinc-300 light:text-zinc-800 leading-relaxed space-y-4">
            {post.content.split("\n\n").map((block, idx) => {
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={idx}
                    className="text-xl font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 pt-6 pb-1 border-b border-zinc-800/80"
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("```")) {
                const codeContent = block.replace(/```[a-z]*\n?/g, "");
                return (
                  <pre
                    key={idx}
                    className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-cyan-300 overflow-x-auto my-4"
                  >
                    <code>{codeContent}</code>
                  </pre>
                );
              }
              if (block.startsWith("* ") || block.startsWith("- ")) {
                const items = block.split("\n");
                return (
                  <ul key={idx} className="space-y-1.5 pl-4 list-disc text-zinc-400">
                    {items.map((it, i) => (
                      <li key={i}>{it.replace(/^(\*|-)\s+/, "")}</li>
                    ))}
                  </ul>
                );
              }
              if (/^\d+\.\s/.test(block)) {
                const items = block.split("\n");
                return (
                  <ol key={idx} className="space-y-1.5 pl-4 list-decimal text-zinc-400">
                    {items.map((it, i) => (
                      <li key={i}>{it.replace(/^\d+\.\s+/, "")}</li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={idx} className="leading-relaxed">
                  {block}
                </p>
              );
            })}
          </div>
        </div>

        {/* Article Footer */}
        <div className="mt-12 pt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>Author: {post.author}</span>
          <Link href="/writing" className="text-cyan-400 hover:underline">
            ← Return to writing index
          </Link>
        </div>
      </div>
    </article>
  );
}
