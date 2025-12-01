import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DemoRequestSection = () => {
  return (
    <section id="demo" className="section-padding bg-[#020617] text-white relative overflow-hidden py-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl"
        >
          <div className="grid lg:grid-cols-5 min-h-[500px]">

            {/* Left: Creative Contact Card */}
            <div className="lg:col-span-2 bg-gradient-to-br from-brand-blue-600 to-brand-blue-800 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Let's Talk</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Ready to modernize your institution? Reach out directly for a priority pilot review.
                </p>
              </div>

              {/* Floating "Business Card" Visual */}
              <div className="relative z-10 my-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl space-y-4 hover:bg-white/15 transition-colors cursor-default">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white text-brand-blue-600 flex items-center justify-center font-bold text-lg">
                      CK
                    </div>
                    <div>
                      <p className="font-bold text-white leading-none">Chepuri Hari Kiran</p>
                      <p className="text-xs text-blue-200 mt-1">Founder & CEO</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <a href="tel:+919491645242" className="flex items-center gap-3 text-blue-50 hover:text-white transition-colors">
                      <Phone className="w-4 h-4" /> +91 94916 45242
                    </a>
                    <a href="mailto:harikiran1388@gmail.com" className="flex items-center gap-3 text-blue-50 hover:text-white transition-colors">
                      <Mail className="w-4 h-4" /> harikiran1388@gmail.com
                    </a>
                    <div className="flex items-center gap-3 text-blue-50">
                      <MapPin className="w-4 h-4" /> Visakhapatnam, India
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 text-xs text-blue-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Responding within 24 hours
              </div>
            </div>

            {/* Right: Compact Form */}
            <div className="lg:col-span-3 p-8 md:p-10 bg-white/5">
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full h-11 px-4 rounded-lg bg-black/20 border border-white/10 text-white text-sm focus:border-brand-blue-500 focus:bg-black/30 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Phone</label>
                    <input
                      type="tel"
                      placeholder="+91..."
                      className="w-full h-11 px-4 rounded-lg bg-black/20 border border-white/10 text-white text-sm focus:border-brand-blue-500 focus:bg-black/30 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="admin@institution.edu"
                    className="w-full h-11 px-4 rounded-lg bg-black/20 border border-white/10 text-white text-sm focus:border-brand-blue-500 focus:bg-black/30 transition-all outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Institution</label>
                    <input
                      type="text"
                      placeholder="School / College Name"
                      className="w-full h-11 px-4 rounded-lg bg-black/20 border border-white/10 text-white text-sm focus:border-brand-blue-500 focus:bg-black/30 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Size</label>
                    <select className="w-full h-11 px-4 rounded-lg bg-black/20 border border-white/10 text-white text-sm focus:border-brand-blue-500 focus:bg-black/30 transition-all outline-none appearance-none cursor-pointer">
                      <option className="bg-slate-900" value="">Select Size</option>
                      <option className="bg-slate-900" value="<500">&lt; 500 Students</option>
                      <option className="bg-slate-900" value="500-2000">500 - 2,000</option>
                      <option className="bg-slate-900" value=">2000">2,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Message</label>
                  <textarea
                    rows={2}
                    placeholder="How can we help?"
                    className="w-full p-4 rounded-lg bg-black/20 border border-white/10 text-white text-sm focus:border-brand-blue-500 focus:bg-black/30 transition-all outline-none resize-none"
                  />
                </div>

                <Button className="w-full h-12 bg-white text-brand-blue-900 font-bold hover:bg-blue-50 transition-colors">
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
