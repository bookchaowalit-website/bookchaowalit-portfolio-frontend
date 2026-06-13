import { Metadata } from 'next';
import { TechJourneyClient } from '@/components/about/tech-journey-client';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Tech Journey - Chaowalit Greepoke | From Electronics to AI",
    th: "การเดินทางด้านเทคโนโลยี - เชาวลิต กรีโภค | จากอิเล็กทรอนิกส์สู่ AI"
  };

  const seoDescriptions = {
    en: "My technical evolution from electronics background to becoming a Tech Generalist specializing in AI, full-stack development, and digital solutions.",
    th: "วิวัฒนาการทางเทคนิคของผมจากพื้นฐานอิเล็กทรอนิกส์สู่การเป็น Tech Generalist ที่เชี่ยวชาญด้าน AI, การพัฒนา full-stack และโซลูชันดิจิทัล"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    alternates: {
      canonical: `/${locale}/about/journey`,
      languages: {
        'en': '/en/about/journey',
        'th': '/th/about/journey',
        'x-default': '/en/about/journey'
      }
    },
  };
}

export default function TechJourney() {
  return <TechJourneyClient />;
}
