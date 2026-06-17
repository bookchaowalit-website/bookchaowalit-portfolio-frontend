import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/lazy/hero-section';
import { SectionNav } from '@/components/section-nav';
import { ErrorBoundary } from '@/components/error-boundary';

// Loading skeleton with notebook theme
const SectionSkeleton = ({ height = 'h-64' }: { height?: string }) => (
  <div className={`${height} animate-pulse bg-muted border border-border relative overflow-hidden`}>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent animate-shimmer" />
  </div>
);

// Lazy load below-the-fold components
const SkillsSection = dynamic(() => import('@/components/lazy/skills-section').then(mod => ({ default: mod.SkillsSection })), {
  loading: () => <SectionSkeleton height="h-96" />
});

const AboutSection = dynamic(() => import('@/components/lazy/about-section').then(mod => ({ default: mod.AboutSection })), {
  loading: () => <SectionSkeleton height="h-80" />
});

const FeaturedProjects = dynamic(() => import('@/components/lazy/featured-projects').then(mod => ({ default: mod.FeaturedProjects })), {
  loading: () => <SectionSkeleton height="h-[500px]" />
});

const BusinessSection = dynamic(() => import('@/components/lazy/business-section').then(mod => ({ default: mod.BusinessSection })), {
  loading: () => <SectionSkeleton height="h-72" />
});

const BlogSection = dynamic(() => import('@/components/lazy/blog-section').then(mod => ({ default: mod.BlogSection })), {
  loading: () => <SectionSkeleton height="h-64" />
});

const NewsletterCTA = dynamic(() => import('@/components/lazy/newsletter-cta').then(mod => ({ default: mod.NewsletterCTA })), {
  loading: () => <SectionSkeleton height="h-48" />
});

const ContactSection = dynamic(() => import('@/components/lazy/contact-section').then(mod => ({ default: mod.ContactSection })), {
  loading: () => <SectionSkeleton height="h-96" />
});

const GitHubActivity = dynamic(() => import('@/components/github-activity'), {
  loading: () => <SectionSkeleton height="h-80" />
});

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
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
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
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale}`,
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
    }
  };
}

export default function Home() {
  return (
    <>
      <SectionNav />
      <div className="container mx-auto px-4 space-y-16 md:space-y-20 lg:space-y-24">
      <div id="hero">
        <HeroSection />
      </div>
      <ErrorBoundary>
        <div id="skills">
          <SkillsSection />
        </div>
      </ErrorBoundary>
      <ErrorBoundary>
        <div id="about">
          <AboutSection />
        </div>
      </ErrorBoundary>
      <ErrorBoundary>
        <div id="projects">
          <FeaturedProjects />
        </div>
      </ErrorBoundary>
      <ErrorBoundary>
        <div id="activity">
          <GitHubActivity />
        </div>
      </ErrorBoundary>
      <ErrorBoundary>
        <div id="business">
          <BusinessSection />
        </div>
      </ErrorBoundary>
      <ErrorBoundary>
        <div id="blog">
          <BlogSection />
        </div>
      </ErrorBoundary>
      <ErrorBoundary>
        <div id="newsletter">
          <NewsletterCTA />
        </div>
      </ErrorBoundary>
      <ErrorBoundary>
        <div id="contact">
          <ContactSection />
        </div>
      </ErrorBoundary>
      </div>
    </>
  );
}
