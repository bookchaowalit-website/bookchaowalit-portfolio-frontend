import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllBlogPosts, getFeaturedPosts } from "@/lib/blog";
import { BlogHero, BlogSearchBar, BlogNewsletter, NotebookSection } from "@/components/blog-client-wrapper";

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
        url: '/og-blog.jpg',
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
      images: ['/og-blog.jpg']
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

      {/* Featured Posts */}
      <NotebookSection
        title="Featured Articles"
        subtitle="My best writing - handpicked just for you!"
        className="mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline">Featured</Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>•</span>
                    <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </NotebookSection>

      {/* Recent Posts */}
      <NotebookSection
        title="Recent Articles"
        subtitle="Fresh thoughts and new discoveries"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{post.tags.length - 2}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <time className="text-xs text-muted-foreground">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </time>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/blog/${post.slug}`}>Read →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </NotebookSection>

      {/* Newsletter Signup */}
      <BlogNewsletter />
    </div>
  );
}
