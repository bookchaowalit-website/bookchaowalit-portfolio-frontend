import { Metadata } from 'next';
import { ProjectsClient } from '@/components/projects-client';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Projects Gallery - 100 Micro-Frontends | Chaowalit Greepoke",
    th: "แกลเลอรีผลงาน - 100 ไมโครฟรอนต์เอนด์ | เชาวลิต กรีโภค"
  };

  const seoDescriptions = {
    en: "Browse 100 independently deployed micro-frontends organized by category: tools, productivity, content, creative, business, social, AI & data. Built with Next.js and TypeScript by Bangkok-based developer Chaowalit Greepoke.",
    th: "เรียกดู 100 ไมโครฟรอนต์เอนด์ที่ deploy อย่างอิสระ จัดตามหมวดหมู่: เครื่องมือ, ผลผลิต, เนื้อหา, สร้างสรรค์, ธุรกิจ, โซเชียล, AI และข้อมูล พัฒนาโดย เชาวลิต กรีโภค นักพัฒนาจากกรุงเทพฯ"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      '100 Projects Portfolio',
      'Micro-Frontend Gallery',
      'Next.js TypeScript Projects',
      'Developer Tools Collection',
      'Web Development Portfolio Thailand',
      'AI Data Projects',
      'Productivity Apps',
      'Independent Deployments Vercel',
      'Chaowalit Greepoke',
      'Bangkok Developer'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/projects`,
      languages: {
        'en': '/en/projects',
        'th': '/th/projects',
        'x-default': '/en/projects'
      }
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale}/projects`,
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{
        url: `/${locale}/projects/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Chaowalit Greepoke Projects Gallery - 100 Micro-Frontends'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      creator: '@bookchaowalit',
      images: [`/${locale}/projects/opengraph-image`]
    }
  };
}

export default function Projects() {
  return <ProjectsClient />;
}
