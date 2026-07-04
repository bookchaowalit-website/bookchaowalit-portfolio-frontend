import { renderOgImage } from "@/lib/og-helper";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const content: Record<string, { title: string; subtitle: string; tags: string[]; url: string }> = {
  en: {
    title: "Get in Touch",
    subtitle: "AI & Full-Stack Development Projects — Quick response within 24-48 hours",
    tags: ["Hire Developer", "AI Projects", "Consulting", "Collaboration"],
    url: "bookchaowalit.com/en/contact",
  },
  th: {
    title: "ติดต่อผม",
    subtitle: "โปรเจกต์ AI & Full-Stack — ตอบกลับภายใน 24-48 ชั่วโมง",
    tags: ["จ้างนักพัฒนา", "โปรเจกต์ AI", "ที่ปรึกษา", "ร่วมงานกัน"],
    url: "bookchaowalit.com/th/contact",
  },
};

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[locale] || content.en;
  return renderOgImage(c);
}
