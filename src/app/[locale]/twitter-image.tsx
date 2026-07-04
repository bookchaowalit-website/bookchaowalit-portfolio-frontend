import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Chaowalit Greepoke - Generalist & Solopreneur';
export const size = { width: 1200, height: 600 };

export default async function Image() {
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
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)' }} />

        <div style={{ fontSize: 68, fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', textAlign: 'center', lineHeight: 1.1, zIndex: 1 }}>
          Chaowalit Greepoke
        </div>
        <div style={{ fontSize: 24, color: '#888', marginTop: 16, zIndex: 1, textAlign: 'center' }}>
          Generalist & Solopreneur
        </div>

        <div style={{ display: 'flex', gap: 16, marginTop: 32, zIndex: 1 }}>
          {['Software Engineering', 'AI Integration', 'Digital Growth'].map((skill) => (
            <div key={skill} style={{
              fontSize: 13,
              padding: '8px 16px',
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#aaa',
              background: 'rgba(255,255,255,0.03)',
            }}>
              {skill}
            </div>
          ))}
        </div>

        <div style={{ fontSize: 16, color: '#666', marginTop: 24, zIndex: 1, textAlign: 'center' }}>
          Bangkok, Thailand
        </div>

        <div style={{ position: 'absolute', bottom: 24, display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: '#555' }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 800, fontSize: 13 }}>C</div>
          <span>bookchaowalit.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
