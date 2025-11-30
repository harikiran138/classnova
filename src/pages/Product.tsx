import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Wifi, Shield, Zap, Layout, Monitor, Database, CloudOff, Server, Cpu, Banknote, Cable, Star } from "lucide-react";

const Product = () => {
    return (
        <div className="animate-fade-in bg-white">
            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                <div className="section-shell relative z-10">
                    <div className="text-center max-w-4xl mx-auto space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue-50 border border-brand-blue-100 animate-fade-in">
                            <span className="text-sm font-bold uppercase tracking-wide text-brand-blue-600">Smart Plug-and-Play Classroom Device</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 font-heading uppercase leading-tight">
                            The All-In-One <br />
                            <span className="text-brand-blue-600">Digital Classroom Kit</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                            A single device that replaces the PC, Smart TV, and UPS. Connects to any projector and turns it smart instantly.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Button size="lg" className="h-14 px-10 text-lg shadow-xl shadow-brand-orange-500/20 bg-brand-orange-500 hover:bg-brand-orange-600 text-white rounded-2xl">
                                REQUEST DEMO
                            </Button>
                            <Button variant="outline" size="lg" className="h-14 px-10 text-lg rounded-2xl border-2 border-slate-200 hover:border-brand-blue-200 hover:bg-brand-blue-50 text-slate-900">
                                VIEW SPECS
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PROBLEM STATEMENT */}
            <section className="section-padding bg-slate-50 border-y border-slate-100">
                <div className="section-shell">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <p className="section-eyebrow text-brand-orange-600">THE PROBLEM</p>
                            <h2 className="section-heading text-slate-900 uppercase">Smart Classrooms Are Too Complex</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Schools struggle with <span className="font-bold text-slate-900">expensive Smart TVs</span>, complex wiring, and software that requires internet. Teachers end up avoiding the tech altogether.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "High maintenance costs",
                                    "Requires constant internet",
                                    "Complex training needed",
                                    "Fragile hardware"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-600 font-medium">
                                        <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative rounded-[32px] bg-white p-8 shadow-xl border border-slate-200">
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-orange-100 rounded-full blur-2xl" />
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-red-50 border border-red-100">
                                    <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                        <Banknote className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">Expensive</p>
                                        <p className="text-sm text-red-600">₹2L+ per classroom setup</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-red-50 border border-red-100">
                                    <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                        <Cable className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">Complex Wiring</p>
                                        <p className="text-sm text-red-600">PC + UPS + Speakers + Cabling</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FEATURES BENTO GRID */}
            <section className="section-padding bg-white">
                <div className="section-shell">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="section-eyebrow text-brand-blue-600">KEY FEATURES</p>
                        <h2 className="section-heading text-slate-900 uppercase">Everything a Teacher Needs</h2>
                        <p className="section-subtitle text-slate-600">Built for the Indian classroom environment.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                        {/* Large Card 1 */}
                        <div className="md:col-span-2 p-8 rounded-[32px] bg-brand-blue-50 border border-brand-blue-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="relative z-10">
                                <div className="h-12 w-12 rounded-xl bg-white text-brand-blue-600 flex items-center justify-center mb-4 shadow-sm">
                                    <Wifi className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Offline First Architecture</h3>
                                <p className="text-slate-600 max-w-md">Works completely without internet. Content syncs automatically when connectivity is available.</p>
                            </div>
                            <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-blue-100 rounded-tl-[100px] opacity-50 group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        {/* Card 2 */}
                        <div className="p-8 rounded-[32px] bg-white border border-slate-100 hover:border-brand-blue-200 hover:shadow-lg transition-all duration-300 group">
                            <div className="h-12 w-12 rounded-xl bg-brand-orange-50 text-brand-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">AI Tutor</h3>
                            <p className="text-sm text-slate-600">Auto-generate quizzes and summaries instantly.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="p-8 rounded-[32px] bg-white border border-slate-100 hover:border-brand-blue-200 hover:shadow-lg transition-all duration-300 group">
                            <div className="h-12 w-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Layout className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Smart Whiteboard</h3>
                            <p className="text-sm text-slate-600">Infinite canvas for writing and drawing.</p>
                        </div>

                        {/* Large Card 4 */}
                        <div className="md:col-span-2 p-8 rounded-[32px] bg-slate-900 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="relative z-10">
                                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                                    <Shield className="h-6 w-6 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Enterprise Security</h3>
                                <p className="text-slate-400 max-w-md">Bank-grade encryption for all student data and lesson plans.</p>
                            </div>
                            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-brand-blue-500/20 rounded-full blur-3xl group-hover:bg-brand-blue-500/30 transition-colors" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. TECH STACK & SPECS (Framework Laptop Style) */}
            <section className="section-padding bg-slate-900 text-white">
                <div className="section-shell">
                    <div className="text-center mb-16">
                        <p className="section-eyebrow text-brand-orange-600">SPECIFICATIONS</p>
                        <h2 className="section-heading text-white uppercase">Built for Performance</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Visual Spec */}
                        <div className="relative rounded-[32px] bg-white/5 border border-white/10 p-8 flex items-center justify-center min-h-[400px]">
                            <div className="text-center">
                                <div className="w-48 h-64 mx-auto bg-slate-800 rounded-[24px] border-4 border-slate-700 shadow-2xl relative mb-8">
                                    <div className="absolute inset-2 bg-slate-950 rounded-[18px]" />
                                </div>
                                <p className="text-slate-400 text-sm font-mono">ClassNova Device v1.0</p>
                            </div>
                        </div>

                        {/* Specs Table */}
                        <div className="space-y-6">
                            {[
                                { label: "Processor", value: "Quad-Core ARM Cortex-A76 @ 2.4GHz" },
                                { label: "AI Engine", value: "6 TOPS NPU for Local Inference" },
                                { label: "Memory", value: "8GB LPDDR4X RAM" },
                                { label: "Storage", value: "128GB eMMC 5.1 (Expandable to 1TB)" },
                                { label: "Connectivity", value: "Wi-Fi 6, Bluetooth 5.0, Gigabit Ethernet" },
                                { label: "Ports", value: "HDMI 2.1, USB-C (PD), 2x USB-A 3.0" },
                                { label: "OS", value: "ClassNova OS (Based on Linux)" }
                            ].map((spec, i) => (
                                <div key={i} className="flex justify-between items-center py-4 border-b border-white/10 hover:bg-white/5 px-4 rounded-lg transition-colors">
                                    <span className="text-slate-400 font-medium">{spec.label}</span>
                                    <span className="text-white font-bold font-mono text-right">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TESTIMONIALS (Teachmint Style) */}
            <section className="section-padding bg-brand-blue-50">
                <div className="section-shell">
                    <div className="text-center mb-16">
                        <h2 className="section-heading text-slate-900 uppercase">Loved by Teachers</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Finally, a smart classroom solution that doesn't require me to be an IT expert. It just works.",
                                author: "Sarah Jenkins",
                                role: "Principal, St. Mary's School"
                            },
                            {
                                quote: "The offline capability is a game changer for our rural branches. No more buffering videos.",
                                author: "Rajesh Kumar",
                                role: "Director, Vidya Mandir"
                            },
                            {
                                quote: "ClassNova transformed our engagement levels. Students are actually excited to learn.",
                                author: "Priya Sharma",
                                role: "Senior Teacher, DPS"
                            }
                        ].map((t, i) => (
                            <div key={i} className="p-8 rounded-[32px] bg-white border border-brand-blue-100 shadow-xl shadow-brand-blue-900/5">
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-5 h-5 text-brand-orange-500 fill-current" />
                                    ))}
                                </div>
                                <p className="text-lg text-slate-700 mb-6 italic">"{t.quote}"</p>
                                <div>
                                    <p className="font-bold text-[#0F172A]">{t.author}</p>
                                    <p className="text-sm text-slate-500 uppercase tracking-wide">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. COMPARISON TABLE */}
            <section className="section-padding bg-white">
                <div className="section-shell">
                    <div className="text-center mb-12">
                        <h2 className="section-heading text-[#0F172A] uppercase">Why ClassNova Wins</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                            <thead>
                                <tr className="bg-[#0F172A] text-white">
                                    <th className="p-6 text-left font-bold uppercase tracking-wider">Feature</th>
                                    <th className="p-6 text-center font-bold uppercase tracking-wider bg-[#2563EB]">ClassNova</th>
                                    <th className="p-6 text-center font-bold uppercase tracking-wider text-slate-400">Smart TV</th>
                                    <th className="p-6 text-center font-bold uppercase tracking-wider text-slate-400">Projector</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { feature: "Cost", nova: "Low (₹15k)", tv: "High (₹1.5L)", proj: "Medium (₹40k)" },
                                    { feature: "Interactivity", nova: "Full Touch", tv: "Touch", proj: "None" },
                                    { feature: "Offline Content", nova: "Built-in", tv: "No", proj: "No" },
                                    { feature: "Maintenance", nova: "Zero", tv: "High", proj: "Medium" },
                                    { feature: "Portability", nova: "High", tv: "None", proj: "Medium" },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="p-6 font-bold text-[#0F172A]">{row.feature}</td>
                                        <td className="p-6 text-center font-bold text-[#2563EB] bg-blue-50/30">{row.nova}</td>
                                        <td className="p-6 text-center text-[#64748B]">{row.tv}</td>
                                        <td className="p-6 text-center text-[#64748B]">{row.proj}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 6. VISION TIMELINE */}
            <section className="section-padding bg-white">
                <div className="section-shell">
                    <div className="text-center mb-16">
                        <p className="section-eyebrow text-[#2563EB]">ROADMAP</p>
                        <h2 className="section-heading text-[#0F172A] uppercase">Our Vision</h2>
                    </div>
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2 hidden md:block" />
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { year: "2024", title: "Pilot Phase", desc: "Deploy in 10 partner schools.", status: "current" },
                                { year: "2025", title: "Market Launch", desc: "Expand to 100+ institutions.", status: "future" },
                                { year: "2026", title: "AI Integration", desc: "Advanced personalized tutor.", status: "future" },
                                { year: "2027", title: "Global Scale", desc: "Export to emerging markets.", status: "future" },
                            ].map((item, i) => (
                                <div key={i} className="relative pt-8 md:pt-12 text-center group">
                                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 ${item.status === 'current' ? 'bg-[#FF7A00] border-orange-100' : 'bg-white border-slate-200'} z-10`} />
                                    <p className="text-3xl font-bold text-[#2563EB] mb-2">{item.year}</p>
                                    <h3 className="font-bold text-[#0F172A] uppercase mb-2">{item.title}</h3>
                                    <p className="text-sm text-[#64748B]">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. CTA SECTION */}
            <section className="py-24 bg-[#2563EB] text-white text-center">
                <div className="section-shell">
                    <h2 className="text-4xl font-bold uppercase mb-6">Ready to Transform Your Classroom?</h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
                        Join the partner program today and get the ClassNova kit at a special pilot price.
                    </p>
                    <Button size="lg" className="h-16 px-12 text-xl bg-white text-[#2563EB] hover:bg-blue-50 shadow-xl rounded-2xl">
                        GET STARTED NOW
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Product;
