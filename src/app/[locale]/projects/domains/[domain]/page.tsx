import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { ProjectsClient } from "@/components/projects-client";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import {
  getActiveProjectDomains,
  getCanonicalProjectDomain,
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
  const domain = getCanonicalProjectDomain(rawDomain);
  if (!domain || !getActiveProjectDomains().includes(domain)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "projects" });
  const label = t(projectDomainMeta[domain].labelKey);

  return {
    title: `${label} Projects | Chaowalit Greepoke`,
    description: t(projectDomainMeta[domain].descriptionKey),
    alternates: {
      canonical: `/${locale}/projects/domains/${domain}`,
      languages: {
        en: `/en/projects/domains/${domain}`,
        th: `/th/projects/domains/${domain}`,
        "x-default": `/en/projects/domains/${domain}`,
      },
    },
    robots: "index, follow",
  };
}

export default async function ProjectDomainPage({ params }: Props) {
  const { locale, domain: rawDomain } = await params;
  const domain = getCanonicalProjectDomain(rawDomain);
  if (!domain) {
    notFound();
  }

  if (!getActiveProjectDomains().includes(domain)) {
    redirect(`/${locale}/projects/domains`);
  }

  if (rawDomain !== domain) {
    redirect(`/${locale}/projects/domains/${domain}`);
  }

  const canonicalDomain = domain as ProjectDomain;
  const t = await getTranslations({ locale, namespace: "projects" });
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://bookchaowalit.com";
  const label = t(projectDomainMeta[canonicalDomain].labelKey);
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
          { name: label, url: `${baseUrl}/${locale}/projects/domains/${canonicalDomain}` },
        ]}
      />
      <ProjectsClient initialDomain={canonicalDomain} />
    </div>
  );
}
