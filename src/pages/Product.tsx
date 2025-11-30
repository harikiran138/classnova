import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Smartphone, Wifi, Shield, Zap, Layout, Monitor, Lock, Cloud, Server, Cpu } from "lucide-react";

const Product = () => {
    return (
        <div className="animate-fade-in bg-white">
            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                <div className="section-shell relative z-10">
                    <div className="text-center max-w-4xl mx-auto space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 animate-fade-in">
                            <span className="text-sm font-bold uppercase tracking-wide text-[#2563EB]">Smart Plug-and-Play Classroom Device</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] font-heading uppercase leading-tight">
                            The All-In-One <br />
                            <span className="text-[#2563EB]">Digital Classroom Kit</span>
                        </h1>
                        <p className="text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed font-medium">
                            A single device that replaces the PC, Smart TV, and UPS. Connects to any projector and turns it smart instantly.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Button size="lg" className="h-14 px-10 text-lg shadow-xl shadow-orange-500/20">
                                REQUEST DEMO
                            </Button>
                            <Button variant="outline" size="lg" className="h-14 px-10 text-lg">
                                VIEW SPECS
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PROBLEM STATEMENT (Page 2 Style) */}
            <section className="section-padding bg-slate-50 border-y border-slate-100">
                <div className="section-shell">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <p className="section-eyebrow text-[#FF7A00]">THE PROBLEM</p>
                            <h2 className="section-heading text-[#0F172A] uppercase">Smart Classrooms Are Too Complex</h2>
                            <p className="text-lg text-[#64748B] leading-relaxed">
                                Schools struggle with <span className="font-bold text-[#0F172A]">expensive Smart TVs</span>, complex wiring, and software that requires internet. Teachers end up avoiding the tech altogether.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "High maintenance costs",
                                    "Requires constant internet",
                                    "Complex training needed",
                                    "Fragile hardware"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-[#64748B] font-medium">
                                        <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative rounded-[32px] bg-white p-8 shadow-xl border border-slate-200">
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-100 rounded-full blur-2xl" />
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-red-50 border border-red-100">
                                    <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-2xl">💸</div>
                                    <div>
                                        <p className="font-bold text-[#0F172A]">Expensive</p>
                                        <p className="text-sm text-red-600">₹2L+ per classroom setup</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-red-50 border border-red-100">
                                    <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-2xl">🕸️</div>
                                    <div>
                                        <p className="font-bold text-[#0F172A]">Complex Wiring</p>
                                        <p className="text-sm text-red-600">PC + UPS + Speakers + Cabling</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FEATURES GRID (Page 4 Style) */}
            <section className="section-padding bg-white">
                <div className="section-shell">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="section-eyebrow text-[#2563EB]">KEY FEATURES</p>
                        <h2 className="section-heading text-[#0F172A] uppercase">Everything a Teacher Needs</h2>
                        <p className="section-subtitle text-[#64748B]">Built for the Indian classroom environment.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Wifi, title: "Offline First", desc: "Works without internet. Content syncs when online." },
                            { icon: Layout, title: "Smart Whiteboard", desc: "Write, draw, and annotate over any content." },
                            { icon: Zap, title: "AI Tutor Assistant", desc: "Auto-generate quizzes and lesson summaries." },
                            { icon: Monitor, title: "Wireless Casting", desc: "Cast from any phone or laptop instantly." },
                            { icon: Shield, title: "Secure System", desc: "Enterprise-grade data protection and privacy." },
                            { icon: Cloud, title: "Cloud Sync", desc: "Auto-backup lesson notes to the cloud." },
                            { icon: Smartphone, title: "Mobile Control", desc: "Control the board from your smartphone." },
                            { icon: Server, title: "LMS Integration", desc: "Connects with existing school software." },
                        ].map((feature, i) => (
                            <div key={i} className="group p-6 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                                <div className="h-12 w-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{feature.title}</h3>
                                <p className="text-sm text-[#64748B] leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. TECH STACK (Page 5 Style) */}
            <section className="section-padding bg-[#0F172A] text-white">
                <div className="section-shell">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="section-eyebrow text-[#FF7A00]">TECHNOLOGY STACK</p>
                            <h2 className="section-heading text-white uppercase">Powered by Modern Tech</h2>
                            <p className="text-slate-400 mt-4 text-lg">
                                Built on a robust, scalable architecture designed for performance on low-power hardware.
                            </p>
                            <div className="mt-8 space-y-4">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                    <Cpu className="h-8 w-8 text-blue-400" />
                                    <div>
                                        <p className="font-bold text-white">Edge Computing</p>
                                        <p className="text-sm text-slate-400">Process AI tasks locally without lag.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                    <Server className="h-8 w-8 text-orange-400" />
                                    <div>
                                        <p className="font-bold text-white">Hybrid Cloud</p>
                                        <p className="text-sm text-slate-400">Seamless sync between offline/online modes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {["React", "Node.js", "Python", "TensorFlow", "WebRTC", "Docker"].map((tech) => (
                                <div key={tech} className="p-6 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                                    <p className="font-bold text-white">{tech}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. COMPARISON TABLE (Page 8 Style) */}
            <section className="section-padding bg-slate-50">
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

            {/* 6. VISION TIMELINE (Page 11 Style) */}
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
                    <Button size="lg" className="h-16 px-12 text-xl bg-white text-[#2563EB] hover:bg-blue-50 shadow-xl">
                        GET STARTED NOW
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Product;
