import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

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

            {/* H1: 7-10 Words, Big Bold */}
            <h1 className="h1 text-[#0F172A] animate-fade-in-up">
              Democratizing Smart Education <br />
              <span className="text-[#2563EB]">For The Next Billion Students</span>
            </h1>

            {/* Subheadline: One Sentence */}
            <p className="body-text text-xl text-[#64748B] max-w-2xl mx-auto lg:mx-0 font-medium animate-fade-in-up delay-100">
              ClassNova is the operating system for affordable digital classrooms.
              <span className="text-[#FF7A00] font-bold"> A $5B opportunity to upgrade 1.5M schools.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up delay-200">
              <Button size="lg" className="h-14 px-8 text-lg shadow-xl shadow-orange-500/20 w-full sm:w-auto bg-[#FF7A00] hover:bg-[#E66E00] text-white rounded-2xl">
                TALK TO FOUNDER
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto border-2 border-slate-200 hover:border-blue-200 hover:bg-blue-50 text-[#0F172A] rounded-2xl">
                SEE HOW IT WORKS
                <Play className="ml-2 h-5 w-5 fill-current" />
              </Button>
            </div>

            {/* Social Proof - Teachmint Style */}
            <div className="pt-10 animate-fade-in-up delay-300">
              <p className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-6">Trusted by 50+ Pilot Schools</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {["Delhi Public School", "Kendriya Vidyalaya", "Ryan International", "Narayana Group"].map((school) => (
                  <span key={school} className="text-sm font-bold text-slate-400 hover:text-[#2563EB] transition-colors cursor-default">
                    {school}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Content - Device Mockup (Solana Saga / Rabbit R1 Style) */}
          <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none animate-float mx-auto">
            {/* Device Frame */}
            <div className="relative aspect-[9/16] w-[300px] mx-auto rounded-[40px] bg-[#0F172A] shadow-2xl shadow-blue-900/20 border-[8px] border-[#1E293B] overflow-hidden ring-1 ring-white/10">
              {/* Camera Punch Hole */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#1E293B]" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-900/50" />
              </div>

              {/* Side Buttons */}
              <div className="absolute -right-[10px] top-24 w-[10px] h-12 bg-[#1E293B] rounded-r-md" />
              <div className="absolute -right-[10px] top-40 w-[10px] h-20 bg-[#1E293B] rounded-r-md" />

              {/* Screen Content */}
              <div className="absolute inset-0 bg-slate-950 overflow-hidden">
                {/* UI Header */}
                <div className="h-24 bg-gradient-to-b from-blue-900/20 to-transparent p-6 pt-12 flex justify-between items-start">
                  <div className="w-8 h-8 rounded-full bg-white/10" />
                  <div className="w-20 h-4 rounded-full bg-white/10" />
                </div>

                {/* UI Body */}
                <div className="p-6 space-y-4">
                  <div className="h-32 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#FF7A00] opacity-80 p-4 flex flex-col justify-end">
                    <div className="w-1/2 h-4 rounded-full bg-white/20 mb-2" />
                    <div className="w-3/4 h-6 rounded-full bg-white/40" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 rounded-2xl bg-white/5 border border-white/10" />
                    <div className="h-24 rounded-2xl bg-white/5 border border-white/10" />
                    <div className="h-24 rounded-2xl bg-white/5 border border-white/10" />
                    <div className="h-24 rounded-2xl bg-white/5 border border-white/10" />
                  </div>
                </div>

                {/* Bottom Nav */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent flex justify-center items-center">
                  <div className="w-32 h-1.5 rounded-full bg-white/20" />
                </div>
              </div>
            </div>

            {/* Floating Badge - Rabbit R1 Style */}
            <div className="absolute top-1/2 -right-12 lg:-right-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce-slow hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-[#FF7A00] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/30">
                  AI
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Powered By</p>
                  <p className="text-base font-bold text-slate-900">ClassNova OS</p>
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
