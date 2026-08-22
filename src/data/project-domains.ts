import {
  allProjects,
  type AppProject,
  type ProjectCategory,
  type ProjectDomain,
} from "./app-projects";

export type { ProjectDomain } from "./app-projects";

export const projectDomainOrder: ProjectDomain[] = [
  "development",
  "ai-data",
  "science",
  "engineering",
  "art-design",
  "business-operations",
  "content-media",
  "education-knowledge",
  "health-life",
  "community",
];

export const projectDomainMeta: Record<
  ProjectDomain,
  { labelKey: string; descriptionKey: string; icon: string }
> = {
  development: {
    labelKey: "domain_development",
    descriptionKey: "domainDesc_development",
    icon: "code",
  },
  "ai-data": {
    labelKey: "domain_ai-data",
    descriptionKey: "domainDesc_ai-data",
    icon: "brain",
  },
  science: {
    labelKey: "domain_science",
    descriptionKey: "domainDesc_science",
    icon: "flask",
  },
  engineering: {
    labelKey: "domain_engineering",
    descriptionKey: "domainDesc_engineering",
    icon: "cog",
  },
  "art-design": {
    labelKey: "domain_art-design",
    descriptionKey: "domainDesc_art-design",
    icon: "palette",
  },
  "business-operations": {
    labelKey: "domain_business-operations",
    descriptionKey: "domainDesc_business-operations",
    icon: "briefcase",
  },
  "content-media": {
    labelKey: "domain_content-media",
    descriptionKey: "domainDesc_content-media",
    icon: "pen-line",
  },
  "education-knowledge": {
    labelKey: "domain_education-knowledge",
    descriptionKey: "domainDesc_education-knowledge",
    icon: "book-open",
  },
  "health-life": {
    labelKey: "domain_health-life",
    descriptionKey: "domainDesc_health-life",
    icon: "heart-pulse",
  },
  community: {
    labelKey: "domain_community",
    descriptionKey: "domainDesc_community",
    icon: "users",
  },
};

const categoryFallback: Record<ProjectCategory, ProjectDomain> = {
  business: "business-operations",
  marketing: "business-operations",
  content: "content-media",
  design: "art-design",
  health: "health-life",
  education: "education-knowledge",
  social: "community",
  tech: "development",
  client: "business-operations",
};

// Explicit exceptions let the first taxonomy reflect the work already present
// without forcing a risky manual rewrite of every legacy project entry.
const projectDomainOverrides: Record<string, ProjectDomain[]> = {
  "history-timeline": ["education-knowledge"],
  "legal-templates": ["business-operations"],
  "philosophy-archive": ["education-knowledge"],
  "religion-compare": ["education-knowledge"],
  "science-lab": ["science"],
  lab: ["science"],
  "engineering-calc": ["engineering"],
  "energy-dashboard": ["engineering"],
  "carbon-footprint": ["science"],
  "psychology-explorer": ["science", "education-knowledge"],
  "math-workshop": ["science", "education-knowledge"],
  "chat-playground": ["ai-data", "development"],
  "text-summarizer": ["ai-data", "development"],
  "recommendation-engine": ["ai-data"],
  "sentiment-analyzer": ["ai-data"],
  "ai-art-gallery": ["ai-data", "art-design"],
  mcplist: ["ai-data", "development"],
  "prompt-library": ["ai-data", "development"],
  "mcp-server": ["ai-data", "development"],
  devhub: ["development", "education-knowledge"],
  "solo-empire-cli": ["development", "engineering"],
  "bookchaowalit-portfolio-mobile": ["development", "art-design"],
};

export function isProjectDomain(value: string): value is ProjectDomain {
  return projectDomainOrder.includes(value as ProjectDomain);
}

export function getProjectDomains(
  project: Pick<AppProject, "slug" | "category" | "domains">
): ProjectDomain[] {
  return project.domains ?? projectDomainOverrides[project.slug] ?? [categoryFallback[project.category]];
}

export function getProjectsForDomain(domain: ProjectDomain): AppProject[] {
  return allProjects.filter((project) => getProjectDomains(project).includes(domain));
}

export function getActiveProjectDomains(): ProjectDomain[] {
  return projectDomainOrder.filter((domain) => getProjectsForDomain(domain).length > 0);
}
