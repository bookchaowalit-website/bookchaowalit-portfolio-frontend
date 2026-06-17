import { renderOgImage } from "@/lib/og-helper";

export const runtime = "edge";
export const alt = "About - Chaowalit Greepoke";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    title: "About Me",
    subtitle: "Tech Generalist & Solopreneur from Bangkok, Thailand — Software Engineering, Data, AI & Digital Growth",
    tags: ["Problem Solver", "End-to-End Builder", "AI Research", "Fitness"],
    url: "bookchaowalit.com/en/about",
  });
}
