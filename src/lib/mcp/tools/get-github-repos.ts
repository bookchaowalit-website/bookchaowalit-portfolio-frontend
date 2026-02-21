/**
 * MCP Tool: Get GitHub Repositories
 * Returns information about Chaowalit's GitHub repositories
 */

import type { McpTool, McpToolResult } from '../types';

export const getGithubReposTool: McpTool = {
  name: 'get_github_repos',
  description: 'Get information about Chaowalit Greepoke\'s GitHub repositories including name, description, URL, stars, language, and last updated date. Fetches live data from GitHub API.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'number',
        description: 'Maximum number of repositories to return. Default is 8.',
        minimum: 1,
        maximum: 30,
        default: 8,
      },
    },
  },
};

export async function handleGetGithubRepos(args: Record<string, unknown>): Promise<McpToolResult> {
  try {
    const limit = args.limit && typeof args.limit === 'number'
      ? Math.min(Math.max(args.limit, 1), 30)
      : 8;

    // Call the GitHub API endpoint
    const githubApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/github`;
    const response = await fetch(githubApiUrl);

    if (!response.ok) {
      throw new Error(`GitHub API returned status ${response.status}`);
    }

    const data = await response.json();

    if (!data.repos || !Array.isArray(data.repos)) {
      throw new Error('Invalid response from GitHub API');
    }

    // Apply limit
    const repos = data.repos.slice(0, limit);

    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          success: true,
          repos: repos,
          count: repos.length,
          username: data.username,
          fetchedAt: data.fetchedAt,
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
