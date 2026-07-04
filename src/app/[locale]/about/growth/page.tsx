import { Metadata } from 'next';
import { PersonalGrowthClient } from '@/components/about/personal-growth-client';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Personal Growth - Chaowalit Greepoke | Mindset & Development",
    th: "การพัฒนาตนเอง - เชาวลิต กรีโภค | กรอบความคิดและการพัฒนา"
  };

  const seoDescriptions = {
    en: "My journey of continuous learning, self-reflection, and personal development that shapes my approach to technology and entrepreneurship.",
    th: "การเดินทางของการเรียนรู้อย่างต่อเนื่อง การไตร่ตรอง และการพัฒนาตนเองที่หล่อหลอมแนวทางของผมต่อเทคโนโลยีและการประกอบการ"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Personal Growth',
      'Self-Reflection',
      'Continuous Learning',
      'Mindset Development',
      'Chaowalit Greepoke'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/about/growth`,
      languages: {
        'en': '/en/about/growth',
        'th': '/th/about/growth',
        'x-default': '/en/about/growth'
      }
    },
    openGraph: {
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      type: 'article',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale}/about/growth`,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Personal Growth' }]
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

export default async function PersonalGrowth({ params }: Props) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com';

  const breadcrumbItems = [
    { name: locale === 'th' ? 'เกี่ยวกับ' : 'About', href: `/${locale}/about` },
    { name: locale === 'th' ? 'พัฒนาตนเอง' : 'Growth' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: locale === 'th' ? 'การพัฒนาตนเอง' : 'Personal Growth',
    url: `${baseUrl}/${locale}/about/growth`,
    description: locale === 'th'
      ? 'การเดินทางของการเรียนรู้อย่างต่อเนื่องและการพัฒนาตนเองที่หล่อหลอมแนวทางต่อเทคโนโลยีและการประกอบการ'
      : 'Continuous learning, self-reflection, and personal development shaping my approach to technology and entrepreneurship.',
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
      <BreadcrumbJsonLd items={breadcrumbItems.map(item => ({ name: item.name, url: item.href ? `${baseUrl}${item.href}` : `${baseUrl}/${locale}/about/growth` }))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PersonalGrowthClient />
    </>
  );
}
