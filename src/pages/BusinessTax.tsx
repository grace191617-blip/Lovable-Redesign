import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, FileText, BarChart3, ClipboardCheck } from "lucide-react";

const services = [
  { icon: Calculator, title: "Tax Compliance", description: "Accurate federal, state, and local tax return preparation for all entity types." },
  { icon: FileText, title: "Bookkeeping & Accounting", description: "Clean, organized financials that give you real-time visibility into your business." },
  { icon: BarChart3, title: "Tax Planning", description: "Year-round proactive strategies to minimize your tax burden and maximize cash flow." },
  { icon: ClipboardCheck, title: "CFO Advisory", description: "Fractional CFO services including budgeting, forecasting, and financial strategy." },
];

const BusinessTax = () => {
  return (
    <Layout>
      <section className="section-padding navy-gradient">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Business Solutions</p>
            <h1 className="heading-display text-primary-foreground mb-6">Business Tax & Accounting</h1>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              From compliance to strategy, we handle every aspect of your business finances so you can focus on growth.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-card p-8 card-hover">
                <s.icon className="mb-4 h-10 w-10 text-accent" />
                <h3 className="mb-2 text-xl font-semibold font-serif">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-section mb-4">Let's Simplify Your Business Finances</h2>
          <p className="body-large mb-8">We work with businesses of all sizes—from startups to established enterprises.</p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/consultation">Get Started <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessTax;
