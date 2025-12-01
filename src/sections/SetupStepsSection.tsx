import { motion } from "framer-motion";
import { Play, Wifi, MousePointer2, Monitor, Briefcase, Zap } from "lucide-react";

const steps = [
  {
    icon: Monitor,
    title: "1. Connect",
    description: "Plug HDMI to projector & USB peripherals. Works with any setup.",
    time: "2 min"
  },
  {
    icon: Zap,
    title: "2. Boot",
    description: "ClassNova OS boots instantly. Ready to teach in seconds.",
    time: "20 sec"
  },
  {
    icon: MousePointer2,
    title: "3. Teach",
    description: "Whiteboard, PDF, Video, Record. Just 5 simple buttons.",
    time: "Instant"
  },
  {
    icon: Wifi,
    title: "4. Share",
    description: "Recordings auto-sync to cloud when internet is available.",
    time: "Auto"
  },
];

export const SetupStepsSection = () => {
  return (
    <section id="deployment" className="section-padding bg-[#0F172A] text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue-900/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="section-shell relative z-10">
        <div className="mx-auto max-w-3xl text-center space-y-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-blue-300 text-xs font-bold uppercase tracking-wider"
          >
            Rapid Deployment
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            Digitize a classroom in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-400 to-brand-blue-200">
              under 10 minutes
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-xl mx-auto"
          >
            District teams can deploy 100+ classrooms a week using existing technicians. No specialized training required.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-white/5 via-white/20 to-white/5 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue-600/20 border border-brand-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(37,99,235,0.3)]">
                <step.icon className="w-6 h-6 text-brand-blue-400" />
              </div>

              <div className="absolute top-6 right-6 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {step.time}
              </div>

              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="rounded-[32px] border border-white/10 bg-[#020617] p-2 sm:p-4 shadow-2xl relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="aspect-video rounded-[24px] bg-slate-900 border border-white/5 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

              <div className="text-center z-10">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
                <p className="text-lg font-medium text-white">Watch Setup Walkthrough</p>
                <p className="text-sm text-slate-500 mt-1">See how easy it really is</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SetupStepsSection;
