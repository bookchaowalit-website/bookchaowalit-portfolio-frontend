import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };

const content: Record<string, { title: string; subtitle: string; metrics: { label: string; value: string }[] }> = {
  en: {
    title: 'Trading Journey',
    subtitle: 'AI-powered grid trading · Technical analysis · Risk management',
    metrics: [
      { label: 'Markets', value: 'Crypto' },
      { label: 'Strategy', value: 'Grid + AI' },
      { label: 'Exchange', value: 'Binance TH' },
    ],
  },
  th: {
    title: 'เส้นทางเทรดดิ้ง',
    subtitle: 'กริดเทรดดิ้งด้วย AI · วิเคราะห์เทคนิค · การจัดการความเสี่ยง',
    metrics: [
      { label: 'ตลาด', value: 'คริปโต' },
      { label: 'กลยุทธ์', value: 'กริด + AI' },
      { label: 'กระดาน', value: 'Binance TH' },
    ],
  },
};

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = content[locale] || content.en;
  const METRICS = c.metrics;
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
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #10b981, #06b6d4, #3b82f6)' }} />

        <div style={{ fontSize: 56, fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', textAlign: 'center', lineHeight: 1.1, zIndex: 1 }}>
          {c.title}
        </div>
        <div style={{ fontSize: 22, color: '#888', marginTop: 16, zIndex: 1 }}>
          {c.subtitle}
        </div>

        <div style={{ display: 'flex', gap: 24, marginTop: 40, zIndex: 1 }}>
          {METRICS.map((m) => (
            <div key={m.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 28px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 10 }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#10b981' }}>{m.value}</div>
              <div style={{ fontSize: 13, color: '#666', marginTop: 4 }}>{m.label}</div>
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
