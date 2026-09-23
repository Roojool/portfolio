import { NextResponse } from "next/server";
import { Feed } from "feed";
import { getAllWritingPosts } from "@/lib/mdx";
import { SITE_INFO, SITE_URL } from "@/config/site";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = SITE_URL;
  const posts = await getAllWritingPosts();

  const feed = new Feed({
    title: `${SITE_INFO.name} — Research Notes & Systems Writing`,
    description: SITE_INFO.headline,
    id: baseUrl,
    link: baseUrl,
    language: "en",
    image: `${baseUrl}/icon.svg`,
    favicon: `${baseUrl}/favicon.svg`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${SITE_INFO.name}`,
    author: {
      name: SITE_INFO.name,
      link: SITE_INFO.githubUrl,
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${baseUrl}/writing/${post.slug}`,
      link: `${baseUrl}/writing/${post.slug}`,
      description: post.description,
      content: post.content,
      author: [
        {
          name: post.author || SITE_INFO.name,
          link: SITE_INFO.githubUrl,
        },
      ],
      date: new Date(post.publishedAt),
    });
  });

  return new NextResponse(feed.rss2(), {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
