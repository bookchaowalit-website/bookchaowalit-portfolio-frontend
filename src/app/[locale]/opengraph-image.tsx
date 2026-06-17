import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Chaowalit Greepoke - Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            Chaowalit Greepoke
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 400,
              color: "#888",
              letterSpacing: "-0.01em",
            }}
          >
            Tech Generalist · Full-Stack Developer · AI Developer
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            {["Next.js", "TypeScript", "React", "AI", "SEO"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "16px",
                  padding: "6px 16px",
                  border: "1px solid #333",
                  color: "#aaa",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#666",
              marginTop: "24px",
            }}
          >
            bookchaowalit.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
