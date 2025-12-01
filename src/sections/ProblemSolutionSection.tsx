import { motion } from "framer-motion";
import { CheckCircle2, Zap, Layout, DollarSign, Box, PenTool, Headphones } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    label: "Works Offline",
    detail: "No internet needed for daily teaching. Syncs when online.",
  },
  {
    icon: Layout,
    label: "3-Click Setup",
    detail: "HDMI + Power + Remote. Ready in under 10 minutes.",
  },
  {
    icon: Box,
    label: "Teacher-Ready",
    detail: "Intuitive UI designed for non-tech savvy users.",
  },
  {
    icon: DollarSign,
    label: "Budget Friendly",
    detail: "Complete smart classroom setup starting at ₹12,000.",
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
    <section id="what-is-classnova" className="pt-20 pb-32 sm:pb-40 bg-slate-50 overflow-hidden relative">
      <div className="section-shell">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] items-start">

          {/* Left Column: The Problem/Solution */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              What is ClassNova?
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold leading-[1.1] text-slate-900 mb-6">
              The classroom upgrade <br />
              <span className="text-brand-blue-600">without the hassle.</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
              Instantly make any TV or projector interactive. Track lessons. Engage every student. All with one simple, affordable kit.
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

      {/* Creative Transition: Slanted Clip & Floating Bridge */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-[#0F172A] transform origin-bottom -skew-y-2 translate-y-16 z-0" />

      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 p-4 pr-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl"
        >
          <div className="w-12 h-12 rounded-full bg-brand-orange-500 flex items-center justify-center shadow-lg shadow-brand-orange-500/30">
            <Zap className="w-6 h-6 text-white fill-current" />
          </div>
          <div>
            <p className="text-xs font-bold text-brand-orange-400 uppercase tracking-wider">Speed Record</p>
            <p className="text-white font-bold text-lg">Setup in 10 Minutes</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
