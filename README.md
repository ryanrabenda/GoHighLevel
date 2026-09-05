# Tarzan Treescaping

Marketing website for Tarzan Treescaping (Newburgh, NY / Hudson Valley) —
tree removal, pruning, landscaping, junk removal, land clearing and
stonework. Built with Next.js (App Router), TypeScript, Tailwind CSS and
Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

All business info (phone, location, services, service area, and the
external demolition/emergency services link) lives in one place:
`src/lib/business.ts`. Update it there rather than hunting through
components.

- `business.specialServicesUrl` — currently `"PASTE-EXTERNAL-URL-HERE"`.
  Replace with the real demolition/emergency services site URL.
- `CONTACT_WEBHOOK_URL` (env var) — point this at a GoHighLevel inbound
  webhook, Formspree endpoint, or other CRM to start routing leads from
  the estimate form (`src/app/api/contact/route.ts`). Submissions are
  logged server-side until this is set, so nothing is silently discarded.

## Imagery

Hero, service, portfolio and section photography is AI-generated
(Higgsfield) and served from Higgsfield's CDN via URLs in
`src/lib/business.ts`. The site logo is the real Tarzan Treescaping logo,
background-removed to a transparent PNG, also referenced by URL. Swap any
of these for locally-hosted assets in `/public` at any time — just update
the corresponding entry in `business.ts` and adjust `next.config.ts`
`images.remotePatterns` if the domain changes.

## Build

```bash
npm run build
npm run lint
```
