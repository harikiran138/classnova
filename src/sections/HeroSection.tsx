import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Play, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden section-padding bg-gradient-to-b from-[#050C1F] via-[#081736] to-[#0A1628] text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-orange-500/30 blur-[160px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A1628] to-transparent" />
      </div>

      <div className="section-shell flex min-h-[70vh] flex-col gap-16 pt-20 lg:flex-row lg:items-center lg:gap-12">
        <div className="relative z-10 flex-1 space-y-10">
          <div className="space-y-6">
            <div className="pill">
              <span className="text-orange-300">ClassNova · Pilot ready</span>
              <span className="hidden text-white/60 sm:inline">Meet us at DIDAC India</span>
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-[56px]">
              Transform any classroom into a <span className="bg-gradient-to-r from-[#FF7A00] via-[#FF9A3C] to-[#FFD8A8] bg-clip-text text-transparent">smart classroom</span>
            </h1>
            <p className="text-balance text-lg text-white/80 lg:text-xl">
              A powerful, portable device that turns projectors and TVs into interactive teaching hubs.
            </p>
          </div>

          <div className="grid gap-4 text-white/80 sm:grid-cols-3">
            {[
              { label: "Simple setup", value: "Plug & teach" },
              { label: "Teacher-friendly", value: "No training" },
              { label: "Budget ready", value: "₹12k kit" },
            ].map((stat) => (
              <div key={stat.label} className="stat-card px-5 py-6 text-left">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{stat.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 text-base sm:flex-row">
            <Button className="btn-primary-pill h-14 text-base">
              Book a demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="btn-ghost-pill h-14 border-white/30 text-base"
            >
              Download brochure
              <Download className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              className="btn-pill h-14 text-base text-white hover:bg-white/10"
            >
              <Play className="mr-2 h-4 w-4" /> Watch product tour
            </Button>
          </div>

          <div className="glass-panel border-orange-500/30 bg-orange-500/5 px-6 py-5 text-sm text-orange-100">
            <p className="flex items-start gap-2 text-balance">
              <Sparkles className="mt-0.5 h-4 w-4 text-orange-300" />
              <span>
                Built for teachers, tested in live classrooms, and ready for DIDAC previews.
              </span>
            </p>
          </div>
        </div>

        <div className="relative z-10 flex flex-1 items-center justify-center">
          <div className="relative h-[520px] w-full max-w-[520px]">
            <div className="absolute inset-0 rounded-[48px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-3xl" />

            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/20 blur-3xl" />

            <div className="absolute inset-8 flex flex-col items-center justify-center gap-6">
              <div className="w-48 rounded-3xl bg-white/10 p-6 text-center text-white shadow-lg shadow-orange-500/30">
                <p className="text-lg font-semibold">ClassNova Core</p>
                <p className="text-sm text-white/70">Plug-and-play smart classroom brain</p>
              </div>

              <div className="flex w-full items-center justify-between">
                <div className="w-32 rounded-2xl bg-white/5 p-4 text-center text-white/80">
                  <p>Wireless Mouse</p>
                </div>
                <div className="w-32 rounded-2xl bg-white/5 p-4 text-center text-white/80">
                  <p>Digital Pen</p>
                </div>
              </div>

              <div className="w-40 rounded-2xl bg-white/5 p-4 text-center text-white/80">
                <p>USB Microphone</p>
              </div>

              <p className="text-sm text-white/60">TODO: Replace with actual 3D asset render</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
