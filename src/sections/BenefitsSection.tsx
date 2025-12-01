import { motion } from "framer-motion";
import { TrendingUp, Layers, GraduationCap, Globe2, Hammer, Clock } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Modernize Affordably",
    detail: "Retrofit existing screens instead of buying expensive new smart boards."
  },
  {
    icon: Layers,
    title: "Reduce Clutter",
    detail: "One kit replaces multiple devices, cables, and chargers."
  },
  {
    icon: GraduationCap,
    title: "Boost Quality",
    detail: "Teachers get consistent tools, recording, and sharing capabilities."
  },
  {
    icon: Globe2,
    title: "Universal Access",
    detail: "Works for rural, private, and NGO setups alike."
  },
  {
    icon: Hammer,
    title: "Zero Infrastructure",
    detail: "No civil work, no rewiring, no complex network dependency."
  },
  {
    icon: Clock,
    title: "Save Time",
    detail: "Go from setup to teaching in under 10 minutes daily."
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="section-shell">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange-600 font-bold uppercase tracking-wider text-sm"
          >
            Why Schools Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            Real impact, <span className="text-brand-orange-500">measurable results.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Quick wins that principals care about, delivered instantly.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-brand-orange-200 hover:shadow-xl hover:shadow-brand-orange-500/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-brand-orange-50 group-hover:border-brand-orange-100 transition-colors">
                <benefit.icon className="w-6 h-6 text-slate-400 group-hover:text-brand-orange-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-orange-600 transition-colors">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 rounded-3xl bg-slate-900 text-white p-8 sm:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { label: "Setup Time", value: "10 min" },
            { label: "Cost Savings", value: "60%" },
            { label: "Teacher Adoption", value: "95%" },
            { label: "Internet Needed", value: "0%" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-bold text-brand-orange-400 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
