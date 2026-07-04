import { Metadata } from 'next';
import { FitnessJourneyClient } from '@/components/about/fitness-journey-client';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Fitness Journey - Chaowalit Greepoke | Health & Wellness Mindset",
    th: "การเดินทางเพื่อสุขภาพ - เชาวลิต กรีโภค | แนวคิดสุขภาพและความเป็นอยู่ที่ดี"
  };

  const seoDescriptions = {
    en: "Discover how fitness and wellness principles shape my approach to problem-solving and building sustainable solutions as a Generalist.",
    th: "ค้นพบว่าหลักการของฟิตเนสและความเป็นอยู่ที่ดีส่งผลต่อการแก้ปัญหาและสร้างโซลูชันที่ยั่งยืนในฐานะ Generalist อย่างไร"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Fitness Journey',
      'Health & Wellness',
      'Sustainable Solutions',
      'Problem-Solving',
      'Chaowalit Greepoke'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/about/fitness`,
      languages: {
        'en': '/en/about/fitness',
        'th': '/th/about/fitness',
        'x-default': '/en/about/fitness'
      }
    },
    openGraph: {
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      type: 'article',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale}/about/fitness`,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Fitness Journey' }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      creator: '@bookchaowalit',
      images: ['/og-image.jpg']
    }
  };
}

export default async function FitnessJourney({ params }: Props) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com';

  const breadcrumbItems = [
    { name: locale === 'th' ? 'เกี่ยวกับ' : 'About', href: `/${locale}/about` },
    { name: locale === 'th' ? 'ฟิตเนส' : 'Fitness' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: locale === 'th' ? 'การเดินทางเพื่อสุขภาพ' : 'Fitness Journey',
    url: `${baseUrl}/${locale}/about/fitness`,
    description: locale === 'th'
      ? 'แนวคิดฟิตเนสและความเป็นอยู่ที่ดีที่หล่อหลอมแนวทางในการแก้ปัญหาและการสร้างโซลูชันที่ยั่งยืน'
      : 'How fitness and wellness principles shape my approach to problem-solving and building sustainable solutions.',
    mainEntity: {
      '@type': 'Person',
      name: 'Chaowalit Greepoke',
      url: baseUrl,
    },
  };

  return (
    <>
      <div className="container mx-auto px-4 pt-4">
        <BreadcrumbNav items={breadcrumbItems} />
      </div>
      <BreadcrumbJsonLd items={breadcrumbItems.map(item => ({ name: item.name, url: item.href ? `${baseUrl}${item.href}` : `${baseUrl}/${locale}/about/fitness` }))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FitnessJourneyClient />
    </>
  );
}
