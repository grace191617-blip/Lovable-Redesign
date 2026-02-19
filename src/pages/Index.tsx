import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Shield, TrendingUp, Users, Building2, Briefcase, UserCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Building2,
    title: "Business Tax & Accounting",
    description: "Comprehensive tax compliance, planning, and accounting solutions for growing businesses.",
    href: "/business-tax",
  },
  {
    icon: TrendingUp,
    title: "Founder Tax Strategy",
    description: "Proactive tax strategies designed for startup founders and entrepreneurs.",
    href: "/founder-tax",
  },
  {
    icon: UserCheck,
    title: "Private Client Advisory",
    description: "Personalized tax and wealth advisory for high-net-worth individuals and families.",
    href: "/private-client",
  },
  {
    icon: Briefcase,
    title: "Advisory Partnerships",
    description: "Collaborative partnerships with financial advisors, attorneys, and family offices.",
    href: "/advisory-partnerships",
  },
];

const stats = [
  { value: "$2.4B+", label: "Assets Under Advisory" },
  { value: "500+", label: "Clients Served" },
  { value: "98%", label: "Client Retention" },
  { value: "25+", label: "Years of Experience" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Financial district at golden hour" className="h-full w-full object-cover" />
          <div className="absolute inset-0 navy-gradient opacity-80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
              Strategic Tax & Advisory
            </p>
            <h1 className="heading-display text-primary-foreground mb-6">
              Your Financial Future,{" "}
              <span className="text-accent">Strategically Planned</span>
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80 mb-8 max-w-lg font-sans">
              We go beyond compliance. Sterling CPA delivers proactive tax strategy and advisory services that protect your wealth and accelerate growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/consultation">
                  Schedule a Consultation <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold font-serif text-accent">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Our Services</p>
            <h2 className="heading-section text-foreground">How We Serve You</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group rounded-xl border border-border bg-card p-8 card-hover"
              >
                <service.icon className="mb-4 h-10 w-10 text-accent" />
                <h3 className="mb-2 text-xl font-semibold font-serif text-card-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-accent">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section-padding navy-gradient">
        <div className="mx-auto max-w-3xl text-center">
          <Shield className="mx-auto mb-6 h-12 w-12 text-accent" />
          <h2 className="heading-section text-primary-foreground mb-4">
            Trusted by Founders & Families
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
            From seed-stage startups to established family offices, we've built lasting relationships grounded in precision, transparency, and results.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/consultation">Start the Conversation</Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl text-center">
          <Users className="mx-auto mb-6 h-12 w-12 text-accent" />
          <h2 className="heading-section text-foreground mb-4">
            Ready to Take Control?
          </h2>
          <p className="body-large mb-8">
            Let's discuss how strategic tax planning can transform your financial outlook.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/consultation">Book Your Free Consultation <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
