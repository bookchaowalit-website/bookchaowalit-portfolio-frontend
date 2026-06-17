import { renderOgImage } from "@/lib/og-helper";

export const runtime = "edge";
export const alt = "Ionomad - Deeptech & Marketing Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    title: "Ionomad",
    subtitle: "Deeptech & Marketing Agency — AI-driven solutions and digital transformation",
    tags: ["AI Solutions", "Digital Transformation", "Marketing", "Tech Consulting"],
    url: "bookchaowalit.com/en/business",
  });
}
