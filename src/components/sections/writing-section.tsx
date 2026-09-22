import React from "react";
import Link from "next/link";
import { WritingPost } from "@/lib/mdx";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, ArrowRight, Rss } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface WritingSectionProps {
  posts: WritingPost[];
}

export function WritingSection({ posts }: WritingSectionProps) {
  return (
    <section id="writing" className="py-16 border-b border-zinc-800/80 bg-zinc-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400">
            <span>// 13</span>
            <span>·</span>
            <span>Technical Notes & Essays</span>
          </div>
          <Link
            href="/feed.xml"
            className="font-mono text-xs text-zinc-500 hover:text-cyan-400 flex items-center gap-1 transition-colors"
          >
            <Rss className="w-3 h-3 text-amber-500" />
            <span>RSS Feed</span>
          </Link>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-4 font-sans">
          Writing & Research Notes
        </h2>
        <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-2xl mb-8 leading-relaxed">
          Technical essays, methodological reflections, and systems instrumentation notes authored from active research investigations.
        </p>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="block group no-underline"
            >
              <Card
                variant="default"
                className="p-5 border-zinc-800 group-hover:border-zinc-700/80 transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {formatDate(post.publishedAt)}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readingTime}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="subtle">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 group-hover:text-cyan-400 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </div>

                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed line-clamp-2">
                  {post.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
