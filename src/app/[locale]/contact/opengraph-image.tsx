import { renderOgImage } from "@/lib/og-helper";

export const runtime = "edge";
export const alt = "Contact - Chaowalit Greepoke";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    title: "Get in Touch",
    subtitle: "AI & Full-Stack Development Projects — Quick response within 24-48 hours",
    tags: ["Hire Developer", "AI Projects", "Consulting", "Collaboration"],
    url: "bookchaowalit.com/en/contact",
  });
}
