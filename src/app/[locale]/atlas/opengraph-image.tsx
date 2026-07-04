import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Interactive Knowledge Atlas - Chaowalit Greepoke';
export const size = { width: 1200, height: 630 };

const CATEGORY_COLORS: Record<string, string> = {
  Technology: '#3b82f6',
  Business: '#10b981',
  Creative: '#f59e0b',
  'Life Sciences': '#ef4444',
  'Social Sciences': '#8b5cf6',
  Engineering: '#6b7280',
  Mathematics: '#06b6d4',
  Humanities: '#ec4899',
};

const TOP_DOMAINS = [
  { name: 'Software Dev', cat: 'Technology' },
  { name: 'AI & ML', cat: 'Technology' },
  { name: 'Medicine', cat: 'Life Sciences' },
  { name: 'Finance', cat: 'Business' },
  { name: 'Design', cat: 'Creative' },
  { name: 'Psychology', cat: 'Social Sciences' },
  { name: 'Agriculture', cat: 'Life Sciences' },
  { name: 'Marketing', cat: 'Business' },
];

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
        {/* Background dot grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        {/* Category color bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            display: 'flex',
          }}
        >
          {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
            <div key={cat} style={{ flex: 1, background: color }} />
          ))}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 900,
            letterSpacing: '-0.04em',
            color: '#fff',
            textAlign: 'center',
            lineHeight: 1.1,
            zIndex: 1,
          }}
        >
          Interactive Knowledge Atlas
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 22,
            color: '#888',
            marginTop: 16,
            zIndex: 1,
          }}
        >
          45 domains · 8 categories · cross-domain connections
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: 32,
            marginTop: 32,
            zIndex: 1,
          }}
        >
          {[
            { label: 'Domains', value: '45' },
            { label: 'Categories', value: '8' },
            { label: 'Connections', value: '30+' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '12px 24px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8,
              }}
            >
              <div style={{ fontSize: 32, fontWeight: 700, color: '#fff' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 13, color: '#666', marginTop: 4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Top domains */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            marginTop: 28,
            justifyContent: 'center',
            maxWidth: 800,
            zIndex: 1,
          }}
        >
          {TOP_DOMAINS.map((d) => (
            <div
              key={d.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 14px',
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${CATEGORY_COLORS[d.cat]}33`,
                borderRadius: 20,
                fontSize: 14,
                color: '#ccc',
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: CATEGORY_COLORS[d.cat],
                }}
              />
              {d.name}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 28,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 15,
            color: '#555',
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              fontWeight: 800,
              fontSize: 14,
            }}
          >
            C
          </div>
          <span>bookchaowalit.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
