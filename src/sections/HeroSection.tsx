import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Play, Sparkles, CheckCircle2 } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden min-h-screen flex items-center pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-[#020617]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] opacity-30" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="section-shell relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Text Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium text-blue-200">Pilot ready · Meet us at DIDAC India</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-heading leading-[1.1] animate-fade-in-up">
              Unlock smarter learning <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                instantly.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-100">
              Transform any projector into an interactive smart classroom.
              No complex training. No expensive hardware upgrades. Just plug and teach.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up delay-200">
              <Button size="lg" className="h-14 px-8 text-lg shadow-glow w-full sm:w-auto">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">
                Download Brochure
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-slate-400 animate-fade-in-up delay-300">
              {["Plug & Play", "Zero Training", "Budget Friendly"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content */}
          <div className="flex-1 relative w-full max-w-[600px] lg:max-w-none animate-float">
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden group">
              {/* Abstract UI Representation */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />

              {/* Floating Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl flex items-center justify-center transform transition-transform duration-500 group-hover:scale-105">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-heading">ClassNova Core</h3>
                      <p className="text-sm text-slate-400">Smart Hub Active</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-12 right-12 p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-white">System Online</span>
                </div>
              </div>

              <div className="absolute bottom-12 left-12 p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Play className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-sm font-medium text-white">Interactive Mode</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
