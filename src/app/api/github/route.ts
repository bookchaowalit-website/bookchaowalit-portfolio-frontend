import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

type Repo = {
  name: string;
  description: string | null;
  url: string;
  updatedAt: string;
  stars: number;
  language: string | null;
};

const GITHUB_API = 'https://api.github.com';

async function fetchWithAuth(url: string, attempts = 2) {
  const token = process.env.GITHUB_TOKEN;
  const headers: Record<string, string> = {
    'User-Agent': 'portfolio-edge',
    Accept: 'application/vnd.github+json',
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  let lastError: any = null;
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, { headers });
      if (res.ok) return res;
      // For client errors (other than rate limit) return immediately
      if (res.status >= 400 && res.status < 500) return res;
      lastError = res;
    } catch (err) {
      lastError = err;
    }
    await new Promise((r) => setTimeout(r, 200 * (i + 1)));
  }

  if (lastError && typeof lastError.text === 'function') {
    const text = await lastError.text().catch(() => null);
    const body = { error: 'GitHub fetch failed', details: text };
    return new Response(JSON.stringify(body), { status: 502, headers: { 'Content-Type': 'application/json' } });
  }
  throw lastError;
}

export async function GET(req: NextRequest) {
  const username = process.env.GITHUB_USERNAME;
  if (!username) {
    return NextResponse.json({ error: 'GITHUB_USERNAME not set' }, { status: 400 });
  }

  try {
    const reposRes = await fetchWithAuth(`${GITHUB_API}/users/${username}/repos?per_page=8&sort=updated&type=owner`);
    if (!reposRes.ok) {
      const status = (reposRes as Response).status;
      // Detect rate limiting and return 429 with Retry-After when possible
      if (status === 403 && typeof (reposRes as Response).headers?.get === 'function' && (reposRes as Response).headers.get('x-ratelimit-remaining') === '0') {
        const reset = (reposRes as Response).headers.get('x-ratelimit-reset');
        const retryAfter = reset ? Math.max(0, parseInt(reset) - Math.floor(Date.now() / 1000)) : 300;
        return NextResponse.json({ error: 'rate_limited', message: 'GitHub API rate limit reached', retryAfter }, { status: 429, headers: { 'Cache-Control': 's-maxage=300, stale-while-revalidate=600', 'Retry-After': String(retryAfter) } });
      }

      const text = await (reposRes as Response).text().catch(() => null);
      const body = { error: 'GitHub fetch failed', status, details: text };
      return NextResponse.json(body, { status: 502, headers: { 'Cache-Control': 's-maxage=30, stale-while-revalidate=60' } });
    }

    const reposJson = await reposRes.json();
    const repos: Repo[] = reposJson.map((r: any) => ({
      name: r.name,
      description: r.description,
      url: r.html_url,
      updatedAt: r.updated_at,
      stars: r.stargazers_count || 0,
      language: r.language || null,
    }));

    const body = { repos, fetchedAt: new Date().toISOString(), username };
    return NextResponse.json(body, {
      status: 200,
      headers: {
        'Cache-Control': 's-maxage=60, stale-while-revalidate=300',
      },
    });
  } catch (err) {
    return NextResponse.json({ error: 'internal', message: String(err) }, { status: 500 });
  }
}
