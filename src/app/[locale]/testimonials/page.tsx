import { Metadata } from 'next';
import { TestimonialsClient } from '@/components/testimonials-client';
import { testimonials } from '@/data/testimonials';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    en: 'Testimonials - Chaowalit Greepoke',
    th: 'รีวิว - เชาวลิต กรีโภค',
  };

  const descriptions = {
    en: 'What clients, colleagues, and partners say about working with Chaowalit Greepoke',
    th: 'เสียงจากลูกค้า เพื่อนร่วมงาน และพาร์ทเนอร์เกี่ยวกับเชาวลิต กรีโภค',
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: [
      'Testimonials Chaowalit Greepoke',
      'Client Reviews',
      'Developer Bangkok Reviews',
      'Freelance Feedback',
      'Chaowalit Greepoke'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/testimonials`,
      languages: {
        'en': '/en/testimonials',
        'th': '/th/testimonials',
        'x-default': '/en/testimonials'
      }
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale}/testimonials`,
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{
        url: `/${locale}/testimonials/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Testimonials - Chaowalit Greepoke'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      creator: '@bookchaowalit',
      images: [`/${locale}/testimonials/opengraph-image`]
    }
  };
}

export default async function TestimonialsPage({ params }: Props) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com';

  const reviews = testimonials.map((t) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: t.name
    },
    reviewBody: t.quote,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: 5
    }
  }));

  const avgRating = testimonials.length > 0
    ? (testimonials.reduce((sum) => sum + 5, 0) / testimonials.length).toFixed(1)
    : '5.0';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Testimonials - Chaowalit Greepoke',
    url: `${baseUrl}/${locale}/testimonials`,
    description: 'What clients, colleagues, and partners say about working with Chaowalit Greepoke',
    author: {
      '@type': 'Person',
      name: 'Chaowalit Greepoke',
      url: baseUrl
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avgRating,
      bestRating: 5,
      ratingCount: testimonials.length,
      reviewCount: testimonials.length
    },
    review: reviews
  };

  const breadcrumbItems = [
    { name: 'Home', url: baseUrl },
    { name: locale === 'th' ? 'รีวิว' : 'Testimonials', url: `${baseUrl}/${locale}/testimonials` },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <BreadcrumbNav items={[
        { name: locale === 'th' ? 'รีวิว' : 'Testimonials' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TestimonialsClient testimonials={testimonials} />
    </div>
  );
}
