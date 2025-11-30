import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/product" },
    { label: "Projects", href: "/projects" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || location.pathname !== "/"
        ? "bg-white/90 backdrop-blur-xl border-b border-slate-200 py-3 shadow-sm"
        : "bg-transparent py-5"
        }`}
    >
      <div className="section-shell">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="Go to homepage">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2563EB] shadow-md transition-transform duration-300 group-hover:scale-105">
              <span className="text-white text-xl font-bold font-heading">C</span>
            </div>
            <span className="text-2xl font-bold text-[#0F172A] font-heading tracking-tight">CLASSNOVA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-center gap-8 text-sm md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`relative font-semibold uppercase tracking-wide transition-colors duration-200 ${isActive(item.href)
                  ? "text-[#2563EB]"
                  : "text-[#64748B] hover:text-[#FF7A00]"
                  }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#2563EB] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-4 md:flex">
            <Button variant="ghost" className="text-[#64748B] hover:text-[#2563EB] font-semibold">
              LOG IN
            </Button>
            <Link to="/contact">
              <Button className="shadow-lg shadow-orange-500/20">
                BOOK DEMO
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              className="rounded-lg p-2 text-[#0F172A] transition-colors hover:bg-slate-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 animate-fade-in border-b border-slate-200 bg-white p-4 shadow-xl md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`rounded-lg px-4 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${isActive(item.href)
                    ? "bg-blue-50 text-[#2563EB]"
                    : "text-[#64748B] hover:bg-slate-50 hover:text-[#0F172A]"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 border-t border-slate-100 pt-4 mt-2">
                <Button variant="outline" className="w-full justify-center">
                  LOG IN
                </Button>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full justify-center shadow-lg shadow-orange-500/20">
                    BOOK A DEMO
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
