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
    openGraph: {
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      type: 'website',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    },
  };
}

export default function Business() {
  return <BusinessClient />;
}
