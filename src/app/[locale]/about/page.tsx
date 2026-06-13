import { Metadata } from 'next';
import { AboutClient } from '@/components/about-client';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "About Chaowalit Greepoke - Tech Generalist & Solopreneur from Bangkok",
    th: "เกี่ยวกับเชาวลิต กรีโภค - Tech Generalist และ Solopreneur จากกรุงเทพฯ"
  };

  const seoDescriptions = {
    en: "Meet Chaowalit Greepoke, a Tech Generalist and Solopreneur who enjoys solving problems and building things end-to-end. From Bangkok, Thailand, working across software engineering, data, AI, and digital growth to create practical and scalable solutions.",
    th: "ทำความรู้จักเชาวลิต กรีโภค Tech Generalist และ Solopreneur ที่ชอบแก้ปัญหาและสร้างสิ่งต่างๆ แบบครบวงจร จากกรุงเทพฯ ประเทศไทย ทำงานครอบคลุม software engineering, ข้อมูล, AI และการเติบโตดิจิทัล เพื่อสร้างโซลูชันที่ใช้งานได้จริงและขยายตัวได้"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Chaowalit Greepoke',
      'About Tech Generalist Bangkok',
      'Solopreneur Thailand',
      'Problem Solver Developer',
      'End-to-end Solutions',
      'Software Engineering Bangkok',
      'Data Analytics Bangkok',
      'AI Integration Thailand',
      'Digital Growth Specialist'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        'en': '/en/about',
        'th': '/th/about',
        'x-default': '/en/about'
      }
    },
    openGraph: {
      type: 'profile',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale}/about`,
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Chaowalit Greepoke - Tech Generalist & Solopreneur from Bangkok'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      creator: '@bookchaowalit',
      images: ['/og-about.jpg']
    }
  };
}

export default function About() {
  return <AboutClient />;
}
