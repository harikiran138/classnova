import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DemoRequestSection = () => {
  return (
    <section id="demo" className="section-padding bg-white text-slate-900 relative overflow-hidden py-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-[40px] overflow-hidden shadow-2xl"
        >
          <div className="grid lg:grid-cols-5 min-h-[500px]">

            {/* Left: Content */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-white">Let's Talk</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Ready to modernize your institution? Reach out directly for a priority pilot review.
                </p>
              </div>

              <div className="relative z-10 my-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl space-y-4 hover:bg-white/15 transition-colors cursor-default">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold text-lg">
                      CK
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Chaitanya K.</p>
                      <p className="text-blue-200 text-xs">Founder & CEO</p>
                    </div>
                  </div>
                  <p className="text-white/80 text-xs italic">
                    "I personally review every pilot request to ensure we're a perfect match."
                  </p>
                </div>
              </div>

              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <Mail className="w-4 h-4" />
                  <span>founders@classnova.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>

            {/* Right: Compact Form */}
            <div className="lg:col-span-3 p-8 md:p-10 bg-white">
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-blue-500 focus:bg-white transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone</label>
                    <input
                      type="tel"
                      placeholder="+91..."
                      className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-blue-500 focus:bg-white transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="admin@institution.edu"
                    className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-blue-500 focus:bg-white transition-all outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Institution</label>
                    <input
                      type="text"
                      placeholder="School / College Name"
                      className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-blue-500 focus:bg-white transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Size</label>
                    <select className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-blue-500 focus:bg-white transition-all outline-none appearance-none cursor-pointer">
                      <option className="bg-white" value="">Select Size</option>
                      <option className="bg-white" value="<500">&lt; 500 Students</option>
                      <option className="bg-white" value="500-2000">500 - 2,000</option>
                      <option className="bg-white" value=">2000">2,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Message</label>
                  <textarea
                    rows={2}
                    placeholder="How can we help?"
                    className="w-full p-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-blue-500 focus:bg-white transition-all outline-none resize-none"
                  />
                </div>

                <Button className="w-full h-12 bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-lg">
                  Send Request
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoRequestSection;
