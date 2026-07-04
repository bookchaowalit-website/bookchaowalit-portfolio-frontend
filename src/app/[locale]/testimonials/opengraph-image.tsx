import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const content: Record<string, { title: string; subtitle: string }> = {
  en: {
    title: "Testimonials",
    subtitle: "What clients and partners say about working with me",
  },
  th: {
    title: "เสียงตอบรับ",
    subtitle: "ลูกค้าและพันธมิตรพูดถึงการทำงานร่วมกันอย่างไร",
  },
};

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[locale] || content.en;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0a0a0a',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Dot grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, #10b981, #14b8a6, #06b6d4)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '60px 80px',
            flex: 1,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{ fontSize: 72, marginBottom: 16 }}>💬</div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: '#fafafa',
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            {c.title}
          </div>
          <div
            style={{
              fontSize: 22,
              color: '#a1a1aa',
              maxWidth: 700,
              lineHeight: 1.4,
            }}
          >
            {c.subtitle}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '24px 80px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #c084fc)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            C
          </div>
          <div style={{ fontSize: 16, color: '#71717a' }}>bookchaowalit.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
