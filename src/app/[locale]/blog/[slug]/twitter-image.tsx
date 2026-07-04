import { renderOgImage } from "@/lib/og-helper";
import { getBlogPost } from "@/lib/blog";

export const runtime = "nodejs";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  return renderOgImage({
    title: post?.title || "Blog Post",
    subtitle: post?.excerpt || "Chaowalit Greepoke - Tech Blog",
    tags: post?.tags?.slice(0, 5),
    url: `bookchaowalit.com/blog/${slug}`,
  });
}
