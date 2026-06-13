import { Metadata } from 'next';
import { ArtSkillsClient } from '@/components/skills/art-skills-client';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Creative & Design Skills - UI/UX & Visual Design | Chaowalit Greepoke",
    th: "ทักษะด้านสร้างสรรค์และการออกแบบ - UI/UX และการออกแบบภาพ | เชาวลิต กรีโภค"
  };

  const seoDescriptions = {
    en: "Explore my creative expertise in UI/UX design, visual communication, and digital art. From Figma prototypes to brand identity design and creative direction.",
    th: "สำรวจความเชี่ยวชาญด้านสร้างสรรค์ของฉันในการออกแบบ UI/UX การสื่อสารด้วยภาพ และศิลปะดิจิทัล จากโปรโตไทป์ Figma ถึงการออกแบบอัตลักษณ์แบรนด์และทิศทางสร้างสรรค์"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'UI/UX Design',
      'Visual Design',
      'Figma',
      'Brand Identity',
      'Graphic Design',
      'Creative Direction',
      'Digital Art',
      'User Experience',
      'Interface Design',
      'Visual Communication'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/skills/art`,
      languages: {
        'en': '/en/skills/art',
        'th': '/th/skills/art',
        'x-default': '/en/skills/art'
      }
    },
    openGraph: {
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      type: 'article',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale}/skills/art`,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{
        url: '/og-art-skills.jpg',
        width: 1200,
        height: 630,
        alt: 'Creative & Design Skills'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      creator: '@bookchaowalit',
      images: ['/og-art-skills.jpg']
    }
  };
}

export default function ArtSkillsPage() {
  return <ArtSkillsClient />;
}
