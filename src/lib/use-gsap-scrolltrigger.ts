import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/**
 * Wire GSAP's ScrollTrigger to a Lenis instance.
 * Call this hook from a component once you have access to the Lenis instance.
 */
export function useGsapScrollTrigger(lenis: Lenis | null) {
  useEffect(() => {
    if (!lenis || typeof window === "undefined") return;

    const scroller = document.scrollingElement || document.documentElement;

    // Proxy methods so ScrollTrigger reads/writes through Lenis
    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value?: number) {
        if (typeof value === "number") {
          lenis.scrollTo(value);
          return;
        }
        const lenisWithScroll = lenis as Lenis & { scroll?: number };
        return typeof lenisWithScroll.scroll === "number" ? lenisWithScroll.scroll : window.scrollY;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // you can add pinType if your scroller uses transforms
    });

    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onLenisScroll);

    // Refresh ScrollTrigger after setup
    if (typeof ScrollTrigger.addEventListener === "function") {
      ScrollTrigger.addEventListener("refresh", () => {
        // noop
      });
    }
    ScrollTrigger.refresh();

    return () => {
      lenis.off("scroll", onLenisScroll);
      try {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      } catch (e) {
        // ignore
      }
    };
  }, [lenis]);
}

export default useGsapScrollTrigger;
