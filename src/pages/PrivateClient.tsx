import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gem, Home, Gift, Landmark } from "lucide-react";

const services = [
  { icon: Gem, title: "Wealth Preservation", description: "Tax-efficient strategies to protect and grow generational wealth." },
  { icon: Home, title: "Real Estate Tax Planning", description: "Optimize tax treatment for real estate holdings, 1031 exchanges, and more." },
  { icon: Gift, title: "Estate & Gift Planning", description: "Minimize estate taxes and create efficient wealth transfer structures." },
  { icon: Landmark, title: "Trust & Entity Advisory", description: "Strategic use of trusts, LLCs, and family limited partnerships." },
];

const PrivateClient = () => {
  return (
    <Layout>
      <section className="section-padding navy-gradient">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Private Client</p>
            <h1 className="heading-display text-primary-foreground mb-6">Private Client Tax & Advisory</h1>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              Tailored tax and wealth advisory for high-net-worth individuals and families who demand excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-2">
          {services.map((s) => (
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
          <h2 className="heading-section mb-4">Your Wealth Deserves a Partner, Not Just an Accountant</h2>
          <p className="body-large mb-8">We take a holistic approach to your financial picture.</p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/consultation">Schedule a Private Consultation <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PrivateClient;
