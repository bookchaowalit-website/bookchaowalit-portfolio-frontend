import { Metadata } from 'next';
import { ContactClient } from '@/components/contact-client';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Contact Chaowalit Greepoke - Get in Touch for AI & Full-Stack Development Projects",
    th: "ติดต่อเชาวลิต กรีโภค - ติดต่อสำหรับโครงการ AI และ Full-Stack Development"
  };

  const seoDescriptions = {
    en: "Ready to collaborate on your next project? Contact Chaowalit Greepoke, Bangkok-based Tech Generalist specializing in AI integration, full-stack development, and SEO optimization. Quick response within 24-48 hours.",
    th: "พร้อมที่จะร่วมงานในโครงการต่อไปของคุณหรือยัง? ติดต่อเชาวลิต กรีโภค Tech Generalist จากกรุงเทพฯ ที่เชี่ยวชาญด้านการรวม AI, การพัฒนา full-stack และการเพิ่มประสิทธิภาพ SEO ตอบกลับอย่างรวดเร็วภายใน 24-48 ชั่วโมง"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Contact Chaowalit Greepoke',
      'Hire Full-Stack Developer Bangkok',
      'AI Developer for Hire Thailand',
      'Freelance Next.js Developer',
      'SEO Consultant Bangkok',
      'Tech Project Collaboration',
      'Bangkok Web Developer Contact',
      'AI Integration Services Thailand',
      'React Developer Hire',
      'Python Developer Bangkok'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        'en': '/en/contact',
        'th': '/th/contact',
        'x-default': '/en/contact'
      }
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale}/contact`,
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Chaowalit Greepoke - Tech Generalist from Bangkok'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      creator: '@bookchaowalit',
      images: ['/og-contact.jpg']
    }
  };
}

export default function Contact() {
  return <ContactClient />;
}
