import type { Metadata } from "next";
import { Geist, Geist_Mono, Sarabun, Itim } from "next/font/google";
import dynamic from "next/dynamic";
import "../globals.css";
import { Navigation } from "@/components/navigation";
import { PageTransition } from "@/components/page-transition";
import { Analytics } from '@vercel/analytics/react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const FloatingDoodles = dynamic(() => import("@/components/ui/floating-doodles").then(mod => ({ default: mod.FloatingDoodles })), {
  loading: () => null
});

const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
  loading: () => null
});

const GoogleAnalytics = dynamic(() => import("@/components/google-analytics").then(mod => ({ default: mod.GoogleAnalytics })), {
  loading: () => null
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

const itim = Itim({
  variable: "--font-itim",
  subsets: ["latin", "thai"],
  weight: "400",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Chaowalit Greepoke - Portfolio",
  description: "Tech Generalist - Full-stack Developer, AI Developer & SEO Specialist from Bangkok, specializing in Next.js, React, AI integration, and data analytics",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon', type: 'image/png', sizes: '32x32' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' }
    ],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isThai = locale === 'th';
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as 'en' | 'th')) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Chaowalit Greepoke",
    "alternateName": "Book",
    "description": "Tech Generalist and Solopreneur who enjoys solving problems and building things end-to-end",
    "jobTitle": "Tech Generalist & Solopreneur",
    "url": "https://chaowalitgreepoke.com",
    "image": "https://chaowalitgreepoke.com/profile.webp",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangkok",
      "addressCountry": "Thailand"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "BookChaowa Tech Solutions"
    },
    "knowsAbout": [
      "Software Engineering",
      "Data Analytics",
      "Artificial Intelligence",
      "Digital Growth",
      "Web Development",
      "Problem Solving"
    ],
    "sameAs": [
      "https://github.com/bookchaowalit",
      "https://www.linkedin.com/in/chaowalit-greepoke-b687351a0/"
    ]
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sarabun.variable} ${itim.variable} antialiased ${isThai ? 'font-thai' : ''}`}
      >
        <NextIntlClientProvider messages={messages}>
          <FloatingDoodles />
          <Navigation />
          <main className="min-h-screen relative z-10">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
          <Analytics mode="production" />
          {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
          )}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
