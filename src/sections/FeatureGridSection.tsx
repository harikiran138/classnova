import { motion } from "framer-motion";
import {
  Cpu,
  WifiOff,
  BarChart3,
  Mic,
  Zap,
  Layout,
  ShieldCheck,
  MousePointer2
} from "lucide-react";

const features = [
  {
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-brand-blue-600 to-brand-blue-700",
    text: "text-white",
    icon: Cpu,
    title: "ClassNova OS",
    desc: "Hardened Linux base. 20-second boot time. Zero lag. 100% Virus-free.",
    visual: "os"
  },
  {
    colSpan: "md:col-span-1",
    bg: "bg-slate-900/50 backdrop-blur-xl border-white/10",
    text: "text-white",
    icon: WifiOff,
    title: "Offline First",
    desc: "Intelligent Cloud Sync. Works 100% offline. Adaptive bandwidth management."
  },
  {
    colSpan: "md:col-span-1",
    bg: "bg-slate-900/50 backdrop-blur-xl border-white/10",
    text: "text-white",
    icon: Mic,
    title: "AI Transcription",
    desc: "95% accuracy for Indian accents. Supports code-switching (English-Hindi)."
  },
  {
    colSpan: "md:col-span-2",
    bg: "bg-slate-900/50 backdrop-blur-xl border-white/10",
    text: "text-white",
    icon: BarChart3,
    title: "Smart Analytics",
    desc: "Real-time engagement metrics. Proprietary 60% video compression technology.",
    visual: "analytics"
  },
];

export const FeatureGridSection = () => {
  return (
    <section id="features" className="section-padding bg-[#020617] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue-600/20 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-orange-500/10 rounded-full blur-[120px] translate-y-1/2" />

      {/* Massive Watermark Heading */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="text-[20vw] font-black text-white leading-none whitespace-nowrap text-center uppercase tracking-tighter">
          Key Features
        </div>
      </div>

      <div className="section-shell relative z-10">
        <div className="mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue-500/10 border border-brand-blue-500/20 text-brand-blue-400 text-sm font-bold uppercase tracking-wider mb-8"
          >
            <Zap className="w-4 h-4 fill-current" />
            Key Features
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            Built for the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-400 via-brand-blue-200 to-white">
              Future of Learning.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl leading-relaxed"
          >
            We combined the power of a computer, the simplicity of a tablet, and the intelligence of AI into one device.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${feature.colSpan} group relative rounded-[40px] p-10 overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 ${feature.bg}`}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Visuals */}
              {feature.visual === "analytics" && (
                <div className="absolute right-0 bottom-0 w-3/4 h-3/4 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                  <div className="flex gap-3 items-end h-full p-8">
                    <div className="w-12 h-[40%] bg-brand-orange-500 rounded-t-xl animate-pulse" />
                    <div className="w-12 h-[70%] bg-brand-blue-500 rounded-t-xl animate-pulse delay-75" />
                    <div className="w-12 h-[50%] bg-green-500 rounded-t-xl animate-pulse delay-150" />
                    <div className="w-12 h-[85%] bg-purple-500 rounded-t-xl animate-pulse delay-200" />
                  </div>
                </div>
              )}

              {feature.visual === "os" && (
                <div className="absolute -right-12 -bottom-12 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-500" />
              )}

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-lg text-white/70 leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-white/50 group-hover:text-white transition-colors uppercase tracking-wider">
                  Learn more <MousePointer2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGridSection;
