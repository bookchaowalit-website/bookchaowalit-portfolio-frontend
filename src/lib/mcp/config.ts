/**
 * MCP Server Configuration
 */

export const MCP_SERVER_INFO = {
  name: 'bookchaowalit-portfolio-mcp',
  version: '1.0.0',
  description: 'MCP Server for Chaowalit Greepoke\'s Portfolio - Provides access to projects, skills, blog posts, and GitHub activity',
  author: 'Chaowalit Greepoke',
} as const;

export const MCP_CAPABILITIES = {
  tools: {},
  resources: {
    subscribe: false,
    listChanged: false,
  },
} as const;
