import { renderOgImage } from "@/lib/og-helper";

export const runtime = "edge";
export const alt = "Tech Blog - Chaowalit Greepoke";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    title: "Tech Blog",
    subtitle: "Web Development, AI Integration & SEO Insights from Bangkok",
    tags: ["Next.js", "React", "Python", "AI", "SEO", "TypeScript"],
    url: "bookchaowalit.com/en/blog",
  });
}
