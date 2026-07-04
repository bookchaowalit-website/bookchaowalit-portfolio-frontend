import { Metadata } from 'next';
import { LiveSystemsClient } from '@/components/live-systems-client';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Live Systems - Automation Ecosystem | Chaowalit Greepoke",
    th: "ระบบอัตโนมัติ - ระบบนิเวศอัตโนมัติ | เชาวลิต กรีโภค"
  };

  const seoDescriptions = {
    en: "A self-maintaining data pipeline scraping 11 sources daily, tracking opportunities, and delivering actionable intelligence via Telegram and Todoist.",
    th: "ระบบข้อมูลอัตโนมัติที่ scrape 11 แหล่งทุกวัน ติดตามโอกาส และส่งข้อมูลเชิงปฏิบัติผ่าน Telegram และ Todoist"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Automation',
      'Web Scraping',
      'Data Pipeline',
      'Cron Jobs',
      'Python',
      'Firecrawl',
      'Chaowalit Greepoke',
      'Solo Empire'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/live-systems`,
      languages: {
        'en': '/en/live-systems',
        'th': '/th/live-systems',
        'x-default': '/en/live-systems'
      }
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale}/live-systems`,
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Live Systems - Automation Ecosystem' }],
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

export default async function LiveSystemsPage({ params }: Props) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: locale === 'th' ? 'ระบบอัตโนมัติ - ระบบนิเวศอัตโนมัติ' : 'Live Systems - Automation Ecosystem',
    url: `${baseUrl}/${locale}/live-systems`,
    description: locale === 'th'
      ? 'ระบบข้อมูลอัตโนมัติที่ scrape 11 แหล่งทุกวัน ติดตามโอกาส และส่งข้อมูลเชิงปฏิบัติ'
      : 'A self-maintaining data pipeline scraping 11 sources daily, tracking opportunities, and delivering actionable intelligence.',
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
      '@type': 'SoftwareApplication',
      name: 'Solo Empire Automation Ecosystem',
      applicationCategory: 'DataPipeline',
      operatingSystem: 'Linux VPS',
      description: locale === 'th'
        ? 'ระบบ scrape ข้อมูลอัตโนมัติ 11 แหล่ง พร้อม Firecrawl fallback, cron scheduling, Telegram digest'
        : 'Automated data scraping system with 11 sources, Firecrawl fallback, cron scheduling, and Telegram digest delivery',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
  };

  const breadcrumbItems = [
    { name: 'Home', url: baseUrl },
    { name: locale === 'th' ? 'ระบบอัตโนมัติ' : 'Live Systems', url: `${baseUrl}/${locale}/live-systems` },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <BreadcrumbNav items={[
        { name: locale === 'th' ? 'ระบบอัตโนมัติ' : 'Live Systems' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LiveSystemsClient />
    </div>
  );
}
