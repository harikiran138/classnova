import { Button } from "@/components/ui/button";
import { TrendingUp, PieChart, Target, ArrowRight, DollarSign, BarChart3, Globe, Users } from "lucide-react";

const Investor = () => {
    return (
        <div className="animate-fade-in bg-white min-h-screen pt-32 pb-20">
            {/* 1. HERO: THE OPPORTUNITY */}
            <section className="section-shell mb-24">
                <div className="text-center max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
                        <span className="text-sm font-bold uppercase tracking-wide text-[#2563EB]">Investment Opportunity</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] font-heading uppercase leading-tight">
                        Democratizing Smart Education <br />
                        <span className="text-[#2563EB]">For The Next Billion</span>
                    </h1>
                    <p className="text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed font-medium">
                        ClassNova is building the operating system for affordable digital classrooms. A $5B opportunity to upgrade 1.5M schools in India.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" className="h-14 px-10 text-lg shadow-xl shadow-orange-500/20">
                            REQUEST PITCH DECK
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-10 text-lg">
                            TALK TO FOUNDERS
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. MARKET SIZE (Page 9 Style) */}
            <section className="section-padding bg-slate-50 border-y border-slate-100">
                <div className="section-shell">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="section-eyebrow text-[#FF7A00]">MARKET SIZE</p>
                            <h2 className="section-heading text-[#0F172A] uppercase">A Massive Untapped Market</h2>
                            <p className="text-lg text-[#64748B] mt-6 leading-relaxed">
                                India has the largest K-12 school system in the world. Yet, 90% of classrooms lack basic digital infrastructure due to high costs.
                            </p>
                            <div className="mt-8 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="h-2 w-2 rounded-full bg-[#2563EB]" />
                                    <p className="font-bold text-[#0F172A]">1.5 Million Schools in India</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="h-2 w-2 rounded-full bg-[#2563EB]" />
                                    <p className="font-bold text-[#0F172A]">260 Million Students</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="h-2 w-2 rounded-full bg-[#2563EB]" />
                                    <p className="font-bold text-[#0F172A]">$5 Billion EdTech Hardware Market</p>
                                </div>
                            </div>
                        </div>

                        {/* Market TAM/SAM/SOM Graphic */}
                        <div className="relative flex justify-center">
                            <div className="relative w-80 h-80 rounded-full bg-blue-100 flex items-center justify-center animate-pulse-slow">
                                <div className="absolute top-8 text-center">
                                    <p className="text-xs font-bold uppercase text-blue-400">TAM</p>
                                    <p className="text-2xl font-bold text-blue-900">$50B</p>
                                </div>
                                <div className="w-56 h-56 rounded-full bg-blue-200 flex items-center justify-center shadow-lg">
                                    <div className="absolute top-20 text-center">
                                        <p className="text-xs font-bold uppercase text-blue-500">SAM</p>
                                        <p className="text-2xl font-bold text-blue-900">$5B</p>
                                    </div>
                                    <div className="w-32 h-32 rounded-full bg-[#2563EB] flex items-center justify-center shadow-xl text-white text-center">
                                        <div>
                                            <p className="text-xs font-bold uppercase text-blue-200">SOM</p>
                                            <p className="text-2xl font-bold">$100M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. BUSINESS MODEL (Page 10 Style) */}
            <section className="section-padding bg-white">
                <div className="section-shell">
                    <div className="text-center mb-16">
                        <p className="section-eyebrow text-[#2563EB]">BUSINESS MODEL</p>
                        <h2 className="section-heading text-[#0F172A] uppercase">How We Make Money</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Hardware Sales",
                                price: "₹15,000",
                                desc: "One-time cost for the ClassNova Smart Kit.",
                                icon: DollarSign,
                                color: "bg-blue-50 text-blue-600"
                            },
                            {
                                title: "SaaS Subscription",
                                price: "₹500 / mo",
                                desc: "Recurring revenue for AI features & Analytics.",
                                icon: TrendingUp,
                                color: "bg-orange-50 text-orange-600"
                            },
                            {
                                title: "Content Marketplace",
                                price: "15% Comm.",
                                desc: "Commission on premium content sold via platform.",
                                icon: Globe,
                                color: "bg-slate-50 text-slate-600"
                            }
                        ].map((model, i) => (
                            <div key={i} className="p-8 rounded-[32px] border border-slate-200 text-center hover:shadow-xl transition-all duration-300 group">
                                <div className={`h-16 w-16 rounded-2xl ${model.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                                    <model.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{model.title}</h3>
                                <p className="text-3xl font-bold text-[#2563EB] mb-4">{model.price}</p>
                                <p className="text-slate-500">{model.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. FINANCIAL ASK (Page 17 Style) */}
            <section className="section-padding bg-[#0F172A] text-white">
                <div className="section-shell">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="section-eyebrow text-[#FF7A00]">THE ASK</p>
                            <h2 className="section-heading text-white uppercase">Fueling Our Growth</h2>
                            <p className="text-slate-400 mt-6 text-lg leading-relaxed">
                                We are raising <span className="text-white font-bold">$500K Pre-Seed</span> to accelerate manufacturing, expand our pilot program to 100 schools, and refine our AI tutor.
                            </p>
                            <div className="mt-10">
                                <Button size="lg" className="h-16 px-12 text-xl bg-[#FF7A00] hover:bg-[#E66E00] text-white shadow-xl shadow-orange-900/20">
                                    INVEST IN CLASSNOVA
                                </Button>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <div className="flex justify-between items-end mb-2">
                                    <p className="font-bold text-white uppercase">Product Development</p>
                                    <p className="font-bold text-[#FF7A00]">40%</p>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[40%] bg-[#FF7A00]" />
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <div className="flex justify-between items-end mb-2">
                                    <p className="font-bold text-white uppercase">Manufacturing</p>
                                    <p className="font-bold text-[#2563EB]">30%</p>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[30%] bg-[#2563EB]" />
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <div className="flex justify-between items-end mb-2">
                                    <p className="font-bold text-white uppercase">Sales & Marketing</p>
                                    <p className="font-bold text-green-500">20%</p>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[20%] bg-green-500" />
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <div className="flex justify-between items-end mb-2">
                                    <p className="font-bold text-white uppercase">Operations</p>
                                    <p className="font-bold text-slate-400">10%</p>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[10%] bg-slate-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Investor;
