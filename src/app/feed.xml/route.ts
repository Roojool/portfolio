import { NextResponse } from "next/server";
import { Feed } from "feed";
import { getAllWritingPosts } from "@/lib/mdx";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/links";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://roojool.github.io/portfolio";
  const posts = await getAllWritingPosts();

  const feed = new Feed({
    title: `${profile.name} — Research Notes & Systems Writing`,
    description: profile.headline,
    id: baseUrl,
    link: baseUrl,
    language: "en",
    image: `${baseUrl}/icon.svg`,
    favicon: `${baseUrl}/favicon.svg`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${profile.name}`,
    author: {
      name: profile.name,
      link: socialLinks.github.url
    }
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
          name: post.author || profile.name,
          link: socialLinks.github.url
        }
      ],
      date: new Date(post.publishedAt)
    });
  });

  return new NextResponse(feed.rss2(), {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  });
}
