import { Metadata } from 'next';
import { PersonalGrowthClient } from '@/components/about/personal-growth-client';

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
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://chaowalitgreepoke.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    alternates: {
      canonical: `/${locale}/about/growth`,
      languages: {
        'en': '/en/about/growth',
        'th': '/th/about/growth',
        'x-default': '/en/about/growth'
      }
    },
  };
}

export default function PersonalGrowth() {
  return <PersonalGrowthClient />;
}
