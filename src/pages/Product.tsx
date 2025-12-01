import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    XCircle,
    Wifi,
    Shield,
    Zap,
    Layout,
    Monitor,
    Database,
    CloudOff,
    Server,
    Cpu,
    Banknote,
    Cable,
    Star,
    ArrowRight,
    Download
} from "lucide-react";

const Product = () => {
    return (
        <div className="animate-fade-in bg-white">
            {/* 1. PREMIUM HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#020617]">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />

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
                            Replace your PC, Smart TV, UPS, and Wi-Fi router with one powerful device.
                            <span className="text-white"> Plug. Play. Teach.</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
                        >
                            <Button size="lg" className="h-16 px-10 text-lg font-bold shadow-xl shadow-brand-blue-600/20 bg-brand-blue-600 hover:bg-brand-blue-700 text-white rounded-2xl transition-all hover:scale-105">
                                Pre-order Now
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="h-16 px-10 text-lg font-bold rounded-2xl border-white/10 hover:bg-white/5 text-white hover:text-white transition-all">
                                Download Specs
                                <Download className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>
                    </div>

                    {/* Product Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-20 relative mx-auto max-w-4xl aspect-[16/9] rounded-3xl bg-gradient-to-b from-slate-800 to-slate-950 border border-white/10 shadow-2xl shadow-brand-blue-900/50 flex items-center justify-center overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                        <div className="relative z-10 text-center">
                            <div className="w-32 h-32 mx-auto bg-brand-blue-600 rounded-2xl shadow-[0_0_100px_rgba(37,99,235,0.5)] flex items-center justify-center mb-6">
                                <Cpu className="w-16 h-16 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">ClassNova Core</h3>
                            <p className="text-slate-400">Powered by Neural Engine</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. COMPARISON SECTION */}
            <section className="section-padding bg-slate-50">
                <div className="section-shell">
                    <div className="text-center mb-16">
                        <p className="section-eyebrow text-brand-orange-600">THE UPGRADE</p>
                        <h2 className="section-heading text-slate-900 uppercase">Stop wasting money on old tech</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* The Old Way */}
                        <div className="p-8 rounded-[32px] bg-white border border-slate-200 opacity-70 hover:opacity-100 transition-opacity">
                            <div className="flex items-center gap-3 mb-6">
                                <XCircle className="w-8 h-8 text-red-500" />
                                <h3 className="text-2xl font-bold text-slate-900">The Old Way</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-slate-600">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400" />
                                    <span>Expensive Smart TVs (₹1.5L+)</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400" />
                                    <span>Complex wiring & cable mess</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400" />
                                    <span>Requires constant internet</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400" />
                                    <span>Fragile hardware, high maintenance</span>
                                </li>
                            </ul>
                        </div>

                        {/* The ClassNova Way */}
                        <div className="p-8 rounded-[32px] bg-brand-blue-600 text-white shadow-xl shadow-brand-blue-600/20 transform md:-translate-y-4">
                            <div className="flex items-center gap-3 mb-6">
                                <CheckCircle2 className="w-8 h-8 text-white" />
                                <h3 className="text-2xl font-bold">The ClassNova Way</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-blue-100">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-400" />
                                    <span className="font-bold">Affordable (₹12,000)</span>
                                </li>
                                <li className="flex items-start gap-3 text-blue-100">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-400" />
                                    <span>Single device, zero wiring</span>
                                </li>
                                <li className="flex items-start gap-3 text-blue-100">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-400" />
                                    <span>Works 100% Offline</span>
                                </li>
                                <li className="flex items-start gap-3 text-blue-100">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-400" />
                                    <span>Rugged, durable design</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SPECS SECTION */}
            <section className="section-padding bg-[#0F172A] text-white overflow-hidden">
                <div className="section-shell">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="section-eyebrow text-brand-blue-400">UNDER THE HOOD</p>
                            <h2 className="section-heading text-white uppercase mb-8">Enterprise Power.<br />Pocket Size.</h2>

                            <div className="space-y-6">
                                {[
                                    { label: "Processor", value: "Quad-Core Cortex-A76", icon: Cpu },
                                    { label: "AI Engine", value: "6 TOPS NPU", icon: Zap },
                                    { label: "Memory", value: "8GB LPDDR4X", icon: Database },
                                    { label: "Storage", value: "128GB (Expandable)", icon: Server },
                                    { label: "Connectivity", value: "Wi-Fi 6 + BT 5.0", icon: Wifi },
                                ].map((spec, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-brand-blue-500/20 flex items-center justify-center text-brand-blue-400">
                                            <spec.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400">{spec.label}</p>
                                            <p className="font-bold font-mono">{spec.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-blue-500/20 blur-[100px] rounded-full" />
                            <div className="relative z-10 bg-slate-900 border border-slate-700 rounded-[40px] p-8 shadow-2xl">
                                {/* Abstract Internal View */}
                                <div className="aspect-square rounded-3xl bg-slate-950 border border-slate-800 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-slate-800 rounded-full border-4 border-brand-blue-500 shadow-[0_0_50px_rgba(37,99,235,0.3)] flex items-center justify-center">
                                        <span className="font-mono text-xs text-brand-blue-400">NPU ACTIVE</span>
                                    </div>

                                    {/* Orbiting Elements */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-slate-700 rounded-full animate-spin-slow" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-slate-700 rounded-full animate-spin-reverse-slow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. VISION ROADMAP */}
            <section className="section-padding bg-white">
                <div className="section-shell">
                    <div className="text-center mb-16">
                        <p className="section-eyebrow text-brand-blue-600">THE FUTURE</p>
                        <h2 className="section-heading text-slate-900 uppercase">Product Roadmap</h2>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-slate-200 md:left-1/2 md:-translate-x-1/2" />

                        {[
                            { year: "2024", title: "Pilot Phase", desc: "Deploy in 10 partner schools. Gather feedback.", status: "done" },
                            { year: "2025", title: "Market Launch", desc: "Expand to 100+ institutions. Release v2.0 hardware.", status: "current" },
                            { year: "2026", title: "AI Integration", desc: "Advanced personalized tutor and voice analytics.", status: "future" },
                            { year: "2027", title: "Global Scale", desc: "Export to emerging markets in Africa and SE Asia.", status: "future" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative flex items-center gap-8 mb-12 md:mb-24 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="flex-1 hidden md:block" />

                                <div className={`relative z-10 w-10 h-10 rounded-full border-4 flex-shrink-0 flex items-center justify-center ${item.status === 'done' ? 'bg-green-500 border-green-100' :
                                        item.status === 'current' ? 'bg-brand-blue-600 border-blue-100' :
                                            'bg-white border-slate-200'
                                    }`}>
                                    {item.status === 'done' && <CheckCircle2 className="w-5 h-5 text-white" />}
                                    {item.status === 'current' && <div className="w-3 h-3 bg-white rounded-full animate-pulse" />}
                                </div>

                                <div className="flex-1">
                                    <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-shadow">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${item.status === 'done' ? 'bg-green-50 text-green-600' :
                                                item.status === 'current' ? 'bg-brand-blue-50 text-brand-blue-600' :
                                                    'bg-slate-50 text-slate-500'
                                            }`}>
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600">{item.desc}</p>
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
