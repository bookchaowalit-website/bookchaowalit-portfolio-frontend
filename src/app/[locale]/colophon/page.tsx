import { Metadata } from 'next';
import { ColophonClient } from '@/components/colophon-client';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Colophon - Tech Stack & Tools | Chaowalit Greepoke",
    th: "โคลฟอน - สแต็กเทคโนโลยีและเครื่องมือ | เชาวลิต กรีโภค"
  };

  const seoDescriptions = {
    en: "The tech stack, tools, and architecture decisions behind this portfolio. Built with Next.js, React, TypeScript, Tailwind CSS, and deployed on Vercel.",
    th: "สแต็กเทคโนโลยี เครื่องมือ และการตัดสินใจทางสถาปัตยกรรมเบื้องหลังพอร์ตโฟลิโอนี้ สร้างด้วย Next.js, React, TypeScript, Tailwind CSS และ deploy บน Vercel"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Colophon',
      'Tech Stack',
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vercel',
      'Chaowalit Greepoke'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/colophon`,
      languages: {
        'en': '/en/colophon',
        'th': '/th/colophon',
        'x-default': '/en/colophon'
      }
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale}/colophon`,
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Colophon - Tech Stack & Tools' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      creator: '@bookchaowalit',
      images: ['/og-image.jpg'],
    }
  };
}

export default async function ColophonPage({ params }: Props) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Colophon - Chaowalit Greepoke',
    url: `${baseUrl}/${locale}/colophon`,
    description: 'The tech stack and architecture decisions behind this portfolio website.',
    author: {
      '@type': 'Person',
      name: 'Chaowalit Greepoke',
      url: baseUrl
    },
    mainEntity: {
      '@type': 'Thing',
      name: 'Tech Stack & Architecture',
      description: 'Technologies, tools, and design decisions used to build this portfolio'
    }
  };

  const breadcrumbItems = [
    { name: 'Home', url: baseUrl },
    { name: locale === 'th' ? 'โคลฟอน' : 'Colophon', url: `${baseUrl}/${locale}/colophon` },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <BreadcrumbNav items={[
        { name: locale === 'th' ? 'โคลฟอน' : 'Colophon' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ColophonClient />
    </div>
  );
}
