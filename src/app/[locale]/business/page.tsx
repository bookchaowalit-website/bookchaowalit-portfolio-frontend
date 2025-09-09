import { Metadata } from "next";
import { BusinessClient } from "@/components/business-client";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Ionomad - Deeptech & Marketing Agency | Book (Chaowalit Greepoke)",
    th: "Ionomad - เอเจนซี่ดีปเทคและการตลาด | บุ๊ค (เชาวลิต กรีโภค)"
  };

  const seoDescriptions = {
    en: "Ionomad is a deeptech and marketing agency specializing in AI-driven solutions and digital transformation. We help businesses leverage technology and data for sustainable growth.",
    th: "Ionomad เป็นเอเจนซี่ด้านดีปเทคและการตลาดที่เชี่ยวชาญด้านโซลูชันที่ขับเคลื่อนด้วย AI และการเปลี่ยนแปลงทางดิจิทัล เราช่วยธุรกิจใช้ประโยชน์จากเทคโนโลยีและข้อมูลเพื่อการเติบโตอย่างยั่งยืน"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://chaowalitgreepoke.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Deeptech Agency Bangkok',
      'AI Marketing Agency Thailand',
      'Digital Transformation Consultant',
      'Tech Consulting Bangkok',
      'Marketing Agency Thailand',
      'AI Solutions Bangkok',
      'Business Growth Consultant',
      'Technology Strategy Thailand'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/business`,
      languages: {
        'en': '/en/business',
        'th': '/th/business',
        'x-default': '/en/business'
      }
    },
    openGraph: {
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      type: 'website',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://chaowalitgreepoke.com'}/${locale}/business`,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{
        url: '/og-business.jpg',
        width: 1200,
        height: 630,
        alt: 'Ionomad - Deeptech & Marketing Agency'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      creator: '@bookchaowalit',
      images: ['/og-business.jpg']
    }
  };
}

export default function Business() {
  return <BusinessClient />;
}
