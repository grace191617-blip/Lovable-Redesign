import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Target, Heart } from "lucide-react";

const values = [
  { icon: Award, title: "Excellence", description: "We hold ourselves to the highest standards of accuracy, compliance, and strategic thinking." },
  { icon: Target, title: "Proactive Strategy", description: "We don't wait for tax season. We plan year-round to keep you ahead of the curve." },
  { icon: Heart, title: "Client-First", description: "Your goals are our goals. Every recommendation is made with your best interests in mind." },
];

const team = [
  { name: "James Sterling", role: "Managing Partner, CPA", bio: "25+ years in tax strategy for high-growth businesses and HNW individuals." },
  { name: "Sarah Chen", role: "Partner, Tax Strategy", bio: "Former Big Four tax specialist focused on founder and startup tax planning." },
  { name: "Michael Torres", role: "Director, Business Advisory", bio: "CFO advisory and business tax planning for companies from Series A to IPO." },
  { name: "Emily Whitfield", role: "Director, Private Client", bio: "Estate planning and wealth preservation specialist for families and trusts." },
];

const About = () => {
  return (
    <Layout>
      <section className="section-padding navy-gradient">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">About Us</p>
            <h1 className="heading-display text-primary-foreground mb-6">Built on Trust, Driven by Strategy</h1>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              Sterling CPA was founded on the belief that exceptional tax advice should be proactive, personalized, and accessible to those who need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-section text-center mb-12">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <v.icon className="mx-auto mb-4 h-10 w-10 text-accent" />
                <h3 className="text-xl font-semibold font-serif mb-2">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-section text-center mb-12">Our Leadership</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <div key={t.name} className="rounded-xl border border-border bg-card p-6 text-center card-hover">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-2xl font-bold font-serif text-primary-foreground">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-semibold font-serif">{t.name}</h3>
                <p className="text-sm text-accent font-medium">{t.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-section mb-4">Join the Sterling Family</h2>
          <p className="body-large mb-8">Let's build a lasting partnership around your financial success.</p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/consultation">Get in Touch <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
