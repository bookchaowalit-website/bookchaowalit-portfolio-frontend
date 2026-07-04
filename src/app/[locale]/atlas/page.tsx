import { Metadata } from 'next';
import { AtlasClient } from '@/components/atlas-client';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import inventory from '@/content/domain-inventory.json';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Interactive Knowledge Atlas - 45 Domains | Chaowalit Greepoke",
    th: "แผนที่ความรู้แบบโต้ตอบ - 45 สาขา | เชาวลิต กรีโภค"
  };

  const seoDescriptions = {
    en: "Explore my interactive knowledge atlas — 45 domains across 8 categories with live visualizations, cross-domain connections, and detailed domain breakdowns spanning tech, business, creative, and life sciences.",
    th: "สำรวจแผนที่ความรู้แบบโต้ตอบ — 45 สาขาใน 8 หมวดหมู่พร้อม visualization, ความเชื่อมโยงข้ามสาขา และรายละเอียดของแต่ละสาขา ครอบคลุมเทคโนโลยี ธุรกิจ ศิลปะ และวิทยาศาสตร์ชีวิต"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Knowledge Atlas',
      'Interactive Visualization',
      '45 Domains',
      'Knowledge Map',
      'Full Stack Developer',
      'AI ML Engineer',
      'Solopreneur',
      'Generalist',
      'Cross-Domain Integration',
      'Personal Knowledge Base'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/atlas`,
      languages: {
        'en': '/en/atlas',
        'th': '/th/atlas',
        'x-default': '/en/atlas'
      }
    },
    openGraph: {
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      type: 'website',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale}/atlas`,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Interactive Knowledge Atlas' }],
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

export default async function AtlasPage({ params }: Props) {
  const { locale } = await params;

  const breadcrumbItems = [
    { name: locale === 'th' ? 'แผนที่ความรู้' : 'Knowledge Atlas' },
  ];

  const domainList = inventory.domains.map((d, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: d.name,
    description: d.description,
  }));

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com';

  const howToSteps = locale === 'th'
    ? [
        { name: 'สำรวจภาพรวม', text: 'เริ่มต้นด้วยการดูภาพรวม 45 สาขาความรู้ใน 8 หมวดหมู่บนแผนที่แบบโต้ตอบ' },
        { name: 'เลือกหมวดหมู่', text: 'คลิกที่หมวดหมู่ เช่น Tech & Engineering, Business & Finance, Creative & Design เพื่อดูสาขาในกลุ่ม' },
        { name: 'เจาะลึกสาขา', text: 'คลิกที่สาขาใดก็ได้เพื่อดูรายละเอียด จำนวนไฟล์ และคำอธิบาย' },
        { name: 'ติดตามความเชื่อมโยง', text: 'สังเกตเส้นเชื่อมระหว่างสาขาเพื่อค้นพบความสัมพันธ์ข้ามสาขาวิชา' },
        { name: 'ดูโปรเจกต์ที่เกี่ยวข้อง', text: 'แต่ละสาขามีลิงก์ไปโปรเจกต์ที่เกี่ยวข้องเพื่อเห็นการประยุกต์ใช้จริง' },
      ]
    : [
        { name: 'Explore the overview', text: 'Start by viewing all 45 knowledge domains across 8 categories on the interactive map.' },
        { name: 'Select a category', text: 'Click on a category like Tech & Engineering, Business & Finance, or Creative & Design to filter domains.' },
        { name: 'Drill into a domain', text: 'Click any domain to see details — file count, description, and sub-topics.' },
        { name: 'Follow cross-domain connections', text: 'Observe connection lines between domains to discover interdisciplinary relationships.' },
        { name: 'View related projects', text: 'Each domain links to real projects that demonstrate practical application of that knowledge.' },
      ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${baseUrl}/${locale}/atlas`,
        name: 'Interactive Knowledge Atlas - Chaowalit Greepoke',
        description: 'Explore 45 knowledge domains with interactive visualizations and cross-domain connections.',
        url: `${baseUrl}/${locale}/atlas`,
        mainEntity: {
          '@type': 'Person',
          name: 'Chaowalit Greepoke',
          jobTitle: 'Full-Stack Developer & AI Specialist',
          url: baseUrl,
        },
      },
      {
        '@type': 'ItemList',
        name: 'Knowledge Domains',
        description: '45 knowledge domains across 8 categories',
        numberOfItems: inventory.domains.length,
        itemListElement: domainList,
      },
      {
        '@type': 'HowTo',
        name: locale === 'th' ? 'วิธีใช้แผนที่ความรู้' : 'How to Use the Knowledge Atlas',
        description: locale === 'th'
          ? 'คำแนะนำการสำรวจแผนที่ความรู้แบบโต้ตอบของเชาวลิต'
          : 'Step-by-step guide to exploring Chaowalit\'s interactive knowledge atlas.',
        totalTime: 'PT3M',
        step: howToSteps.map((step, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: step.name,
          text: step.text,
        })),
      },
    ],
  };

  return (
    <>
      <div className="container mx-auto px-4 pt-4">
        <BreadcrumbNav items={breadcrumbItems} />
      </div>
      <BreadcrumbJsonLd items={breadcrumbItems.map(item => ({ name: item.name, url: `${baseUrl}/${locale}/atlas` }))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AtlasClient />
    </>
  );
}
