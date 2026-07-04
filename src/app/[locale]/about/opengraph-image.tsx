import { renderOgImage } from "@/lib/og-helper";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const content: Record<string, { title: string; subtitle: string; tags: string[]; url: string }> = {
  en: {
    title: "About Me",
    subtitle: "Generalist & Solopreneur from Bangkok, Thailand — Software Engineering, Data, AI & Digital Growth",
    tags: ["Problem Solver", "End-to-End Builder", "AI Research", "Fitness"],
    url: "bookchaowalit.com/en/about",
  },
  th: {
    title: "เกี่ยวกับผม",
    subtitle: "Generalist & Solopreneur จากกรุงเทพฯ — วิศวกรรมซอฟต์แวร์, ข้อมูล, AI และการเติบโตดิจิทัล",
    tags: ["นักแก้ปัญหา", "สร้างครบวงจร", "วิจัย AI", "ฟิตเนส"],
    url: "bookchaowalit.com/th/about",
  },
};

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[locale] || content.en;
  return renderOgImage(c);
}
