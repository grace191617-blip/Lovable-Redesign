import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Consultation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Request Submitted",
      description: "We'll be in touch within 1 business day. Thank you!",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <Layout>
      <section className="section-padding navy-gradient">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Get Started</p>
          <h1 className="heading-display text-primary-foreground mb-6">Book Your Consultation</h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Schedule a complimentary consultation with our team. We'll discuss your needs and how Sterling CPA can help.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Smith" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="(555) 123-4567" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business-tax">Business Tax & Accounting</SelectItem>
                      <SelectItem value="founder-tax">Founder Tax Strategy</SelectItem>
                      <SelectItem value="private-client">Private Client Advisory</SelectItem>
                      <SelectItem value="advisory">Advisory Partnerships</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your needs</Label>
                <Textarea id="message" placeholder="Briefly describe your situation and what you're looking for..." rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              </div>
              <Button variant="gold" size="lg" type="submit">
                Submit Request <Send className="ml-1 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-8 space-y-6">
              <h3 className="text-xl font-semibold font-serif">Contact Information</h3>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <p className="text-sm text-muted-foreground">info@sterlingcpa.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Phone</p>
                  <p className="text-sm text-muted-foreground">(555) 234-5678</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Office</p>
                  <p className="text-sm text-muted-foreground">123 Financial District<br />New York, NY 10005</p>
                </div>
              </div>
              <div className="border-t border-border pt-6">
                <h4 className="font-medium text-sm mb-2">Office Hours</h4>
                <p className="text-sm text-muted-foreground">Monday–Friday: 9am – 6pm EST</p>
                <p className="text-sm text-muted-foreground">Saturday–Sunday: By appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Consultation;
