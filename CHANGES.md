# CHANGES — Noor Insight positioning revamp

Date: 2026-04-22
Branch: `main`
Commits (in order): `8d6576f`, `9836d53`, `78e742e`, `7cf8666`

This document describes what was kept, rewritten, and removed between the
`noor-insight-platform1` repo as received and the current state, and why.
It is the companion to `AUDIT.md` (the pre-change analysis).

---

## Headline

The firm repositioned from "utility intelligence and accountability **platform**"
— a SaaS-adjacent register with a 17-page product console, navy + gold
palette, radial-gradient hero mesh, and taglines — to a **utility systems
and advisory firm**: warm off-white paper, one amber accent, editorial
serif, restrained institutional register.

Every surface on the site was touched. About 11.5 K lines of code were
removed; about 3.0 K lines of tighter code were added in their place.
Nine static routes prerender cleanly; one dynamic route (`/api/contact`)
accepts briefing submissions. Home page First Load JS: 96 KB gzip, well
under the 500 KB budget.

---

## Kept

Things in the repo that matched the brief without being rewritten.

| Kept | Rationale |
|---|---|
| Next.js 14 App Router, React 18, TypeScript 5 | Framework fit; no migration reason. |
| Tailwind 3.4 + CSS-variable tokens pattern | Good base. Tokens rewritten inside it. |
| `next/font` for font loading | Self-hosted, no runtime CDN — matches brief. |
| ESLint + Prettier + prettier-plugin-tailwindcss | Kept as-is. |
| `src/lib/seo.ts` | Kept; description swapped to the institutional line. |
| `src/lib/constants.ts` (APP_NAME, email addresses) | Trimmed; core identifiers kept. |
| `src/lib/utils.ts` (`cn` helper) | Used throughout the DS. |
| `.env.example`, `next.config.mjs`, `postcss.config.mjs`, `tsconfig.json`, `.eslintrc.json`, `.prettierrc`, `.prettierignore`, `.gitignore` | Housekeeping; minor edits where applicable. |
| `/privacy`, `/terms`, `/security` routes | Kept as URLs; copy rewritten per §Rewritten. |
| Warm-ink favicon intent | Kept; the *mark* itself changed. |

---

## Rewritten

Surfaces that existed but were rebuilt against the new positioning and
design system.

### Design system foundations

| File | Before | After |
|---|---|---|
| `src/styles/tokens.css` | navy / gold / dgray / lgray / forest / risk-* RGB set, mesh-hero gradients, card shadows | Warm paper (`--color-page: #F6F2EA`), ink (`#1A1A1A`), amber accent (`#B8860B`), warm line neutrals, 4-px spacing scale, 128 / 192 px section rhythm, 0 & 2 px radii only, 120 / 180 ms motion — all sourced from the Claude Design bundle's `colors_and_type.css`. |
| `tailwind.config.ts` | Old palette + `rounded-2xl` shadows + display-sm / display / display-lg sizes | Rewired to the new token layer: `page`, `surface`, `ink`, `ink-2/3/4`, `line`, `line-soft`, `line-strong`, `accent`, `accent-hover/deep/tint`, `teal` (dataviz only); type scale `eyebrow / small / body / body-l / h3 / h2 / h1 / display-m / display-l / display-xl`; radii `none` and `control`. |
| `src/app/layout.tsx` | Only Inter loaded; themeColor = navy / lgray | Loads Source Serif 4 + Inter + JetBrains Mono via `next/font`; themeColor = `#F6F2EA`. |
| `src/app/globals.css` | `@layer base` with header-only link shims, `.section-y` rhythm helper | Clean base layer; warm body, amber-on-hover link colour, 2 px amber focus ring, `.tabular` numerals helper. |

### Chrome (layout, header, footer, brand)

| File | Before | After |
|---|---|---|
| `src/components/layout/marketing-shell.tsx` | Navy bg, card shadows, inline mega-nav wiring | Minimal skip-to-content + `SiteHeader` + `SiteFooter`, all over warm paper. |
| `src/components/layout/site-header.tsx` | 80 px nav with card shadow-on-scroll, navy chrome, three CTA buttons, `EnterpriseMegaNavDesktop` and mobile accordion with six mega-menu panels | 72 px nav, hairline bottom rule, no blur, no shadow, no mega menus. Three primary links (Solutions / Use cases / About), one understated "Request briefing →" link with amber-underline, mobile drawer with keyboard support and body-scroll lock. |
| `src/components/layout/site-footer.tsx` | Navy background + navy-on-navy footer with trust strip, "Powered by Noor Insight" tagline, newsletter-adjacent copy | Ink-background institutional footer; amber period on the wordmark; firm / engagement / offices columns; legal nav; visible "Reg. no. forthcoming · Liberia / United Kingdom" placeholder (TODO tracked). |
| `src/components/brand/brand-logo.tsx` | `<Image>` of a bitmap lockup PNG with eager priority + wordmark fallback | Typographic (no image): serif "Noor" + amber period + mono "Insight" eyebrow. Tone option for dark surfaces. |
| `public/brand/*.png` | Navy + gold bitmap marks | Replaced by `public/brand/noor-wordmark.svg`, `noor-lockup.svg`, `noor-monogram.svg` — self-contained SVGs set in Source Serif 4 with the amber period. |
| `public/favicon.svg` | Navy square + gold checkmark | Warm paper + serif "N" + amber hairline under-rule. |

### Home page

The old home was seven sections composed in `home/index.tsx`: Hero, Problems,
Build, Matter, Liberia, CtaStrip, BrandClose. All seven were deleted; the
new home composes eight sections in the brief's prescribed order.

| Section | Previously | Now |
|---|---|---|
| **Hero** | `BRAND_STATEMENT` ("Noor Insight turns operational data into clear action."), three CTAs including "See the operations console", illustration + mesh + grid overlay, trust strip with no real logos | One declarative headline, one supporting sentence, one muted primary CTA ("Request a structured briefing"), starting-market anchor line. No illustration, no gradient, no trust strip. |
| **Positioning** | (absent) | COMPANY paragraph from the brief rendered as a display-serif pull-out. Full-width section with a short body paragraph. |
| **Pillars** | `HomeBuild` product-catalogue grid with cards and shadows | Three disciplines, hairline dividers, amber 01 / 02 / 03 numerals, 4 sub-capabilities per pillar. |
| **At stake** | Generic adjective-heavy loss narrative | Five real Liberia / LEC figures from your brief (41.3% → 27.5%, 32.5%, 126 MW, 315,691, $0.22 / kWh) rendered as `NumberBlock` with footnote anchors + visible "Source forthcoming" tag; `CitationList` at section end carries `TODO(cite)` comments. |
| **Starting market** | `HomeLiberia` with two inverse-styled CTAs and a product-framed posture | LEC framed as an existing trajectory Noor Insight defends and extends. Engagement posture table names LEC, LERC, MFDP, MME, MCC, World Bank, EU, AfDB, USAID; 18-month phase-1 duration. |
| **Operating principles** | `HomeMatter` generic operational concerns | Four principles: oversight-ready reporting, controls by design, operational lineage, utility-scale delivery. |
| **Principle quote** | (absent) | Method-note pull-quote set in display serif with 2 px amber left rule: "A utility's credibility with regulators and donors is not bought with software." |
| **Next step** | `HomeCtaStrip` generic CTA | "Request a structured briefing" + "How we work" link, quietly laid out. |
| **Brand close tagline** | "Noor Insight — Turning Data Into Clarity." | Removed. Taglines are a SaaS register per the brief. |

### Other marketing pages

| Route | Summary of change |
|---|---|
| `/solutions` | Six modules rewritten as outcome-first disciplines (revenue protection, grid intelligence, field operations, customer & meter records, oversight reporting, modernization advisory). Each has one concrete outcome sentence and one detail sentence. Cards gone; hairline two-column grid with amber numerals. |
| `/use-cases` | Six reference patterns framed at the abstract level — no named clients, no testimonials, no fabricated case studies. Each row renders Problem + Engagement posture. |
| `/about` | Mission paragraph verbatim from the brief, "How we work" block (phased, controls-first, embedded, procurement- and donor-aligned), clearly-marked placeholder for named team and advisors with a visible "Forthcoming" badge + `TODO(team)` comment. |
| `/contact` | Rebuilt form posting to `/api/contact`. Fields: name, role, organization, country, email, short message. Renders a reference code on success. Honest 503 when the server-side transport is not configured. |
| `/privacy` | Rewritten for an advisory firm (not a SaaS vendor). |
| `/terms` | Rewritten to acknowledge that no client relationship is created through site use; engagement work is under separate letter. |
| `/security` | Repositioned as **"Information handling"** — how the firm treats engagement data and briefing content, not a software security overview for a product we do not ship. |

### Error + not-found

| File | Change |
|---|---|
| `src/app/not-found.tsx` | Re-styled against DS; removed the "Platform sign-in" secondary link. |
| `src/app/error.tsx` | Re-styled against DS. |
| `src/app/global-error.tsx` | Now loads the same Source Serif 4 / Inter / JetBrains Mono fonts as the root layout so a crashing page still renders with correct type. |

### Metadata

| File | Change |
|---|---|
| `src/lib/seo.ts` | `description` replaced with `FIRM_DESCRIPTION` — the institutional positioning line. |
| `src/lib/constants.ts` | Surface trimmed to `APP_NAME`, `FIRM_DESCRIPTION`, `EMAIL_HELLO`, `EMAIL_BRIEFING`, `getPublicAppUrl`, `getMetadataBaseUrl`. Retired: `BRAND_STATEMENT`, `BRAND_CLOSING_TAGLINE`, `BRAND_WORDMARK`, `POWERED_BY_BRAND`, `PRODUCT_FOR_UTILITIES`, `PRODUCT_PLATFORM_NAME`, `EMAIL_DEMO*`, `EMAIL_SUPPORT`, `EMAIL_PARTNERSHIPS`, `CONTACT_EMAIL`. |
| `.env.example` | Stripped of `DATABASE_URL`, `SUPABASE_*`, `NEXTAUTH_*`, `PLATFORM_DEMO_PASSWORD`, `NEXT_PUBLIC_MAPBOX_TOKEN`. Added `CONTACT_FORWARD_EMAIL` (default `mahmoudmobir@gmail.com`), `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM`. |

---

## Added (new code)

### DS primitives — `src/components/ds/`
- `Section` — content-max + outer margin + `standard / tight / loose` rhythm + `page / surface / ink` tone + optional top/bottom hairlines.
- `Eyebrow`, `Display` (m / l / xl), `Lede`, `Body` — typographic primitives.
- `InlineLink` — amber hover, 4 px offset, external arrow.
- `Button`, `ButtonLink` — two variants (primary ink / secondary hairline), 2 px radius, 2 px amber focus.
- `NumberBlock` — large serif numeral, optional arrow pair ("41.3% → 27.5%"), unit slot, footnote anchor superscript, visible "Source forthcoming" tag.
- `CitationList` + `Citation` type — mono footnote list with `#cite-n` anchors.
- `PullQuote` — serif body on a 2 px amber left rule + mono cite.
- `Pillars` + `Pillar` type — three-column hairline grid with amber `0N` numerals.

### Home sections — `src/components/marketing/home/`
- `home-hero.tsx`, `home-positioning.tsx`, `home-pillars.tsx`, `home-at-stake.tsx`, `home-starting-market.tsx`, `home-operating-principles.tsx`, `home-principle-quote.tsx`, `home-cta.tsx`, `index.tsx` (composition).

### Contact plumbing
- `src/components/marketing/contact-form.tsx` — client form, six fields, reference-code confirmation, honest error state.
- `src/app/api/contact/route.ts` — Node-runtime POST handler. Validates, generates an `NI-XXXXXX` reference, forwards via `nodemailer` when `SMTP_*` + `CONTACT_FORWARD_EMAIL` are configured. 503 in production when transport is missing; local dev logs payload.
- Dependency added: `nodemailer` + `@types/nodemailer`.

### Legal layout
- `src/components/marketing/legal-layout.tsx` — `LegalPage` + `LegalSection` shells used by `/privacy`, `/terms`, `/security`.

### Brand assets
- `public/brand/noor-wordmark.svg`, `noor-lockup.svg`, `noor-monogram.svg`.
- `public/icons/arrow-right.svg`, `chevron-right.svg`, `external.svg`, `menu.svg`.

---

## Removed

Every removal reversible from git history. The largest single removal is
the `/platform/*` tree (17 pages + supporting stack), per your explicit
confirmation.

### `/platform/*` — the concept console
- `src/app/platform/*` — login, protected layout, and 17 protected pages (dashboard, grid-intelligence, loss-intelligence, hotspot-map, revenue-recovery, customer-meter-registry, smart-meter-readiness, smart-rollout-planner, action-center, action-workflow-center, connectivity-management, device-dcu-monitoring, field-operations, network-mapping, reporting, settings, upload).
- `src/app/api/auth/[...nextauth]/route.ts`.
- `src/components/platform/*` (20 files) — dashboard shell, grouped nav, login form, module views.
- `src/components/dashboard/*` (10 files) — KPI row, charts, maps, zone tables.
- `src/components/field-operations/*` (12 files) — technician map, work-order list, completion charts.
- `src/components/loss-intelligence/*` (5 files) — filters, schematic map, transformer drilldown.
- `src/components/reporting/*` (6 files) — report type selector, export bar, KPI grid, trend charts.
- `src/components/ui/{platform-page-header, chart-map-placeholder}.tsx`.
- `src/lib/{auth, platform-auth, platform-nav, platform-roles, platform-users, nextauth-secret, db, dashboard-chart-theme}.ts`.
- `src/lib/demo-{commercial-wedge, executive-dashboard-data, field-operations-data, loss-intelligence-data, operating-modules, reporting-data}.ts`.
- `src/types/next-auth.d.ts`.
- `prisma/` (`schema.prisma`, `seed.ts`, migration, lock).

### Dependencies removed from `package.json`
- `@prisma/client`, `prisma`
- `next-auth`
- `bcryptjs`, `@types/bcryptjs`
- `mapbox-gl`, `react-map-gl`
- `recharts`
- `tsx`

### Marketing decoration (unearned or SaaS register)
- `src/components/marketing/hero-data-illustration.tsx` — fabricated product illustration.
- `src/components/marketing/hero-trust-strip.tsx` — trust strip with no real logos.
- `src/components/marketing/home/home-brand-close.tsx` — "Turning Data Into Clarity." slogan.
- `src/components/marketing/design-system-preview.tsx` — transitional preview used between D2 and D3.
- `src/components/layout/enterprise-mega-nav.tsx` — SaaS mega-nav.
- `src/components/layout/navbar-brand.tsx` — superseded by `BrandLogo`.
- `public/brand/noor-insight-logo*.png` — bitmap navy + gold lockups.

### Legacy shims (used as a bridge in D2, retired in D4)
- `src/components/ui/button.tsx`, `src/components/ui/button-link.tsx` — D2 re-exports; all consumers now import from `@/components/ds`.
- `src/components/marketing/section-heading.tsx` — replaced by inline Eyebrow + Display + Lede compositions.
- `src/lib/solutions-mega-menu.ts`, `src/lib/use-cases-mega-menu.ts`, `src/lib/about-mega-menu.ts` — data inlined where used.
- `src/lib/button-classes.ts`, `src/lib/input-classes.ts`, `src/lib/routes.ts`, `src/lib/format.ts`.
- `src/components/ui/empty-state.tsx`, `src/components/ui/spinner.tsx` — no remaining consumers.

---

## Open follow-ups (flagged with `TODO` in-source)

| TODO | Where | What is needed |
|---|---|---|
| `TODO(cite)` — Liberia / LEC citations | `src/components/marketing/home/home-at-stake.tsx` | Attested public-source URLs and publication dates for the five numbers. Pending your LEC / LERC conversation week of 2026-04-27. |
| `TODO(team)` — named leadership / advisors | `src/app/(marketing)/about/page.tsx` | Partner roster, senior advisors, engagement leads. Rendered as a visible "Forthcoming" badge until supplied. |
| `TODO(legal)` — registration number | `src/components/layout/site-footer.tsx` | Real Liberia / UK registration numbers. Currently renders "Reg. no. forthcoming" in the footer. |
| Contact transport — SMTP credentials | `/api/contact` route + `.env.example` | `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM` in the production environment. Without them, `/api/contact` returns 503 in production and logs in development. |

None of these block shipping Deliverables 1–5. They are points where the
firm's real information replaces the honest-placeholder we ship today.

---

## Verification

- `npx tsc --noEmit`: clean.
- `npm run lint`: clean (no ESLint warnings or errors).
- `npm run build`: 10 static routes + 1 dynamic API handler, all prerendered.
- First Load JS: 96 KB gzip on content pages, 105 KB on `/contact` (form JS).
- No external font CDN calls at runtime; all fonts self-hosted via `next/font`.
- No analytics scripts, tracking pixels, or third-party widgets.

---

## Commit trail

| Commit | Deliverable | Title |
|---|---|---|
| `8d6576f` | 1 | Add AUDIT.md — repo audit for positioning revamp |
| `9836d53` | 2 | Design-system setup: tokens, primitives, chrome |
| `78e742e` | 3 | Home page revamp end-to-end |
| `7cf8666` | 4 | Apply design system across /solutions, /use-cases, /about, /contact, legal routes |
| *(this commit)* | 5 | Add CHANGES.md |

No PRs were opened. No deployments were made. No dev server was started.
