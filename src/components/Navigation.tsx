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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="section-shell">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Go to homepage">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
              <span className="text-white text-xl font-bold font-heading">C</span>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold text-white font-heading tracking-tight">ClassNova</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-center gap-1 text-sm md:flex">
            <div className="flex items-center gap-1 rounded-full border border-white/5 bg-white/5 p-1 backdrop-blur-md">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`relative rounded-full px-5 py-2 font-medium transition-all duration-300 ${isActive(item.href)
                      ? "text-white"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {isActive(item.href) && (
                    <div className="absolute inset-0 rounded-full bg-white/10 border border-white/5 shadow-sm" />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-4 md:flex">
            <Button variant="ghost" className="text-slate-300 hover:text-white">
              Log in
            </Button>
            <Link to="/contact">
              <Button className="font-semibold shadow-glow">
                Book Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              className="rounded-full p-2 text-white transition-colors hover:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 animate-fade-in border-b border-white/10 bg-[#0F172A]/95 backdrop-blur-xl p-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${isActive(item.href)
                      ? "bg-blue-500/10 text-blue-400"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 border-t border-white/10 pt-4 mt-2">
                <Button variant="outline" className="w-full justify-center">
                  Log in
                </Button>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full justify-center shadow-glow">
                    Book a demo
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
