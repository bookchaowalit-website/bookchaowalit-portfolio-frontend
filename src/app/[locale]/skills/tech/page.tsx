import { Metadata } from 'next';
import { TechSkillsClient } from '@/components/skills/tech-skills-client';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Technical Skills - Programming & Development | Chaowalit Greepoke",
    th: "ทักษะด้านเทคนิค - การเขียนโปรแกรมและการพัฒนา | เชาวลิต กรีโภค"
  };

  const seoDescriptions = {
    en: "Explore my technical expertise in full-stack development, AI integration, system architecture, and modern web technologies. From React to Python, database design to cloud deployment.",
    th: "สำรวจความเชี่ยวชาญด้านเทคนิคของฉันในการพัฒนา full-stack การรวม AI สถาปัตยกรรมระบบ และเทคโนโลยีเว็บสมัยใหม่ จาก React ถึง Python การออกแบบฐานข้อมูลถึงการปรับใช้บนคลาวด์"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://chaowalitgreepoke.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Full Stack Development',
      'React Next.js',
      'Python Programming',
      'AI Integration',
      'Database Design',
      'API Development',
      'System Architecture',
      'Cloud Deployment',
      'TypeScript',
      'Node.js'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/skills/tech`,
      languages: {
        'en': '/en/skills/tech',
        'th': '/th/skills/tech',
        'x-default': '/en/skills/tech'
      }
    },
    openGraph: {
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      type: 'article',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://chaowalitgreepoke.com'}/${locale}/skills/tech`,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{
        url: '/og-tech-skills.jpg',
        width: 1200,
        height: 630,
        alt: 'Technical Skills & Programming Expertise'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      creator: '@bookchaowalit',
      images: ['/og-tech-skills.jpg']
    }
  };
}

export default function TechSkillsPage() {
  return <TechSkillsClient />;
}
