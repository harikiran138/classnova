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
    <div className="fixed bottom-6 right-6 z-50 w-64 rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl">
      <div className="flex flex-col gap-3 text-sm font-semibold">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          className="btn-pill w-full justify-center bg-[#25D366] text-[#083412] shadow-[0_10px_30px_rgba(37,211,102,0.3)]"
          aria-label="Chat with ClassNova team on WhatsApp"
        >
          Pilot desk (WA)
        </a>
        <a href="#demo" className="btn-pill w-full justify-center border border-slate-300 text-slate-900">
          Book demo
        </a>
        <button
          type="button"
          onClick={scrollToTop}
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600"
        >
          Back to top
        </button>
      </div>
      <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-[11px] text-slate-600" aria-label="Scroll progress">
        <div className="mb-1 flex items-center justify-between">
          <span>Page progress</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-white">
          <div
            className="h-full rounded-full bg-[#FF7A00]"
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
