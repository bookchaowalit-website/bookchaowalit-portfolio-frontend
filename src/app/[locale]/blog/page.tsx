import { Metadata } from 'next';
import { getAllBlogPosts, getFeaturedPosts } from "@/lib/blog";
import { BlogHero, BlogSearchBar, BlogNewsletter, NotebookSection } from "@/components/blog-client-wrapper";
import { NotebookBlogList } from "@/components/notebook-blog-list";

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

export default function Blog() {
  const allPosts = getAllBlogPosts();
  const featuredPosts = getFeaturedPosts();
  const recentPosts = allPosts.filter(post => !post.featured);

  return (
    <div className="container mx-auto px-4 py-8">
      <BlogHero />

      {/* Search Bar */}
      <BlogSearchBar />

      {/* Blog Posts — notebook-styled entries */}
      <NotebookSection
        title="Articles"
        subtitle="All posts and writings"
      >
        <NotebookBlogList
          featuredPosts={featuredPosts}
          recentPosts={recentPosts}
        />
      </NotebookSection>

      {/* Newsletter Signup */}
      <BlogNewsletter />
    </div>
  );
}
