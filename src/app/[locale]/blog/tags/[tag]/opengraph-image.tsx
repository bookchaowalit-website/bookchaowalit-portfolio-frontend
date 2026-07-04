import { renderOgImage } from "@/lib/og-helper";
import { getAllBlogPosts } from "@/lib/blog";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ tag: string; locale: string }>;
}) {
  const { tag } = await params;
  const displayTag = tag
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const posts = getAllBlogPosts();
  const tagPosts = posts.filter((p) =>
    p.tags.some((t) => t.toLowerCase().replace(/\s+/g, '-') === tag)
  );
  const relatedTags = tagPosts.length > 0
    ? [...new Set(tagPosts.flatMap((p) => p.tags.filter((t) => t.toLowerCase().replace(/\s+/g, '-') !== tag)))].slice(0, 4)
    : undefined;

  return renderOgImage({
    title: `${displayTag}`,
    subtitle: `Blog posts about ${displayTag} - Chaowalit Greepoke Tech Blog`,
    tags: relatedTags,
    url: `bookchaowalit.com/blog/tags/${tag}`,
  });
}
