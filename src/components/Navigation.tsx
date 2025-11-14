import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Solution", href: "#problem" },
    { label: "Hardware", href: "#hardware" },
    { label: "Software", href: "#software" },
    { label: "Timeline", href: "#timeline" },
    { label: "Transparency", href: "#transparency" },
    { label: "Impact", href: "#impact" },
    { label: "Demo", href: "#demo" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 shadow-soft backdrop-blur-lg">
      <div className="section-shell">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-warm flex items-center justify-center shadow-soft">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">ClassNova</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="btn-ghost-pill h-11 border-white/20 text-sm">
              Download brochure
            </Button>
            <Button className="btn-primary-pill h-11 text-sm">
              Book a demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 transition-smooth hover:bg-secondary md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 border-t border-border/50 pt-4">
                <Button variant="outline" className="btn-ghost-pill w-full border-white/20">
                  Download brochure
                </Button>
                <Button className="btn-primary-pill w-full">
                  Book a demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
