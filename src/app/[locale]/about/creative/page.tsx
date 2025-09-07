import { Metadata } from 'next';
import { CreativeWorksClient } from '@/components/about/creative-works-client';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Creative Works - Chaowalit Greepoke | Design & Innovation",
    th: "ผลงานสร้างสรรค์ - เชาวลิต กรีโภค | การออกแบบและนวัตกรรม"
  };

  const seoDescriptions = {
    en: "Explore my creative side - from UI/UX design experiments to innovative project concepts that blend technology with artistic expression.",
    th: "สำรวจด้านสร้างสรรค์ของผม - ตั้งแต่การทดลอง UI/UX design ไปจนถึงแนวคิดโครงการนวัตกรรมที่ผสมผสานเทคโนโลยีกับการแสดงออกทางศิลปะ"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://chaowalitgreepoke.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    alternates: {
      canonical: locale === 'en' ? '/about/creative' : `/${locale}/about/creative`,
      languages: {
        'en': '/about/creative',
        'th': '/th/about/creative',
        'x-default': '/about/creative'
      }
    },
  };
}

export default function CreativeWorks() {
  return <CreativeWorksClient />;
}