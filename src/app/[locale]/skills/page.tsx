import { Metadata } from 'next';
import { SkillsClient } from '@/components/skills-client';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Skills & Expertise - Chaowalit Greepoke",
    th: "ทักษะและความเชี่ยวชาญ - เชาวลิต กรีโภค"
  };

  const seoDescriptions = {
    en: "Explore my comprehensive skill set across technology, design, video editing, and creative domains. From full-stack development to digital content creation.",
    th: "สำรวจทักษะที่ครอบคลุมของฉันในด้านเทคโนโลยี การออกแบบ การตัดต่อวิดีโอ และโดเมนสร้างสรรค์ ตั้งแต่การพัฒนา full-stack ไปจนถึงการสร้างเนื้อหาดิจิทัล"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://chaowalitgreepoke.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Skills Portfolio',
      'Technical Skills',
      'Creative Skills',
      'Video Editing',
      'Full Stack Development',
      'UI/UX Design',
      'Digital Content Creation',
      'Programming Skills',
      'Design Skills',
      'Technology Expertise'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/skills`,
      languages: {
        'en': '/en/skills',
        'th': '/th/skills',
        'x-default': '/en/skills'
      }
    },
    openGraph: {
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      type: 'website',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://chaowalitgreepoke.com'}/${locale}/skills`,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{
        url: '/og-skills.jpg',
        width: 1200,
        height: 630,
        alt: 'Skills & Expertise Overview'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      creator: '@bookchaowalit',
      images: ['/og-skills.jpg']
    }
  };
}

export default function SkillsPage() {
  return <SkillsClient />;
}
