import { ImageResponse } from 'next/og';
import { allProjects } from '@/data/app-projects';

export const runtime = 'edge';
export const size = { width: 1200, height: 600 };

export default async function Image({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  const name = project?.name || 'Project';
  const description = project?.description || 'Portfolio Project';
  const tech = project?.tech || [];
  const category = project?.category || 'project';

  const categoryColors: Record<string, string> = {
    'tools': '#3b82f6',
    'productivity': '#10b981',
    'content': '#f59e0b',
    'creative': '#ec4899',
    'business': '#8b5cf6',
    'social': '#06b6d4',
    'ai-data': '#ef4444',
    'misc': '#6b7280',
    'client-work': '#14b8a6',
    'mobile': '#f97316',
  };
  const accent = categoryColors[category] || '#3b82f6';

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'monospace',
          color: '#e5e5e5',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: accent }} />

        <div style={{ padding: '50px 80px 0', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ fontSize: 13, color: accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
            {category.replace('-', ' ')}
          </div>
          <div style={{ fontSize: 48, fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 16 }}>
            {name}
          </div>
          <div style={{ fontSize: 18, color: '#999', lineHeight: 1.5, maxWidth: 800, marginBottom: 24 }}>
            {description.length > 120 ? description.slice(0, 120) + '…' : description}
          </div>

          {tech.length > 0 && (
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 'auto', marginBottom: 16 }}>
              {tech.slice(0, 5).map((t: string) => (
                <div key={t} style={{
                  fontSize: 13,
                  padding: '6px 14px',
                  borderRadius: 6,
                  border: `1px solid ${accent}40`,
                  color: accent,
                  background: `${accent}10`,
                }}>
                  {t}
                </div>
              ))}
              {tech.length > 5 && (
                <div style={{ fontSize: 13, padding: '6px 14px', color: '#666' }}>
                  +{tech.length - 5} more
                </div>
              )}
            </div>
          )}
        </div>

        <div style={{ position: 'absolute', bottom: 24, left: 80, display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: '#555' }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 800, fontSize: 13 }}>C</div>
          <span>bookchaowalit.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
