import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { ProjectsClient } from "@/components/projects-client";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import {
  getActiveProjectDomains,
  isProjectDomain,
  projectDomainMeta,
  type ProjectDomain,
} from "@/data/project-domains";

type Props = {
  params: Promise<{ locale: string; domain: string }>;
};

export function generateStaticParams() {
  return getActiveProjectDomains().map((domain) => ({ domain }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, domain: rawDomain } = await params;
  if (!isProjectDomain(rawDomain) || !getActiveProjectDomains().includes(rawDomain)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "projects" });
  const label = t(projectDomainMeta[rawDomain].labelKey);

  return {
    title: `${label} Projects | Chaowalit Greepoke`,
    description: t(projectDomainMeta[rawDomain].descriptionKey),
    alternates: {
      canonical: `/${locale}/projects/domains/${rawDomain}`,
      languages: {
        en: `/en/projects/domains/${rawDomain}`,
        th: `/th/projects/domains/${rawDomain}`,
        "x-default": `/en/projects/domains/${rawDomain}`,
      },
    },
    robots: "index, follow",
  };
}

export default async function ProjectDomainPage({ params }: Props) {
  const { locale, domain: rawDomain } = await params;
  if (!isProjectDomain(rawDomain) || !getActiveProjectDomains().includes(rawDomain)) {
    notFound();
  }

  const domain = rawDomain as ProjectDomain;
  const t = await getTranslations({ locale, namespace: "projects" });
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://bookchaowalit.com";
  const label = t(projectDomainMeta[domain].labelKey);
  const breadcrumbItems = [
    { name: t("breadcrumbProjects"), href: "/projects" },
    { name: t("domainDirectoryTitle"), href: "/projects/domains" },
    { name: label },
  ];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <BreadcrumbNav items={breadcrumbItems} />
      <BreadcrumbJsonLd
        items={[
          { name: t("breadcrumbProjects"), url: `${baseUrl}/${locale}/projects` },
          { name: t("domainDirectoryTitle"), url: `${baseUrl}/${locale}/projects/domains` },
          { name: label, url: `${baseUrl}/${locale}/projects/domains/${domain}` },
        ]}
      />
      <ProjectsClient initialDomain={domain} />
    </div>
  );
}
