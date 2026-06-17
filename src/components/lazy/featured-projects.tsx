"use client";

import { allProjects, categoryMeta } from "@/data/app-projects";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { StickyNote } from "@/components/ui/notebook-elements";
import { MixedTypographyTitle } from "@/components/ui/mixed-typography";

const stickyColors = ["yellow", "pink", "green", "blue"] as const;
const rotations = [-1.5, 1, -0.5, 1.5, -1, 0.5];

export function FeaturedProjects() {
  const t = useTranslations("home");

  const featured = allProjects.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="space-y-8">
      <div className="text-center">
        <MixedTypographyTitle
          words={[
            { text: "Featured", style: "cursive", size: "lg" },
            { text: "Projects", style: "filled", size: "lg" },
          ]}
          className="mb-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <StickyNote
              key={project.slug}
              color={stickyColors[index % 4]}
              rotation={rotations[index % rotations.length]}
              className="h-full"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-sm font-bold leading-tight group-hover:underline">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="size-3.5 shrink-0 text-foreground/50 group-hover:text-foreground transition-colors" />
                </div>
                <p className="text-xs text-foreground/70 leading-relaxed mb-3">
                  {project.description}
                </p>
                <span className="text-xs uppercase tracking-wider text-foreground/50">
                  {categoryMeta[project.category].label}
                </span>
              </a>
            </StickyNote>
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
