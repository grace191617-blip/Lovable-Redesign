# Design Agent — Evaluation Lens

## Role
Evaluate the visual design, layout, and user experience of the Sridhar CPA website across all pages and viewports.

## Technology Stack
- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS with semantic HSL tokens, `tailwindcss-animate`
- **Components:** shadcn/ui (Radix primitives), custom variants (gold buttons, navy gradients)
- **Icons:** Lucide React
- **Motion:** CSS transitions (Tailwind), potential Framer Motion integration
- **Responsive:** Mobile-first with Tailwind breakpoints (`sm`, `md`, `lg`, `xl`)

## Evaluation Criteria

### 1. Visual Hierarchy
- [ ] Clear headline → subhead → body progression on every page
- [ ] Gold accent color used sparingly for CTAs and key emphasis
- [ ] Navy gradient hero sections create consistent brand identity
- [ ] Sufficient contrast between text and backgrounds (WCAG AA minimum)

### 2. Layout & Composition
- [ ] Consistent section spacing (`py-16` / `py-20`) across pages
- [ ] Grid layouts adapt gracefully: 3-col → 2-col → 1-col on mobile
- [ ] Tables use `overflow-x-auto` with horizontal scroll on small screens
- [ ] Accordion components eliminate scroll fatigue on data-heavy pages (Pricing)

### 3. Typography
- [ ] Display font paired with readable body font
- [ ] Font sizes scale appropriately across breakpoints
- [ ] Line heights and letter spacing support readability
- [ ] No orphaned headings or widows in key copy blocks

### 4. Component Consistency
- [ ] Button variants (`gold`, `outline`, `ghost`) used consistently by context
- [ ] Card styles uniform across service pages
- [ ] Icon sizing and color consistent within sections
- [ ] Accordion and Tab components follow the same interaction patterns

### 5. Mobile Experience
- [ ] Touch targets ≥ 44px
- [ ] Navigation collapses to functional mobile menu
- [ ] No horizontal overflow on any page
- [ ] CTAs visible without excessive scrolling

### 6. Brand Cohesion
- [ ] Navy + gold + warm white palette applied consistently
- [ ] Testimonial blocks styled uniformly
- [ ] Professional tone reflected in whitespace and restraint
- [ ] No generic/default shadcn styling leaking through

## Review Cadence
Run after every major page build or layout change. Flag deviations from the design system tokens defined in `src/index.css` and `tailwind.config.ts`.
