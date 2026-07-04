import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  readTime: string
  tags: string[]
  featured: boolean
  image?: string;
}

const blogDirectory = path.join(process.cwd(), 'content/blog')

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const filenames = fs.readdirSync(blogDirectory)
  const posts = filenames
    .filter((name) => name.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(blogDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      const { text } = readingTime(content)

      return {
        slug: filename.replace(/\.mdx$/, ''),
        title: data.title || '',
        excerpt: data.excerpt || '',
        content,
        author: data.author || 'Chaowalit Greepoke',
        publishedAt: data.publishedAt || '',
        readTime: text,
        tags: data.tags || [],
        featured: data.featured || false,
        image: data.image
      } as BlogPost
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return posts
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const filePath = path.join(blogDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    const { text } = readingTime(content)

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      content,
      author: data.author || 'Chaowalit Greepoke',
      publishedAt: data.publishedAt || '',
      readTime: text,
      tags: data.tags || [],
      featured: data.featured || false,
      image: data.image
    }
  } catch {
    return null
  }
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllBlogPosts().filter(post => post.featured)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllBlogPosts().filter(post => 
    post.tags.some(postTag => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  )
}

/** Convert a tag name to a URL-safe slug */
export function tagToSlug(tag: string): string {
  return tag.toLowerCase().replace(/[\/\s]+/g, '-');
}

/** Find the original tag string from a slug by comparing slugified versions */
export function findOriginalTagFromSlug(slug: string): string {
  const tagSet = new Set<string>();
  getAllBlogPosts().forEach(p => p.tags.forEach(t => tagSet.add(t)));
  for (const t of tagSet) {
    if (tagToSlug(t) === slug) return t;
  }
  // Fallback: reverse the slug
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}
