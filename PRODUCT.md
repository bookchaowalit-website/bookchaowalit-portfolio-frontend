# bookchaowalit-portfolio-frontend — Interview Case Study

*Tier A Interview Flagship in the
[Portfolio Interview Readiness Audit](../../../../../../docs/systems/interview-readiness-audit.md)
(solo-empire workspace — not part of this repo). This is the personal
site itself — the one an interviewer actually lands on first, and the
natural hub for linking every other case study in this audit. Audited
claims-first, as instructed: project counts, links, contact flow, SEO,
accessibility, performance — before deciding whether to touch the
identity at all.*

## Verdict up front: preserve, don't redesign

Every other Tier A flagship in this audit had a real bug live in
production behavior (auth doesn't survive refresh, a React hooks crash
risk, a vulnerable file-parser, dead tests). This one didn't — the
substantial findings here were both about **tooling that was lying about
what it checked**, not about the product itself being wrong. That's a
meaningfully different, better starting position, and the right response
to it is precision fixes, not a redesign. The README's claims turned out
to be accurate more often than not, which is itself notable given the
pattern across this whole audit (`booknbook`'s stale "98 projects",
`localcrm-frontend`'s several real gaps).

## Who this is for

Recruiters, interviewers, and prospective clients evaluating Chaowalit
Greepoke — this site is the root of trust for every claim made in every
other case study in this audit. If a reviewer doesn't believe this page,
they won't believe `PRODUCT.md` in any of the flagship repos either.

## What was audited, and what was found

### Project counts & claims — mostly accurate, one stale one fixed

The real data source (`src/data/app-projects.ts`) has **129 projects**
(122 live, 4 wip, 3 archived), every single one with a real `caseStudy`
object (challenge/solution/result) — not just a name and a link. Site-wide
copy consistently says **"100+"**, which is honestly hedged (129 ≥ 100,
the claim ages gracefully as the count grows) — no fix needed there.

One place *wasn't* hedged: the MCP `get_projects` tool's description
literally said *"Returns all 100 projects"* — a precise, wrong claim, same
species of bug as `booknbook`'s hardcoded "98 Projects" count. Unlike the
prose copy, the tool's actual return payload was already correct and
dynamic (`totalProjects: allProjects.length`) — only the human-readable
description text had gone stale. Fixed to interpolate the real count so
it can't go stale again.

### Links — structurally sound

Project URLs are generated programmatically (`vercel(slug)` /
`gh(slug)` / `sub(slug)` helper functions from each project's `slug`),
not hand-typed — so there's no category of "someone fat-fingered a URL"
bug possible here. Whether all 129 target subdomains are actually *live*
is a separate question this pass didn't chase down (many are the same
Tier C portfolio-generator repos audited in Phase 1, several of which are
unedited scaffolds) — that's tracked at the portfolio level already, not
a bug specific to this repo. No `href="#"` placeholder links found
anywhere (unlike `booknbook`'s footer before this session).

### Contact flow — solid, one self-documented gap

Server-side validation (required fields, email format regex), graceful
degradation when `RESEND_API_KEY` is unset (returns success with a
"logged server-side" note instead of erroring), reply-to set to the
sender. One honest gap already flagged in the code itself: the send-from
address is Resend's sandbox domain (`onboarding@resend.dev`) with a
comment reading *"Use your verified domain"* — meaning production email
currently doesn't send from `bookchaowalit.com`, which affects
deliverability/branding. That's a Resend-dashboard action (domain
verification), not something fixable in code — left as a known,
self-documented gap.

### SEO — claims verified accurate

Checked the specific, falsifiable claims rather than trusting the
prose: sitemap (`src/app/sitemap.ts`, real), robots.txt (matches exactly
what the README shows), per-page `generateMetadata()` with OG/Twitter
cards, programmatic favicons (`icon.tsx`/`apple-icon.tsx`). All real.

### Accessibility — mostly accurate, one real gap found and fixed

Verified against the README's specific WCAG table, not the general
claim: skip-to-content link (real), `ErrorBoundary` with `role="alert"`
(real), `aria-live="polite"` used in 5 real components, `<label
htmlFor>` on the contact form (real), `lang={locale}` on `<html>` (real).

One claim didn't hold up: **"Minimum 44px height/width on all buttons."**
The shared shadcn/ui `Button` component's actual size variants were
`h-10` (40px) for default/sm/lg, and `size-9` (36px) for the `icon`
variant — none of the four size variants actually met 44px in both
dimensions. Fixed by bumping to `h-11`/`size-11` (44px) across all
variants, so the component now matches what the README already claimed
about it. This is the one visual change in this pass — small (4px per
button), applies site-wide via the shared primitive, and makes a
documented accessibility claim true instead of aspirational.

### Performance — the real finding of this pass

The build succeeds cleanly: 258+ statically-generated project pages, 45+
blog tag pages, per-page dynamic OG images, full bilingual RSS. Shared
"First Load JS" is 537 kB with a single 534 kB vendor chunk — vendor
chunking is genuinely happening (matches the README's claim literally),
but it produces one large blob rather than more granular route-based
splitting. Not fixed in this pass (a real bundle-splitting pass needs
`build:analyze` output studied properly, not a guess) — flagged as the
top "what I'd improve next" item.

**The actual headline finding wasn't about the product — it was about the
tooling that verifies it.** `npm run lint` was reporting **10,867
problems (720 errors)** before this pass. Nearly all of them were in
`next-env.d.ts` (an auto-generated Next.js file) and `public/sw.js` (a
*compiled* service worker, not source) — files that should never be
linted at all. Root cause: `eslint.config.mjs`'s `ignores` array was
nested inside the same config object as a `rules` override. In ESLint's
flat-config format, `ignores` only acts as a *global* exclusion when it's
the sole key in its own config object — bundled with `rules` like this,
it silently scoped to nothing, and the `next/core-web-vitals` /
`next/typescript` rule sets linted the generated files anyway. Split it
into its own leading config object (plus added `public/sw.js`, which
wasn't even in the list). Result: **10,867 → 1** real, pre-existing
warning (an `<img>` vs. `next/image` suggestion). That's not "the code
got better" — the code was already this clean. The lint gate had just
never actually been checking it.

## What I'm proud of pointing to

Not a bug I fixed — a false signal I removed. "The lint report said 720
errors; I found the config bug that made all 720 of them fake, and the
real number was zero" is a stronger interview answer than any individual
code fix in this pass, because it's about knowing when a tool's output
should be trusted versus interrogated.

## What I'd improve next

1. Study `build:analyze` output and split the 534 kB vendor chunk more
   granularly — MDX/animation/i18n libraries are likely bundled together
   even on routes that don't need all of them.
2. **Resend domain (ops):** deferred by owner 2026-08-11. Code supports
   `RESEND_FROM`; sandbox remains the fallback. See `RESEND-DOMAIN-SETUP.md`.
3. **Live-link honesty (done 2026-08-11):** 29 declared-`live` → `wip`
   where demos were unreachable; booknbook URL fixed to consulting host.
4. **UI/UX a11y pass (done 2026-08-11):** page titles use semantic
   `MixedTypographyTitle as="h1"`; homepage sections `as="h2"`; theme/help
   use 44px `Button size="icon"`; project filters/GitHub/stats banner
   mobile layout tightened. Still Planned: measured Lighthouse run.
5. Optional Lighthouse numbers for interview evidence (still Planned).

## Status

Interview case-study + verification pass: 2026-08-05. Fixed: MCP tool's
stale project-count description, button touch-target sizing (40px/36px →
44px across all variants), an unused prop, and — the significant one — a
broken ESLint config that had been silently linting generated files
instead of real source for an unknown period. `tsc --noEmit`, `eslint`
(now 0 errors, 1 pre-existing warning), and `next build` all verified
clean. Visual identity, copy, and layout were deliberately not touched
beyond the two precision fixes above.
