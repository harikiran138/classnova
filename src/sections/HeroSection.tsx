import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Play, CheckCircle2 } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden min-h-screen flex items-center pt-20 bg-white"
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-blue-50/50 blur-3xl" />
        <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-orange-50/50 blur-3xl" />
      </div>

      <div className="section-shell relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Text Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
              </span>
              <span className="text-sm font-bold uppercase tracking-wide text-[#2563EB]">Invest in the Future of Education</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] font-heading leading-[1.1] animate-fade-in-up uppercase">
              Building the <br />
              <span className="text-[#2563EB]">OS for Smart Schools</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#64748B] max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-100 font-medium">
              ClassNova is a plug-and-play operating system that upgrades any classroom in 10 minutes.
              <span className="text-[#FF7A00] font-bold"> A $5B opportunity to digitize 1.5M schools.</span>
            </p >

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up delay-200">
              <Button size="lg" className="h-14 px-8 text-lg shadow-xl shadow-orange-500/20 w-full sm:w-auto">
                INVEST IN CLASSNOVA
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">
                VIEW PITCH DECK
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="pt-10 animate-fade-in-up delay-300">
              <p className="text-xs font-bold uppercase tracking-widest text-[#64748B] mb-4">Trusted by Leading Institutions</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholder Logos - In a real app, use SVGs */}
                <div className="h-8 w-24 bg-slate-200 rounded animate-pulse" />
                <div className="h-8 w-24 bg-slate-200 rounded animate-pulse delay-75" />
                <div className="h-8 w-24 bg-slate-200 rounded animate-pulse delay-150" />
                <div className="h-8 w-24 bg-slate-200 rounded animate-pulse delay-200" />
              </div>
            </div>
          </div >

          {/* Visual Content - Device Mockup Placeholder */}
          < div className="flex-1 relative w-full max-w-[600px] lg:max-w-none animate-float" >
            <div className="relative aspect-[4/3] rounded-[32px] bg-white shadow-2xl shadow-blue-900/10 border border-slate-100 overflow-hidden group">
              {/* Screen Content */}
              <div className="absolute inset-2 rounded-[24px] bg-slate-50 overflow-hidden border border-slate-200">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />

                {/* UI Mockup Elements */}
                <div className="absolute top-8 left-8 right-8 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                <div className="absolute top-24 left-8 w-1/3 bottom-8 bg-white rounded-xl shadow-sm border border-slate-100 p-4 space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-blue-100" />
                  <div className="h-4 w-3/4 bg-slate-100 rounded" />
                  <div className="h-4 w-1/2 bg-slate-100 rounded" />
                </div>

                <div className="absolute top-24 right-8 w-1/2 h-40 bg-[#2563EB] rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white fill-current" />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-400 tracking-wide">Status</p>
                  <p className="text-sm font-bold text-slate-800">System Online</p>
                </div>
              </div>
            </div>
          </div >
        </div >
      </div >
    </section >
  );
};

export default HeroSection;
