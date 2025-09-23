import { Metadata } from "next";
import { VideoSkillsClient } from "@/components/skills/video-skills-client";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Video Production Skills - Chaowalit Greepoke | Content Creation & Motion Graphics",
    th: "ทักษะการผลิตวิดีโอ - เชาวลิต กรีโภค | การสร้างเนื้อหาและกราฟิกเคลื่อนไหว"
  };

  const seoDescriptions = {
    en: "Explore Chaowalit's video production and editing expertise including Adobe Premiere Pro, After Effects, motion graphics, and digital content creation. Professional video portfolio from Bangkok-based creator.",
    th: "สำรวจความเชี่ยวชาญด้านการผลิตและตัดต่อวิดีโอของ เชาวลิต รวมถึง Adobe Premiere Pro, After Effects, กราฟิกเคลื่อนไหว และการสร้างเนื้อหาดิจิทัล ผลงานวิดีโอระดับมืออาชีพจากผู้สร้างสรรค์ในกรุงเทพฯ"
  };

  return {
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: ["video editing", "Adobe Premiere Pro", "After Effects", "motion graphics", "video production", "content creation", "Bangkok", "Thailand"],
    openGraph: {
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    },
    alternates: {
      canonical: `/${locale}/skills/video`,
      languages: {
        'en': '/en/skills/video',
        'th': '/th/skills/video',
        'x-default': '/en/skills/video'
      }
    },
  };
}

export default function VideoSkillsPage() {
  return <VideoSkillsClient />;
}
