import React, { useEffect, useRef, useState } from "react";
import { useLenisContext } from "@/lib/lenis-context";
import { useGsapScrollTrigger } from "@/lib/use-gsap-scrolltrigger";

const ScrollAnimationDemo: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { lenis } = useLenisContext();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use IntersectionObserver for a simple demo (works with Lenis)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // also demonstrate pulling current scroll position from lenis (if available)
  useEffect(() => {
    if (!lenis) return;

    type LenisLike = {
      on: (event: string, cb: (payload: { scroll: number }) => void) => void;
      off: (event: string, cb: (payload: { scroll: number }) => void) => void;
    };

    const onScroll = ({ scroll }: { scroll: number }) => {
      // could drive animations with this value; here we just toggle lighter state
      // keep small to avoid re-rendering too often
      void scroll;
    };

    (lenis as unknown as LenisLike).on("scroll", onScroll);
    return () => (lenis as unknown as LenisLike).off("scroll", onScroll);
  }, [lenis]);

  // setup GSAP ScrollTrigger when lenis is available
  useGsapScrollTrigger(lenis);

  return (
    <section className="container mx-auto px-4 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl p-8 rounded-xl shadow-soft transition-transform duration-700 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <h2 className="text-2xl font-bold mb-2">Scroll Animation Demo</h2>
        <p className="text-muted-foreground">
          This block fades and slides into view when it becomes visible. Anchor links in
          the navbar will smoothly scroll to page sections.
        </p>
      </div>
    </section>
  );
};

export default ScrollAnimationDemo;
