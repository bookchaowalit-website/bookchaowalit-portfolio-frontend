/**
 * MCP Tool: Get Skills
 * Returns information about Chaowalit's technical skills
 */

import type { McpTool, McpToolResult } from '../types';

export const getSkillsTool: McpTool = {
  name: 'get_skills',
  description: 'Get information about Chaowalit Greepoke\'s technical skills organized by category (languages, frameworks, databases, cloud/tools).',
  inputSchema: {
    type: 'object',
    properties: {
      category: {
        type: 'string',
        enum: ['languages', 'frameworks', 'databases', 'cloud'],
        description: 'Filter skills by category. If not provided, returns all categories.',
      },
    },
  },
};

const skillsData = {
  languages: [
    'Python', 'C#', 'Java', 'HTML', 'CSS', 'JavaScript', 'TypeScript',
    'PHP', 'Liquid', 'SQL', 'Dart', 'Go'
  ],
  frameworks: [
    'React', 'Next.js', 'Vue', 'Angular', 'Express.js', 'FastAPI',
    '.NET', 'Spring Boot', 'Laravel', 'Flutter', 'Llamaindex',
    'Langchain', 'PyTorch', 'Apache Airflow', 'jQuery'
  ],
  databases: [
    'SQLite', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Neon', 'Supabase'
  ],
  cloud: [
    'DigitalOcean', 'Google Cloud Platform (GCP)', 'Amazon Web Services (AWS)',
    'Docker', 'Kubernetes (K8s)', 'Lens', 'Node.js'
  ],
  libraries: [
    'Pandas', 'NumPy', 'Plotly', 'Axios', 'Hugging Face', 'Go Fiber'
  ]
};

export async function handleGetSkills(args: Record<string, unknown>): Promise<McpToolResult> {
  try {
    const category = args.category as string | undefined;

    let result: Record<string, string[]> = {};

    if (category && category in skillsData) {
      result = { [category]: skillsData[category as keyof typeof skillsData] };
    } else {
      result = skillsData;
    }

    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          success: true,
          skills: result,
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
