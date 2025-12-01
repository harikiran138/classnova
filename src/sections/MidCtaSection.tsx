import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const MidCtaSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] overflow-hidden bg-slate-50 border border-slate-200 text-slate-900 shadow-2xl shadow-slate-200"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
          </div>

          <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl space-y-6 text-center md:text-left">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold uppercase tracking-wider mb-2">
                Limited Pilot Slots Available
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                Ready to transform your school?
              </h2>
              <p className="text-xl text-slate-600 max-w-lg mx-auto md:mx-0">
                Join 50+ Colleges and Schools upgrading to ClassNova this month. Book a demo to lock in early-bird pricing.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                <div className="flex items-center gap-2 text-sm font-medium bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  No Installation Fee
                </div>
                <div className="flex items-center gap-2 text-sm font-medium bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Risk-Free Pilot
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto min-w-[300px]">
              <Button className="h-16 text-lg font-bold bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-200">
                Book Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a href="/ClassNova.pdf" download="ClassNova.pdf" className="w-full md:w-auto">
                <Button variant="outline" className="w-full h-16 text-lg font-bold border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 bg-white">
                  Download Brochure
                  <Download className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MidCtaSection;
