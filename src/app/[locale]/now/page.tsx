import { Metadata } from 'next';
import { NowClient } from '@/components/now-client';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Now - What I'm Working On | Chaowalit Greepoke",
    th: "ตอนนี้กำลังทำอะไร | เชาวลิต กรีโภค"
  };

  const seoDescriptions = {
    en: "What I'm focused on right now — current projects, learning goals, fitness routine, and things I'm consuming. A snapshot of my present moment.",
    th: "สิ่งที่ผมกำลังโฟกัสตอนนี้ — โปรเจกต์ปัจจุบัน เป้าหมายการเรียนรู้ ตารางฟิตเนส และสิ่งที่กำลังบริโภค สแนปช็อตของช่วงเวลาปัจจุบันของผม"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Now Page',
      'Current Focus',
      'What I Am Doing',
      'Chaowalit Greepoke',
      'Developer Bangkok',
      'Generalist'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/now`,
      languages: {
        'en': '/en/now',
        'th': '/th/now',
        'x-default': '/en/now'
      }
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale}/now`,
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Now - What I\'m Working On' }],
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

export default async function NowPage({ params }: Props) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: locale === 'th' ? 'ตอนนี้ - กำลังทำอะไร' : 'Now - What I\'m Working On',
    url: `${baseUrl}/${locale}/now`,
    description: locale === 'th'
      ? 'สิ่งที่ผมกำลังโฟกัสตอนนี้ — โปรเจกต์ปัจจุบัน เป้าหมายการเรียนรู้ และสิ่งที่กำลังบริโภค'
      : 'What I am focused on right now — current projects, learning goals, and things I am consuming.',
    inLanguage: locale === 'th' ? 'th' : 'en',
    author: {
      '@type': 'Person',
      name: 'Chaowalit Greepoke',
      url: baseUrl,
      sameAs: [
        'https://github.com/bookchaowalit',
        'https://linkedin.com/in/bookchaowalit',
      ],
    },
    mainEntity: {
      '@type': 'Thing',
      name: locale === 'th' ? 'โฟกัสและกิจกรรมปัจจุบัน' : 'Current Focus & Activities',
      description: locale === 'th'
        ? 'สแนปช็อตของสิ่งที่ผมกำลังทำ เรียนรู้ และบริโภคตอนนี้'
        : 'A snapshot of what I am working on, learning, and consuming right now',
    },
    // NowPage spec (https://nownownow.com/about)
    isBasedOn: {
      '@type': 'CreativeWork',
      name: 'Now Page',
      url: 'https://nownownow.com/about',
    },
  };

  const breadcrumbItems = [
    { name: 'Home', url: baseUrl },
    { name: locale === 'th' ? 'ตอนนี้' : 'Now', url: `${baseUrl}/${locale}/now` },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <BreadcrumbNav items={[
        { name: locale === 'th' ? 'ตอนนี้' : 'Now' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NowClient />
    </div>
  );
}
