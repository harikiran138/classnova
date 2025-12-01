import { Button } from "@/components/ui/button";
import { TrendingUp, PieChart, Target, ArrowRight, DollarSign, BarChart3, Globe, Users, Lock, CheckCircle2, Monitor, Zap } from "lucide-react";

const Investor = () => {
    return (
        <div className="animate-fade-in bg-white min-h-screen pt-32 pb-20 relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-50 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-orange-50 rounded-full blur-[80px] opacity-60 -translate-x-1/4 translate-y-1/4" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
            </div>

            {/* 1. HERO: THE OPPORTUNITY */}
            <section className="section-shell mb-24 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8 animate-fade-in">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                    </span>
                    <span className="text-sm font-semibold tracking-wide text-blue-700 uppercase">Pre-Seed Round Open</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 uppercase">
                    Invest in the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Android for Schools</span>
                </h1>
                <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                    ClassNova is capturing the $5B underserved market of budget private schools in India with a proprietary offline-first operating system.
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="/ClassNova_Pitch.pdf"
                        download="ClassNova Pitch.pdf"
                        onClick={(e) => {
                            // Allow default action (download) to happen

                            // Open Google Form in new tab
                            window.open("https://forms.gle/nvK8pgUDxgfErq497", "_blank");
                        }}
                        className="inline-block"
                    >
                        <Button
                            size="lg"
                            className="h-14 px-8 text-base font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 pointer-events-none"
                        >
                            REQUEST PITCH DECK
                            <Lock className="ml-2 h-5 w-5" />
                        </Button>
                    </a>
                </div>
            </section>

            {/* 2. THE PROBLEM: DATA DRIVEN */}
            <section className="section-padding bg-slate-50 border-y border-slate-200 relative z-10">
                <div className="section-shell">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="section-eyebrow text-orange-500">THE GAP</p>
                            <h2 className="section-heading text-slate-900 uppercase">90% of Schools Are Left Behind</h2>
                            <p className="body-text mb-8">
                                While EdTech unicorns focus on the top 10% of elite schools, 1.5 million budget schools are stuck with blackboards because existing solutions are too expensive and require high-speed internet.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                    <p className="text-4xl font-bold text-red-500 mb-2">1.5M</p>
                                    <p className="text-sm font-bold text-slate-500 uppercase">Underserved Schools</p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                    <p className="text-4xl font-bold text-red-500 mb-2">&lt;10%</p>
                                    <p className="text-sm font-bold text-slate-500 uppercase">Internet Penetration</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] bg-slate-200 rounded-[32px] overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300" />
                            <p className="relative z-10 font-bold text-slate-400 text-2xl uppercase tracking-widest">Market Graph</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE SOLUTION: ECOSYSTEM */}
            <section className="section-padding bg-white relative z-10">
                <div className="section-shell text-center mb-16">
                    <p className="section-eyebrow text-blue-600">THE SOLUTION</p>
                    <h2 className="section-heading text-slate-900 uppercase">A Full-Stack OS for Education</h2>
                    <p className="body-text max-w-2xl mx-auto">
                        We don't just sell hardware. We provide the entire ecosystem: OS, Content, and Analytics.
                    </p>
                </div>

                <div className="section-shell grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Monitor, title: "Hardware", desc: "Smart Projector Kits & local servers." },
                        { icon: Globe, title: "Software", desc: "Offline-first LMS & AI Tutor." },
                        { icon: BarChart3, title: "Data", desc: "Real-time learning analytics." }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-[32px] bg-blue-50 border border-blue-100 text-center group hover:shadow-xl transition-all">
                            <div className="h-16 w-16 mx-auto bg-white rounded-2xl text-blue-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <item.icon className="h-8 w-8" />
                            </div>
                            <h3 className="h3 text-slate-900 mb-3">{item.title}</h3>
                            <p className="body-text text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. MARKET SIZE - Converted to Light Theme */}
            <section className="section-padding bg-slate-50 border-y border-slate-200 relative overflow-hidden z-10">
                <div className="section-shell">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="section-eyebrow text-orange-500">MARKET SIZE</p>
                            <h2 className="section-heading text-slate-900 uppercase">A $5 Billion Opportunity</h2>
                            <p className="text-slate-600 text-lg mt-4 mb-8">
                                The Indian budget private school market is massive and growing. We are positioning to be the market leader.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-orange-500 font-bold shadow-sm">1</div>
                                    <div>
                                        <p className="text-2xl font-bold text-slate-900">1.5 Million</p>
                                        <p className="text-slate-500 uppercase text-xs font-bold tracking-wider">Total Schools</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-orange-500 font-bold shadow-sm">2</div>
                                    <div>
                                        <p className="text-2xl font-bold text-slate-900">$20 Billion</p>
                                        <p className="text-slate-500 uppercase text-xs font-bold tracking-wider">Total Addressable Market</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-orange-500 font-bold shadow-sm">3</div>
                                    <div>
                                        <p className="text-2xl font-bold text-slate-900">25% CAGR</p>
                                        <p className="text-slate-500 uppercase text-xs font-bold tracking-wider">Growth Rate</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* TAM/SAM/SOM Graphic - Updated for Light Theme */}
                        <div className="relative flex items-center justify-center">
                            <div className="w-[400px] h-[400px] rounded-full border border-slate-200 bg-white/50 flex items-center justify-center relative">
                                <p className="absolute top-8 text-slate-400 font-bold">TAM $20B</p>
                                <div className="w-[280px] h-[280px] rounded-full border border-slate-200 bg-white flex items-center justify-center relative shadow-sm">
                                    <p className="absolute top-8 text-slate-400 font-bold">SAM $5B</p>
                                    <div className="w-[160px] h-[160px] rounded-full bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/30">
                                        <div className="text-center">
                                            <p className="text-white font-bold text-xl">SOM</p>
                                            <p className="text-white/80 text-sm">$100M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. THE ASK */}
            <section className="section-padding bg-white relative z-10">
                <div className="section-shell">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="section-eyebrow text-blue-600">INVESTMENT</p>
                            <h2 className="section-heading text-slate-900 uppercase">Raising Pre-Seed</h2>
                            <p className="body-text mb-8">
                                We are raising <span className="font-bold text-slate-900">$500K</span> to manufacture our first 1,000 units and deploy in 50 partner schools.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold text-slate-900">Manufacturing (40%)</span>
                                        <span className="font-bold text-blue-600">$200k</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full w-[40%] bg-blue-600" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold text-slate-900">Sales & Marketing (30%)</span>
                                        <span className="font-bold text-orange-500">$150k</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full w-[30%] bg-orange-500" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold text-slate-900">R&D (30%)</span>
                                        <span className="font-bold text-green-500">$150k</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full w-[30%] bg-green-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <Button size="lg" className="h-16 px-12 text-xl bg-slate-900 hover:bg-slate-800 text-white rounded-2xl shadow-xl">
                                    CONTACT FOUNDERS
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>

                        <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-200">
                            <h3 className="h3 text-slate-900 mb-6">Deal Highlights</h3>
                            <ul className="space-y-4">
                                {[
                                    "First Mover Advantage in Tier-2 Cities",
                                    "Proprietary Offline-Sync IP",
                                    "High LTV B2B Model",
                                    "Experienced Founding Team",
                                    "Pilot Validation Completed"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Investor;
