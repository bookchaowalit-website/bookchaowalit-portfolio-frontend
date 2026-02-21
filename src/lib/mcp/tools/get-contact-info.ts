/**
 * MCP Tool: Get Contact Info
 * Returns contact information for Chaowalit
 */

import type { McpTool, McpToolResult } from '../types';

export const getContactInfoTool: McpTool = {
  name: 'get_contact_info',
  description: 'Get contact information for Chaowalit Greepoke including name, title, location, and available contact channels.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export async function handleGetContactInfo(): Promise<McpToolResult> {
  try {
    const contactInfo = {
      name: 'Chaowalit Greepoke (Book)',
      title: 'Tech Generalist & Solopreneur',
      location: 'Bangkok, Thailand',
      languages: ['Thai', 'English'],
      email: process.env.CONTACT_EMAIL || 'contact@bookchaowalit.com',
      website: 'https://bookchaowalit.com',
      social: {
        github: 'https://github.com/bookchaowalit',
        linkedin: 'https://linkedin.com/in/bookchaowalit',
        twitter: 'https://twitter.com/bookchaowalit',
      },
      services: [
        'AI Integration',
        'Full-Stack Development',
        'Data Analytics',
        'Business Growth Consulting',
        'SEO & Digital Marketing',
      ],
      availability: 'Available for freelance projects and consulting',
      responseTime: 'Typically responds within 24-48 hours',
    };

    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          success: true,
          contact: contactInfo,
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
