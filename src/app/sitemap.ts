import { MetadataRoute } from 'next'
import { allProjects } from '@/data/app-projects'
import { getAllBlogPosts } from '@/lib/blog'
import inventory from '@/content/domain-inventory.json'

type SitemapEntry = {
  url: string
  lastModified?: Date
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly'
  priority?: number
  alternates?: {
    languages?: Record<string, string>
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bookchaowalit.com'

  // Helper: create an entry with EN/TH hreflang alternates
  function entry(
    path: string,
    opts: { changeFrequency?: SitemapEntry['changeFrequency']; priority?: number; lastModified?: Date } = {}
  ): SitemapEntry[] {
    const enUrl = `${baseUrl}/en${path}`
    const thUrl = `${baseUrl}/th${path}`
    const shared = {
      lastModified: opts.lastModified || new Date(),
      changeFrequency: opts.changeFrequency || 'monthly' as const,
      priority: opts.priority ?? 0.5,
    }
    return [
      { ...shared, url: enUrl, alternates: { languages: { en: enUrl, th: thUrl, 'x-default': enUrl } } },
      { ...shared, url: thUrl, alternates: { languages: { en: enUrl, th: thUrl, 'x-default': enUrl } } },
    ]
  }

  // Static pages
  const staticPages: SitemapEntry[] = [
    ...entry('/', { changeFrequency: 'weekly', priority: 1 }),
    ...entry('/about', { changeFrequency: 'monthly', priority: 0.8 }),
    ...entry('/about/fitness', { priority: 0.6 }),
    ...entry('/about/creative', { priority: 0.6 }),
    ...entry('/about/growth', { priority: 0.6 }),
    ...entry('/about/journey', { priority: 0.6 }),
    ...entry('/about/trading', { priority: 0.6 }),
    ...entry('/projects', { changeFrequency: 'weekly', priority: 0.9 }),
    ...entry('/blog', { changeFrequency: 'weekly', priority: 0.8 }),
    ...entry('/contact', { priority: 0.7 }),
    ...entry('/atlas', { changeFrequency: 'weekly', priority: 0.8 }),
    ...entry('/testimonials', { changeFrequency: 'weekly', priority: 0.8 }),
    ...entry('/uses', { priority: 0.7 }),
    ...entry('/now', { changeFrequency: 'weekly', priority: 0.7 }),
    ...entry('/colophon', { priority: 0.6 }),
    ...entry('/live-systems', { changeFrequency: 'weekly', priority: 0.7 }),
    ...entry('/privacy', { changeFrequency: 'yearly', priority: 0.3 }),
    ...entry('/privacy/messenger-bot', { changeFrequency: 'yearly', priority: 0.2 }),
    ...entry('/privacy/web-apps', { changeFrequency: 'yearly', priority: 0.2 }),
  ]

  // Dynamic project pages
  const projectPages: SitemapEntry[] = allProjects.flatMap((project) =>
    entry(`/projects/${project.slug}`, { changeFrequency: 'monthly', priority: 0.7 })
  )

  // Dynamic blog post pages
  const blogPosts = getAllBlogPosts()
  const blogPages: SitemapEntry[] = blogPosts.flatMap((post) =>
    entry(`/blog/${post.slug}`, { changeFrequency: 'monthly', priority: 0.7, lastModified: new Date(post.publishedAt) })
  )

  // Dynamic blog tag pages
  const tagSet = new Set<string>()
  blogPosts.forEach((p) => p.tags.forEach((tag) => tagSet.add(tag)))
  const blogTagPages: SitemapEntry[] = Array.from(tagSet).flatMap((tag) => {
    const slug = tag.toLowerCase().replace(/[\/\s]+/g, '-')
    return entry(`/blog/tags/${slug}`, { changeFrequency: 'weekly', priority: 0.5 })
  })

  // Knowledge domain pages (45 domains from inventory)
  const domainPages: SitemapEntry[] = inventory.domains.map((domain) => {
    const enUrl = `${baseUrl}/en/atlas#${domain.id}`
    const thUrl = `${baseUrl}/th/atlas#${domain.id}`
    return [
      { url: enUrl, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.4, alternates: { languages: { en: enUrl, th: thUrl, 'x-default': enUrl } } },
      { url: thUrl, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.4, alternates: { languages: { en: enUrl, th: thUrl, 'x-default': enUrl } } },
    ]
  }).flat()

  return [...staticPages, ...projectPages, ...blogPages, ...blogTagPages, ...domainPages]
}
