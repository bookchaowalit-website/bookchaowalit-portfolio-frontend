/**
 * MCP Server Types
 * Defines types for MCP (Model Context Protocol) server implementation
 */

export interface McpTool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
}

export interface McpToolResult {
  content: Array<{
    type: 'text' | 'image' | 'resource';
    text?: string;
    data?: string;
    mimeType?: string;
  }>;
  isError?: boolean;
}

export interface McpServerInfo {
  name: string;
  version: string;
  description: string;
  author: string;
}

export interface PortfolioData {
  projects: Project[];
  skills: Skills;
  contact: ContactInfo;
  blog: BlogPost[];
  github: GithubRepo[];
}

export interface Project {
  name: string;
  description: string;
  url: string;
  github?: string;
  technologies: string[];
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  databases: string[];
  cloud: string[];
}

export interface ContactInfo {
  name: string;
  title: string;
  location: string;
  email?: string;
  social?: Record<string, string>;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category?: string;
}

export interface GithubRepo {
  name: string;
  description: string | null;
  url: string;
  updatedAt: string;
  stars: number;
  language: string | null;
}
