import { Metadata } from 'next';
import { SkillsClient } from '@/components/skills-client';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Technical Skills - Computer Languages, Frameworks & Tools - Chaowalit Greepoke",
    th: "ทักษะทางเทคนิค - ภาษาคอมพิวเตอร์ เฟรมเวิร์ก และเครื่องมือ - เชาวลิต กรีโภค"
  };

  const seoDescriptions = {
    en: "Comprehensive technical skills across computer languages (Python, C#, Java, HTML, CSS, JavaScript, PHP, Liquid, SQL, Dart, Go), libraries, frameworks, databases, cloud platforms, and runtime environments.",
    th: "ทักษะทางเทคนิคที่ครอบคลุมในภาษาคอมพิวเตอร์ (Python, C#, Java, HTML, CSS, JavaScript, PHP, Liquid, SQL, Dart, Go), ไลบรารี, เฟรมเวิร์ก, ฐานข้อมูล, แพลตฟอร์มคลาวด์ และสภาพแวดล้อมรันไทม์"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Python Developer',
      'React Next.js',
      'Flutter Developer',
      'FastAPI',
      'PostgreSQL',
      'Docker',
      'AWS',
      'Node.js',
      'MongoDB',
      'Langchain',
      'Pytorch',
      'Kubernetes',
      'Full Stack Developer',
      'AI ML Engineer',
      'Cloud Computing',
      'Database Design',
      'API Development',
      'Web Development',
      'Mobile Development'
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
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale}/skills`,
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
