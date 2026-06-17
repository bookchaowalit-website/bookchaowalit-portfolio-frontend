import { renderOgImage } from "@/lib/og-helper";

export const runtime = "edge";
export const alt = "Technical Skills - Chaowalit Greepoke";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    title: "Technical Skills",
    subtitle: "Computer Languages, Frameworks & Tools — Full-Stack Development, AI/ML, Cloud & Data",
    tags: ["Python", "TypeScript", "React", "Next.js", "Flutter", "Docker", "AWS", "PostgreSQL"],
    url: "bookchaowalit.com/en/skills",
  });
}
