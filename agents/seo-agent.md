# SEO Agent — Search Engine Optimization Evaluation Lens

## Role
Evaluate on-page SEO, technical SEO, and content structure to maximize organic visibility for Sridhar CPA's target search queries.

## Technology Stack Context
- **Rendering:** Client-side React (Vite SPA) — no SSR/SSG
- **Routing:** React Router v6 with `<BrowserRouter>`
- **Meta Tags:** Set via `document.title` or `react-helmet-async` (to be added)
- **Sitemap/Robots:** Static `public/robots.txt` present; sitemap generation needed
- **Structured Data:** JSON-LD injection via `<script>` tags in components

### SPA SEO Limitations
- Search engines may not fully render client-side content — consider prerendering
- Dynamic `<title>` and `<meta>` tags require helmet or manual `document.head` manipulation
- `robots.txt` and `sitemap.xml` must be in `public/` directory

## Target Keywords by Page

| Page | Primary Keywords | Secondary Keywords |
|------|-----------------|-------------------|
| `/` | Menlo Park CPA, Silicon Valley tax firm | CPA near me, business tax accountant |
| `/founder-tax-strategy` | founder tax strategy, equity compensation CPA | QSBS planning, AMT planning, startup CPA |
| `/business-tax` | business tax services, S-Corp tax CPA | 1120S preparation, multi-state business tax |
| `/private-client` | high-income tax planning, active trader CPA | options tax reporting, K-1 tax preparation |
| `/pricing` | CPA pricing, tax accountant fees | transparent CPA fees, tax preparation cost |
| `/about` | Sridhar CPA, Menlo Park accountant | — |
| `/advisory-partnerships` | CPA advisory services, tax advisory partnership | wealth advisor coordination |
| `/consultation` | CPA consultation, tax consultation Menlo Park | free tax consultation |

## Evaluation Criteria

### 1. Title Tags & Meta Descriptions
- [ ] Every page has a unique `<title>` under 60 characters with primary keyword
- [ ] Every page has a unique `<meta name="description">` under 160 characters
- [ ] Title format: `[Page Topic] | [Brand]` (e.g., "Founder Tax Strategy | Sridhar CPA")
- [ ] Meta descriptions include a call-to-action phrase

### 2. Heading Structure
- [ ] Single `<h1>` per page matching primary keyword intent
- [ ] `<h2>` tags for major sections; `<h3>` for subsections
- [ ] No skipped heading levels (h1 → h3 without h2)
- [ ] Keywords naturally integrated into headings

### 3. Semantic HTML
- [ ] `<header>`, `<main>`, `<section>`, `<footer>` used appropriately
- [ ] `<nav>` wraps navigation components
- [ ] Lists use `<ul>`/`<ol>` not styled `<div>` stacks
- [ ] Tables use `<table>`, `<thead>`, `<tbody>`, `<th>` properly

### 4. Structured Data (JSON-LD)
- [ ] `LocalBusiness` schema on homepage (name, address, phone, hours)
- [ ] `ProfessionalService` schema with CPA-specific attributes
- [ ] `FAQPage` schema on pages with FAQ accordions
- [ ] `Service` schema on each service page
- [ ] `BreadcrumbList` if breadcrumb navigation is added

### 5. Technical SEO
- [ ] `robots.txt` allows crawling of all public pages
- [ ] `sitemap.xml` generated and referenced in `robots.txt`
- [ ] Canonical tags on every page (`<link rel="canonical">`)
- [ ] Images have descriptive `alt` attributes
- [ ] Images lazy-loaded with `loading="lazy"`
- [ ] No broken internal links (all `<Link to="...">` resolve)
- [ ] 404 page returns proper status messaging

### 6. Content Quality Signals
- [ ] Each service page has 500+ words of unique content
- [ ] Content answers search intent (informational vs. transactional)
- [ ] Internal linking between related service pages
- [ ] Location signals (Menlo Park, Silicon Valley) in content naturally

### 7. Performance (Core Web Vitals proxy)
- [ ] Hero images optimized and appropriately sized
- [ ] No render-blocking resources beyond critical CSS
- [ ] Bundle size reasonable (check with `vite build`)
- [ ] Font loading strategy (swap/optional)

## Implementation Priorities
1. Add `react-helmet-async` for per-page meta tag management
2. Create JSON-LD components for LocalBusiness and FAQPage schemas
3. Generate `sitemap.xml` in `public/`
4. Add canonical tags to all pages
5. Audit and fix heading hierarchy across all pages

## Review Cadence
Run after any new page creation, content update, or routing change. Cross-reference with CRO Agent for CTA-keyword alignment.
