import { useEffect, useRef } from "react";
import Lenis from "lenis";

type LenisOptions = ConstructorParameters<typeof Lenis>[0];

export function useLenis(options?: LenisOptions) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis(options || {});
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [options]);

  return lenisRef;
}
