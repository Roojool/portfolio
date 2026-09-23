import * as React from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { ArrowRight, PenTool } from "lucide-react";
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/ui/panel";
import type { WritingPost } from "@/lib/mdx";

export function WritingPanel({ posts }: { posts: WritingPost[] }) {
  return (
    <Panel id="writing">
      <PanelHeader>
        <PanelTitle>
          <a href="#writing">Writing</a>
          <PanelTitleSup>({posts.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="divide-y divide-line">
        {posts.map((post) => {
          let dateStr = post.publishedAt;
          try {
            dateStr = format(parseISO(post.publishedAt), "dd.MM.yyyy");
          } catch {}

          return (
            <div key={post.slug} className="p-4 hover:bg-accent-muted transition-colors">
              <div className="flex items-start gap-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded border border-border bg-muted/30 text-muted-foreground mt-0.5">
                  <PenTool className="size-3.5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-medium text-base text-foreground leading-snug">
                      <Link
                        href={`/writing/${post.slug}`}
                        className="hover:underline"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground shrink-0">
                      <time dateTime={post.publishedAt}>{dateStr}</time>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>

                  {post.description && (
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                  )}

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted/60 dark:bg-zinc-900 px-2 py-0.5 font-mono text-[10px] text-muted-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="screen-line-top flex justify-center py-3 border-t border-line">
        <Link
          href="/writing"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground border border-border rounded bg-muted/30 transition-colors"
        >
          <span>All posts</span>
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </Panel>
  );
}
