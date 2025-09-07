import type { Metadata } from "next";
import { Geist, Geist_Mono, Kalam, Caveat, Amatic_SC } from "next/font/google";
import "../globals.css";
import { Navigation } from "@/components/navigation";
import { PageTransition } from "@/components/page-transition";
import { FloatingDoodles } from "@/components/ui/floating-doodles";
import { Footer } from "@/components/footer";
import { Analytics } from '@vercel/analytics/react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { GoogleAnalytics } from '@/components/google-analytics';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const amaticSC = Amatic_SC({
  variable: "--font-amatic",
  subsets: ["latin"],
  weight: ["400", "700"],
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
      "https://linkedin.com/in/bookchaowalit"
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
        className={`${geistSans.variable} ${geistMono.variable} ${kalam.variable} ${caveat.variable} ${amaticSC.variable} antialiased`}
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
          <Analytics />
          {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
          )}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}