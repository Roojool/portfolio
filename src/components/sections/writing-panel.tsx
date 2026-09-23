import * as React from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { ArrowRight, FileText } from "lucide-react";
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/ui/panel";
import { IconTile } from "@/components/ui/icon-tile";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
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
            <div
              key={post.slug}
              className="p-4 hover:bg-accent-muted transition-[background-color] ease-out"
            >
              <div className="flex items-start gap-3">
                <IconTile className="mt-0.5">
                  <FileText className="size-4" />
                </IconTile>

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
                      <span className="text-muted-foreground/50">·</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>

                  {post.description && (
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                  )}

                  {post.tags && post.tags.length > 0 && (
                    <ul className="flex flex-wrap gap-1.5 mt-2.5">
                      {post.tags.map((tag) => (
                        <li key={tag} className="flex">
                          <Tag>{tag}</Tag>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="screen-line-top flex justify-center py-4">
        <Button
          className="gap-2 pr-2.5 pl-3 shadow-[inset_0_0_1px] shadow-foreground/20"
          variant="secondary"
          size="sm"
          nativeButton={false}
          render={
            <Link href="/writing">
              All posts
              <ArrowRight className="size-4" />
            </Link>
          }
        />
      </div>
    </Panel>
  );
}
