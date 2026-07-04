import { Metadata } from 'next';
import { TechJourneyClient } from '@/components/about/tech-journey-client';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Tech Journey - Chaowalit Greepoke | From Electronics to AI",
    th: "การเดินทางด้านเทคโนโลยี - เชาวลิต กรีโภค | จากอิเล็กทรอนิกส์สู่ AI"
  };

  const seoDescriptions = {
    en: "My technical evolution from electronics background to becoming a Generalist specializing in AI, full-stack development, and digital solutions.",
    th: "วิวัฒนาการทางเทคนิคของผมจากพื้นฐานอิเล็กทรอนิกส์สู่การเป็น Generalist ที่เชี่ยวชาญด้าน AI, การพัฒนา full-stack และโซลูชันดิจิทัล"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Tech Journey',
      'Electronics to AI',
      'Full-Stack Development',
      'Generalist Developer',
      'Chaowalit Greepoke'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/about/journey`,
      languages: {
        'en': '/en/about/journey',
        'th': '/th/about/journey',
        'x-default': '/en/about/journey'
      }
    },
    openGraph: {
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      type: 'article',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale}/about/journey`,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Tech Journey' }]
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

export default async function TechJourney({ params }: Props) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com';

  const breadcrumbItems = [
    { name: locale === 'th' ? 'เกี่ยวกับ' : 'About', href: `/${locale}/about` },
    { name: locale === 'th' ? 'การเดินทาง' : 'Journey' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: locale === 'th' ? 'การเดินทางด้านเทคโนโลยี' : 'Tech Journey',
    url: `${baseUrl}/${locale}/about/journey`,
    description: locale === 'th'
      ? 'วิวัฒนาการทางเทคนิคจากพื้นฐานอิเล็กทรอนิกส์สู่การเป็น Generalist ที่เชี่ยวชาญด้าน AI และการพัฒนา full-stack'
      : 'Technical evolution from electronics background to becoming a Generalist specializing in AI and full-stack development.',
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
      <BreadcrumbJsonLd items={breadcrumbItems.map(item => ({ name: item.name, url: item.href ? `${baseUrl}${item.href}` : `${baseUrl}/${locale}/about/journey` }))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TechJourneyClient />
    </>
  );
}
