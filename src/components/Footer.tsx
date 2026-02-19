import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent">
                <span className="text-lg font-bold text-accent-foreground font-serif">S</span>
              </div>
              <span className="text-xl font-bold font-serif">Sterling CPA</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Strategic tax planning and advisory services for businesses, founders, and high-net-worth individuals.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              <Link to="/business-tax" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Business Tax & Accounting</Link>
              <Link to="/founder-tax" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Founder Tax Strategy</Link>
              <Link to="/private-client" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Private Client Advisory</Link>
              <Link to="/advisory-partnerships" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Advisory Partnerships</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">About</Link>
              <Link to="/pricing" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Pricing</Link>
              <Link to="/resources" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Resources</Link>
              <Link to="/consultation" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Consultation</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <p>info@sterlingcpa.com</p>
              <p>(555) 234-5678</p>
              <p>123 Financial District<br />New York, NY 10005</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Sterling CPA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
