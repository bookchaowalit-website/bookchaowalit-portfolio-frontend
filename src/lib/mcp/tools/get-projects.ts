/**
 * MCP Tool: Get Projects
 * Returns information about Chaowalit's projects
 */

import type { McpTool, McpToolResult } from '../types';
import { projects } from '../../../data/projects';

export const getProjectsTool: McpTool = {
  name: 'get_projects',
  description: 'Get information about Chaowalit Greepoke\'s projects including title, description, technologies used, demo URLs, and GitHub repositories.',
  inputSchema: {
    type: 'object',
    properties: {
      featured: {
        type: 'boolean',
        description: 'If true, only return featured projects. If false or not provided, return all projects.',
      },
    },
  },
};

export async function handleGetProjects(args: Record<string, unknown>): Promise<McpToolResult> {
  try {
    const featuredOnly = args.featured === true;

    let filteredProjects = projects;
    if (featuredOnly) {
      filteredProjects = projects.filter(p => p.featured);
    }

    const projectsData = filteredProjects.map(project => ({
      title: project.title,
      description: project.longDescription || project.description,
      technologies: project.tech,
      demoUrl: project.demoUrl,
      githubUrl: project.githubUrl,
      featured: project.featured,
      highlights: project.highlights || [],
    }));

    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          success: true,
          projects: projectsData,
          count: projectsData.length,
        }, null, 2),
      }],
    };
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error occurred',
        }, null, 2),
      }],
      isError: true,
    };
  }
}
