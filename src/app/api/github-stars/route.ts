import { NextResponse } from "next/server";

interface RepoStars {
  slug: string;
  stars: number;
}

const GITHUB_USER = "bookchaowalit";
const CACHE_TTL = 3600_000; // 1 hour

let cached: { data: RepoStars[]; timestamp: number } | null = null;

export async function GET() {
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return NextResponse.json(cached.data);
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&type=owner&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json([]);
    }

    const repos: { name: string; stargazers_count: number }[] = await res.json();

    const data: RepoStars[] = repos.map((r) => ({
      slug: r.name.replace(`bookchaowalit-`, "").replace("-frontend", ""),
      stars: r.stargazers_count,
    }));

    cached = { data, timestamp: Date.now() };
    return NextResponse.json(data);
  } catch {
    return NextResponse.json([]);
  }
}
