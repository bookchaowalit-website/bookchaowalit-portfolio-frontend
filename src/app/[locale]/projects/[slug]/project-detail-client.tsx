"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
} from "lucide-react";

export function ProjectDetailClient({ project }: { project: AppProject }) {
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

  return (
    <div className="min-h-screen">
      {/* Screenshot hero — full bleed */}
      <div className="relative w-full aspect-[21/9] bg-secondary overflow-hidden">
        {!screenshotError ? (
          <img
            src={screenshotUrl}
            alt={`${project.name} live preview`}
            className="w-full h-full object-cover object-top"
            loading="eager"
            onError={() => setScreenshotError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-muted-foreground">
            <ImageOff className="size-8" />
            <span className="text-sm">Screenshot unavailable</span>
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
          All projects
        </Link>

        {/* Title block */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-balance">
          {project.name}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
          {project.description}
        </p>

        {/* Meta row — pipe-separated, no icons, no eyebrow */}
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
            Visit project
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
            >
              <Github className="size-4" />
              View source
            </a>
          )}
        </div>

        {/* Prev / Next navigation */}
        <nav
          className="flex justify-between gap-4 py-6 border-t border-border"
          aria-label="Project navigation"
        >
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex flex-col gap-1 min-w-0 max-w-[45%] text-left"
            >
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <ArrowLeft className="size-3" /> Previous
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
              href={`/projects/${nextProject.slug}`}
              className="group flex flex-col gap-1 min-w-0 max-w-[45%] text-right ml-auto"
            >
              <span className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                Next <ArrowRight className="size-3" />
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
