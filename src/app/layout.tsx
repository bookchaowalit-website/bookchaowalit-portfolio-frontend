import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Bookchaowalit",
  description: "Portfolio by Bookchaowalit - A modern web application built with Next.js",
  keywords: ['Portfolio', 'Bookchaowalit', 'Next.js', 'React', 'TypeScript'],
  authors: [{ name: 'Bookchaowalit', url: 'https://bookchaowalit.com' }],
  creator: 'Bookchaowalit',
  publisher: 'Bookchaowalit',
  metadataBase: new URL('https://bookchaowalit.com'),
  alternates: {
    canonical: 'https://bookchaowalit.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bookchaowalit.com',
    title: 'Portfolio - Bookchaowalit',
    description: 'Portfolio by Bookchaowalit - A modern web application built with Next.js',
    siteName: 'Portfolio',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Bookchaowalit',
    description: 'Portfolio by Bookchaowalit - A modern web application built with Next.js',
    images: ['/og-image.svg'],
    creator: '@bookchaowalit',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
// SEO TODO: Add Open Graph tags for social sharing
