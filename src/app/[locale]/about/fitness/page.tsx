import { Metadata } from 'next';
import { FitnessJourneyClient } from '@/components/about/fitness-journey-client';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Fitness Journey - Chaowalit Greepoke | Health & Wellness Mindset",
    th: "การเดินทางเพื่อสุขภาพ - เชาวลิต กรีโภค | แนวคิดสุขภาพและความเป็นอยู่ที่ดี"
  };

  const seoDescriptions = {
    en: "Discover how fitness and wellness principles shape my approach to problem-solving and building sustainable solutions as a Tech Generalist.",
    th: "ค้นพบว่าหprinciples ของฟิตเนสและความเป็นอยู่ที่ดีส่งผลต่อการแก้ปัญหาและสร้างโซลูชันที่ยั่งยืนในฐานะ Tech Generalist อย่างไร"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://chaowalitgreepoke.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    alternates: {
      canonical: `/${locale}/about/fitness`,
      languages: {
        'en': '/en/about/fitness',
        'th': '/th/about/fitness',
        'x-default': '/en/about/fitness'
      }
    },
  };
}

export default function FitnessJourney() {
  return <FitnessJourneyClient />;
}
