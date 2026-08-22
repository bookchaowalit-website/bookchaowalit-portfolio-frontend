"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  allProjects,
  type AppProject,
  type ProjectDomain,
  type ProjectStatus,
} from "@/data/app-projects";
import { getActiveProjectDomains, getProjectsForDomain, getProjectDomains, projectDomainMeta } from "@/data/project-domains";
import { MixedTypographyTitle } from "@/components/ui/mixed-typography";
import { laneFrameVariant } from "@/components/lane-icon";
import { SketchyFrame } from "@/components/ui/notebook-elements";
import {
  ExternalLink,
  Search,
  ArrowUpRight,
  ChevronDown,
  Star,
  Github,
} from "lucide-react";

const PAGE_SIZE = 24;
const FEATURED_LIMIT = 9;

const statusConfig: Record<
  ProjectStatus,
  { label: string; dot: string; text: string }
> = {
  live: { label: "Live", dot: "bg-foreground", text: "text-foreground" },
  wip: { label: "WIP", dot: "bg-muted-foreground", text: "text-muted-foreground" },
  archived: { label: "Archived", dot: "bg-muted-foreground/50", text: "text-muted-foreground/50" },
};

const evidenceLabelKey: Record<string, string> = {
  Live: "evidence_live",
  Prototype: "evidence_prototype",
  "Internal System": "evidence_internal",
  Experiment: "evidence_experiment",
};

function getFaviconUrl(projectUrl: string): string {
  try {
    const url = new URL(projectUrl);
    return `https://icon.horse/icon/${url.hostname}`;
  } catch {
    return "";
  }
}

function ProjectCard({
  project,
  stars,
  starsError,
  showScreenshot = false,
}: {
  project: AppProject;
  stars: number;
  starsError?: boolean;
  showScreenshot?: boolean;
}) {
  const t = useTranslations("projects");
  const [imgError, setImgError] = useState(false);
  const [screenshotError, setScreenshotError] = useState(false);
  const favicon = getFaviconUrl(project.url);
  const status = statusConfig[project.status];
  const domains = getProjectDomains(project);
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false`;

  // Generate a unique gray tone from the project name for the placeholder
  const lightness = 0.80 + (project.name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 10) * 0.015;

  return (
    <div className="group relative flex h-full flex-col border border-transparent bg-background p-5 transition-colors hover:bg-secondary card-hover-lift">
      <Link
        href={{ pathname: "/projects/[slug]", params: { slug: project.slug } }}
        className="absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`${project.name} — ${t("readCaseStudy")}`}
      />
      {showScreenshot && (
        <SketchyFrame variant={laneFrameVariant[project.problemLane]} className="mb-5 aspect-video overflow-hidden">
          {!screenshotError ? (
            <Image
              src={screenshotUrl}
              alt={`${project.name} live preview`}
              fill
              className="object-cover object-top"
              loading="lazy"
              decoding="async"
              unoptimized
              onError={() => setScreenshotError(true)}
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: `oklch(${lightness} 0 0)` }}
            >
              <span className="px-4 text-center text-xl font-bold font-[family-name:var(--font-doodle)] text-foreground/70">
                {project.name}
              </span>
            </div>
          )}
        </SketchyFrame>
      )}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 min-w-0">
          {favicon && !imgError ? (
            <Image
              src={favicon}
              alt=""
              width={16}
              height={16}
              className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
              onError={() => setImgError(true)}
              loading="lazy"
              unoptimized
            />
          ) : null}
          <h3 className="text-sm font-semibold leading-tight group-hover:underline truncate">
            {project.name}
          </h3>
        </div>
        {!project.demoUnavailable && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} — ${t("tryDemo")}`}
            className="relative z-10 inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center text-muted-foreground transition-all hover:-translate-y-0.5 hover:translate-x-0.5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowUpRight className="size-3.5" />
          </a>
        )}
      </div>
      {project.promise && (
        <p className="text-xs font-medium text-foreground/90 leading-relaxed mb-1">
          {project.promise}
        </p>
      )}
      <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
        {project.problem ?? project.description}
      </p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-y-2 pt-3">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-muted-foreground/90">
            {domains.map((domain) => t(projectDomainMeta[domain].labelKey)).join(" · ")}
          </span>
          <span className="flex items-center gap-1">
            <span className={`size-1.5 rounded-full ${status.dot}`} />
            <span className={`text-xs font-mono ${status.text}`}>
              {project.evidenceLevel
                ? t(evidenceLabelKey[project.evidenceLevel])
                : t("status_" + project.status)}
            </span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          {stars > 0 && (
            <span className="flex items-center gap-0.5 text-xs font-mono text-muted-foreground/80">
              <Star className="size-2.5" />
              {stars}
            </span>
          )}
          {starsError && stars === 0 && project.githubUrl && (
            <span className="text-xs font-mono text-muted-foreground/60" title="Stars unavailable">
              —
            </span>
          )}
          {project.githubUrl && !project.sourceUnavailable && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center justify-center min-h-[44px] min-w-[44px] h-[44px] w-[44px] text-muted-foreground/60 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`${project.name} GitHub repository`}
            >
              <Github className="size-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsClient({ initialDomain }: { initialDomain?: ProjectDomain } = {}) {
  const t = useTranslations("projects");
  const startDomain = initialDomain ?? "all";
  const [activeDomain] = useState<ProjectDomain | "all">(startDomain);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [starsMap, setStarsMap] = useState<Record<string, number>>({});
  const [totalStars, setTotalStars] = useState(0);
  const [starsError, setStarsError] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const activeDomains = getActiveProjectDomains();

  // Fetch GitHub stars
  useEffect(() => {
    fetch("/api/github-stars")
      .then((r) => r.json())
      .then((data: { slug: string; stars: number }[]) => {
        const map: Record<string, number> = {};
        let total = 0;
        for (const d of data) {
          map[d.slug] = d.stars;
          total += d.stars;
        }
        setStarsMap(map);
        setTotalStars(total);
      })
      .catch((err) => {
        console.error('Failed to fetch GitHub stars:', err);
        setStarsError(true);
      });
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // "/" to focus search
      if (e.key === "/" && document.activeElement !== searchRef.current) {
        e.preventDefault();
        searchRef.current?.focus();
      }
      // Escape to clear search
      if (e.key === "Escape" && document.activeElement === searchRef.current) {
        setSearch("");
        setVisibleCount(PAGE_SIZE);
        searchRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Featured projects
  const featuredProjects = useMemo(
    () =>
      allProjects
        .filter((p) => p.featured)
        .sort((a, b) => (a.featuredRank ?? Number.MAX_SAFE_INTEGER) - (b.featuredRank ?? Number.MAX_SAFE_INTEGER))
        .slice(0, FEATURED_LIMIT),
    []
  );
  const featuredSlugs = useMemo(
    () => new Set(featuredProjects.map((project) => project.slug)),
    [featuredProjects]
  );

  const scopedProjects = useMemo(
    () => activeDomain === "all"
      ? allProjects
      : allProjects.filter((project) => getProjectDomains(project).includes(activeDomain)),
    [activeDomain]
  );

  // Stats
  const stats = useMemo(() => {
    const live = scopedProjects.filter((p) => p.status === "live").length;
    const wip = scopedProjects.filter((p) => p.status === "wip").length;
    const archived = scopedProjects.filter((p) => p.status === "archived").length;
    return { live, wip, archived };
  }, [scopedProjects]);

  const showFeatured = activeDomain === "all" && !search.trim();

  // Filtered projects
  const filtered = useMemo(() => {
    let list = scopedProjects;
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tech.some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [search, scopedProjects]);

  const projectsToDisplay = useMemo(
    () => (showFeatured ? filtered.filter((project) => !featuredSlugs.has(project.slug)) : filtered),
    [featuredSlugs, filtered, showFeatured]
  );
  const visible = useMemo(() => projectsToDisplay.slice(0, visibleCount), [projectsToDisplay, visibleCount]);
  const hasMore = visibleCount < projectsToDisplay.length;
  const isEmptyDomain = activeDomain !== "all" && scopedProjects.length === 0 && !search.trim();

  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
    setVisibleCount(PAGE_SIZE);
  }, []);

  const handleClearFilters = useCallback(() => {
    setSearch("");
    setVisibleCount(PAGE_SIZE);
  }, []);

  const domainLabel = activeDomain === "all" ? "" : t(projectDomainMeta[activeDomain].labelKey);
  const domainProjectCount = scopedProjects.length;
  const displayedStars = activeDomain === "all"
    ? totalStars
    : scopedProjects.reduce((sum, project) => sum + (starsMap[project.slug] ?? 0), 0);

  return (
    <div className="w-full space-y-10 pb-12 pt-8">
      {/* Header */}
      <div className="py-8">
        <div className="text-center space-y-4">
          <MixedTypographyTitle
            as="h1"
            words={activeDomain === "all"
              ? [
                { text: t("titleWord1"), style: "cursive", size: "xl" },
                { text: t("titleWord2"), style: "filled", size: "xl" },
              ]
              : [
                { text: domainLabel, style: "cursive", size: "lg" },
                { text: t("titleWord2"), style: "filled", size: "lg" },
              ]}
            className="mb-4"
          />
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            {activeDomain === "all"
              ? t("subtitle", { count: scopedProjects.length })
              : t("domainSubtitle", { count: domainProjectCount, domain: domainLabel })}
          </p>
        </div>

        {/* Stats Banner — uses the same gap-px grid language */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 max-w-lg mx-auto mt-8 gap-px bg-border">
          <div className="bg-background flex flex-col items-center py-3 px-2">
            <span className="text-lg font-bold tabular-nums">{scopedProjects.length}</span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{t("statTotal")}</span>
          </div>
          <div className="bg-background flex flex-col items-center py-3 px-2">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-foreground" />
              <span className="text-lg font-bold tabular-nums">{stats.live}</span>
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{t("statLive")}</span>
          </div>
          <div className="bg-background flex flex-col items-center py-3 px-2">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-muted-foreground" />
              <span className="text-lg font-bold tabular-nums">{stats.wip}</span>
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{t("statWip")}</span>
          </div>
          <div className="bg-background flex flex-col items-center py-3 px-2">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-muted-foreground/50" />
              <span className="text-lg font-bold tabular-nums">{stats.archived}</span>
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{t("statArchived")}</span>
          </div>
          <div className="bg-background flex flex-col items-center py-3 px-2 col-span-2 sm:col-span-1">
            <span className="flex items-center gap-1.5">
              <Star className="size-3.5 text-muted-foreground" />
              <span className="text-lg font-bold tabular-nums">{starsError ? '—' : displayedStars}</span>
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{t("statStars")}</span>
          </div>
        </div>
      </div>

      {/* Domain navigation — the portfolio's only browse dimension */}
      <div className="py-4">
        <p className="text-center text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
          {t("browseByDomain")}
        </p>
        <div className="flex flex-wrap justify-center gap-2" role="group" aria-label={t("browseByDomain")}>
          {activeDomains.map((domain) => {
            const isActive = activeDomain === domain;
            const label = t(projectDomainMeta[domain].labelKey);
            const count = getProjectsForDomain(domain).length;
            return (
              <Link
                key={domain}
                href={{ pathname: "/projects/domains/[domain]", params: { domain } }}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-muted"
                }`}
              >
                {label}
                <span className={`text-xs tabular-nums ${isActive ? "opacity-60" : "text-muted-foreground"}`}>{count}</span>
              </Link>
            );
          })}
        </div>
        {activeDomain === "all" && (
          <div className="mt-4 text-center">
            <Link
              href="/projects/domains"
              className="inline-flex min-h-[44px] items-center gap-1.5 px-3 py-2 text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {t("exploreAllDomains")}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>

      {/* Search & Filters */}
      <div className="py-8 space-y-4">
        {/* Search */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              ref={searchRef}
              type="text"
              aria-label={t("searchLabel")}
              aria-keyshortcuts="/"
              placeholder={t("searchPlaceholder")}
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-secondary text-foreground placeholder:text-muted-foreground text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      {showFeatured && (
        <div className="py-8">
          <h2 className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
            <Star className="size-3.5 text-foreground" />
            {t("featured")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                stars={starsMap[project.slug] ?? 0}
                starsError={starsError}
                showScreenshot={true}
              />
            ))}
          </div>
        </div>
      )}

      {/* Project Grid Section */}
      <div className="py-8">
        {/* Results count */}
        <div className="mb-6">
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider" aria-live="polite" aria-atomic="true">
            {projectsToDisplay.length} {projectsToDisplay.length === 1 ? t("singleProject") : t("pluralProjects")}
            {activeDomain !== "all" && ` ${t("inDomain")} ${domainLabel}`}
            {search && ` ${t("matchingSearch")} "${search}"`}
            {hasMore && ` · ${t("showingCount")} ${visible.length}`}
          </p>
        </div>

        {isEmptyDomain ? (
          <div className="border border-dashed border-border px-6 py-16 text-center">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              {t("domainNoProjects")}
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight">
              {t("domainEmptyTitle")}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              {t("domainEmptyDescription")}
            </p>
            <Link
              href="/projects/domains"
              className="mt-6 inline-flex min-h-[44px] items-center gap-2 bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {t("exploreAllDomains")}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                stars={starsMap[project.slug] ?? 0}
                starsError={starsError}
                showScreenshot={false}
              />
            ))}
          </div>
        )}

        {/* Show more */}
        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm bg-secondary text-foreground hover:bg-secondary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronDown className="size-4" />
              {t("showMore", { count: projectsToDisplay.length - visible.length })}
            </button>
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 && !isEmptyDomain && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-sm">{t("noProjectsFound")}</p>
            <button
              onClick={handleClearFilters}
              className="mt-4 text-sm underline underline-offset-4 text-foreground hover:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {t("clearFilters")}
            </button>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="py-8">
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            {t("footerDescription")}
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/atlas"
              className="inline-flex items-center px-6 py-2.5 text-sm bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
            >
              {t("exploreAtlas")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {t("getInTouch")}
            </Link>
            <a
              href="https://github.com/bookchaowalit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 text-sm bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
            >
              <ExternalLink className="size-3.5" />
              {t("github")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
