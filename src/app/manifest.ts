import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chaowalit Greepoke - Portfolio & Knowledge Atlas',
    short_name: 'CG Portfolio',
    description: 'Generalist - Full-stack Developer, AI Developer & SEO Specialist from Bangkok. 100+ projects across 45 knowledge domains.',
    start_url: '/en',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    orientation: 'any',
    categories: ['technology', 'education', 'productivity'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    lang: 'en',
    dir: 'ltr',
    scope: '/',
  }
}
