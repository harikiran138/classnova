import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#050C1F] via-[#071334] to-[#0A1628] text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-orange-500/30 blur-[160px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A1628] to-transparent" />
      </div>

      <div className="container mx-auto flex min-h-screen flex-col gap-16 px-4 pb-24 pt-40 lg:flex-row lg:items-center lg:gap-12">
        <div className="relative z-10 flex-1 space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
              <span className="text-orange-300">Live at DIDAC India 2025</span>
              <span className="opacity-70">Hall 7 · Booth E-24</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transform Any Projector Into A <span className="bg-gradient-to-r from-[#FF7A00] via-[#FF9A3C] to-[#FFD8A8] bg-clip-text text-transparent">Complete Smart Classroom</span>
            </h1>
            <p className="text-lg text-white/80 lg:text-xl">
              ₹12,000 solution replacing ₹2 lakh smart boards. Plug, play, and revolutionize teaching in 5 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 text-white/80 sm:grid-cols-3">
            {[
              { label: "Classrooms", value: "15,000+", icon: "📊" },
              { label: "Offline Ready", value: "100%", icon: "⚡" },
              { label: "Cost Reduction", value: "85%", icon: "💰" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center shadow-[0_0_40px_rgba(255,122,0,0.15)]"
              >
                <div className="text-3xl" aria-hidden>
                  {stat.icon}
                </div>
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="text-sm uppercase tracking-wide text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 text-base sm:flex-row">
            <Button className="h-14 rounded-full bg-[#FF7A00] text-base font-semibold text-white shadow-lg shadow-[#FF7A00]/40 transition hover:scale-[1.02]">
              Book Live Demo at DIDAC
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-14 rounded-full border-white/30 bg-transparent text-base font-semibold text-white hover:bg-white/10"
            >
              Download Brochure
              <Download className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              className="h-14 rounded-full text-base font-semibold text-white hover:bg-white/10"
            >
              <Play className="mr-2 h-4 w-4" /> Watch 2-min Video
            </Button>
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
