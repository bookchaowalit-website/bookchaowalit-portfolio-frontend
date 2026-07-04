import { renderOgImage } from "@/lib/og-helper";
import { getBlogPost } from "@/lib/blog";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const post = getBlogPost(slug);

  return renderOgImage({
    title: post?.title || "Blog Post",
    subtitle: post?.excerpt || "Chaowalit Greepoke - Tech Blog",
    tags: post?.tags?.slice(0, 5),
    url: `bookchaowalit.com/${locale}/blog/${slug}`,
    author: post?.author,
    date: post?.publishedAt ? formatDate(post.publishedAt) : undefined,
  });
}
