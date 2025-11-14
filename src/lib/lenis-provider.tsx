import React, { useMemo, useEffect } from "react";
import { useLenis } from "./use-lenis";
import { LenisProviderContext } from "./lenis-context";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

type LenisProviderProps = {
  children: React.ReactNode;
};

export const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const lenisRef = useLenis(
    prefersReducedMotion
      ? undefined
      : {
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        }
  );

  // expose lenis instance via context
  const contextValue = useMemo(() => ({ lenis: lenisRef.current }), [lenisRef]);

  // Intercept anchor link clicks and use lenis.scrollTo when possible
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const id = href.substring(1);
      const el = document.getElementById(id);
      if (el && lenisRef.current) {
        e.preventDefault();
        lenisRef.current.scrollTo(el);
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenisRef]);

  return (
    <LenisProviderContext value={contextValue}>{children}</LenisProviderContext>
  );
};

export default LenisProvider;
