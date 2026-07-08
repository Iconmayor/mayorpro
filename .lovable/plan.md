
# Able Digital — Premium Repositioning Build Plan

This turns Able Digital from a generic services site into a premium **Local Growth Engine** for U.S. home service businesses (HVAC, roofing, plumbing, etc.). Copy, structure, and visuals all shift to feel like Stripe / Linear / Webflow tier.

## 1. Brand & Messaging Foundation

Update `src/data/about.ts` and add a new `src/data/positioning.ts`:

- **Name:** ABLE DIGITAL
- **Category:** Local Growth Partner for Home Service Businesses
- **Core promise:** Build Trust. Get Found. Generate More Qualified Local Leads.
- **Hero H1:** *Helping Home Service Businesses Generate More Qualified Local Leads.*
- **Sub:** *A complete Local Growth Engine — websites, Local SEO, Google Business Profile, reviews, and AI visibility, working as one system.*
- **Primary CTA:** Book a Strategy Call · **Secondary:** View Our Growth System
- **Voice:** Apple / Stripe / Linear — simple, confident, benefit-led, zero buzzwords.

## 2. The Able Digital Local Growth Engine™ (replaces flat services list)

New `src/data/growthEngine.ts` with the 7 phases as the site's spine:

1. Visibility Audit™
2. Authority Foundation™
3. Conversion Website™
4. Local Search Engine™
5. Review Growth Engine™
6. AI Visibility System™
7. Growth Partnership™

Each phase: outcome, what's included, why it matters. Used on Home (section) and Services page (full detail).

## 3. Homepage rebuild (`src/pages/Home.tsx` + sections)

New/updated sections in order:

1. **Hero** — split layout: left = new messaging + dual CTA + trust bar ("Trusted by HVAC, Roofing, Plumbing, Electrical…"); right = premium hero illustration (see §6).
2. **Trust Bar** — industries served + "$X in tracked pipeline" style metrics (mock).
3. **The Problem** — "Great work isn't enough if local customers can't find you." 3 pain points.
4. **The Growth Engine** — 7-phase vertical stepper with connectors, icons, hover reveal.
5. **Outcomes** — metric cards: qualified calls, map-pack rankings, review velocity, AI citations.
6. **Case Studies** — reframe FeaturedWork as business case studies (challenge → strategy → result).
7. **How We're Different** — comparison table: Freelancer vs Typical Agency vs Able Digital.
8. **Testimonials** — keep, retone copy to home-service voice.
9. **FAQ** — new section (10 premium objections handled).
10. **Final CTA** — "Book your free Visibility Audit." Calendar-style card.

## 4. Other pages

- **Services** → renamed conceptually to "Growth System"; renders 7 phases in depth with deliverables + FAQ.
- **Projects** → restructured as **Case Studies** with Challenge / Strategy / Deliverables / Results blocks (mock metrics per industry).
- **About** → agency story, principles, who we serve, who we don't.
- **Contact** → keep no-form design; add "What to expect on the call" + qualifying bullets.
- **Navbar / Footer** → new nav: Growth System · Case Studies · About · Contact + "Book Strategy Call" button.

## 5. Design system tweaks (`src/index.css`, Tailwind tokens)

Keep black (#0a0a0a) + gold (#D4AF37) but modernize:
- Add soft blue accent for SaaS/tech cues in illustrations only (`--accent-blue: 214 95% 60%`).
- Introduce surface tokens: `--surface-1`, `--surface-2`, subtle borders, glass card style.
- Type scale: display 56/64, h2 40/48, body 17/28. Tighter tracking on display.
- Generous whitespace: section padding 120px desktop / 72px mobile.
- Add reusable `GlassCard`, `SectionHeader`, `PhaseStep`, `MetricCard`, `ComparisonTable`, `FAQAccordion` components.

## 6. Premium hero illustration

Generate `src/assets/hero-growth-engine.jpg` (1920×1080, premium quality) — glassmorphism floating UI cards: website mockup, GBP dashboard, map with pins, SEO ranking graph, reviews, lead notifications, AI visibility panel, calendar. Soft white bg with blue gradient, isometric depth, no people, Apple/Stripe aesthetic. Used in Hero right column.

## 7. Content assets

- `src/data/caseStudies.ts` — 6 home-service case studies with metrics.
- `src/data/faq.ts` — 10 Q&A.
- `src/data/comparison.ts` — Freelancer / Agency / Able Digital rows.
- `src/data/industries.ts` — 15 home-service verticals.
- Update `testimonials.ts` to home-service owners (HVAC, roofing, etc.) with U.S. cities.

## 8. SEO / Meta

- Update `index.html` title + description to positioning line.
- Per-page `<Helmet>` titles: "Local Growth Engine for Home Service Businesses | Able Digital", etc.
- Add JSON-LD `Organization` + `Service` schema in `index.html`.

## 9. Out of scope (this pass)

- No backend / Cloud (no forms, no CMS).
- No booking integration — CTA links to `/contact` and WhatsApp.
- No pricing page (positioning is consultative; pricing revealed on call).

---

Once you approve, I'll build everything above in one pass: new data files → design tokens → components → page rewrites → hero illustration → meta.
