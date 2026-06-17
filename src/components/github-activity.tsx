'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { StickyNote } from '@/components/ui/notebook-elements';
import { MixedTypographyTitle } from '@/components/ui/mixed-typography';

type Repo = {
  name: string;
  description: string | null;
  url: string;
  updatedAt: string;
  stars: number;
  language: string | null;
};

export default function GitHubActivity() {
  const [data, setData] = useState<{ repos: Repo[]; fetchedAt: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let mounted = true;

    // Check sessionStorage cache first (5-min TTL)
    try {
      const cached = sessionStorage.getItem('github-activity');
      if (cached) {
        const parsed = JSON.parse(cached);
        const age = Date.now() - new Date(parsed.fetchedAt).getTime();
        if (age < 5 * 60 * 1000) {
          setData(parsed);
          return;
        }
      }
    } catch { /* ignore cache errors */ }

    fetch('/api/github')
      .then((r) => {
        if (!r.ok) throw new Error(`Status ${r.status}`);
        return r.json();
      })
      .then((json) => {
        if (!mounted) return;
        setData(json);
        // Cache in sessionStorage
        try { sessionStorage.setItem('github-activity', JSON.stringify(json)); } catch { /* ignore */ }
      })
      .catch((err) => {
        if (!mounted) return;
        console.error('GitHub fetch failed', err);
        setError('Failed to load GitHub data');
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return (
      <section className="space-y-8" aria-label="GitHub activity">
        <MixedTypographyTitle
          words={[
            { text: "Latest", style: "cursive", size: "lg" },
            { text: "GitHub", style: "bubble", size: "lg" },
            { text: "Activity", style: "filled", size: "lg" }
          ]}
        />
        <p className="text-sm text-destructive text-center">{error}</p>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="space-y-8" aria-label="GitHub activity">
        <MixedTypographyTitle
          words={[
            { text: "Latest", style: "cursive", size: "lg" },
            { text: "GitHub", style: "bubble", size: "lg" },
            { text: "Activity", style: "filled", size: "lg" }
          ]}
        />
        <p className="text-sm text-muted-foreground text-center">Loading…</p>
      </section>
    );
  }

  return (
    <section className="space-y-8" aria-label="GitHub activity">
      <MixedTypographyTitle
        words={[
          { text: "Latest", style: "cursive", size: "lg" },
          { text: "GitHub", style: "bubble", size: "lg" },
          { text: "Activity", style: "filled", size: "lg" }
        ]}
      />
      <p className="text-sm text-muted-foreground text-center">Updated {new Date(data.fetchedAt).toLocaleString()}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.repos.map((r, index) => {
          const colors: Array<"yellow" | "pink" | "green" | "blue"> = ["yellow", "pink", "green", "blue"];
          const rotations = [-1.5, 1, -0.5, 1.5];
          return (
            <motion.a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="block"
            >
              <StickyNote color={colors[index % 4]} rotation={rotations[index % 4]} className="cursor-pointer h-full p-5">
                <div className="space-y-2">
                  <h3 className="text-base font-bold line-clamp-1">{r.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {r.description ?? <span className="italic">No description</span>}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                    <span>{r.language ?? ''}</span>
                    <span className="flex items-center gap-2">
                      {r.stars ? <span>★ {r.stars}</span> : null}
                      <span>· {new Date(r.updatedAt).toLocaleDateString()}</span>
                    </span>
                  </div>
                </div>
              </StickyNote>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
