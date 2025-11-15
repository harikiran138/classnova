import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/lib/theme-provider";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "What", href: "#what-is-classnova" },
    { label: "Deployment", href: "#deployment" },
    { label: "Features", href: "#features" },
    { label: "Hardware", href: "#hardware" },
    { label: "Software", href: "#software" },
    { label: "Benefits", href: "#benefits" },
    { label: "Pricing", href: "#pricing" },
    { label: "Cases", href: "#impact" },
    { label: "Timeline", href: "#timeline" },
    { label: "Team", href: "#team" },
    { label: "Comparison", href: "#comparison" },
    { label: "Resources", href: "#resources" },
    { label: "FAQ", href: "#faq" },
    { label: "Trust", href: "#backed-by" },
    { label: "Demo", href: "#demo" },
  ];

  return (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 shadow-[0_10px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl">
      <div className="section-shell">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2" aria-label="Scroll to top">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-warm shadow-soft">
              <span className="text-white text-xl font-bold">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">ClassNova</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-center gap-6 text-sm md:flex md:flex-wrap">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-foreground/70 transition-smooth hover:text-[#FF7A00]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-foreground shadow-[0_5px_15px_rgba(15,23,42,0.08)] transition-smooth hover:-translate-y-0.5"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Button variant="outline" className="btn-ghost-pill h-11 text-sm">
              Download brochure
            </Button>
            <Button className="btn-primary-pill h-11 text-sm">
              Book a demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              className="rounded-lg p-2 transition-smooth hover:bg-foreground/10"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="animate-fade-in border-t border-border bg-background py-4 text-foreground md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-2 text-sm font-medium text-foreground/80 transition-smooth hover:text-[#FF7A00]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 border-t border-border pt-4">
                <Button variant="outline" className="btn-ghost-pill w-full">
                  Download brochure
                </Button>
                <Button className="btn-primary-pill w-full">
                  Book a demo
                </Button>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="btn-ghost-pill w-full bg-background/40"
                >
                  <span className="flex items-center justify-center gap-2 text-sm font-semibold">
                    {isDark ? (
                      <>
                        <Sun className="h-4 w-4" /> Light mode
                      </>
                    ) : (
                      <>
                        <Moon className="h-4 w-4" /> Dark mode
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
