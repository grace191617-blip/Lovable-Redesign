import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Business Tax", href: "/business-tax" },
  { label: "Founder Tax", href: "/founder-tax" },
  { label: "Private Client", href: "/private-client" },
  { label: "Advisory", href: "/advisory-partnerships" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
            <span className="text-lg font-bold text-primary-foreground font-serif">S</span>
          </div>
          <span className="text-xl font-bold font-serif text-foreground">Sterling CPA</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`nav-link px-3 py-2 rounded-md text-sm ${
                location.pathname === item.href ? "text-accent font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Button variant="gold" asChild>
            <Link to="/consultation">Book Consultation</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`nav-link py-2 ${location.pathname === item.href ? "text-accent font-semibold" : ""}`}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="gold" className="mt-2" asChild>
              <Link to="/consultation" onClick={() => setMobileOpen(false)}>Book Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
