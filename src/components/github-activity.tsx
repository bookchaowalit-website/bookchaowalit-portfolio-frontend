'use client';

import { useEffect, useState } from 'react';

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
    fetch('/api/github')
      .then((r) => {
        if (!r.ok) throw new Error(`Status ${r.status}`);
        return r.json();
      })
      .then((json) => {
        if (!mounted) return;
        setData(json);
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
      <section className="rounded-lg border p-4 bg-white">
        <h3 className="text-lg font-semibold">Latest GitHub activity</h3>
        <p className="text-sm text-red-600">{error}</p>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="rounded-lg border p-4 bg-white">
        <h3 className="text-lg font-semibold">Latest GitHub activity</h3>
        <p className="text-sm text-gray-500">Loading…</p>
      </section>
    );
  }

  return (
    <section className="rounded-lg border p-4 bg-white">
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-semibold">Latest GitHub activity</h3>
        <small className="text-sm text-gray-500">Updated {new Date(data.fetchedAt).toLocaleString()}</small>
      </div>
      <ul className="mt-3 space-y-3">
        {data.repos.map((r) => (
          <li key={r.url} className="flex flex-col">
            <a className="text-sm font-medium text-sky-600 hover:underline" href={r.url} target="_blank" rel="noreferrer">
              {r.name}
            </a>
            <div className="text-xs text-gray-600">
              {r.description ?? <span className="text-gray-400">No description</span>}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {r.language ? <span className="mr-2">{r.language}</span> : null}
              {r.stars ? <span>★ {r.stars}</span> : null}
              <span className="ml-2">· Updated {new Date(r.updatedAt).toLocaleDateString()}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
