import {
  allProjects,
  type AppProject,
  type ProjectCategory,
  type ProjectDomain,
} from "./app-projects";

export type { ProjectDomain } from "./app-projects";

/**
 * Portfolio domains are Solo Empire workspaces, not broad skill categories.
 * A project can belong to more than one workspace: a science product can be
 * both Book Science and Book Dev, while Book Dev remains the implementation
 * home for the software work visible in this portfolio.
 */
export const projectDomainOrder: ProjectDomain[] = [
  "book-dev",
  "book-art",
  "book-content",
  "book-ai",
  "book-science",
  "book-engineering",
  "book-business",
  "book-marketing",
  "book-finance",
  "book-learning",
  "book-life",
  "book-community",
  "book-research",
];

export const projectDomainMeta: Record<
  ProjectDomain,
  { labelKey: string; descriptionKey: string; icon: string }
> = {
  "book-dev": {
    labelKey: "domain_book-dev",
    descriptionKey: "domainDesc_book-dev",
    icon: "code",
  },
  "book-art": {
    labelKey: "domain_book-art",
    descriptionKey: "domainDesc_book-art",
    icon: "palette",
  },
  "book-content": {
    labelKey: "domain_book-content",
    descriptionKey: "domainDesc_book-content",
    icon: "pen-line",
  },
  "book-ai": {
    labelKey: "domain_book-ai",
    descriptionKey: "domainDesc_book-ai",
    icon: "brain",
  },
  "book-science": {
    labelKey: "domain_book-science",
    descriptionKey: "domainDesc_book-science",
    icon: "flask",
  },
  "book-engineering": {
    labelKey: "domain_book-engineering",
    descriptionKey: "domainDesc_book-engineering",
    icon: "cog",
  },
  "book-business": {
    labelKey: "domain_book-business",
    descriptionKey: "domainDesc_book-business",
    icon: "briefcase",
  },
  "book-marketing": {
    labelKey: "domain_book-marketing",
    descriptionKey: "domainDesc_book-marketing",
    icon: "trending-up",
  },
  "book-finance": {
    labelKey: "domain_book-finance",
    descriptionKey: "domainDesc_book-finance",
    icon: "chart",
  },
  "book-learning": {
    labelKey: "domain_book-learning",
    descriptionKey: "domainDesc_book-learning",
    icon: "book-open",
  },
  "book-life": {
    labelKey: "domain_book-life",
    descriptionKey: "domainDesc_book-life",
    icon: "heart-pulse",
  },
  "book-community": {
    labelKey: "domain_book-community",
    descriptionKey: "domainDesc_book-community",
    icon: "users",
  },
  "book-research": {
    labelKey: "domain_book-research",
    descriptionKey: "domainDesc_book-research",
    icon: "search",
  },
};

const categoryFallback: Record<ProjectCategory, ProjectDomain[]> = {
  business: ["book-business"],
  marketing: ["book-marketing", "book-content"],
  content: ["book-content"],
  design: ["book-art"],
  health: ["book-life"],
  education: ["book-learning"],
  social: ["book-community", "book-content"],
  tech: ["book-dev"],
  client: ["book-business"],
};

// Specific workspaces make subject-led projects discoverable without turning
// the old category field into a misleading domain taxonomy.
const projectDomainOverrides: Record<string, ProjectDomain[]> = {
  "real-estate-analyzer": ["book-business", "book-finance"],
  "smart-farming": ["book-science", "book-engineering"],
  booktrading: ["book-finance", "book-business"],
  "military-strategy-db": ["book-research", "book-learning"],
  bookmarketing: ["book-marketing", "book-content"],
  bookreviews: ["book-content", "book-learning"],
  booknbook: ["book-content", "book-business"],
  bookreading: ["book-content", "book-learning"],
  "fashion-lookbook": ["book-art", "book-content"],
  "recipe-explorer": ["book-content", "book-life"],
  "energy-dashboard": ["book-science", "book-engineering"],
  "ai-art-gallery": ["book-ai", "book-art"],
  "carbon-calculator": ["book-science", "book-engineering", "book-life"],
  "sports-training": ["book-life"],
  "travel-planner": ["book-life"],
  "game-collection": ["book-content", "book-art"],
  coursenotes: ["book-learning", "book-content"],
  knowledgehub: ["book-learning", "book-research"],
  learn: ["book-learning"],
  reading: ["book-learning", "book-content"],
  devhub: ["book-learning", "book-dev"],
  "language-forge": ["book-learning", "book-content"],
  "math-workshop": ["book-science", "book-learning"],
  "psychology-explorer": ["book-science", "book-learning"],
  "legal-knowledge": ["book-business", "book-research"],
  "history-timeline": ["book-research", "book-learning"],
  "legal-templates": ["book-business", "book-research"],
  "philosophy-archive": ["book-research", "book-learning"],
  "religion-compare": ["book-research", "book-learning"],
  "science-lab": ["book-science", "book-research"],
  "engineering-calc": ["book-engineering", "book-science"],
  "chat-playground": ["book-ai", "book-dev"],
  "text-summarizer": ["book-ai", "book-dev"],
  "recommendation-engine": ["book-ai", "book-dev"],
  "sentiment-analyzer": ["book-ai", "book-dev"],
  mcplist: ["book-ai", "book-dev"],
  "prompt-library": ["book-ai", "book-dev"],
  "mcp-server": ["book-ai", "book-dev"],
  "solo-empire-cli": ["book-dev", "book-business"],
  "bookchaowalit-portfolio-mobile": ["book-dev", "book-art"],
};

/** Redirects the first taxonomy's broad IDs to the workspace IDs. */
export const legacyProjectDomainRedirects: Record<string, ProjectDomain> = {
  development: "book-dev",
  "ai-data": "book-ai",
  science: "book-science",
  engineering: "book-engineering",
  "art-design": "book-art",
  "business-operations": "book-business",
  "content-media": "book-content",
  "education-knowledge": "book-learning",
  "health-life": "book-life",
  community: "book-community",
};

export function isProjectDomain(value: string): value is ProjectDomain {
  return projectDomainOrder.includes(value as ProjectDomain);
}

export function getCanonicalProjectDomain(value: string): ProjectDomain | null {
  if (isProjectDomain(value)) return value;
  return legacyProjectDomainRedirects[value] ?? null;
}

export function getProjectDomains(
  project: Pick<AppProject, "slug" | "category" | "domains">
): ProjectDomain[] {
  const assigned = project.domains ?? projectDomainOverrides[project.slug] ?? categoryFallback[project.category];
  // Every item in this portfolio is software or a software-backed product;
  // Book Dev is therefore the implementation workspace for the full gallery.
  return Array.from(new Set<ProjectDomain>(["book-dev", ...assigned]));
}

export function getProjectsForDomain(domain: ProjectDomain): AppProject[] {
  return allProjects.filter((project) => getProjectDomains(project).includes(domain));
}

export function getActiveProjectDomains(): ProjectDomain[] {
  return projectDomainOrder.filter((domain) => getProjectsForDomain(domain).length > 0);
}
