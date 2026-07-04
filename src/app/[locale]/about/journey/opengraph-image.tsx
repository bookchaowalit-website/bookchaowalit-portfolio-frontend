import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };

const content: Record<string, { title: string; subtitle: string; milestones: { year: string; label: string }[] }> = {
  en: {
    title: 'Tech Journey',
    subtitle: 'From electronics to AI — a decade of evolution',
    milestones: [
      { year: '2015', label: 'Electronics' },
      { year: '2018', label: 'Programming' },
      { year: '2021', label: 'Full-Stack' },
      { year: '2024', label: 'AI / ML' },
    ],
  },
  th: {
    title: 'เส้นทางเทคโนโลยี',
    subtitle: 'จากอิเล็กทรอนิกส์สู่ AI — วิวัฒนาการหนึ่งทศวรรษ',
    milestones: [
      { year: '2015', label: 'อิเล็กทรอนิกส์' },
      { year: '2018', label: 'โปรแกรมมิ่ง' },
      { year: '2021', label: 'ฟูลสแต็ก' },
      { year: '2024', label: 'AI / ML' },
    ],
  },
};

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[locale] || content.en;
  const MILESTONES = c.milestones;
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
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)' }} />

        <div style={{ fontSize: 56, fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', textAlign: 'center', lineHeight: 1.1, zIndex: 1 }}>
          {c.title}
        </div>
        <div style={{ fontSize: 22, color: '#888', marginTop: 16, zIndex: 1 }}>
          {c.subtitle}
        </div>

        <div style={{ display: 'flex', gap: 20, marginTop: 40, zIndex: 1 }}>
          {MILESTONES.map((m, i) => (
            <div key={m.year} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '14px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: 10 }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: '#06b6d4' }}>{m.year}</div>
                <div style={{ fontSize: 13, color: '#aaa', marginTop: 4 }}>{m.label}</div>
              </div>
              {i < MILESTONES.length - 1 && <div style={{ fontSize: 20, color: '#333' }}>→</div>}
            </div>
          ))}
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
