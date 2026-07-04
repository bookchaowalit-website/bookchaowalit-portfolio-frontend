"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  allProjects,
  categoryMeta,
  type AppProject,
} from "@/data/app-projects";
import { statusConfig } from "./status-config";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Star,
  Monitor,
  ImageOff,
  Target,
  Lightbulb,
  TrendingUp,
  FileText,
} from "lucide-react";

type RelatedBlogPost = { slug: string; title: string; excerpt: string };

export function ProjectDetailClient({ project, locale, relatedBlogPosts = [] }: { project: AppProject; locale: string; relatedBlogPosts?: RelatedBlogPost[] }) {
  const t = useTranslations("projectDetail");
  const [stars, setStars] = useState(0);
  const [starsError, setStarsError] = useState(false);
  const [screenshotError, setScreenshotError] = useState(false);

  useEffect(() => {
    fetch("/api/github-stars")
      .then((r) => r.json())
      .then((data: { slug: string; stars: number }[]) => {
        const found = data.find((d) => d.slug === project.slug);
        if (found) setStars(found.stars);
      })
      .catch((err) => {
        console.error('Failed to fetch GitHub stars:', err);
        setStarsError(true);
      });
  }, [project.slug]);

  const status = statusConfig[project.status];
  const category = categoryMeta[project.category];
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false`;

  // Prev/next navigation within the same category
  const categoryProjects = allProjects.filter(
    (p) => p.category === project.category
  );
  const currentIndex = categoryProjects.findIndex(
    (p) => p.slug === project.slug
  );
  const prevProject =
    currentIndex > 0 ? categoryProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < categoryProjects.length - 1
      ? categoryProjects[currentIndex + 1]
      : null;

  // Related projects (same category, excluding current, max 4)
  const relatedProjects = categoryProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Screenshot hero — full bleed */}
      <div className="relative w-full aspect-[21/9] bg-secondary overflow-hidden">
        {!screenshotError ? (
          <Image
            src={screenshotUrl}
            alt={`${project.name} live preview`}
            fill
            className="w-full h-full object-cover object-top"
            priority
            decoding="async"
            onError={() => setScreenshotError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-muted-foreground">
            <ImageOff className="size-8" />
            <span className="text-sm">{t("screenshotUnavailable")}</span>
          </div>
        )}
        {/* Gradient fade into page background */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-3xl -mt-8 relative">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="size-3.5" />
          {t("backToProjects")}
        </Link>

        {/* Title block */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-balance">
          {project.name}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
          {project.description}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm mb-10">
          <span className="text-foreground">{category.label}</span>
          <span className="text-muted-foreground/40">|</span>
          <span className="flex items-center gap-1.5">
            <span
              className={`size-2 rounded-full ${status.dot}`}
              aria-hidden="true"
            />
            <span className={status.text}>{status.label}</span>
          </span>
          {(stars > 0 || starsError) && (
            <>
              <span className="text-muted-foreground/40">|</span>
              <span className="flex items-center gap-1">
                <Star className="size-3.5 text-muted-foreground" />
                {starsError && stars === 0 ? '—' : stars}
              </span>
            </>
          )}
          <span className="text-muted-foreground/40">|</span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Monitor className="size-3.5" />
            <span className="font-mono text-xs">{project.tech.join(", ")}</span>
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-10" />

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mb-16">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <ExternalLink className="size-4" />
            {t("visitProject")}
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
            >
              <Github className="size-4" />
              {t("viewSource")}
            </a>
          )}
        </div>

        {/* Case Study Section */}
        {project.caseStudy && (
          <>
            <div className="h-px bg-border mb-10" />
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="size-6" />
                {t("caseStudy")}
              </h2>
              <div className="space-y-6">
                {project.caseStudy.challenge && (
                  <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-2 text-amber-600 dark:text-amber-400">
                      <Lightbulb className="size-4" />
                      {t("challenge")}
                    </h3>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {project.caseStudy.challenge}
                    </p>
                  </div>
                )}
                {project.caseStudy.solution && (
                  <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <Target className="size-4" />
                      {t("solution")}
                    </h3>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {project.caseStudy.solution}
                    </p>
                  </div>
                )}
                {project.caseStudy.result && (
                  <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
                    <h3 className="font-semibold mb-2 flex items-center gap-2 text-green-600 dark:text-green-400">
                      <TrendingUp className="size-4" />
                      {t("result")}
                    </h3>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {project.caseStudy.result}
                    </p>
                  </div>
                )}
              </div>
            </section>
          </>
        )}

        {/* Related Blog Posts Section */}
        {relatedBlogPosts.length > 0 && (
          <>
            <div className="h-px bg-border mb-10" />
            <section className="mb-16">
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                <FileText className="size-5" />
                {t("relatedPosts")}
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                {t("relatedPostsDesc")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedBlogPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={{pathname: '/blog/[slug]', params: {slug: post.slug}}}
                    className="group rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                  >
                    <h3 className="font-medium group-hover:underline mb-1 line-clamp-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <>
            <div className="h-px bg-border mb-10" />
            <section className="mb-16">
              <h2 className="text-xl font-bold mb-2">
                {t("relatedProjects")}
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                {t("moreInCategory", { category: category.label })}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedProjects.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={{pathname: '/projects/[slug]', params: {slug: rp.slug}}}
                    className="group rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                  >
                    <h3 className="font-medium group-hover:underline mb-1">
                      {rp.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                      {rp.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {rp.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Prev / Next navigation */}
        <nav
          className="flex justify-between gap-4 py-6 border-t border-border"
          aria-label="Project navigation"
        >
          {prevProject ? (
            <Link
              href={{pathname: '/projects/[slug]', params: {slug: prevProject.slug}}}
              className="group flex flex-col gap-1 min-w-0 max-w-[45%] text-left"
            >
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <ArrowLeft className="size-3" /> {t("previous")}
              </span>
              <span className="text-sm font-medium truncate group-hover:underline">
                {prevProject.name}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              href={{pathname: '/projects/[slug]', params: {slug: nextProject.slug}}}
              className="group flex flex-col gap-1 min-w-0 max-w-[45%] text-right ml-auto"
            >
              <span className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                {t("next")} <ArrowRight className="size-3" />
              </span>
              <span className="text-sm font-medium truncate group-hover:underline">
                {nextProject.name}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>

      {/* Bottom spacing */}
      <div className="h-16" />
    </div>
  );
}
