import { Metadata } from 'next';
import { getAllBlogPosts } from "@/lib/blog";
import { BlogHero, BlogNewsletter } from "@/components/blog-client-wrapper";
import { BlogSearchAndList } from "@/components/blog-search-and-list";
import { getTranslations } from 'next-intl/server';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Tech Blog - Chaowalit Greepoke | Web Development, AI Integration & SEO Insights",
    th: "บล็อกเทคโนโลยี - เชาวลิต กรีโภค | การพัฒนาเว็บ, การรวม AI และความเข้าใจเกี่ยวกับ SEO"
  };

  const seoDescriptions = {
    en: "Read the latest insights on web development, AI integration, SEO optimization, and tech trends from Chaowalit Greepoke. Expert perspectives on Next.js, React, Python, and modern web technologies from Bangkok.",
    th: "อ่านความเข้าใจล่าสุดเกี่ยวกับการพัฒนาเว็บ, การรวม AI, การเพิ่มประสิทธิภาพ SEO และเทรนด์เทคโนโลยีจากเชาวลิต กรีโภค มุมมองผู้เชี่ยวชาญเกี่ยวกับ Next.js, React, Python และเทคโนโลยีเว็บทันสมัยจากกรุงเทพฯ"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Tech Blog Bangkok',
      'Web Development Articles',
      'AI Integration Tutorials',
      'Next.js SEO Tips',
      'React Development Blog',
      'Python FastAPI Articles',
      'Thai Tech Blog',
      'Full-Stack Development Insights',
      'Bangkok Developer Blog',
      'Chaowalit Greepoke Articles'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/blog`,
      languages: {
        'en': '/en/blog',
        'th': '/th/blog',
        'x-default': '/en/blog'
      }
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale === 'en' ? '' : locale + '/'}blog`,
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{
        url: `/${locale}/blog/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Chaowalit Greepoke Tech Blog - Web Development & AI Insights'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      creator: '@bookchaowalit',
      images: [`/${locale}/blog/opengraph-image`]
    }
  };
}

export default async function Blog({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  const allPosts = getAllBlogPosts();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Chaowalit Greepoke Tech Blog',
    url: `${baseUrl}/${locale}/blog`,
    description: 'Tech insights on web development, AI integration, SEO optimization, and modern web technologies.',
    inLanguage: locale === 'th' ? 'th' : 'en',
    author: {
      '@type': 'Person',
      name: 'Chaowalit Greepoke',
      url: baseUrl
    },
    blogPost: allPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      inLanguage: locale === 'th' ? 'th' : 'en',
      author: {
        '@type': 'Person',
        name: post.author
      },
      description: post.excerpt,
      keywords: post.tags.join(', ')
    }))
  };

  const breadcrumbItems = [
    { name: 'Home', url: baseUrl },
    { name: 'Blog', url: `${baseUrl}/${locale}/blog` },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <BreadcrumbNav items={[
        { name: t('title'), href: '/blog' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogHero />

      {/* Search + Tag Filter + Blog Posts */}
      <BlogSearchAndList allPosts={allPosts} />

      {/* Newsletter Signup */}
      <BlogNewsletter />
    </div>
  );
}
