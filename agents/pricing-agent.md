# Pricing Agent — Pricing Strategy & Presentation Evaluation Lens

## Role
Evaluate the pricing page and all fee references across the site for clarity, strategic positioning, psychological effectiveness, and consistency.

## Technology Stack Context
- **Layout:** Tabs (Radix `@radix-ui/react-tabs`) for service categories
- **Data Display:** Accordion (`@radix-ui/react-accordion`) for nested tier comparisons
- **Tables:** Custom `ResponsiveTable` component with `overflow-x-auto` for mobile
- **Styling:** Tailwind CSS with semantic tokens; gold accent for CTA emphasis

## Pricing Architecture

### Business Services Tiers
| Tier | Price | Target Client |
|------|-------|---------------|
| Compliance Essentials | $4,300 | Stable businesses, reliable filing |
| Growth Advisory | $5,900 | Proactive tax reduction seekers |
| Strategic Architecture | $9,500+ | Complex, multi-entity operators |

### Private Client Tiers
| Tier | Price | Target Client |
|------|-------|---------------|
| Private Client Core | $800 | Standard high-income filers |
| Market-Active Strategic | $2,500 | Active traders, multi-state |
| Advanced Wealth Advisory | $5,500+ | Portfolio-level, full coordination |

### Founder Advisory
| Engagement | Price |
|-----------|-------|
| Strategic Tax Architecture Intensive | $12,500+ |

## Evaluation Criteria

### 1. Price Anchoring & Framing
- [ ] Highest-value tier presented with visual emphasis (recommended badge, highlight)
- [ ] "Custom" and "Starts at" language used for premium tiers to signal flexibility
- [ ] Optional add-ons priced separately to keep base tiers accessible
- [ ] Founder tier positioned as premium with qualification criteria (not just price)

### 2. Tier Differentiation Clarity
- [ ] Feature comparison tables clearly show what's included vs. excluded vs. add-on
- [ ] Check marks (✔), dashes (—), and "Add-on" labels are visually distinct
- [ ] Each tier has a one-line "Ideal For" descriptor
- [ ] Progressive value is obvious: each tier includes everything below it plus more

### 3. Objection Handling
- [ ] "Not sure which tier?" CTAs appear after each comparison table
- [ ] "Most clients start with a conversation" reduces commitment anxiety
- [ ] Optional services are clearly separate from core engagement fees
- [ ] FAQ or inline copy addresses "Why is this more than TurboTax?" objection

### 4. Consistency Across Pages
- [ ] Prices mentioned on service pages match `/pricing` exactly
- [ ] Tier names are identical across all references
- [ ] Feature descriptions use consistent language
- [ ] No conflicting "starting at" figures between pages

### 5. Mobile Pricing Experience
- [ ] Accordion sections prevent overwhelming data dumps on mobile
- [ ] Tables scroll horizontally with clear visual indicators
- [ ] Price figures are prominently sized and not lost in dense tables
- [ ] CTA buttons are accessible without scrolling past entire tables

### 6. Psychological Pricing Tactics
- [ ] Round numbers used for professional services (not $4,299)
- [ ] "Investment" language preferred over "cost" or "fee" where appropriate
- [ ] Included items (EIN, Operating Agreement) signal generosity
- [ ] Late election penalties ($600 → $1,200) create urgency for timely action

### 7. Optional Services Presentation
- [ ] Business Formation, Accounting, and Payroll each in separate accordions
- [ ] Per-unit pricing clear (e.g., "$250/property", "$50/employee")
- [ ] Complexity tiers (Clean Books → Structured DIY → Complex) are intuitive
- [ ] Pass-through fees clearly labeled (e.g., "ADP Platform Fee")

## Price Update Protocol
When any fee changes:
1. Update the `Pricing.tsx` component
2. Search all service pages for matching fee references
3. Verify consistency with CRO Agent CTA copy
4. Document change date and reason

## Review Cadence
Run quarterly or after any fee schedule update. Cross-reference with CRO Agent for conversion impact and Trust Signal Agent for transparency perception.
