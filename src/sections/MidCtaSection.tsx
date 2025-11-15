import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const proofPoints = [
  "Setup under 10 minutes",
  "Works without internet",
  "Budget-ready starter kit",
];

const MidCtaSection = () => {
  return (
    <section className="section-padding bg-slate-900 text-white">
      <div className="section-shell flex flex-col gap-8 rounded-[32px] border border-white/10 bg-slate-900/40 p-8 shadow-[0_40px_100px_rgba(15,23,42,0.45)] md:flex-row md:items-center">
        <div className="flex-1 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
            Book a live walkthrough
          </p>
          <h3 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Upgrade every classroom in one demo
          </h3>
          <ul className="grid gap-3 text-sm text-white/80 sm:grid-cols-3">
            {proofPoints.map((point) => (
              <li key={point} className="rounded-2xl border border-white/20 px-4 py-3 text-center">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <Button className="btn-primary-pill w-full">
            Book a free demo
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="btn-ghost-pill w-full border-white/30 text-white">
            Download brochure
          </Button>
          <p className="text-xs text-white/70">
            Risk-free pilot • No installation fee • Dedicated WhatsApp support
          </p>
        </div>
      </div>
    </section>
  );
};

export default MidCtaSection;
