import { useEffect, useState } from "react";

export const FloatingCtas = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (typeof window === "undefined") return;
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) {
        setProgress(1);
        return;
      }
      setProgress(Math.min(scrollTop / scrollable, 1));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const progressPercent = Math.round(progress * 100);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 text-white">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold shadow-lg shadow-[#25D366]/50"
        aria-label="Chat with ClassNova team on WhatsApp"
      >
        WhatsApp team
      </a>
      <a
        href="#didac"
        className="rounded-full bg-[#FF7A00] px-5 py-3 text-sm font-semibold shadow-lg shadow-[#FF7A00]/50"
      >
        Book DIDAC slot
      </a>
      <a
        href="#demo"
        className="rounded-full bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur"
      >
        Request demo
      </a>
      <button
        type="button"
        onClick={scrollToTop}
        className="rounded-full bg-white/10 px-5 py-2 text-xs uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/20"
      >
        Back to top
      </button>
      <div
        className="mt-1 rounded-2xl border border-white/10 bg-[#01040B]/80 p-3 text-[11px] backdrop-blur"
        aria-label="Scroll progress"
      >
        <div className="mb-1 flex items-center justify-between text-white/70">
          <span>Page progress</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-white"
            style={{ width: `${progressPercent}%` }}
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingCtas;
