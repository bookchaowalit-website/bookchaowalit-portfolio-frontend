import { Metadata } from 'next';
import { AboutClient } from '@/components/about-client';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';

type Props = {
  params: Promise<{ locale: string }>;
};

const faqData = {
  en: [
    {
      q: "Who is Chaowalit Greepoke?",
      a: "Chaowalit Greepoke is a Generalist and Solopreneur from Bangkok, Thailand, who enjoys solving problems and building things end-to-end across software engineering, data, AI, and digital growth."
    },
    {
      q: "What does Chaowalit specialize in?",
      a: "Chaowalit works across Full-Stack Development, AI & Automation, Data Architecture, Cloud Infrastructure, Mobile Apps, API Design, Business Strategy, and Marketing & SEO — bridging technical and business domains."
    },
    {
      q: "Where is Chaowalit based?",
      a: "Chaowalit is based in Bangkok, Thailand, working remotely and locally with clients and partners worldwide."
    },
    {
      q: "What kind of projects does Chaowalit build?",
      a: "Chaowalit builds practical and scalable solutions including web applications, AI-powered tools, trading systems, portfolio platforms, and multi-domain content systems as a solopreneur."
    }
  ],
  th: [
    {
      q: "เชาวลิต กรีโภค คือใคร?",
      a: "เชาวลิต กรีโภค เป็น Generalist และ Solopreneur จากกรุงเทพฯ ประเทศไทย ที่ชอบแก้ปัญหาและสร้างสิ่งต่างๆ แบบครบวงจร ครอบคลุม software engineering, ข้อมูล, AI และการเติบโตดิจิทัล"
    },
    {
      q: "เชาวลิตเชี่ยวชาญด้านไหน?",
      a: "เชาวลิตทำงานครอบคลุม Full-Stack Development, AI & Automation, Data Architecture, Cloud Infrastructure, Mobile Apps, API Design, Business Strategy และ Marketing & SEO — เชื่อมโยงด้านเทคนิคและธุรกิจ"
    },
    {
      q: "เชาวลิตอยู่ที่ไหน?",
      a: "เชาวลิตอยู่ที่กรุงเทพฯ ประเทศไทย ทำงานทั้งระยะไกลและในท้องถิ่นกับลูกค้าและพันธมิตรทั่วโลก"
    },
    {
      q: "เชาวลิตสร้างโปรเจกต์แบบไหน?",
      a: "เชาวลิตสร้างโซลูชันที่ใช้งานได้จริงและขยายตัวได้ รวมถึงเว็บแอปพลิเคชัน, เครื่องมือ AI, ระบบเทรด, แพลตฟอร์มพอร์ตโฟลิโอ และระบบเนื้อหาหลายโดเมนในฐานะ solopreneur"
    }
  ]
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "About Chaowalit Greepoke - Generalist & Solopreneur from Bangkok",
    th: "เกี่ยวกับเชาวลิต กรีโภค - Generalist และ Solopreneur จากกรุงเทพฯ"
  };

  const seoDescriptions = {
    en: "Meet Chaowalit Greepoke, a Generalist and Solopreneur who enjoys solving problems and building things end-to-end. From Bangkok, Thailand, working across software engineering, data, AI, and digital growth to create practical and scalable solutions.",
    th: "ทำความรู้จักเชาวลิต กรีโภค Generalist และ Solopreneur ที่ชอบแก้ปัญหาและสร้างสิ่งต่างๆ แบบครบวงจร จากกรุงเทพฯ ประเทศไทย ทำงานครอบคลุม software engineering, ข้อมูล, AI และการเติบโตดิจิทัล เพื่อสร้างโซลูชันที่ใช้งานได้จริงและขยายตัวได้"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Chaowalit Greepoke',
      'About Generalist Bangkok',
      'Solopreneur Thailand',
      'Problem Solver Developer',
      'End-to-end Solutions',
      'Software Engineering Bangkok',
      'Data Analytics Bangkok',
      'AI Integration Thailand',
      'Digital Growth Specialist'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        'en': '/en/about',
        'th': '/th/about',
        'x-default': '/en/about'
      }
    },
    openGraph: {
      type: 'profile',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale}/about`,
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{
        url: `/${locale}/about/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'About Chaowalit Greepoke - Generalist & Solopreneur from Bangkok'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      creator: '@bookchaowalit',
      images: [`/${locale}/about/opengraph-image`]
    }
  };
}

export default async function About({ params }: Props) {
  const { locale } = await params;
  const faqs = faqData[locale as keyof typeof faqData] || faqData.en;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com';

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const breadcrumbItems = [
    { name: locale === 'th' ? 'หน้าแรก' : 'Home', url: baseUrl },
    { name: locale === 'th' ? 'เกี่ยวกับ' : 'About', url: `${baseUrl}/${locale}/about` },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <BreadcrumbNav items={[
        { name: locale === 'th' ? 'เกี่ยวกับ' : 'About' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AboutClient />
    </div>
  );
}

