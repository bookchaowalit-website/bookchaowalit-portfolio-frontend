import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export function renderOgImage({
  title,
  subtitle,
  tags,
  url,
}: {
  title: string;
  subtitle: string;
  tags?: string[];
  url: string;
}) {
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
          backgroundColor: "#0a0a0a",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            maxWidth: "1000px",
          }}
        >
          <div
            style={{
              fontSize: "60px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 400,
              color: "#888",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </div>
          {tags && tags.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "12px",
                justifyContent: "center",
              }}
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "14px",
                    padding: "5px 14px",
                    border: "1px solid #333",
                    color: "#aaa",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div
            style={{
              fontSize: "16px",
              color: "#555",
              marginTop: "20px",
            }}
          >
            {url}
          </div>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
