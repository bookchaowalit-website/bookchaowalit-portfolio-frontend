/**
 * MCP Tool: Get Single Blog Post
 * Returns full content of a specific blog post
 */

import type { McpTool, McpToolResult } from '../types';
import { getBlogPost } from '../../../lib/blog';

export const getBlogPostTool: McpTool = {
  name: 'get_blog_post',
  description: 'Get the full content of a specific blog post by slug. Includes title, excerpt, full content, author, publication date, reading time, and tags.',
  inputSchema: {
    type: 'object',
    properties: {
      slug: {
        type: 'string',
        description: 'The slug of the blog post to retrieve.',
      },
    },
    required: ['slug'],
  },
};

export async function handleGetBlogPost(args: Record<string, unknown>): Promise<McpToolResult> {
  try {
    const slug = args.slug as string;

    if (!slug) {
      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            success: false,
            error: 'Slug parameter is required',
          }, null, 2),
        }],
        isError: true,
      };
    }

    const post = getBlogPost(slug);

    if (!post) {
      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            success: false,
            error: `Blog post with slug "${slug}" not found`,
          }, null, 2),
        }],
        isError: true,
      };
    }

    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          success: true,
          post: {
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            content: post.content,
            author: post.author,
            publishedAt: post.publishedAt,
            readingTime: post.readTime,
            tags: post.tags,
            featured: post.featured,
            image: post.image,
          },
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
