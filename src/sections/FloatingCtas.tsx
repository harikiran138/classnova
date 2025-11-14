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
        className="btn-pill bg-[#25D366] text-[#01040B] shadow-[0_8px_30px_rgba(37,211,102,0.35)]"
        aria-label="Chat with ClassNova team on WhatsApp"
      >
        Pilot desk (WA)
      </a>
      <a
        href="#timeline"
        className="btn-pill bg-gradient-to-r from-orange-400 via-orange-500 to-rose-500 text-white shadow-[0_8px_30px_rgba(249,115,22,0.35)]"
      >
        View build timeline
      </a>
      <a
        href="#transparency"
        className="btn-pill border border-white/15 bg-white/10 text-white"
      >
        See transparency data
      </a>
      <button
        type="button"
        onClick={scrollToTop}
        className="btn-pill h-10 border border-white/10 bg-white/5 text-xs font-semibold uppercase tracking-[0.3em] text-white"
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
