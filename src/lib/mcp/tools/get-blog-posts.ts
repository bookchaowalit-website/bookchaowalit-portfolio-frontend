/**
 * MCP Tool: Get Blog Posts
 * Returns information about Chaowalit's blog posts
 */

import type { McpTool, McpToolResult } from '../types';
import { getAllBlogPosts } from '../../../lib/blog';

export const getBlogPostsTool: McpTool = {
  name: 'get_blog_posts',
  description: 'Get a list of Chaowalit Greepoke\'s blog posts with titles, excerpts, publication dates, reading time, and tags.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'number',
        description: 'Maximum number of posts to return. If not provided, returns all posts.',
        minimum: 1,
        maximum: 50,
      },
      featured: {
        type: 'boolean',
        description: 'If true, only return featured posts. If false or not provided, return all posts.',
      },
      tag: {
        type: 'string',
        description: 'Filter posts by tag. Returns posts that match this tag.',
      },
    },
  },
};

export async function handleGetBlogPosts(args: Record<string, unknown>): Promise<McpToolResult> {
  try {
    let posts = getAllBlogPosts();

    // Filter by featured if requested
    if (args.featured === true) {
      posts = posts.filter(p => p.featured);
    }

    // Filter by tag if requested
    if (args.tag && typeof args.tag === 'string') {
      posts = posts.filter(p =>
        p.tags.some(postTag =>
          postTag.toLowerCase() === (args.tag as string).toLowerCase()
        )
      );
    }

    // Apply limit if specified
    if (args.limit && typeof args.limit === 'number') {
      posts = posts.slice(0, Math.min(args.limit, 50));
    }

    const postsData = posts.map(post => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
      readingTime: post.readTime,
      tags: post.tags,
      featured: post.featured,
      author: post.author,
    }));

    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          success: true,
          posts: postsData,
          count: postsData.length,
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
