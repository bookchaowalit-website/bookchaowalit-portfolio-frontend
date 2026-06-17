"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import {
  allProjects,
  categoryMeta,
  type ProjectCategory,
  type AppProject,
  type ProjectStatus,
} from "@/data/app-projects";
import { MixedTypographyTitle } from "@/components/ui/mixed-typography";
import {
  ExternalLink,
  Search,
  ArrowUpRight,
  ChevronDown,
  Star,
  Github,
} from "lucide-react";

const categories: ("all" | ProjectCategory)[] = [
  "all",
  "tools",
  "productivity",
  "content",
  "creative",
  "business",
  "social",
  "ai-data",
  "misc",
  "client-work",
];

const PAGE_SIZE = 24;

const statusConfig: Record<
  ProjectStatus,
  { label: string; dot: string; text: string }
> = {
  live: { label: "Live", dot: "bg-foreground", text: "text-foreground" },
  wip: { label: "WIP", dot: "bg-muted-foreground", text: "text-muted-foreground" },
  archived: { label: "Archived", dot: "bg-muted-foreground/50", text: "text-muted-foreground/50" },
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
  const [imgError, setImgError] = useState(false);
  const favicon = getFaviconUrl(project.url);
  const status = statusConfig[project.status];

  // Generate a unique hue from the project name for the placeholder
  const hue = project.name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-background p-6 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {showScreenshot && (
        <div
          className="mb-4 aspect-video overflow-hidden flex items-center justify-center"
          style={{ background: `oklch(0.85 0.04 ${hue})` }}
        >
          <span className="text-2xl font-bold font-[family-name:var(--font-doodle)] text-foreground/30">
            {project.name}
          </span>
        </div>
      )}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 min-w-0">
          {favicon && !imgError ? (
            <img
              src={favicon}
              alt=""
              width={16}
              height={16}
              className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : null}
          <h3 className="text-sm font-semibold leading-tight group-hover:underline truncate">
            {project.name}
          </h3>
        </div>
        <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground/70">
            {categoryMeta[project.category].label}
          </span>
          <span className="flex items-center gap-1">
            <span className={`size-1.5 rounded-full ${status.dot}`} />
            <span className={`text-xs font-mono ${status.text}`}>
              {status.label}
            </span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          {stars > 0 && (
            <span className="flex items-center gap-0.5 text-xs font-mono text-muted-foreground/60">
              <Star className="size-2.5" />
              {stars}
            </span>
          )}
          {starsError && stars === 0 && project.githubUrl && (
            <span className="text-xs font-mono text-muted-foreground/40" title="Stars unavailable">
              —
            </span>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-muted-foreground/40 hover:text-foreground transition-colors"
            >
              <Github className="size-3" />
            </a>
          )}
        </div>
      </div>
    </a>
  );
}

export function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState<"all" | ProjectCategory>("all");
  const [activeStatus, setActiveStatus] = useState<"all" | ProjectStatus>("all");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [starsMap, setStarsMap] = useState<Record<string, number>>({});
  const [totalStars, setTotalStars] = useState(0);
  const [starsError, setStarsError] = useState(false);
  const [categoriesExpanded, setCategoriesExpanded] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

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
    () => allProjects.filter((p) => p.featured),
    []
  );

  // Stats
  const stats = useMemo(() => {
    const live = allProjects.filter((p) => p.status === "live").length;
    const wip = allProjects.filter((p) => p.status === "wip").length;
    const archived = allProjects.filter((p) => p.status === "archived").length;
    return { live, wip, archived };
  }, []);

  // Filtered projects
  const filtered = useMemo(() => {
    let list = allProjects;
    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (activeStatus !== "all") {
      list = list.filter((p) => p.status === activeStatus);
    }
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
  }, [activeCategory, activeStatus, search]);

  const visible = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const hasMore = visibleCount < filtered.length;

  const countByCategory = useMemo(() => {
    const map: Record<string, number> = { all: allProjects.length };
    for (const p of allProjects) {
      map[p.category] = (map[p.category] || 0) + 1;
    }
    return map;
  }, []);

  const countByStatus = useMemo(() => {
    const map: Record<string, number> = { all: allProjects.length };
    for (const p of allProjects) {
      map[p.status] = (map[p.status] || 0) + 1;
    }
    return map;
  }, []);

  const handleCategoryChange = useCallback((cat: "all" | ProjectCategory) => {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
  }, []);

  const handleStatusChange = useCallback((status: "all" | ProjectStatus) => {
    setActiveStatus(status);
    setVisibleCount(PAGE_SIZE);
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
    setVisibleCount(PAGE_SIZE);
  }, []);

  const showFeatured = activeCategory === "all" && activeStatus === "all" && !search.trim();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <MixedTypographyTitle
          words={[
            { text: "All", style: "cursive", size: "xl" },
            { text: "Projects", style: "filled", size: "xl" },
          ]}
          className="mb-4"
        />
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
          {allProjects.length} micro-frontends deployed on Vercel, organized by purpose.
        </p>
      </div>

      {/* Stats Banner — uses the same gap-px grid language */}
      <div className="grid grid-cols-5 max-w-lg mx-auto mb-10 gap-px bg-border">
        <div className="bg-background flex flex-col items-center py-3 px-2">
          <span className="text-lg font-bold tabular-nums">{allProjects.length}</span>
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Total</span>
        </div>
        <div className="bg-background flex flex-col items-center py-3 px-2">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-foreground" />
            <span className="text-lg font-bold tabular-nums">{stats.live}</span>
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Live</span>
        </div>
        <div className="bg-background flex flex-col items-center py-3 px-2">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-muted-foreground" />
            <span className="text-lg font-bold tabular-nums">{stats.wip}</span>
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">WIP</span>
        </div>
        <div className="bg-background flex flex-col items-center py-3 px-2">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-muted-foreground/50" />
            <span className="text-lg font-bold tabular-nums">{stats.archived}</span>
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Archived</span>
        </div>
        <div className="bg-background flex flex-col items-center py-3 px-2">
          <span className="flex items-center gap-1.5">
            <Star className="size-3.5 text-muted-foreground" />
            <span className="text-lg font-bold tabular-nums">{starsError ? '—' : totalStars}</span>
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Stars</span>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            ref={searchRef}
            type="text"
            placeholder="Search projects... (press / to focus)"
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-secondary text-foreground placeholder:text-muted-foreground text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {/* Status filters */}
      <div className="flex flex-wrap justify-center gap-px bg-border mb-4 max-w-md mx-auto">
        {(["all", "live", "wip", "archived"] as const).map((status) => {
          const isActive = activeStatus === status;
          const label = status === "all" ? "All" : statusConfig[status].label;
          const count = countByStatus[status] || 0;
          return (
            <button
              key={status}
              onClick={() => handleStatusChange(status)}
              className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {label}
              <span className="opacity-50 tabular-nums">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Category filters — progressive disclosure: show top 4, expand on demand */}
      <div className="flex flex-wrap justify-center gap-px bg-border mb-12 max-w-2xl mx-auto">
        {(categoriesExpanded ? categories : categories.slice(0, 4)).map((cat) => {
          const isActive = activeCategory === cat;
          const label = cat === "all" ? "All" : categoryMeta[cat].label;
          const count = countByCategory[cat] || 0;
          return (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {label}
              <span className="ml-1 opacity-50 tabular-nums">{count}</span>
            </button>
          );
        })}
        {categories.length > 4 && (
          <button
            onClick={() => setCategoriesExpanded((v) => !v)}
            className="px-3 py-2 text-xs font-medium bg-background text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {categoriesExpanded ? "Less" : `+${categories.length - 4} more`}
          </button>
        )}
      </div>

      {/* Featured Projects */}
      {showFeatured && (
        <div className="mb-12">
          <h2 className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
            <Star className="size-3.5 text-foreground" />
            Featured
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

      {/* Results count */}
      <div className="mb-6">
        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "all" && ` in ${categoryMeta[activeCategory].label}`}
          {activeStatus !== "all" && ` · ${statusConfig[activeStatus].label}`}
          {search && ` matching "${search}"`}
          {hasMore && ` · showing ${visible.length}`}
        </p>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {visible.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            stars={starsMap[project.slug] ?? 0}
            starsError={starsError}
          />
        ))}
      </div>

      {/* Show more */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm bg-secondary text-foreground hover:bg-secondary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ChevronDown className="size-4" />
            Show more ({filtered.length - visible.length} remaining)
          </button>
        </div>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-sm">No projects found.</p>
          <button
            onClick={() => {
              setActiveCategory("all");
              setActiveStatus("all");
              setSearch("");
            }}
            className="mt-4 text-sm underline underline-offset-4 text-foreground hover:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Footer CTA */}
      <div className="text-center mt-16 space-y-4">
        <p className="text-sm text-muted-foreground">
          Every project is a standalone Next.js app deployed independently on Vercel.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-2.5 text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get in touch
          </Link>
          <a
            href="https://github.com/bookchaowalit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 text-sm bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
          >
            <ExternalLink className="size-3.5" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
