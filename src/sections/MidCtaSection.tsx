import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const proofPoints = [
  "Setup under 10 minutes",
  "Works without internet",
  "Budget-ready starter kit",
];

const MidCtaSection = () => {
  return (
    <section className="section-padding bg-[#0F172A] text-white">
      <div className="section-shell">
        <div className="flex flex-col gap-12 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-12 shadow-2xl md:flex-row md:items-center relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

          <div className="flex-1 space-y-6">
            <p className="text-sm font-bold uppercase tracking-widest text-[#FF7A00]">
              BOOK A LIVE WALKTHROUGH
            </p>
            <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl font-heading uppercase">
              Upgrade every classroom <br />
              <span className="text-[#2563EB]">in one demo</span>
            </h3>
            <ul className="grid gap-4 text-sm text-slate-300 sm:grid-cols-3 pt-4">
              {proofPoints.map((point) => (
                <li key={point} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center font-medium backdrop-blur-sm">
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-1 flex-col gap-4 justify-center items-center md:items-end">
            <Button className="h-14 px-8 text-lg w-full md:w-auto shadow-xl shadow-orange-500/20">
              BOOK A FREE DEMO
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="h-14 px-8 text-lg w-full md:w-auto border-white/20 text-white hover:bg-white/10 hover:border-white/30">
              DOWNLOAD BROCHURE
            </Button>
            <p className="text-xs text-slate-400 font-medium mt-2">
              Risk-free pilot • No installation fee • Dedicated WhatsApp support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidCtaSection;
