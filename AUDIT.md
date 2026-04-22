# AUDIT — Noor Insight repository

Date: 2026-04-22
Reviewer: coding agent, on behalf of the founder
Scope: the current state of the repo (cloned from `Somoh231/noor-insight-platform1`)
measured against the positioning brief (institutional utility-systems and
advisory firm; audience = utility C-suite, regulators, donors), the supplied
Claude Design system bundle, and the explicit constraints in the brief
(no fabricated clients/metrics/product screenshots, no SaaS aesthetics,
warm off-white palette, one accent, editorial register).

This document is read-only. It does **not** modify code. It records what is in
the repo today, where the current site diverges from the intended positioning,
and what I propose to keep, rewrite, or remove in the revamp. Nothing after
this audit ships until you have reviewed it.

---

## 1. Stack and plumbing (mostly fine; keep)

- **Framework**: Next.js 14 App Router, React 18, TypeScript 5.
- **Styling**: Tailwind 3.4 + a token CSS file (`src/styles/tokens.css`)
  consumed via CSS variables. This wiring is good — we keep the
  tokens-drive-Tailwind pattern and swap in the Noor Insight tokens.
- **Fonts**: `next/font/google` loading Inter only. We need to add a serif
  (Source Serif 4) and a mono (JetBrains Mono) and keep them self-hosted via
  `next/font`. No external font CDN calls at runtime.
- **Auth & DB**: NextAuth + Prisma + a seed script exist to support the
  `/platform/*` area. Preserved as-is; the platform area is a separate
  concern discussed in §5.
- **Linting / formatting**: ESLint (next/core-web-vitals), Prettier with the
  Tailwind plugin. Keep.
- **Next config**, **.env.example**, **postcss.config.mjs**: keep.

No framework migration is needed. All work is within the existing Next.js
tree.

---

## 2. Design system vs. the supplied Claude Design bundle

The repo today ships its own token set (`src/styles/tokens.css` +
`tailwind.config.ts`) with a **navy / gold / light-gray** palette, heavy
shadows, radial-gradient hero mesh, 2xl rounded cards, and SaaS-marketing
typography. This is a direct contradiction of the positioning brief and of
the Claude Design bundle.

### Supplied design bundle (authoritative source)
Received as `qTbqalq1MiiAEwzjlRciiw` (tar.gz of a Claude Design project).
Decompressed and read. Key contents:

- `project/README.md` — content and voice guide, anti-references, the
  "words to avoid" list, font substitution notes.
- `project/colors_and_type.css` — canonical CSS variables (page/ink/accent,
  type scale, spacing scale, radii, motion, measure).
- `project/assets/` — SVG wordmark, monogram, lockup, four hairline icons
  (arrow-right, chevron-right, external, menu).
- `project/preview/*.html` — static preview cards for every token set
  (accent, ink, lines, page, dataviz; type scale/body/headings/pull-quote;
  spacing scale/grid/rhythm/radii/elevation; components: buttons, citations,
  footer, icons, inputs, links, metric block, nav, pillars, chart).
- `project/ui_kits/website/*.jsx` — reference JSX for Nav, Hero, Pillars,
  StartingMarket, AtStake, PrincipleBlock, BriefingCTA, Footer.
- `chats/chat1.md` — the iteration log and caveats. The design author
  explicitly flags that metrics in `AtStake.jsx` are
  **"plausible-but-unverified"** and must be replaced before public use.

### What the bundle specifies that the repo currently violates
| Token / Rule | Bundle | Repo today |
|---|---|---|
| Page background | `#F6F2EA` (warm off-white) | `#F5F5F5` (cool light gray, `lgray`) |
| Body background in marketing shell | warm paper | `bg-white` |
| Primary ink | `#1A1A1A` warm charcoal | `#444444` (`dgray`) |
| Heading color | `#1A1A1A` | `#1A3C5E` (`navy`, a brand color) |
| Accent | `#B8860B` amber, one-per-section | `#C49A2A` gold used liberally as chrome |
| Second brand color | none (teal reserved for data-viz only) | `navy` used as the dominant chrome |
| Display face | Source Serif 4 (serif) | Inter (sans) — no serif at all |
| Mono face | JetBrains Mono for numbers/citations | none |
| Radii | 0–2px | `rounded-2xl` on most cards, pill on buttons |
| Shadows | effectively none | `shadow-card`, `shadow-card-hover`, `shadow-soft` used everywhere |
| Hero visual | no illustration, no gradient, no mesh | radial-gradient mesh + bitmap grid + illustration `<HeroDataIllustration />` |
| Decorative motion | quiet fades, short transforms | fade-in, translate, scale, hover shadow lifts |
| Content max | 1200px (bundle) | `max-w-6xl` (1152px) — close enough, keep |
| Section rhythm | 128–192px on desktop | `py-24 sm:py-28 lg:py-32` — 96–128px, shorter |

The repo's aesthetic is closer to Stripe / Linear (the brief's **anti-
reference**) than to the editorial register the design file prescribes. The
mesh gradients, rounded cards, and navy+gold handshake read as
management-consulting / enterprise SaaS. This is the largest gap.

---

## 3. Home page: where current copy and structure fail the brief

File: `src/components/marketing/home/index.tsx` composing seven sections.

| Section | Issue |
|---|---|
| `HomeHero` | Uses `BRAND_STATEMENT = "Noor Insight turns operational data into clear action."` — reads as SaaS tagline. Headline "Operational truth for utilities under real constraints." is closer. Multiple decorative layers (`var(--mesh-hero)`, grid overlay, left gold-gradient rule, hero illustration) — all forbidden by the design brief. Three CTAs (briefing, solutions, "See the operations console"). The third CTA points to `/platform/dashboard`, a concept-product area not disclosed as concept. |
| `HomeProblems` | Problem/loss framing is fine in principle but reads as SaaS copy ("We design and deploy governed digital systems…"). Card grid with rounded-2xl and shadow. |
| `HomeBuild` | "What we build" — describes a product. Reinforces the SaaS frame. |
| `HomeMatter` | "What is at stake" section. Currently uses generic adjective-heavy copy, not the real Liberia/LEC figures the brief requires. |
| `HomeLiberia` | Starting-market section exists conceptually but does not use the brief's citations (41.3% → 27.5% losses; 32.5% access; 126 MW; ~315,691 connections; $0.22/kWh tariff 2026). |
| `HomeCtaStrip` | Generic "Request a briefing" strip. Keep the intent, restyle. |
| `HomeBrandClose` | Renders `BRAND_CLOSING_TAGLINE = "Noor Insight — Turning Data Into Clarity."` — a slogan. Brief's voice guide forbids this register. Remove. |

The home page is also missing:
- A short **positioning paragraph** immediately after the hero (the COMPANY
  paragraph in the brief).
- A **three-pillars** section (Revenue integrity / Operational visibility /
  Accountable reporting) as the IA anchor. The bundle ships a reference
  `Pillars.jsx` for exactly this.
- A **pull-quote / principle block** rendered in display serif with an
  amber left rule.
- An **operating principles block** (oversight-ready reporting, controls
  by design, operational lineage, utility-scale delivery).

All of these belong on the home page per the brief's section order.

---

## 4. Copy hygiene across all marketing pages

Words in the repo that violate the "do not use" list in the brief:

- `platform` (product name, used ~40x) — the brief says Noor Insight is
  **not a SaaS product with self-serve signup**.
- `governed data`, `accountability platform`, `operational command`,
  `modernize through governed data`, `governance-grade reporting` — fine in
  tone, but the word "platform" carries SaaS freight.
- `modernize` (used throughout) — acceptable per the brief.
- `revolutionary`, `AI-powered`, `empower`, `unlock`, `leverage`,
  `next-generation`, `disruptive` — not found; copy is already disciplined
  on this axis.
- `seamless`, `robust`, `best-in-class`, `cutting-edge`, `solution` — grep
  returns one "solutions" (IA name) and a few "governed" compounds; largely
  clean.
- Exclamation marks, emoji — **none found. Good.**

Copy that should be rewritten because it implies the utility has failed
or that Noor Insight "fixes" them:
- "Operational truth for utilities under real constraints." → reframe as the
  work we do alongside the utility.
- "Noor Insight turns operational data into clear action." → retire.
  Replace with a partnership-register line.
- "Noor Insight — Turning Data Into Clarity." → retire.

Numbers on the home page today are generic / decorative. They must be
replaced with the brief's real cited figures or removed.

---

## 5. `/platform/*` — the concept console

This is the single largest scope question in the repo.

What exists:
- A full `src/app/platform/` tree with login, protected layout, and 17
  protected sub-routes including `dashboard`, `grid-intelligence`,
  `loss-intelligence`, `hotspot-map`, `revenue-recovery`,
  `customer-meter-registry`, `smart-meter-readiness`,
  `smart-rollout-planner`, `action-center`, `action-workflow-center`,
  `connectivity-management`, `device-dcu-monitoring`, `field-operations`,
  `network-mapping`, `reporting`, `settings`, `upload`.
- NextAuth credentials-based login seeded with three demo users.
- Prisma schema and a migration (`20260418120000_init`).
- ~30 dashboard/field-ops/reporting components with Mapbox, Recharts,
  simulated KPIs, and "demo data" modules under `src/lib/demo-*.ts`.
- A "See the operations console" CTA on the hero that deep-links to it.

The brief is explicit:
> If a `/platform/dashboard` route exists in the repo: either **remove it**
> or **clearly label it "Concept visualization"** so no reader mistakes it
> for a live product.

Also:
> No mocked product screenshots anywhere — we do not have a product yet;
> do not fabricate one.

Recommended path (to confirm with you before I act):

**Option A — remove `/platform/*` entirely (preferred).**
Delete the platform tree, delete `HeroDataIllustration`, remove the
"operations console" CTA, drop Prisma/NextAuth plumbing if they are only
there to serve the platform. This is the cleanest expression of "Noor
Insight is not a product." It is also reversible from git history.

**Option B — keep, but clearly mark as "Concept visualization."**
Gate every platform page with a full-width banner ("Concept visualization —
not a live product. Built to illustrate reporting posture.") Change the
hero CTA to "See the concept visualization." Retire the `platform/login`
flow and ship the pages as static previews only. Leaves the plumbing
intact for later.

**Option C — do nothing here in this pass, ship v1 marketing only.**
The audit flags it; you decide later.

My recommendation is **Option A**. The positioning explicitly says the firm
is not a product; keeping a 17-page fake console — even gated — works
against the institutional register we are trying to establish. Every donor
or regulator visitor who sees a product dashboard will read the firm as a
vendor. But this is your call; the platform tree is the biggest reversible
artifact in the repo and I will not delete it without your go-ahead.

Either way, `HomeHero`'s "See the operations console" CTA and the
`<HeroDataIllustration />` mock go in the revamp.

---

## 6. Routes that exist and what happens to each

| Route | Status | Plan |
|---|---|---|
| `/` (home) | Rewritten end-to-end in deliverable 3 |
| `/solutions` | Keep. Six module cards already tracked in `src/lib/solutions-mega-menu.ts`. Tighten copy per the brief. Restyle to new design system. |
| `/use-cases` | Keep. Rewrite cards to pattern-level (no named clients). Restyle. |
| `/about` | Keep. Add "how we work" section (phased, controls-first, embedded). Add **clearly-marked placeholder** for named team and advisors with a visible "Forthcoming" label and a `TODO` comment. |
| `/contact` | Rebuild form. Per the brief, a real form posting to an email endpoint configurable via env var (e.g. `CONTACT_FORWARD_EMAIL`). Fields: name, role, organization, country, short message. Remove the "compose briefing email" mailto pattern. |
| `/privacy`, `/terms`, `/security` | Keep. Restyle to new design system. Copy is already sober; minor trim only. |
| `/platform/*` | See §5 — awaiting your decision. |

No new marketing routes are being added.

---

## 7. Components — keep / rewrite / remove (preliminary)

### Keep
- `src/lib/seo.ts`, `src/lib/constants.ts` (rework constants), `src/lib/utils.ts`, `src/lib/routes.ts`.
- `src/lib/solutions-mega-menu.ts`, `src/lib/use-cases-mega-menu.ts`, `src/lib/about-mega-menu.ts` — data. Copy inside these needs brief-aligned rewrites.
- `src/components/ui/button.tsx`, `button-link.tsx`, `empty-state.tsx`, `spinner.tsx` — adapt to new token system.
- `src/app/layout.tsx`, `loading.tsx`, `not-found.tsx`, `error.tsx`, `global-error.tsx` — keep; adjust theme color and fonts.

### Rewrite
- `src/styles/tokens.css` → replace entirely with Noor Insight tokens (page, ink, accent, lines, spacing, type scale, motion, measure) mapped from `colors_and_type.css`.
- `tailwind.config.ts` → rewire to new tokens (warm `page`, `surface`, `ink`, `ink-2/3/4`, `line`, `line-soft`, `accent`; typography extends for `serif`, `mono`; font sizes for `display-xl/l/m`, `h1/h2`, `body-l/body/small`, `eyebrow`; radii `none`/`2px` only; drop the shadow tokens).
- `src/app/globals.css` → warm paper body, brief-register link and selection styles, remove `.section-y` or redefine to 128–192px rhythm.
- `src/components/layout/site-header.tsx` → thin restrained nav (64–72px tall), hairline bottom, no shadow-on-scroll, no mobile mega-drawers. Keep accessibility affordances.
- `src/components/layout/navbar-brand.tsx`, `src/components/brand/brand-logo.tsx` → adopt the supplied wordmark/monogram SVGs.
- `src/components/layout/site-footer.tsx` → restrained institutional footer. May stay dark per the design bundle's reference footer (warm ink background, amber period in wordmark, mono eyebrows), or stay on page. Default to the bundle's dark footer since it is the one design artifact where inverse color appears deliberately. No newsletter signup on v1.
- `src/components/ui/button-link.tsx` → link-as-text with amber underline, and an understated "Request a structured briefing" primary variant.
- All seven `src/components/marketing/home/home-*.tsx` sections.
- `src/components/marketing/section-heading.tsx` → new primitive aligned to eyebrow + display-serif heading + lede.
- Solutions / use-cases / about / contact pages.

### Remove
- `src/components/marketing/hero-data-illustration.tsx` — fabricated product visual.
- `src/components/marketing/hero-trust-strip.tsx` — trust-strip pattern is a SaaS affordance for logo walls. The brief forbids unearned credibility markers; we have no named logos to show.
- `src/components/marketing/home/home-brand-close.tsx` — ships the "Turning Data Into Clarity." slogan.
- Any radial-mesh / grid-bitmap decoration CSS (`--mesh-hero` from tokens.css, grid-overlay class in home-hero).

### New design-system primitives to add (deliverable 2)
Under `src/components/ds/`:
- `Section` — handles rhythm, optional top hairline, optional warm surface background, `maxWidth` options (`content | measure`).
- `Eyebrow` — mono, tracking 0.14em, uppercase, ink-3.
- `Display` — serif, responsive `display-m / display-l / display-xl`, balanced text wrap.
- `Lede` — 19px sans, ink-2, 720px measure.
- `NumberBlock` — large serif numeral with tabular-nums, optional arrow-glyph pair ("41.3% → 27.5%"), unit slot, footnote superscript.
- `Citation` — mono, ink-3, with an anchored footnote list (`CitationList`).
- `PullQuote` — serif, amber left-rule 2px, 40px left padding, mono cite.
- `Link` — amber underline on hover, 4px offset, focus ring.
- `Button` — two variants: `primary` (ink background, page foreground, 2px radius) and `secondary` (hairline border, ink text); no pill, no shadow.
- `Pillars` — 3-column grid, hairline dividers, amber numeral `01/02/03`, serif H3, sans body.
- `Nav`, `Footer` — composition components matching the bundle's register.

All primitives consume the new token layer via Tailwind + CSS vars so pages stay mostly semantic.

---

## 8. Assets

- `public/brand/noor-insight-logo-nav*.png` — bitmap marks for the navy+gold wordmark. Retire; replace with `public/brand/noor-wordmark.svg`, `noor-monogram.svg`, `noor-lockup.svg` copied from the design bundle's `assets/`. These are editable SVGs set in Source Serif 4 semibold with the amber-period lockup.
- `public/favicon.svg` — keep; swap to a favicon version of the monogram.
- Hairline icons (`arrow-right`, `chevron-right`, `external`, `menu`) from the bundle copied into `public/icons/` or inlined as React components.

No stock photography is introduced anywhere. No infrastructure photography placeholders either (the bundle does not ship licensed imagery and we are not fabricating it).

---

## 9. Metrics and citations to use (from your brief, verbatim)

These replace whatever lives in the current home page today:

- National electricity access ≈ **32.5%** _(cite the public source you will supply; current placeholder: IMF Article IV, Liberia, 2024)_.
- LEC commercial losses: **41.3% (2022) → 27.5% (late 2024)** _(cite: LEC / LERC annual reporting; placeholder until you provide the attested citation)_.
- Installed capacity ≈ **126 MW (2024)** _(cite: LEC public filing)_.
- Customer connections ≈ **315,691 (2024)** _(cite: LEC public filing)_.
- Residential prepaid tariff: **$0.22 / kWh effective Jan 1, 2026** _(cite: LERC published tariff schedule, 2025 revision)_.

Each will render as `<NumberBlock>` with a superscript footnote and a
`<CitationList>` at the bottom of the section. Where the citation URL is not
yet defensible, I mark the source line with a `TODO(cite)` comment so you can
paste the PDF URL and publication date before any public share.

I will **not** fabricate an URL or a publication year. Any number that lacks
a citation you have approved gets a visible "Source forthcoming" tag until
you attach one.

---

## 10. Accessibility / performance posture

- Body contrast: `#1A1A1A` on `#F6F2EA` ≈ 13.3:1 — exceeds the ≥ 7:1 target.
- Focus ring: 2px amber at 2px offset, always visible on keyboard nav.
- Type is self-hosted via `next/font`. No external CDN font calls at runtime.
- No animation libraries. Motion uses CSS transitions only (120–180ms).
- No tracking scripts, no third-party chat widgets, no marketing pixels.
- LCP target: < 1s on 4G. The home page has no large hero image, no mesh
  gradient layers, no bitmap grid — so LCP is limited to text + one
  small wordmark SVG. Easily achievable.
- Page weight budget: < 500KB gzip (excluding self-hosted fonts). Current
  repo likely ships Mapbox + Recharts + next-auth on several bundles;
  marketing bundles stay lean because those are scoped to `/platform/*`.

---

## 11. Risks / open questions before deliverable 2

1. **`/platform/*` decision.** §5. Pick A / B / C. I recommend A.
2. **Accent color confirmation.** The bundle shipped amber `#B8860B` as
   option (a) and noted that flipping to teal `#0F4C4A` is a one-token swap.
   Your brief prefers amber. I will proceed amber; confirm.
3. **Font licensing.** Source Serif 4, Inter, JetBrains Mono are open and
   will ship self-hosted. If Tiempos / GT Super / Söhne / Untitled Sans
   licenses are in hand, drop the font files in `public/fonts/` and I will
   swap without re-running the system.
4. **Citations.** The five Liberia/LEC figures in your brief need one
   attested public citation each before the home page can ship. Placeholder
   labels will carry a `TODO(cite)` comment and a visible "Source
   forthcoming" tag. Please provide the PDFs / URLs / publication dates.
5. **Contact form endpoint.** `CONTACT_FORWARD_EMAIL` will be read from env.
   Please confirm the target mailbox. Without a real endpoint configured,
   the form route returns a 503 with an honest "not configured" message
   rather than pretending to send.
6. **Legal footer text.** Footer today mentions "registered in Liberia and
   the United Kingdom." The design bundle ships a placeholder reg-number
   `REG. NO. XXXXXXXX`. If the firm's real registration details exist,
   send them; otherwise the footer keeps a visible `XXXXXXXX` placeholder.

---

## 12. What happens next

After you sign off on this audit I will:

1. **Deliverable 2** — tokens, Tailwind config, typography components,
   buttons, links, section/pull-quote/number-block/citation primitives.
   Committed separately.
2. **Deliverable 3** — home page revamp end-to-end using the new primitives
   and the brief's section order.
3. **Deliverable 4** — `/solutions`, `/use-cases`, `/about`, `/contact`
   restyle and copy pass.
4. **Deliverable 5** — `CHANGES.md` summarizing kept / rewritten / removed
   with rationale.

No dev server. No deploys. No PRs opened. Each deliverable lands as a
separate commit and pauses for your review.
