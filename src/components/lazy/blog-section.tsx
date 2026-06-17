import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { getAllBlogPosts } from '@/lib/blog';
import { getTranslations } from 'next-intl/server';
import { NotebookPaper, StickyNote } from '@/components/ui/notebook-elements';

export async function BlogSection() {
  const t = await getTranslations('home');

  // Get the latest 3 blog posts
  const blogPosts = getAllBlogPosts().slice(0, 3);

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-balance">{t('latestBlogTitle')}</h2>
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => {
            const colors: Array<"yellow" | "pink" | "green" | "blue"> = ["yellow", "pink", "green"];
            const rotations = [-2, 1, -1];
            return (
            <Link key={index} href={{pathname: '/blog/[slug]', params: {slug: post.slug}}}>
              <StickyNote color={colors[index]} rotation={rotations[index]} className="cursor-pointer h-full p-5 hover:scale-105 transition-transform">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </StickyNote>
            </Link>
            );
          })}
        </div>
      </div>
      <div className="text-center">
        <Button variant="outline" asChild>
          <Link href="/blog">{t('readAllPosts')}</Link>
        </Button>
      </div>
    </section>
  );
}
