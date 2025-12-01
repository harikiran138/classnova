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
        <div className="animate-fade-in bg-white min-h-screen">
            {/* 1. FUTURISTIC HERO */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background Ambience */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-100/60 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-orange-100/60 rounded-full blur-[120px]" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
                </div>

                <div className="section-shell relative z-10">
                    <div className="text-center max-w-5xl mx-auto space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-md"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-bold uppercase tracking-wide text-blue-700">Now Shipping v2.0</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 font-heading leading-tight"
                        >
                            The Classroom <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                                Supercomputer.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
                        >
                            Turn any projector into a smart classroom.
                            <br className="hidden sm:block" />
                            Built for <span className="text-slate-900 font-bold">Colleges, Schools, and NGOs</span>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
                        >
                            <Button size="lg" className="h-14 px-8 text-base font-bold shadow-xl shadow-blue-500/20 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all hover:scale-105">
                                Pre-order Now
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold rounded-xl border-slate-200 hover:bg-slate-50 text-slate-700 transition-all">
                                Download Specs
                                <Download className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. COMPACT COMPARISON */}
            <section className="section-padding bg-slate-50 border-y border-slate-200">
                <div className="section-shell">
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {/* Old Way */}
                        <div className="p-8 rounded-3xl bg-white border border-slate-200 opacity-80 hover:opacity-100 transition-opacity shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <XCircle className="w-6 h-6 text-red-500" />
                                <h3 className="text-xl font-bold text-slate-900">The Old Way</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="text-slate-600 text-sm">Expensive Smart Boards (₹2L+)</li>
                                <li className="text-slate-600 text-sm">Complex wiring & cable mess</li>
                                <li className="text-slate-600 text-sm">Requires constant internet</li>
                            </ul>
                        </div>

                        {/* ClassNova Way */}
                        <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100 relative overflow-hidden shadow-md">
                            <div className="absolute inset-0 bg-blue-100/30 animate-pulse" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                                    <h3 className="text-xl font-bold text-slate-900">The ClassNova Way</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="text-slate-900 font-bold text-sm">Affordable (₹12,000)</li>
                                    <li className="text-blue-700 text-sm">Single device, zero wiring</li>
                                    <li className="text-blue-700 text-sm">Works 100% Offline</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CREATIVE SPECS GRID */}
            <section className="section-padding bg-white">
                <div className="section-shell">
                    <div className="text-center mb-16">
                        <p className="section-eyebrow text-blue-600">UNDER THE HOOD</p>
                        <h2 className="section-heading text-slate-900 uppercase">Enterprise Power</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {[
                            { label: "Processor", value: "Quad-Core", sub: "Cortex-A76", icon: Cpu },
                            { label: "AI Engine", value: "6 TOPS", sub: "Neural Processing", icon: Sparkles },
                            { label: "Memory", value: "8GB", sub: "LPDDR4X RAM", icon: Database },
                            { label: "Storage", value: "128GB", sub: "Expandable", icon: Server },
                        ].map((spec, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all group shadow-sm">
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                                    <spec.icon className="w-5 h-5" />
                                </div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{spec.label}</p>
                                <p className="text-2xl font-bold text-slate-900">{spec.value}</p>
                                <p className="text-xs text-slate-500">{spec.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. THE FUTURE (ROADMAP) */}
            <section className="section-padding relative overflow-hidden bg-slate-50">
                <div className="absolute inset-0 bg-blue-50/30" />
                <div className="section-shell relative z-10">
                    <div className="text-center mb-16">
                        <p className="section-eyebrow text-orange-500">THE FUTURE</p>
                        <h2 className="section-heading text-slate-900 uppercase">Product Roadmap</h2>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Connecting Line */}
                        <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-200 to-transparent md:left-1/2 md:-translate-x-1/2" />

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

                                <div className={`relative z-10 w-14 h-14 rounded-full border-4 flex-shrink-0 flex items-center justify-center shadow-lg ${item.status === 'done' ? 'bg-white border-green-500 text-green-500' :
                                    item.status === 'current' ? 'bg-blue-600 border-blue-400 text-white' :
                                        'bg-white border-slate-200 text-slate-400'
                                    }`}>
                                    <item.icon className="w-6 h-6" />
                                    {item.status === 'current' && (
                                        <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-20" />
                                    )}
                                </div>

                                <div className="flex-1">
                                    <div className={`p-6 rounded-2xl border transition-all ${item.status === 'current'
                                        ? 'bg-white border-blue-200 shadow-xl shadow-blue-500/10'
                                        : 'bg-white border-slate-200 hover:shadow-md'
                                        }`}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className={`text-sm font-bold px-2 py-1 rounded ${item.status === 'current' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'
                                                }`}>
                                                {item.year}
                                            </span>
                                            {item.status === 'current' && <span className="text-xs font-bold text-green-500 uppercase tracking-wider">Active</span>}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
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
