import { NextResponse } from 'next/server';
import { getAllBlogPosts } from '@/lib/blog';

export async function GET() {
  const posts = getAllBlogPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    tags: post.tags,
    publishedAt: post.publishedAt,
  }));

  return NextResponse.json(posts);
}
