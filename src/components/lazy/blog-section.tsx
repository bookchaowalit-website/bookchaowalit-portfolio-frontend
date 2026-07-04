"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';
import { StickyNote } from '@/components/ui/notebook-elements';
import { MixedTypographyTitle } from '@/components/ui/mixed-typography';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
}

export function BlogSection({ blogPosts = [] }: { blogPosts?: BlogPost[] }) {
  const t = useTranslations('home');

  return (
    <section className="space-y-8">
      <MixedTypographyTitle
        words={[
          { text: t('blogTitleWord1'), style: "cursive", size: "lg" },
          { text: t('blogTitleWord2'), style: "bubble", size: "lg" },
          { text: t('blogTitleWord3'), style: "filled", size: "lg" }
        ]}
      />
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => {
            const colors: Array<"yellow" | "pink" | "green" | "blue"> = ["yellow", "pink", "green"];
            const rotations = [-2, 1, -1];
            return (
            <Link key={post.slug || index} href={{pathname: '/blog/[slug]', params: {slug: post.slug}}}>
              <StickyNote color={colors[index % 3]} rotation={rotations[index % 3]} className="cursor-pointer h-full p-5">
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
