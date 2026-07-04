import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };

const content: Record<string, { title: string; subtitle: string }> = {
  en: { title: 'Personal Growth', subtitle: 'Continuous learning · Self-reflection · Sustainable development' },
  th: { title: 'การเติบโตส่วนบุคคล', subtitle: 'การเรียนรู้ต่อเนื่อง · การทบทวนตัวเอง · การพัฒนาอย่างยั่งยืน' },
};

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[locale] || content.en;
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          color: '#e5e5e5',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #f59e0b, #ef4444, #ec4899)' }} />

        <div style={{ fontSize: 28, color: '#888', marginTop: 16, zIndex: 1 }}>🌱</div>
        <div style={{ fontSize: 56, fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', textAlign: 'center', lineHeight: 1.1, zIndex: 1, marginTop: 16 }}>
          {c.title}
        </div>
        <div style={{ fontSize: 22, color: '#888', marginTop: 16, zIndex: 1, textAlign: 'center', maxWidth: 600 }}>
          {c.subtitle}
        </div>

        <div style={{ position: 'absolute', bottom: 28, display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: '#555' }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 800, fontSize: 14 }}>C</div>
          <span>bookchaowalit.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
