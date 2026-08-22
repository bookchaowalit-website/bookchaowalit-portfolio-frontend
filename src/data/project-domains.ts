import {
  allProjects,
  type AppProject,
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
  project: Pick<AppProject, "domains">
): ProjectDomain[] {
  // Every item in this portfolio is software or a software-backed product;
  // Book Dev is therefore the only active workspace until new workspaces get
  // explicit assignments on future project records.
  return project.domains?.length ? project.domains : ["book-dev"];
}

export function getProjectsForDomain(domain: ProjectDomain): AppProject[] {
  return allProjects.filter((project) => getProjectDomains(project).includes(domain));
}

export function getActiveProjectDomains(): ProjectDomain[] {
  return projectDomainOrder.filter((domain) => getProjectsForDomain(domain).length > 0);
}
