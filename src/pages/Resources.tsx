import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, BookOpen, Video } from "lucide-react";

const resources = [
  { icon: FileText, title: "Tax Planning Checklist for Founders", category: "Guide", description: "A comprehensive checklist to ensure you're maximizing every tax advantage available to startup founders." },
  { icon: BookOpen, title: "Understanding QSBS Exclusion", category: "Article", description: "How qualified small business stock can help you exclude up to $10M in capital gains from federal tax." },
  { icon: Video, title: "Year-End Tax Strategies Webinar", category: "Webinar", description: "Watch our latest webinar on proactive strategies to reduce your tax liability before year-end." },
  { icon: FileText, title: "Business Entity Selection Guide", category: "Guide", description: "S-Corp vs. C-Corp vs. LLC — learn which structure is right for your business goals." },
  { icon: BookOpen, title: "R&D Tax Credits Explained", category: "Article", description: "Many startups miss out on valuable R&D credits. Learn how to identify and claim them." },
  { icon: FileText, title: "Estate Planning Essentials", category: "Guide", description: "Key strategies for protecting your wealth and planning for future generations." },
];

const Resources = () => {
  return (
    <Layout>
      <section className="section-padding navy-gradient">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Resources</p>
          <h1 className="heading-display text-primary-foreground mb-6">Insights & Resources</h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Expert insights to help you make smarter financial decisions.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <div key={r.title} className="rounded-xl border border-border bg-card p-8 card-hover flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <r.icon className="h-5 w-5 text-accent" />
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{r.category}</span>
              </div>
              <h3 className="text-lg font-semibold font-serif mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{r.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-accent cursor-pointer">
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-section mb-4">Need Personalized Advice?</h2>
          <p className="body-large mb-8">Our team is ready to help you navigate your unique tax situation.</p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/consultation">Book a Consultation <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
