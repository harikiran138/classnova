import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import FooterSection from "@/sections/FooterSection";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Projects from "./pages/Projects";
import Investor from "./pages/Investor";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Analytics } from "@vercel/analytics/react";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/investors" element={<Investor />} />
                <Route path="/team" element={<Team />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <FooterSection />
          </div>
          <Analytics />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
