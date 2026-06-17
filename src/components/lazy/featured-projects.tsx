"use client";

import { allProjects, categoryMeta } from "@/data/app-projects";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

export function FeaturedProjects() {
  const t = useTranslations("home");

  const featured = allProjects.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-balance">
        {t("featuredProjectsTitle")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {featured.map((project) => (
          <a
            key={project.slug}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-background p-6 transition-colors hover:bg-secondary"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="text-sm font-semibold leading-tight group-hover:underline">
                {project.name}
              </h3>
              <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              {project.description}
            </p>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground/70">
              {categoryMeta[project.category].label}
            </span>
          </a>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/projects"
          className="inline-flex items-center px-6 py-2.5 text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          {t("viewAllProjects")}
        </Link>
      </div>
    </section>
  );
}
