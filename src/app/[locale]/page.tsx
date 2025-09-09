import { Metadata } from 'next';
import { HeroSection } from '@/components/lazy/hero-section';
import { SkillsSection } from '@/components/lazy/skills-section';
import { AboutSection } from '@/components/lazy/about-section';
import { FeaturedProjects } from '@/components/lazy/featured-projects';
import { BusinessSection } from '@/components/lazy/business-section';
import { BlogSection } from '@/components/lazy/blog-section';
import { ContactSection } from '@/components/lazy/contact-section';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Chaowalit Greepoke - Tech Generalist & Solopreneur | Problem Solver Bangkok",
    th: "เชาวลิต กรีโภค - Tech Generalist และ Solopreneur | นักแก้ปัญหา กรุงเทพฯ"
  };

  const seoDescriptions = {
    en: "Tech Generalist and Solopreneur from Bangkok, Thailand. Working across software engineering, data, AI, and digital growth to create practical and scalable solutions. Turning data into insights and insights into action.",
    th: "Tech Generalist และ Solopreneur จากกรุงเทพฯ ประเทศไทย ทำงานครอบคลุม software engineering, ข้อมูล, AI และการเติบโตดิจิทัล เพื่อสร้างโซลูชันที่ใช้งานได้จริงและขยายตัวได้ เปลี่ยนข้อมูลให้เป็นข้อมูลเชิงลึกและข้อมูลเชิงลึกให้เป็นการดำเนินการ"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://chaowalitgreepoke.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Tech Generalist Bangkok',
      'Solopreneur Thailand',
      'Problem Solver Developer',
      'Software Engineering Bangkok',
      'Data Analytics Consultant',
      'AI Integration Specialist',
      'Digital Growth Strategist',
      'End-to-end Solutions',
      'Chaowalit Greepoke'
    ].join(', '),
    authors: [{ name: 'Chaowalit Greepoke' }],
    creator: 'Chaowalit Greepoke',
    publisher: 'Chaowalit Greepoke',
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'th': '/th',
        'x-default': '/en'
      }
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://chaowalitgreepoke.com'}/${locale}`,
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Chaowalit Greepoke - Tech Generalist & Solopreneur'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      creator: '@bookchaowalit',
      images: ['/og-home.jpg']
    },
    verification: {
      google: 'your-google-verification-code'
    }
  };
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16 md:space-y-20 lg:space-y-24">
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <FeaturedProjects />
      <BusinessSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
