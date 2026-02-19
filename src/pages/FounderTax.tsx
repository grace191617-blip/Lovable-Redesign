import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Search,
  BarChart3,
  Map,
  Check,
  Quote,
} from "lucide-react";

const CTA = ({ label = "Schedule a Founder Strategy Consultation" }: { label?: string }) => (
  <Button variant="gold" size="lg" asChild>
    <Link to="/consultation">
      {label} <ArrowRight className="ml-1 h-4 w-4" />
    </Link>
  </Button>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 text-sm md:text-base">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const phases = [
  {
    icon: Search,
    phase: "Phase 1",
    title: "Deep Diagnostic",
    description:
      "We analyze the underlying architecture of your financial structure:",
    items: [
      "Prior two years of tax returns",
      "Compensation design",
      "Equity grants and vesting schedules",
      "Business entity configuration",
      "Estimated tax methodology",
      "Retirement and deduction alignment",
    ],
    footer:
      "We identify inefficiencies, exposure risks, and structural optimization levers.",
  },
  {
    icon: BarChart3,
    phase: "Phase 2",
    title: "Modeling & Optimization",
    description:
      "Using our internal Tax Operating System, we model forward-looking scenarios:",
    items: [
      "Reasonable compensation adjustments",
      "AMT and liquidity-event projections",
      "Multi-state impact modeling",
      "Entity layering strategies",
      "Cash flow vs. deferral timing tradeoffs",
    ],
    footer: "Each recommendation is quantified and stress-tested.",
  },
  {
    icon: Map,
    phase: "Phase 3",
    title: "Strategic Roadmap",
    description:
      "You receive a documented execution plan including:",
    items: [
      "Formal tax strategy memorandum",
      "12-month tax implementation calendar",
      "Structural recommendations",
      "Estimated projections",
      "Implementation prioritization",
    ],
    footer: "Delivered in a dedicated strategy session.",
  },
];

const faqs = [
  {
    q: "How is this different from what my current CPA does?",
    a: "Most CPAs focus on preparation — filing accurate returns after the fact. The Strategic Tax Architecture is a forward-looking design process that models scenarios, quantifies recommendations, and delivers a documented implementation plan.",
  },
  {
    q: "What income level is this designed for?",
    a: "This process is designed for founders and executives with $500K+ in household income, equity compensation, or multi-entity structures.",
  },
  {
    q: "How long does the process take?",
    a: "The Strategic Tax Architecture Intensive typically takes 4–6 weeks from kickoff to delivered roadmap.",
  },
  {
    q: "Can I start with just the Intensive and decide on ongoing advisory later?",
    a: "Absolutely. Most founders begin with the Intensive. Many transition to ongoing advisory, but there's no obligation.",
  },
];

const FounderTax = () => {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="section-padding navy-gradient">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Founder Tax Strategy
          </p>
          <h1 className="heading-display text-primary-foreground mb-6">
            Your company runs on systems.
            <br className="hidden md:block" /> Your tax strategy should too.
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-2">
            Your tax structure should not slow you down.
          </p>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto mb-2">
            We work with founders and equity-compensated operators to design structural tax
            efficiency across income, equity, and multi-state exposure.
          </p>
          <p className="text-accent font-semibold text-lg mb-8">
            Clarity. Modeling. Execution.
          </p>
          <CTA />
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Problem
          </p>
          <h2 className="heading-section mb-6">The Founder Problem</h2>
          <p className="body-large mb-6">
            As your company scales, complexity compounds.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {["Income shifts.", "Equity vests.", "States multiply.", "Liquidity events approach."].map(
              (t) => (
                <div
                  key={t}
                  className="rounded-lg border border-border bg-card p-4 text-center text-sm font-medium"
                >
                  {t}
                </div>
              )
            )}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Most tax firms respond reactively — filing returns and adjusting estimates after the
            fact.{" "}
            <span className="text-foreground font-semibold">
              Founders need structural design, not annual cleanup.
            </span>
          </p>
        </div>
      </section>

      {/* ── Architecture Intro ── */}
      <section className="section-padding bg-muted">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Introducing
          </p>
          <h2 className="heading-section mb-4">
            The Sridhar Strategic Tax Architecture™
          </h2>
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">
            Powered by Our Tax Operating System
          </p>
          <p className="body-large mb-8">
            A proprietary three-phase diagnostic and modeling framework designed specifically for
            founders navigating:
          </p>
          <div className="text-left max-w-md mx-auto">
            <BulletList
              items={[
                "Equity compensation and AMT exposure",
                "S-Corp compensation calibration",
                "Multi-state filing complexity",
                "Entity structuring decisions",
                "Cash flow vs. tax timing tradeoffs",
                "Liquidity event preparation",
              ]}
            />
          </div>
          <div className="mt-8 rounded-lg border border-accent/30 bg-accent/5 p-6">
            <p className="font-serif text-lg font-semibold">
              This is not tax preparation.
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              It is structural engineering for your financial position.
            </p>
          </div>
        </div>
      </section>

      {/* ── Three Phases ── */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-5xl">
          <h2 className="heading-section text-center mb-12">
            How the Architecture Works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {phases.map((p) => (
              <div
                key={p.phase}
                className="rounded-xl border border-border bg-card p-8 flex flex-col"
              >
                <p.icon className="h-8 w-8 text-accent mb-4" />
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">
                  {p.phase}
                </p>
                <h3 className="text-xl font-bold font-serif mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
                <BulletList items={p.items} />
                <p className="mt-4 text-sm font-medium text-foreground">
                  {p.footer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who This Is For ── */}
      <section className="section-padding bg-muted">
        <div className="mx-auto max-w-3xl">
          <h2 className="heading-section mb-6">Who This Is Designed For</h2>
          <p className="body-large mb-6">This process is built for:</p>
          <BulletList
            items={[
              "Venture-backed founders",
              "Bootstrapped operators scaling profitability",
              "Equity-compensated executives",
              "Multi-entity business owners",
              "Founders preparing for acquisition or liquidity",
            ]}
          />
          <p className="mt-8 text-foreground font-medium">
            If your financial structure has outgrown annual tax planning, this is designed for you.
          </p>
        </div>
      </section>

      {/* ── What This Is Not ── */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl">
          <h2 className="heading-section mb-6">What This Is Not</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-destructive font-bold mt-0.5">✕</span>
              <span>It is not generic tax advice</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-destructive font-bold mt-0.5">✕</span>
              <span>It is not year-end estimate adjustments</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-destructive font-bold mt-0.5">✕</span>
              <span>It is not compliance-only accounting</span>
            </li>
          </ul>
          <p className="mt-6 text-foreground font-semibold">
            It is a forward-looking structural design process.
          </p>
        </div>
      </section>

      {/* ── Engagement Structure ── */}
      <section className="section-padding bg-muted">
        <div className="mx-auto max-w-3xl">
          <h2 className="heading-section mb-4">Engagement Structure</h2>
          <p className="body-large mb-6">
            Most founders begin with a Strategic Tax Architecture Intensive.
          </p>
          <p className="text-muted-foreground mb-4">
            From there, clients often transition into ongoing Architecture Advisory for:
          </p>
          <BulletList
            items={[
              "Quarterly modeling",
              "Liquidity event preparation",
              "Compensation recalibration",
              "Multi-year projections",
              "Proactive structural refinement",
            ]}
          />
        </div>
      </section>

      {/* ── Why Founders Choose Us + Testimonial ── */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl">
          <h2 className="heading-section mb-6">Why Founders Choose Us</h2>
          <div className="space-y-2 text-lg mb-10">
            <p className="text-foreground">We think in systems.</p>
            <p className="text-foreground">We communicate clearly.</p>
            <p className="text-foreground">We model before we recommend.</p>
          </div>
          <p className="text-muted-foreground mb-8">
            Our work is structured, documented, and delivered with discretion.
          </p>

          {/* Testimonial */}
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-8">
            <Quote className="h-8 w-8 text-accent/40 mb-4" />
            <blockquote className="text-foreground leading-relaxed italic mb-4">
              "Sridhar is a highly accomplished Certified Public Accountant (CPA) who collaborates
              with me and my associates to address our complex tax requirements, including real
              estate transactions, foreign investments, and company accounting. His team has
              consistently demonstrated a responsive approach to our needs over the past several
              years, with multiple state filings in the United States."
            </blockquote>
            <p className="text-sm font-semibold text-foreground">
              — Nitin, Mountain View
            </p>
            <p className="text-xs text-muted-foreground">Founder &amp; CEO, Silicon Valley</p>
          </div>
        </div>
      </section>

      {/* ── Based in Silicon Valley ── */}
      <section className="section-padding navy-gradient">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-section text-primary-foreground mb-4">
            Based in Silicon Valley. Serving Founders Nationally.
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed mb-2">
            We understand the complexity of equity, growth-stage compensation, and multi-state
            exposure because we work within it daily.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            This is advisory built for the founder environment — not retrofitted to it.
          </p>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl">
          <h2 className="heading-section mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border rounded-lg px-4"
              >
                <AccordionTrigger className="text-base font-semibold text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-padding bg-muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-section mb-4">
            Schedule a Founder Strategy Consultation
          </h2>
          <p className="text-muted-foreground mb-2">
            This is a focused discussion to determine:
          </p>
          <div className="text-left max-w-md mx-auto mb-8">
            <BulletList
              items={[
                "Whether the Strategic Tax Architecture is appropriate",
                "Where structural inefficiencies may exist",
                "What level of advisory support makes sense",
              ]}
            />
          </div>
          <CTA label="Request Consultation" />
        </div>
      </section>
    </Layout>
  );
};

export default FounderTax;
