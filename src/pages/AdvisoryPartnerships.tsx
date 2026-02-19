import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake, Scale, Building, Landmark } from "lucide-react";

const partners = [
  { icon: Handshake, title: "Financial Advisors & RIAs", description: "Seamless collaboration on tax-aware investment strategies and client transitions." },
  { icon: Scale, title: "Attorneys & Law Firms", description: "Coordinated tax guidance for estate planning, M&A, and litigation support." },
  { icon: Building, title: "Family Offices", description: "Comprehensive tax advisory integrated into multi-generational wealth management." },
  { icon: Landmark, title: "PE & VC Firms", description: "Tax structuring and compliance support for fund managers and portfolio companies." },
];

const AdvisoryPartnerships = () => {
  return (
    <Layout>
      <section className="section-padding navy-gradient">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Partnerships</p>
            <h1 className="heading-display text-primary-foreground mb-6">Advisory Partnerships</h1>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              We work alongside financial advisors, attorneys, and family offices to deliver holistic solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-2">
          {partners.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-8 card-hover">
              <s.icon className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-2 text-xl font-semibold font-serif">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-section mb-4">Better Together</h2>
          <p className="body-large mb-8">Let's explore how a partnership with Sterling CPA can benefit your clients.</p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/consultation">Become a Partner <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default AdvisoryPartnerships;
