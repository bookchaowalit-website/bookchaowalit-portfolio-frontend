import { renderOgImage } from "@/lib/og-helper";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const content: Record<string, { title: string; subtitle: string; tags: string[]; url: string }> = {
  en: {
    title: "Tech Blog",
    subtitle: "Web Development, AI Integration & SEO Insights from Bangkok",
    tags: ["Next.js", "React", "Python", "AI", "SEO", "TypeScript"],
    url: "bookchaowalit.com/en/blog",
  },
  th: {
    title: "บล็อกเทค",
    subtitle: "การพัฒนาเว็บ, AI Integration และ SEO Insights จากกรุงเทพฯ",
    tags: ["Next.js", "React", "Python", "AI", "SEO", "TypeScript"],
    url: "bookchaowalit.com/th/blog",
  },
};

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[locale] || content.en;
  return renderOgImage(c);
}
