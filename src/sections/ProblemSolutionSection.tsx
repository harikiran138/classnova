import { motion } from "framer-motion";
import { CheckCircle2, Zap, Layout, DollarSign, Box, PenTool, Headphones } from "lucide-react";

const highlights = [
  {
    icon: Layout,
    label: "Massive Gap",
    detail: "1.2M schools lack basic digital tools beyond projectors.",
  },
  {
    icon: DollarSign,
    label: "Prohibitive Cost",
    detail: "Smart boards cost ₹2-5 Lakhs ($2,400-$6,000).",
  },
  {
    icon: Zap,
    label: "Connectivity",
    detail: "68% of schools have unreliable or no internet.",
  },
  {
    icon: Box,
    label: "Limited Budget",
    detail: "Schools get only ₹50k-75k/year for infrastructure.",
  },
];

const essentials = [
  {
    icon: Box,
    title: "Smart Core",
    body: "Mini PC with ClassNova OS, HDMI input, and classroom-safe controls.",
  },
  {
    icon: PenTool,
    title: "Teaching Tools",
    body: "Whiteboard, content playlists, annotation, lesson recording, sharing.",
  },
  {
    icon: Headphones,
    title: "Support Kit",
    body: "Digital pen, wireless remote, microphone, WhatsApp support team.",
  },
];

export const ProblemSolutionSection = () => {
  return (
    <section id="what-is-classnova" className="section-padding bg-slate-50 overflow-hidden relative">
      <div className="section-shell">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] items-start">

          {/* Left Column: The Problem/Solution */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-wider mb-6">
              The Market Gap
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold leading-[1.1] text-slate-900 mb-6">
              1.2 Million schools <br />
              <span className="text-red-600">lack digital infrastructure.</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
              Most classrooms only have a basic projector. Upgrading to smart boards costs <span className="font-bold text-slate-900">₹2-5 Lakhs</span>, which is unaffordable for most Colleges and NGOs.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-blue-200 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-blue-50 flex items-center justify-center mb-4 group-hover:bg-brand-blue-100 transition-colors">
                    <item.icon className="w-5 h-5 text-brand-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.label}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: What's Inside */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange-50 to-brand-blue-50 rounded-[32px] -z-10 transform rotate-2 scale-105 opacity-50" />

            <div className="bg-white rounded-[24px] border border-slate-200 shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm">✓</span>
                Everything included
              </h3>

              <div className="space-y-6">
                {essentials.map((card, idx) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + (idx * 0.1) }}
                    className="flex gap-4 items-start p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                      <card.icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{card.title}</h4>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">{card.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 text-sm font-medium text-emerald-700 bg-emerald-50 px-4 py-3 rounded-lg border border-emerald-100">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>No hidden fees. Ready to pilot in 2 weeks.</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default ProblemSolutionSection;
