import { ImageResponse } from "next/og";
import { allProjects, categoryMeta, type ProjectCategory } from "@/data/app-projects";

export const runtime = "edge";
export const alt = "Projects Gallery - 100 Micro-Frontends";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const categories = Object.keys(categoryMeta) as ProjectCategory[];
  const catCounts = categories.map((c) => ({
    label: categoryMeta[c].label,
    count: allProjects.filter((p) => p.category === c).length,
  }));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            100 Micro-Frontends
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#888",
            }}
          >
            Projects Gallery · Chaowalit Greepoke
          </div>
        </div>

        {/* Category grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            flex: 1,
            alignContent: "flex-start",
          }}
        >
          {catCounts.map((cat) => (
            <div
              key={cat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                width: "200px",
                padding: "16px",
                border: "1px solid #222",
              }}
            >
              <div style={{ fontSize: "18px", fontWeight: 600 }}>
                {cat.label}
              </div>
              <div style={{ fontSize: "14px", color: "#666" }}>
                {cat.count} projects
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "24px",
            fontSize: "14px",
            color: "#555",
          }}
        >
          <span>Next.js · TypeScript · Vercel</span>
          <span>bookchaowalit.com/en/projects</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
