# Tarzan Treescaping — Variant B

Marketing website for Tarzan Treescaping (Newburgh, NY / Hudson Valley) —
tree removal, pruning, landscaping, land clearing, junk removal and
stonework. Built with Next.js (App Router), TypeScript, Tailwind CSS and
Framer Motion.

This is a second, independently designed variant of the site — same
brand, same real content and logo, different layout and visual system
(parchment/khaki-forward editorial design, two-tier header, alternating
service rows, split-screen hero) from the other build.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

All business info (phone, address, services, service area, and the
external demolition/emergency services link) lives in one place:
`src/lib/business.ts`. Update it there rather than hunting through
components.

- `company.emergencyUrl` — currently `"PASTE-EXTERNAL-URL-HERE"`. Replace
  with the real demolition/emergency services site URL.
- `company.googleRating` / `company.googleReviewCount` — left `null`
  intentionally. No verified current Google rating was available; fill in
  real figures from the business's Google Business Profile before launch
  (this also controls whether `aggregateRating` is emitted in the
  LocalBusiness schema in `layout.tsx`).
- `CONTACT_WEBHOOK_URL` (env var) — point this at a GoHighLevel inbound
  webhook, Formspree endpoint, or other CRM to start routing leads from
  the estimate form (`src/app/api/contact/route.ts`). Submissions are
  logged server-side until this is set, so nothing is silently discarded.

## Imagery

The logo (`/public/images/logo-full.webp`, `logo-icon.webp`,
`favicon.webp`) is the real Tarzan Treescaping logo, extracted directly
from the Wayback Machine capture of the original tarzantreescaping.com
site (icon + wordmark + tagline, original colors, unmodified) and
upscaled for crisp rendering. Hero, service and gallery photography is
AI-generated (Higgsfield), chosen to read as real professional photography
of Hudson Valley tree/landscaping work. All images are self-hosted under
`/public/images`.

## Build

```bash
npm run build
npm run lint
```
