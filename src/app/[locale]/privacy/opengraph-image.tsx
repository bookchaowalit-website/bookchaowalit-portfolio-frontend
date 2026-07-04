import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };

const content: Record<string, { title: string; subtitle: string }> = {
  en: { title: 'Privacy Policy', subtitle: 'Data protection · User rights · Transparency' },
  th: { title: 'นโยบายความเป็นส่วนตัว', subtitle: 'การปกป้องข้อมูล · สิทธิผู้ใช้ · ความโปร่งใส' },
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
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #6b7280, #9ca3af)' }} />

        <div style={{ fontSize: 48, zIndex: 1, marginBottom: 16 }}>🔒</div>
        <div style={{ fontSize: 52, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', textAlign: 'center', lineHeight: 1.1, zIndex: 1 }}>
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
