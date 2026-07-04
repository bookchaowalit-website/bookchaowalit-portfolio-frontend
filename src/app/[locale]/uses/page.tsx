import { Metadata } from 'next';
import { UsesClient } from '@/components/uses-client';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "My Setup - Tools & Workflow | Chaowalit Greepoke",
    th: "อุปกรณ์และเวิร์กโฟลว์ | เชาวลิต กรีโภค"
  };

  const seoDescriptions = {
    en: "The hardware, software, AI tools, and development workflow I use daily as a Generalist and Solopreneur from Bangkok. From VS Code to MCP Protocol.",
    th: "ฮาร์ดแวร์ ซอฟต์แวร์ เครื่องมือ AI และเวิร์กโฟลว์การพัฒนาที่ฉันใช้ทุกวันในฐานะ Generalist และ Solopreneur จากกรุงเทพฯ"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Developer Setup',
      'Tech Tools',
      'Development Workflow',
      'AI Tools',
      'MCP Protocol',
      'VS Code Setup',
      'MacBook Pro Development',
      'Chaowalit Greepoke Uses'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/uses`,
      languages: {
        'en': '/en/uses',
        'th': '/th/uses',
        'x-default': '/en/uses'
      }
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale}/uses`,
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{
        url: `/${locale}/uses/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'My Setup - Tools & Workflow | Chaowalit Greepoke'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      creator: '@bookchaowalit',
      images: [`/${locale}/uses/opengraph-image`]
    }
  };
}

export default async function Uses({ params }: Props) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'My Setup - Chaowalit Greepoke',
    url: `${baseUrl}/${locale}/uses`,
    description: 'The tools, hardware, software, and workflows I use daily as a Generalist and Solopreneur.',
    author: {
      '@type': 'Person',
      name: 'Chaowalit Greepoke',
      url: baseUrl
    },
    mainEntity: {
      '@type': 'Thing',
      name: 'Developer Setup & Tools',
      description: 'Hardware, software, AI tools, and development workflow'
    }
  };

  const breadcrumbItems = [
    { name: 'Home', url: baseUrl },
    { name: locale === 'th' ? 'อุปกรณ์' : 'Uses', url: `${baseUrl}/${locale}/uses` },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <BreadcrumbNav items={[
        { name: locale === 'th' ? 'อุปกรณ์' : 'Uses' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UsesClient />
    </div>
  );
}
