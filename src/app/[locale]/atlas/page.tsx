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

  // Category statistics
  const categoryStats = inventory.categories.map((cat: any) => ({
    id: cat.id,
    label: cat.label,
    icon: cat.icon,
    color: cat.color,
    domainCount: cat.domains.length,
    domains: cat.domains,
  }));

  const totalFiles = inventory.meta?.totalFiles || 21000;
  const totalDomains = inventory.meta?.totalDomains || inventory.domains.length;
  const totalCategories = inventory.categories.length;

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
        description: `Explore ${totalDomains} knowledge domains across ${totalCategories} categories with interactive visualizations and cross-domain connections.`,
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
        description: `${totalDomains} knowledge domains across ${totalCategories} categories`,
        numberOfItems: totalDomains,
        itemListElement: domainList,
      },
      {
        '@type': 'ItemList',
        name: 'Domain Categories',
        description: `${totalCategories} high-level categories organizing knowledge domains`,
        numberOfItems: totalCategories,
        itemListElement: categoryStats.map((cat: any, i: number) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: cat.label,
          description: `${cat.domainCount} domains in ${cat.label}`,
        })),
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

      {/* Stats Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {locale === 'th' ? 'แผนที่ความรู้แบบโต้ตอบ' : 'Interactive Knowledge Atlas'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {locale === 'th'
              ? `การสำรวจ ${totalDomains} สาขาความรู้ใน ${totalCategories} หมวดหมู่ พร้อม visualization, ความเชื่อมโยงข้ามสาขา และรายละเอียดของแต่ละสาขา`
              : `Explore ${totalDomains} knowledge domains across ${totalCategories} categories with live visualizations, cross-domain connections, and detailed breakdowns.`}
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center p-4 rounded-lg border bg-card">
            <div className="text-3xl font-bold text-primary">{totalDomains}</div>
            <div className="text-sm text-muted-foreground">{locale === 'th' ? 'สาขาความรู้' : 'Knowledge Domains'}</div>
          </div>
          <div className="text-center p-4 rounded-lg border bg-card">
            <div className="text-3xl font-bold text-primary">{totalCategories}</div>
            <div className="text-sm text-muted-foreground">{locale === 'th' ? 'หมวดหมู่' : 'Categories'}</div>
          </div>
          <div className="text-center p-4 rounded-lg border bg-card">
            <div className="text-3xl font-bold text-primary">{(totalFiles / 1000).toFixed(1)}K+</div>
            <div className="text-sm text-muted-foreground">{locale === 'th' ? 'ไฟล์ความรู้' : 'Knowledge Files'}</div>
          </div>
          <div className="text-center p-4 rounded-lg border bg-card">
            <div className="text-3xl font-bold text-primary">100+</div>
            <div className="text-sm text-muted-foreground">{locale === 'th' ? 'โปรเจกต์' : 'Portfolio Projects'}</div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {locale === 'th' ? 'หมวดหมู่ความรู้' : 'Knowledge Categories'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categoryStats.map((cat: any) => (
              <div key={cat.id} className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                  <h3 className="font-semibold text-sm">{cat.label}</h3>
                </div>
                <div className="text-2xl font-bold mb-1">{cat.domainCount}</div>
                <div className="text-xs text-muted-foreground">
                  {locale === 'th' ? 'สาขาในหมวดนี้' : 'domains in this category'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AtlasClient />
    </>
  );
}
