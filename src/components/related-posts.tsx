import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";
import { type BlogPost } from "@/lib/blog";
import { Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface RelatedPostsProps {
  posts: BlogPost[];
  labels: {
    title: string;
    readMore: string;
    minRead: string;
  };
}

export function RelatedPosts({ posts, labels }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="my-12 print:hidden">
      <h2 className="text-2xl font-bold mb-6">{labels.title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden transition-shadow hover:shadow-md"
          >
            {post.image && (
              <div className="aspect-video overflow-hidden bg-muted relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-4">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="font-semibold leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
                <Link
                  href={`/blog/${post.slug}` as any}
                  className="flex items-center gap-1 text-primary hover:underline font-medium"
                >
                  {labels.readMore}
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
