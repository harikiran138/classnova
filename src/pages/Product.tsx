import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    XCircle,
    Wifi,
    Zap,
    Database,
    Server,
    Cpu,
    ArrowRight,
    Download,
    Layers,
    Globe,
    Sparkles
} from "lucide-react";

const Product = () => {
    return (
        <div className="animate-fade-in bg-[#020617] min-h-screen">
            {/* 1. FUTURISTIC HERO */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background Ambience */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-blue-600/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-orange-500/10 rounded-full blur-[120px]" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
                </div>

                <div className="section-shell relative z-10">
                    <div className="text-center max-w-5xl mx-auto space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-bold uppercase tracking-wide text-white">Now Shipping v2.0</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white font-heading leading-tight"
                        >
                            The Classroom <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-400 to-brand-blue-600">
                                Supercomputer.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium"
                        >
                            Turn any projector into a smart classroom.
                            <br className="hidden sm:block" />
                            Built for <span className="text-white">Colleges, Schools, and NGOs</span>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
                        >
                            <Button size="lg" className="h-14 px-8 text-base font-bold shadow-xl shadow-brand-blue-600/20 bg-brand-blue-600 hover:bg-brand-blue-700 text-white rounded-xl transition-all hover:scale-105">
                                Pre-order Now
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold rounded-xl border-white/10 hover:bg-white/5 text-white hover:text-white transition-all">
                                Download Specs
                                <Download className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. COMPACT COMPARISON */}
            <section className="section-padding bg-slate-900/50 border-y border-white/5">
                <div className="section-shell">
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {/* Old Way */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 opacity-60 hover:opacity-100 transition-opacity">
                            <div className="flex items-center gap-3 mb-6">
                                <XCircle className="w-6 h-6 text-red-500" />
                                <h3 className="text-xl font-bold text-white">The Old Way</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="text-slate-400 text-sm">Expensive Smart Boards (₹2L+)</li>
                                <li className="text-slate-400 text-sm">Complex wiring & cable mess</li>
                                <li className="text-slate-400 text-sm">Requires constant internet</li>
                            </ul>
                        </div>

                        {/* ClassNova Way */}
                        <div className="p-8 rounded-3xl bg-brand-blue-600/10 border border-brand-blue-500/30 relative overflow-hidden">
                            <div className="absolute inset-0 bg-brand-blue-500/5 animate-pulse" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <CheckCircle2 className="w-6 h-6 text-brand-blue-400" />
                                    <h3 className="text-xl font-bold text-white">The ClassNova Way</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="text-white font-bold text-sm">Affordable (₹12,000)</li>
                                    <li className="text-blue-200 text-sm">Single device, zero wiring</li>
                                    <li className="text-blue-200 text-sm">Works 100% Offline</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CREATIVE SPECS GRID */}
            <section className="section-padding">
                <div className="section-shell">
                    <div className="text-center mb-16">
                        <p className="section-eyebrow text-brand-blue-400">UNDER THE HOOD</p>
                        <h2 className="section-heading text-white uppercase">Enterprise Power</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {[
                            { label: "Processor", value: "Quad-Core", sub: "Cortex-A76", icon: Cpu },
                            { label: "AI Engine", value: "6 TOPS", sub: "Neural Processing", icon: Sparkles },
                            { label: "Memory", value: "8GB", sub: "LPDDR4X RAM", icon: Database },
                            { label: "Storage", value: "128GB", sub: "Expandable", icon: Server },
                        ].map((spec, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                                <div className="w-10 h-10 rounded-lg bg-brand-blue-500/20 flex items-center justify-center text-brand-blue-400 mb-4 group-hover:scale-110 transition-transform">
                                    <spec.icon className="w-5 h-5" />
                                </div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{spec.label}</p>
                                <p className="text-2xl font-bold text-white">{spec.value}</p>
                                <p className="text-xs text-slate-500">{spec.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. THE FUTURE (ROADMAP) */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-blue-900/10" />
                <div className="section-shell relative z-10">
                    <div className="text-center mb-16">
                        <p className="section-eyebrow text-brand-orange-500">THE FUTURE</p>
                        <h2 className="section-heading text-white uppercase">Product Roadmap</h2>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Connecting Line */}
                        <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-blue-500 via-brand-blue-500/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

                        {[
                            { year: "2024", title: "Pilot Phase", desc: "Deploy in 10 partner schools. Gather feedback.", status: "done", icon: Layers },
                            { year: "2025", title: "Market Launch", desc: "Expand to 100+ institutions. Release v2.0 hardware.", status: "current", icon: Zap },
                            { year: "2026", title: "AI Integration", desc: "Advanced personalized tutor and voice analytics.", status: "future", icon: Sparkles },
                            { year: "2027", title: "Global Scale", desc: "Export to emerging markets in Africa and SE Asia.", status: "future", icon: Globe },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative flex items-center gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="flex-1 hidden md:block" />

                                <div className={`relative z-10 w-14 h-14 rounded-full border-4 flex-shrink-0 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] ${item.status === 'done' ? 'bg-slate-900 border-green-500 text-green-500' :
                                        item.status === 'current' ? 'bg-brand-blue-600 border-brand-blue-400 text-white' :
                                            'bg-slate-900 border-slate-700 text-slate-500'
                                    }`}>
                                    <item.icon className="w-6 h-6" />
                                    {item.status === 'current' && (
                                        <div className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-20" />
                                    )}
                                </div>

                                <div className="flex-1">
                                    <div className={`p-6 rounded-2xl border backdrop-blur-sm transition-all ${item.status === 'current'
                                            ? 'bg-brand-blue-600/10 border-brand-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.1)]'
                                            : 'bg-white/5 border-white/10 hover:bg-white/10'
                                        }`}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className={`text-sm font-bold px-2 py-1 rounded ${item.status === 'current' ? 'bg-brand-blue-500/20 text-brand-blue-300' : 'bg-white/5 text-slate-400'
                                                }`}>
                                                {item.year}
                                            </span>
                                            {item.status === 'current' && <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Active</span>}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Product;
