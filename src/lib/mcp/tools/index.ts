/**
 * MCP Tools Registry
 * Central registry for all available MCP tools
 */

import { getProjectsTool, handleGetProjects } from './get-projects';
import { getSkillsTool, handleGetSkills } from './get-skills';
import { getBlogPostsTool, handleGetBlogPosts } from './get-blog-posts';
import { getGithubReposTool, handleGetGithubRepos } from './get-github-repos';
import { getContactInfoTool, handleGetContactInfo } from './get-contact-info';
import { getBlogPostTool, handleGetBlogPost } from './get-blog-post';

// Tool definitions
export const mcpTools = [
  getProjectsTool,
  getSkillsTool,
  getBlogPostsTool,
  getBlogPostTool,
  getGithubReposTool,
  getContactInfoTool,
] as const;

export const mcpToolsMap = new Map(
  mcpTools.map(tool => [tool.name, tool])
);

// Export all tool handlers
export {
  handleGetProjects,
  handleGetSkills,
  handleGetBlogPosts,
  handleGetBlogPost,
  handleGetGithubRepos,
  handleGetContactInfo,
};
