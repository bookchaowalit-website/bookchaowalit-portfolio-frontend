import { Metadata } from 'next';
import { ProjectsClient } from '@/components/projects-client';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Projects Portfolio - Chaowalit Greepoke | Full-Stack & AI Development Showcase",
    th: "ผลงานโครงการ - เชาวลิต กรีโภค | แสดงผลงาน Full-Stack และ AI Development"
  };

  const seoDescriptions = {
    en: "Explore Chaowalit's portfolio of full-stack web applications, AI integration projects, and data analytics solutions. Built with Next.js, React, Python FastAPI, and modern technologies. Bangkok-based developer.",
    th: "สำรวจผลงานของ เชาวลิต กรีโภค ในด้านการพัฒนาเว็บแอปพลิเคชัน full-stack, โครงการรวม AI และโซลูชันการวิเคราะห์ข้อมูล พัฒนาด้วย Next.js, React, Python FastAPI และเทคโนโลยีทันสมัย นักพัฒนาจากกรุงเทพฯ"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://chaowalitgreepoke.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Portfolio Projects Bangkok',
      'Full-Stack Projects Showcase',
      'Next.js React Projects',
      'AI Integration Projects',
      'Python FastAPI Projects',
      'Web Development Portfolio Thailand',
      'SEO Analytics Projects',
      'Social Media Analytics',
      'RAG Systems LlamaIndex',
      'Data Center Management Projects'
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
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://chaowalitgreepoke.com'}/${locale}/projects`,
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{
        url: '/og-projects.jpg',
        width: 1200,
        height: 630,
        alt: 'Chaowalit Greepoke Projects Portfolio - Full-Stack & AI Development'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      creator: '@bookchaowalit',
      images: ['/og-projects.jpg']
    }
  };
}

export default function Projects() {
  return <ProjectsClient />;
}
