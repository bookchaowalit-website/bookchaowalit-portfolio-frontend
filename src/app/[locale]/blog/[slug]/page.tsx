import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "@/i18n/routing";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ShareButton } from "@/components/share-button";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      robots: 'noindex, nofollow'
    };
  }

  const baseTitle = `${post.title} | Chaowalit Greepoke`;
  const blogUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale === 'en' ? '' : locale + '/'}blog/${slug}`;

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: baseTitle,
    description: post.excerpt,
    keywords: [
      ...post.tags,
      'Chaowalit Greepoke Blog',
      'Tech Tutorial Bangkok',
      'Web Development Article',
      'AI Development Guide',
      'SEO Tips Thailand',
      'Next.js Tutorial',
      'React Development',
      'Python FastAPI Guide'
    ].join(', '),
    authors: [{ name: post.author }],
    creator: post.author,
    publisher: 'Chaowalit Greepoke',
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        'en': `/en/blog/${slug}`,
        'th': `/th/blog/${slug}`,
        'x-default': `/en/blog/${slug}`
      }
    },
    openGraph: {
      type: 'article',
      locale: locale,
      url: blogUrl,
      title: baseTitle,
      description: post.excerpt,
      siteName: 'Chaowalit Greepoke Portfolio',
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      images: [{
        url: post.image || '/og-blog-post.jpg',
        width: 1200,
        height: 630,
        alt: `${post.title} - ${post.author}`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: baseTitle,
      description: post.excerpt,
      creator: '@bookchaowalit',
      images: [post.image || '/og-blog-post.jpg']
    },
    other: {
      'article:author': post.author,
      'article:published_time': post.publishedAt,
      'article:tag': post.tags.join(', ')
    }
  };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug, locale } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const currentUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale === 'en' ? '' : locale + '/'}blog/${slug}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Back button */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/blog">← Back to Blog</Link>
        </Button>
      </div>

      {/* Article header */}
      <header className="mb-12 space-y-6">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <Separator />

        {/* Author info */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/profile.webp" alt={post.author} />
              <AvatarFallback>CG</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.author}</p>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <time>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Share buttons */}
          <div className="flex items-center space-x-2">
            <ShareButton
              title={post.title}
              url={currentUrl}
            />
          </div>
        </div>
      </header>      {/* Article content */}
      <article className="prose prose-lg max-w-none">
        <MDXRemote source={post.content} />
      </article>

      <Separator className="my-12" />

      {/* Author bio */}
      <section className="bg-muted/50 rounded-lg p-8">
        <div className="flex items-start space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/profile.webp" alt={post.author} />
            <AvatarFallback className="text-lg">CG</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">About {post.author}</h3>
            <p className="text-muted-foreground mb-4">
              Tech Generalist from Bangkok, Thailand with expertise in AI integration, full-stack development, and SEO optimization.
              I love sharing knowledge and helping developers build innovative solutions with modern technologies.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to other posts */}
      <section className="mt-12">
        <div className="flex justify-between items-center">
          <Button variant="ghost" asChild>
            <Link href="/blog">← All Posts</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/projects">View My Projects →</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
