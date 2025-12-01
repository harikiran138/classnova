import { motion } from "framer-motion";
import { TrendingUp, Layers, GraduationCap, Globe2, Hammer, Clock, DollarSign, Wifi, Zap } from "lucide-react";

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

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider">
            Competitive Advantage
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Why ClassNova Wins
          </h2>
          <p className="text-lg text-slate-600">
            We disrupt the market by removing the three biggest barriers: Cost, Complexity, and Connectivity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1: Price */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative overflow-hidden group hover:border-blue-200 transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <DollarSign className="w-24 h-24 text-slate-900" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Initial Cost</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-1">New Smart Boards</p>
                <p className="text-2xl font-bold text-red-500">₹2 - 5 Lakhs</p>
              </div>
              <div className="h-px bg-slate-200" />
              <div>
                <p className="text-sm text-blue-600 uppercase font-bold tracking-wider mb-1">ClassNova</p>
                <p className="text-4xl font-bold text-blue-600">₹12,000</p>
                <p className="text-sm text-slate-500 mt-1">One-time cost. No hidden fees.</p>
              </div>
            </div>
          </div>

          {/* Feature 2: Connectivity */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative overflow-hidden group hover:border-blue-200 transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Wifi className="w-24 h-24 text-slate-900" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Internet Dependency</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-1">Others</p>
                <p className="text-lg font-bold text-slate-700">Required (Always Online)</p>
              </div>
              <div className="h-px bg-slate-200" />
              <div>
                <p className="text-sm text-blue-600 uppercase font-bold tracking-wider mb-1">ClassNova</p>
                <p className="text-2xl font-bold text-blue-600">Offline-First</p>
                <p className="text-sm text-slate-500 mt-1">Works perfectly without internet. Syncs later.</p>
              </div>
            </div>
          </div>

          {/* Feature 3: Setup */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative overflow-hidden group hover:border-blue-200 transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-24 h-24 text-slate-900" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Installation</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-1">Others</p>
                <p className="text-lg font-bold text-slate-700">Complex (Days/Weeks)</p>
              </div>
              <div className="h-px bg-slate-200" />
              <div>
                <p className="text-sm text-blue-600 uppercase font-bold tracking-wider mb-1">ClassNova</p>
                <p className="text-2xl font-bold text-blue-600">10 Minutes</p>
                <p className="text-sm text-slate-500 mt-1">Plug-and-play. No technicians needed.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div
          className="mt-16 rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { label: "Cost Savings", value: "80%" },
            { label: "Boot Time", value: "20s" },
            { label: "AI Accuracy", value: "95%" },
            { label: "Data Compression", value: "60%" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-orange-500">{stat.value}</div>
              <div className="text-sm sm:text-base text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
