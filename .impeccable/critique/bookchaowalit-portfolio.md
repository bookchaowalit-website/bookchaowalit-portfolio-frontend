---
target: "my design"
total_score: 26
p0_count: 2
p1_count: 3
date: 2026-06-17T00:00:00.000Z
---

# Design Critique: bookchaowalit.com Portfolio

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Nav active states work, but typing animation has no progress indicator |
| 2 | Match System / Real World | 3 | Natural language, but "WIP" and "Archived" jargon for non-dev visitors |
| 3 | User Control and Freedom | 3 | Search shortcuts good, but typing animation can't be skipped |
| 4 | Consistency and Standards | 2 | Shadow inconsistency (blog/skills cards vs flat system), side-stripe borders mixed patterns |
| 5 | Error Prevention | 2 | Contact form validates, but no visible 404 design, external links don't warn |
| 6 | Recognition Rather Than Recall | 3 | Nav labeled, screenshots help, but About dropdown has 6 buried subpages |
| 7 | Flexibility and Efficiency | 3 | "/" search shortcut, Escape to clear, but no filter URL sharing or command palette |
| 8 | Aesthetic and Minimalist Design | 3 | Achromatic system committed, but 8 homepage sections cause fatigue, emoji badges template-like |
| 9 | Error Recovery | 2 | Gallery clears filters, project detail has prev/next, but no breadcrumb or back-to-gallery state |
| 10 | Help and Documentation | 1 | No contextual help, tooltips, or guidance anywhere except contact link |
| **Total** | | **26/40** | **Acceptable** |

## Anti-Patterns Verdict

**LLM assessment**: The portfolio has genuine personality. The notebook/sketchy aesthetic (Kalam, Caveat, Amatic fonts), the mixed typography hero with 5 different text styles, and the fully achromatic OKLCH color system (zero chroma, zero radius) create distinctiveness. This is NOT the typical AI-generated dev portfolio with Fraunces italic + editorial layout.

However, **19 side-stripe borders** (`border-l-4`) across 7 files is an absolute ban violation. The colored timeline borders in about subpages (purple-400, pink-400, green-400, etc.) are the worst offenders. The emoji badges in the about section (🇹🇭 🚀 💼) read as template-like.

**Deterministic scan**:
- **19 side-stripe borders** (`border-l-4`): hero-section (1), contact-client (1), blog-client-wrapper (2), creative-works-client (3), personal-growth-client (7), tech-journey-client (4), business-section (1). **Absolute ban violation.**
- **0 prefers-reduced-motion**: Framer Motion animations throughout (hero spring, typing text, staggered skills, about reveals, button hover scale, footer fade) have **zero reduced-motion fallbacks**. Critical a11y violation.
- **6 shadow inconsistencies**: blog cards (`hover:shadow-lg`), skills cards (`hover:shadow-xl`), dropdown-menu (`shadow-lg`), skip-link (`shadow-lg`). Conflicts with flat 0-radius achromatic system.
- **0 gradient text**: Clean.
- **0 over-rounded corners**: Clean (0px radius system).
- **Skip link exists**: Good a11y.
- **focus-visible on form inputs**: Good a11y.
- **Dark mode muted-foreground contrast failure**: `oklch(0.60 0 0)` on `oklch(0.15 0 0)` = 3.96:1 contrast ratio. Fails WCAG AA (4.5:1) for normal text. Used in nav, project descriptions, footer.

**Visual overlays**: Browser visualization not attempted (dev server not running). Static scan only.

## Overall Impression

The portfolio has a committed visual identity—the achromatic OKLCH system with 0px radius and `gap-px bg-border` grid language is distinctive and intentional. The notebook/sketchy theme adds personality without falling into AI clichés.

The biggest opportunity: **remove the side-stripe borders and add reduced-motion support**. These are blocking issues that violate design system principles and accessibility standards. The shadow inconsistencies and dark mode contrast are secondary but worth fixing.

## What's Working

1. **Achromatic OKLCH system**: Zero chroma colors, 0px radius, `gap-px bg-border` grid. This is distinctive and committed. Not the typical AI cream/sand palette or editorial-typographic lane.

2. **Mixed typography hero**: The 5-style text treatment (block, cursive, outlined, shaded, block) with Caveat script font creates visual personality. The spring animation on the profile image is well-orchestrated.

3. **Notebook/sketchy aesthetic**: Kalam (doodle), Caveat (script), Amatic (comic) fonts with NotebookPaper/SketchyFrame/StudyGuideBox components create a cohesive theme that's genuinely different from typical dev portfolios.

## Priority Issues

**[P0] Side-stripe borders violate absolute ban**
- **What**: 19 instances of `border-l-4` as colored accent across 7 files (hero, contact, blog, 3 about subpages, business section). The about timeline pages use colored borders (purple-400, pink-400, green-400, emerald-400, blue-400, yellow-400, red-400).
- **Why it matters**: Side-stripe borders >1px as colored accent are an absolute ban. They're the "colored accent on cards, list items, callouts" pattern that reads as AI-generated decoration. The about timeline pages are the worst offenders with 14 colored side-stripe borders.
- **Fix**: Rewrite with full borders, background tints, leading numbers/icons, or nothing. For timelines, use a vertical line with dots (not side-stripe). For callouts, use full border or background tint only.
- **Suggested command**: `$impeccable polish`

**[P0] No prefers-reduced-motion support**
- **What**: Framer Motion animations throughout the site (hero spring, typing text, staggered skills badges, about section reveals, button hover scale, footer fade) have **zero** `@media (prefers-reduced-motion: reduce)` alternatives.
- **Why it matters**: Critical accessibility violation. Users with vestibular disorders will experience motion sickness. WCAG 2.3.3 requires motion can be disabled. The entire site is motion-heavy with no escape.
- **Fix**: Add `@media (prefers-reduced-motion: reduce)` CSS to disable Framer Motion animations. Use `motion.reduce()` wrapper or check `useReducedMotion()` hook and conditionally disable animations.
- **Suggested command**: `$impeccable animate` (add reduced-motion support)

**[P1] Dark mode muted-foreground fails WCAG AA contrast**
- **What**: `--muted-foreground: oklch(0.60 0 0)` on `--background: oklch(0.15 0 0)` = 3.96:1 contrast ratio. Fails WCAG AA (4.5:1) for normal text. Used in nav inactive items, project descriptions, footer links, search placeholder, filter labels.
- **Why it matters**: Muted text is unreadable for users with low vision or in bright environments. This is the #1 reason AI designs feel hard to read (per the impeccable guidance).
- **Fix**: Bump dark mode `--muted-foreground` to `oklch(0.64 0 0)` or higher. Test contrast.
- **Suggested command**: `$impeccable audit` (contrast check)

**[P1] Projects page cognitive overload**
- **What**: 14 filter buttons visible simultaneously on projects page: 4 status tabs (Live/WIP/Archived/Total) + 9 category tabs (All/Tools/Productivity/Content/Creative/Business/Social/AI-Data/Misc/Client-Work) + search. Working memory limit is 4 items.
- **Why it matters**: Users face decision paralysis. 14 options > 8+ threshold (overloaded; users will skip, misclick, or abandon). The category tabs alone are 9 options.
- **Fix**: Group categories into a dropdown or collapsible section. Show 4 visible categories + "More" dropdown. Or use progressive disclosure: show "All Categories" button that expands the full list.
- **Suggested command**: `$impeccable layout` (reduce cognitive load)

**[P1] Shadow inconsistency with flat design system**
- **What**: Blog cards use `hover:shadow-lg`, skills cards use `hover:shadow-xl`, dropdown-menu uses `shadow-lg`, skip-link uses `shadow-lg`. These conflict with the flat 0-radius achromatic system.
- **Why it matters**: Shadows are decorative, not functional. The design system is committed to flat (0px radius, achromatic). Shadows introduce depth that contradicts the system.
- **Fix**: Remove all shadows. Use border color changes on hover (e.g., `hover:border-primary/20`) for interactive feedback. Or commit to shadows as part of the system (but this undermines the flat aesthetic).
- **Suggested command**: `$impeccable polish`

## Persona Red Flags

**Jordan (First-Timer)**: The hero typing animation takes 3-4 seconds to complete with no skip option. Jordan will stare at the animated text wondering when the actual content appears. The About dropdown has 6 subpages (Skills, Creative Works, Tech Journey, Personal Growth, Business, Contact) with no context about what each contains. Jordan won't know which to click. The 9 category names on the projects page (Tools, Productivity, Content, Creative, Business, Social, AI-Data, Misc, Client-Work) assume dev portfolio context. Jordan might not understand "AI-Data" or "Client-Work".

**Riley (Stress Tester)**: Riley will immediately notice the missing reduced-motion support and test it by enabling "Reduce Motion" in OS settings. The animations will still play. Riley will try combining filters (status + category) and notice the URL doesn't update, so refreshing loses the filter state. Riley will test the search with special characters and emoji. Riley will look for a 404 page by navigating to `/nonexistent` and find no custom error design.

**Casey (Mobile)**: Casey will struggle with the 14 filter tabs on mobile—they'll either overflow horizontally or stack vertically, taking up half the screen. The typing animation might be slow on 3G connections. The microlink API screenshots add latency on slow connections. The hamburger menu requires 2 taps to access About subpages.

## Minor Observations

- Emoji badges in about section (🇹🇭 Bangkok, 💼 3+ Years, 🚀 Tech Generalist, 🤖 AI, 📊 Data, 🌐 Full-Stack, 📈 SEO) read as template-like. Consider removing or replacing with text labels.
- Homepage has 8 sections (Hero, Skills, About, FeaturedProjects, GitHubActivity, Business, Blog, Contact). This is a lot of scrolling. Consider consolidating or lazy-loading more aggressively.
- The hero typing animation has no skip option. Users who've seen it before must wait every time.
- The `border-l-4 border-border` pattern on hero subtitle, contact intro, blog intro, and business section is consistent (uses design system border color), but still violates the absolute ban.
- The about timeline pages (Tech Journey, Personal Growth, Creative Works) use 14 colored side-stripe borders total. This is the densest concentration of the violation.

## Questions to Consider

- What if the projects page used progressive disclosure for categories? Show 4 visible + "More" dropdown.
- Does the notebook/sketchy theme need the emoji badges, or could text labels be stronger?
- What would a confident version of the about timelines look like without side-stripe borders?
- Should the homepage consolidate sections (e.g., merge GitHubActivity into FeaturedProjects)?
