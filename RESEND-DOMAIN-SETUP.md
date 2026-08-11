# Resend domain setup — bookchaowalit.com

**Purpose:** send portfolio contact-form mail from a verified domain instead of
Resend's sandbox (`onboarding@resend.dev`).

**Code status (2026-08-11):** `/api/contact` reads `RESEND_FROM` and falls back
to the sandbox only when unset. No secrets are committed.

## Steps (owner dashboard — not automatable here)

1. Sign in at [resend.com](https://resend.com) with the account that owns
   `RESEND_API_KEY` on the Vercel project for `bookchaowalit-portfolio-frontend`.
2. **Domains → Add** `bookchaowalit.com` (or a subdomain such as `mail.bookchaowalit.com`).
3. Add the DNS records Resend shows (SPF / DKIM / optionally DMARC) at the DNS
   host for `bookchaowalit.com` (Cloudflare if that is where the zone lives).
4. Wait until Resend marks the domain **Verified**.
5. In **Vercel → Project → Settings → Environment Variables** set:
   - `RESEND_API_KEY` = existing key (sensitive)
   - `CONTACT_EMAIL` = inbox that should receive form mail
   - `RESEND_FROM` = `Contact Form <contact@bookchaowalit.com>`  
     (use an address on the verified domain)
6. Redeploy production (or wait for the next deploy) so env is picked up.
7. Submit the live contact form once and confirm delivery + From header.

## Local smoke (optional)

```bash
# .env.local — never commit
RESEND_API_KEY=re_...
CONTACT_EMAIL=you@example.com
RESEND_FROM="Contact Form <contact@bookchaowalit.com>"
npm run dev
# POST /api/contact with valid JSON body
```

## Non-claims

- This file does not prove domain verification is complete.
- Until `RESEND_FROM` is set on production, mail may still use the sandbox
  sender (lower deliverability / branding).
