import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getWritingPostBySlug, getAllWritingPosts } from "@/lib/mdx";
import { SITE_INFO } from "@/config/site";

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
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author || SITE_INFO.name],
    },
  };
}

export default async function ArticlePage({ params }: ArticleProps) {
  const { slug } = await params;
  const post = await getWritingPostBySlug(slug);

  if (!post) {
    notFound();
  }

  let formattedDate = post.publishedAt;
  try {
    formattedDate = format(parseISO(post.publishedAt), "d MMMM yyyy");
  } catch {}

  return (
    <article className="mx-auto md:max-w-3xl border-x">
      {/* Back Link */}
      <div className="p-4 border-b border-line">
        <Link
          href="/writing"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-3.5" /> Back to Writing
        </Link>
      </div>

      {/* Article Header */}
      <header className="p-4 sm:p-6 border-b border-line space-y-4">
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted/60 dark:bg-zinc-900 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground leading-tight font-sans">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="size-3.5" /> {formattedDate}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5" /> {post.readingTime}
          </span>
          <span>·</span>
          <span>By {post.author}</span>
        </div>

        {post.description && (
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-1">
            {post.description}
          </p>
        )}
      </header>

      {/* Article Body Content */}
      <div className="p-4 sm:p-6 text-sm leading-relaxed space-y-6 font-sans">
        <div className="whitespace-pre-wrap text-foreground/90 leading-relaxed space-y-4">
          {post.content.split("\n\n").map((block, idx) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={idx}
                  className="text-lg sm:text-xl font-medium text-foreground pt-5 pb-1 border-b border-line"
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
                  className="p-4 rounded-md bg-muted/50 border border-border text-xs font-mono text-foreground overflow-x-auto my-3"
                >
                  <code>{codeContent}</code>
                </pre>
              );
            }
            if (block.startsWith("* ") || block.startsWith("- ")) {
              const items = block.split("\n");
              return (
                <ul key={idx} className="space-y-1.5 pl-4 list-disc text-muted-foreground">
                  {items.map((it, i) => (
                    <li key={i}>{it.replace(/^(\*|-)\s+/, "")}</li>
                  ))}
                </ul>
              );
            }
            if (/^\d+\.\s/.test(block)) {
              const items = block.split("\n");
              return (
                <ol key={idx} className="space-y-1.5 pl-4 list-decimal text-muted-foreground">
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
      <div className="p-4 sm:p-6 border-t border-line flex items-center justify-between text-xs font-mono text-muted-foreground">
        <span>Author: {post.author}</span>
        <Link href="/writing" className="link-underline text-foreground">
          ← Return to writing index
        </Link>
      </div>
    </article>
  );
}
