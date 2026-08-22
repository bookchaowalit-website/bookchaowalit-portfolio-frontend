import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight, BookOpen, BrainCircuit, BriefcaseBusiness, Code2, Cog, FlaskConical, HeartPulse, Palette, PenLine, Users, type LucideIcon } from "lucide-react";
import { Link } from "@/i18n/routing";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { MixedTypographyTitle } from "@/components/ui/mixed-typography";
import {
  getActiveProjectDomains,
  getProjectsForDomain,
  projectDomainMeta,
  type ProjectDomain,
} from "@/data/project-domains";

type Props = {
  params: Promise<{ locale: string }>;
};

const domainIcons: Record<string, LucideIcon> = {
  code: Code2,
  brain: BrainCircuit,
  flask: FlaskConical,
  cog: Cog,
  palette: Palette,
  briefcase: BriefcaseBusiness,
  "pen-line": PenLine,
  "book-open": BookOpen,
  "heart-pulse": HeartPulse,
  users: Users,
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  const title = t("domainDirectoryTitle");
  const description = t("domainDirectoryDescription");

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://bookchaowalit.com"),
    title: `${title} | Chaowalit Greepoke`,
    description,
    alternates: {
      canonical: `/${locale}/projects/domains`,
      languages: {
        en: "/en/projects/domains",
        th: "/th/projects/domains",
        "x-default": "/en/projects/domains",
      },
    },
    robots: "index, follow",
  };
}

export default async function ProjectDomainsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://bookchaowalit.com";
  const domains = getActiveProjectDomains();
  const breadcrumbItems = [
    { name: t("breadcrumbProjects"), href: "/projects" },
    { name: t("domainDirectoryTitle") },
  ];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <BreadcrumbNav items={breadcrumbItems} />
      <BreadcrumbJsonLd
        items={[
          { name: t("breadcrumbProjects"), url: `${baseUrl}/${locale}/projects` },
          { name: t("domainDirectoryTitle"), url: `${baseUrl}/${locale}/projects/domains` },
        ]}
      />

      <section className="py-8">
        <div className="mx-auto max-w-2xl text-center">
          <MixedTypographyTitle
            as="h1"
            words={[
              { text: t("domainTitleWord1"), style: "cursive", size: "lg" },
              { text: t("domainTitleWord2"), style: "filled", size: "lg" },
            ]}
            className="mb-5"
          />
          <p className="leading-relaxed text-muted-foreground">
            {t("domainDirectoryDescription")}
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain: ProjectDomain) => {
            const meta = projectDomainMeta[domain];
            const Icon = domainIcons[meta.icon] ?? Code2;
            const count = getProjectsForDomain(domain).length;

            return (
              <Link
                key={domain}
                href={{ pathname: "/projects/domains/[domain]", params: { domain } }}
                className="group flex min-h-56 flex-col bg-background p-6 transition-colors hover:bg-secondary focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-foreground" aria-hidden="true" />
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" aria-hidden="true" />
                </div>
                <h2 className="text-lg font-semibold tracking-tight">
                  {t(meta.labelKey)}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t(meta.descriptionKey)}
                </p>
                <span className="mt-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {t("domainProjectCount", { count })}
                </span>
              </Link>
            );
          })}
          {Array.from({ length: (3 - (domains.length % 3)) % 3 }).map((_, index) => (
            <div
              key={`domain-grid-space-${index}`}
              className="hidden min-h-56 bg-background lg:block"
              aria-hidden="true"
            />
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          {t("domainDirectoryNote")}
        </p>
      </section>
    </div>
  );
}
