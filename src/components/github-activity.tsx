'use client';

import { useEffect, useState } from 'react';
import { NotebookPaper } from '@/components/ui/notebook-elements';

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
      <div className="py-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Latest GitHub activity</h3>
        <p className="text-sm text-destructive">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="py-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Latest GitHub activity</h3>
        <p className="text-sm text-muted-foreground">Loading…</p>
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="flex items-baseline justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Latest GitHub activity</h3>
        <small className="text-sm text-muted-foreground">Updated {new Date(data.fetchedAt).toLocaleString()}</small>
      </div>
      <ul className="space-y-3">
        {data.repos.map((r) => (
          <li key={r.url} className="flex flex-col">
            <a className="text-sm font-medium text-foreground hover:underline" href={r.url} target="_blank" rel="noopener noreferrer">
              {r.name}
            </a>
            <div className="text-xs text-muted-foreground">
              {r.description ?? <span className="text-muted-foreground/70">No description</span>}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {r.language ? <span className="mr-2">{r.language}</span> : null}
              {r.stars ? <span>★ {r.stars}</span> : null}
              <span className="ml-2">· Updated {new Date(r.updatedAt).toLocaleDateString()}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
