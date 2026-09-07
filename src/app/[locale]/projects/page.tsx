import { Metadata } from 'next';
import { Suspense } from 'react';
import { ProjectsClient } from '@/components/projects-client';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { allProjects, problemLaneOrder, type ProblemLane } from '@/data/app-projects';

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string | string[]; q?: string | string[]; focus?: string | string[] }>;
};

function firstQueryValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

function parsePage(value: string | string[] | undefined): number {
  const page = Number.parseInt(firstQueryValue(value) ?? "1", 10);
  return Number.isFinite(page) && page > 0 ? page : 1;
}

function parseLane(value: string | string[] | undefined): ProblemLane | undefined {
  const candidate = firstQueryValue(value);
  return candidate && problemLaneOrder.includes(candidate as ProblemLane)
    ? candidate as ProblemLane
    : undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Projects Gallery - 100+ Apps, Tools & Mobile | Chaowalit Greepoke",
    th: "แกลเลอรีผลงาน - 100+ แอป เครื่องมือ และมือถือ | เชาวลิต กรีโภค"
  };

  const projectCount = allProjects.length;
  const seoDescriptions = {
      en: `Browse ${projectCount} portfolio entries from the active Tech Domain · Book Dev workspace, including live demos, internal tools, and archived experiments.`,
      th: `เรียกดูผลงาน ${projectCount} รายการจาก workspace ปัจจุบันคือ Tech Domain · Book Dev รวมทั้งเดโมที่ใช้งานได้ เครื่องมือภายใน และโปรเจกต์ที่เก็บถาวร`
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      `${projectCount} Projects Portfolio`,
      'Micro-Frontend Gallery',
      'Next.js TypeScript Projects',
      'Developer Tools Collection',
      'Web Development Portfolio Thailand',
      'AI Data Projects',
      'Productivity Apps',
      'Independent Deployments Vercel',
      'Mobile Apps Flutter',
      'Chaowalit Greepoke',
      'Bangkok Developer'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/projects`,
      languages: {
        'en': '/en/projects',
        'th': '/th/projects',
        'x-default': '/en/projects'
      }
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'}/${locale}/projects`,
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{
        url: `/${locale}/projects/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Chaowalit Greepoke Projects Gallery - 100+ Apps, Tools & Mobile Apps'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      creator: '@bookchaowalit',
      images: [`/${locale}/projects/opengraph-image`]
    }
  };
}

export default async function Projects({ params, searchParams }: Props) {
  const { locale } = await params;
  const query = await searchParams;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projects Gallery - Chaowalit Greepoke',
    url: `${baseUrl}/${locale}/projects`,
    description: `Browse ${allProjects.length} portfolio entries from the active Tech Domain · Book Dev workspace, including live demos, internal tools, and archived experiments.`,
    author: {
      '@type': 'Person',
      name: 'Chaowalit Greepoke',
      url: baseUrl
    },
    numberOfItems: allProjects.length,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: allProjects.map((project, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: project.name,
        url: `${baseUrl}/${locale}/projects/${project.slug}`,
        description: project.description
      }))
    }
  };

  const breadcrumbItems = [
    { name: 'Home', url: baseUrl },
    { name: locale === 'th' ? 'โปรเจกต์' : 'Projects', url: `${baseUrl}/${locale}/projects` },
  ];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <BreadcrumbNav items={[
        { name: locale === 'th' ? 'โปรเจกต์' : 'Projects' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense>
        <ProjectsClient
          initialLane={parseLane(query.focus)}
          initialPage={parsePage(query.page)}
          initialSearch={firstQueryValue(query.q)}
        />
      </Suspense>
    </div>
  );
}
