import { Metadata } from 'next';
import { CreativeWorksClient } from '@/components/about/creative-works-client';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Creative Works - Chaowalit Greepoke | Design & Innovation",
    th: "ผลงานสร้างสรรค์ - เชาวลิต กรีโภค | การออกแบบและนวัตกรรม"
  };

  const seoDescriptions = {
    en: "Explore my creative side - from UI/UX design experiments to innovative project concepts that blend technology with artistic expression.",
    th: "สำรวจด้านสร้างสรรค์ของผม - ตั้งแต่การทดลอง UI/UX design ไปจนถึงแนวคิดโครงการนวัตกรรมที่ผสมผสานเทคโนโลยีกับการแสดงออกทางศิลปะ"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Creative Works',
      'UI/UX Design',
      'Design Experiments',
      'Innovation',
      'Chaowalit Greepoke'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/about/creative`,
      languages: {
        'en': '/en/about/creative',
        'th': '/th/about/creative',
        'x-default': '/en/about/creative'
      }
    },
    openGraph: {
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      type: 'article',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale}/about/creative`,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Creative Works' }]
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

export default async function CreativeWorks({ params }: Props) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com';

  const breadcrumbItems = [
    { name: locale === 'th' ? 'เกี่ยวกับ' : 'About', href: `/${locale}/about` },
    { name: locale === 'th' ? 'ผลงานสร้างสรรค์' : 'Creative' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: locale === 'th' ? 'ผลงานสร้างสรรค์' : 'Creative Works',
    url: `${baseUrl}/${locale}/about/creative`,
    description: locale === 'th'
      ? 'ผลงานสร้างสรรค์ การออกแบบ UI/UX และโครงการนวัตกรรมที่ผสมผสานเทคโนโลยีกับศิลปะ'
      : 'Creative works including UI/UX design experiments and innovative project concepts blending technology with artistic expression.',
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
      <BreadcrumbJsonLd items={breadcrumbItems.map(item => ({ name: item.name, url: item.href ? `${baseUrl}${item.href}` : `${baseUrl}/${locale}/about/creative` }))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CreativeWorksClient />
    </>
  );
}
