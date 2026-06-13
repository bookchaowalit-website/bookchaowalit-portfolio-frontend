import { Metadata } from 'next';
import { TradingClient } from '@/components/about/trading-client';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Trading & Investing Journey - Chaowalit Greepoke",
    th: "เส้นทางเทรดและลงทุน - เชาวลิต กรีโภค"
  };

  const seoDescriptions = {
    en: "Explore my journey in trading and investing, from traditional markets to AI-powered strategies. Learn about my experience with technical analysis, risk management, and plans for AI-driven trading systems.",
    th: "สำรวจเส้นทางของฉันในการเทรดและลงทุน จากตลาดแบบดั้งเดิมไปจนถึงกลยุทธ์ที่ขับเคลื่อนด้วย AI เรียนรู้เกี่ยวกับประสบการณ์ของฉันกับการวิเคราะห์ทางเทคนิค การจัดการความเสี่ยง และแผนสำหรับระบบเทรดที่ขับเคลื่อนด้วย AI"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Trading Journey',
      'Investment Strategy',
      'AI Trading',
      'Technical Analysis',
      'Risk Management',
      'Algorithmic Trading',
      'Financial Markets',
      'Trading Systems',
      'Investment Portfolio',
      'AI-Powered Trading'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/about/trading`,
      languages: {
        'en': '/en/about/trading',
        'th': '/th/about/trading',
        'x-default': '/en/about/trading'
      }
    },
    openGraph: {
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      type: 'article',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale}/about/trading`,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{
        url: '/og-trading.jpg',
        width: 1200,
        height: 630,
        alt: 'Trading & Investing Journey'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      creator: '@bookchaowalit',
      images: ['/og-trading.jpg']
    }
  };
}

export default function TradingPage() {
  return <TradingClient />;
}
