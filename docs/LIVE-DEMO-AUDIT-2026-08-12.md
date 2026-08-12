# Live demo audit — 2026-08-12

Probe of all 129 hub catalog URLs after the utility / mini-app / remaining-demo ship.

## Summary

| Metric | Count |
|---|---|
| Catalog projects | 129 |
| HTTP 200 | ~119 after this pass |
| TLS / connection failures | 8 (known flagship TLS gaps) |
| HTTP 404 remaining | 2 (`solo-empire-cli`, `portfolio-mobile`) |
| Live still serving Welcome boilerplate | 1 (`hashgen`) — **fixed by Vercel CLI redeploy** |

## Actions taken this pass

1. **Pushed portfolio hub** (`main`) — 3 local commits that were ahead of origin:
   - problem-first redesign
   - tradeoff copy on remaining projects
   - dead-link CTA guard
2. **Redeployed `hashgen`** via `vercel --prod` (GitHub push alone did not auto-deploy; last recorded GH deployment was 2026-07-05).
3. **Provisioned `recommendation-engine`** on Vercel and bound `recommendation-engine.bookchaowalit.com`.
4. Cleared `demoUnavailable` for `recommendation-engine` in `src/data/app-projects.ts` after domain returned 200.

## Restore pass — 2026-08-12 (flagship TLS)

| Slug | Action | Public URL | Probe |
|---|---|---|---|
| booktrading | Vercel project `booktrading-frontend` + domain attach | https://booktrading.bookchaowalit.com | HTTP 200 |
| bookreading | Vercel project `bookreading-frontend` + domain attach | https://bookreading.bookchaowalit.com | HTTP 200 |
| localcrm | Vercel project `localcrm-frontend` + domain attach | https://localcrm.bookchaowalit.com | HTTP 200 |

Also available on `*.vercel.app` aliases:
- https://booktrading-frontend.vercel.app
- https://bookreading-frontend.vercel.app
- https://localcrm-frontend.vercel.app

Hub catalog: `status: live`, `demoUnavailable` cleared for the three flagships.

## Known remaining dead / TLS demos

Keep `demoUnavailable: true` until restored:

- military-strategy-db, fashion-lookbook, sports-training, psychology-explorer, legal-knowledge (TLS / missing project)
- solo-empire-cli, bookchaowalit-portfolio-mobile (404 / store links)

## Honesty note

Most portfolio utilities / mini-apps are **client-side demos** (localStorage or pure browser APIs). Hub `status: live` means the URL responds; it does not mean multi-tenant production SaaS. Prefer Prototype / tradeoff framing in interviews.

## Method

Parallel HTTPS GET (15s timeout) against resolved `*.bookchaowalit.com` URLs from `src/data/app-projects.ts`.
