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
    en: "Current Focus | Chaowalit Greepoke",
    th: "สิ่งที่กำลังโฟกัส | เชาวลิต กรีโภค"
  };

  const seoDescriptions = {
    en: "A curated view of the themes shaping my public work. It shows broad direction and selected proof, not private goals, deadlines, or live metrics.",
    th: "ภาพรวมแบบคัดสรรของทิศทางงานที่เผยแพร่ต่อสาธารณะ แสดงแนวทางกว้าง ๆ และผลงานอ้างอิง โดยไม่เปิดเผยเป้าหมายส่วนตัว กำหนดเวลา หรือข้อมูลแบบเรียลไทม์"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Current Focus',
      'Public Work',
      'Selected Work',
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
      images: [{ url: `/${locale}/now/opengraph-image`, width: 1200, height: 630, alt: 'Current Focus' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      creator: '@bookchaowalit',
      images: [`/${locale}/now/opengraph-image`],
    }
  };
}

export default async function NowPage({ params }: Props) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: locale === 'th' ? 'สิ่งที่กำลังโฟกัส' : 'Current Focus',
    url: `${baseUrl}/${locale}/now`,
    description: locale === 'th'
      ? 'ภาพรวมแบบคัดสรรของทิศทางงานที่เผยแพร่ต่อสาธารณะและผลงานอ้างอิง'
      : 'A curated view of public focus areas and selected proof of work.',
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
      name: locale === 'th' ? 'ทิศทางงานที่เผยแพร่ต่อสาธารณะ' : 'Public Focus Areas',
      description: locale === 'th'
        ? 'ทิศทางกว้าง ๆ และผลงานอ้างอิงที่คัดสรร โดยไม่เปิดเผยข้อมูลการดำเนินงานภายใน'
        : 'Broad directions and selected proof without exposing private operating detail',
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
    <div className="container mx-auto max-w-6xl px-4 py-8">
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
