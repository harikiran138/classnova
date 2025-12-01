import { Button } from "@/components/ui/button";
import {
    TrendingUp,
    PieChart,
    Target,
    ArrowRight,
    DollarSign,
    BarChart3,
    Globe,
    Users,
    Lock,
    CheckCircle2,
    Monitor,
    Zap,
    WifiOff,
    Smartphone,
    Cpu,
    Repeat,
    Award,
    FileCheck
} from "lucide-react";

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
                    ClassNova is bridging the digital divide with a ₹12,000 plug-and-play AI smart classroom device that works without internet.
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="/ClassNova_Pitch.pdf"
                        download="ClassNova Pitch.pdf"
                        onClick={(e) => {
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

            {/* 2. THE PROBLEM */}
            <section className="section-padding bg-slate-50 border-y border-slate-200 relative z-10">
                <div className="section-shell">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="section-eyebrow text-orange-500">THE GAP</p>
                            <h2 className="section-heading text-slate-900 uppercase">90% of Schools Are Left Behind</h2>
                            <p className="body-text mb-8">
                                Most schools, especially in rural and budget-private segments, are unable to adopt digital classrooms due to high hardware costs (₹1.2–3 lakh), internet dependency, and technical complexity.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                                    <DollarSign className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">High Costs</h4>
                                        <p className="text-sm text-slate-600">Existing solutions cost ₹1.2–3 Lakhs, unaffordable for budget schools.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                                    <WifiOff className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">Internet Dependency</h4>
                                        <p className="text-sm text-slate-600">Most solutions fail without high-speed internet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] bg-slate-200 rounded-[32px] overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300" />
                            <div className="text-center z-10 p-8">
                                <p className="text-6xl font-bold text-slate-400 mb-2">90%</p>
                                <p className="text-xl font-bold text-slate-500 uppercase tracking-widest">Classrooms Undigitized</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE SOLUTION */}
            <section className="section-padding bg-white relative z-10">
                <div className="section-shell text-center mb-16">
                    <p className="section-eyebrow text-blue-600">THE SOLUTION</p>
                    <h2 className="section-heading text-slate-900 uppercase">Smart Classroom for ₹12,000</h2>
                    <p className="body-text max-w-3xl mx-auto">
                        ClassNova is a plug-and-play AI smart classroom device that transforms any ordinary projector into an interactive, fully digital classroom — with no internet required.
                    </p>
                </div>

                <div className="section-shell grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Monitor, title: "ClassNova OS", desc: "Whiteboard, live annotations, multimedia teaching suite." },
                        { icon: Zap, title: "AI Tutor", desc: "Interactive Q&A and personalized explanations." },
                        { icon: WifiOff, title: "Offline First", desc: "Offline content storage and lesson recording." },
                        { icon: Smartphone, title: "Mobile Control", desc: "Control via mobile, no teacher training needed." }
                    ].map((item, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-blue-50 border border-blue-100 text-center hover:shadow-lg transition-all">
                            <div className="h-12 w-12 mx-auto bg-white rounded-xl text-blue-600 flex items-center justify-center mb-4 shadow-sm">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. MARKET OPPORTUNITY */}
            <section className="section-padding bg-slate-50 border-y border-slate-200 relative overflow-hidden z-10">
                <div className="section-shell">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="section-eyebrow text-orange-500">MARKET OPPORTUNITY</p>
                            <h2 className="section-heading text-slate-900 uppercase">High Growth Potential</h2>
                            <p className="text-slate-600 text-lg mt-4 mb-8">
                                The smart education industry is accelerating globally with a 21% CAGR. Government policies and CSR initiatives are driving adoption.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-orange-500 font-bold shadow-sm">1</div>
                                    <div>
                                        <p className="text-2xl font-bold text-slate-900">₹837.66 Cr</p>
                                        <p className="text-slate-500 uppercase text-xs font-bold tracking-wider">TAM (Global Smart Classroom)</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-orange-500 font-bold shadow-sm">2</div>
                                    <div>
                                        <p className="text-2xl font-bold text-slate-900">₹251.31 Cr</p>
                                        <p className="text-slate-500 uppercase text-xs font-bold tracking-wider">SAM (India + Emerging)</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-orange-500 font-bold shadow-sm">3</div>
                                    <div>
                                        <p className="text-2xl font-bold text-slate-900">₹12.56 Cr</p>
                                        <p className="text-slate-500 uppercase text-xs font-bold tracking-wider">SOM (Rural + Budget Schools)</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Market Graphic */}
                        <div className="relative flex items-center justify-center">
                            <div className="w-[350px] h-[350px] rounded-full border border-slate-200 bg-white/50 flex items-center justify-center relative">
                                <p className="absolute top-6 text-slate-400 font-bold text-sm">TAM ₹837 Cr</p>
                                <div className="w-[250px] h-[250px] rounded-full border border-slate-200 bg-white flex items-center justify-center relative shadow-sm">
                                    <p className="absolute top-6 text-slate-400 font-bold text-sm">SAM ₹251 Cr</p>
                                    <div className="w-[150px] h-[150px] rounded-full bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/30">
                                        <div className="text-center">
                                            <p className="text-white font-bold text-lg">SOM</p>
                                            <p className="text-white/80 text-sm">₹12.56 Cr</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. BUSINESS MODEL */}
            <section className="section-padding bg-white relative z-10">
                <div className="section-shell">
                    <div className="text-center mb-16">
                        <p className="section-eyebrow text-blue-600">BUSINESS MODEL</p>
                        <h2 className="section-heading text-slate-900 uppercase">Dual-Revenue Engine</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Cpu className="h-24 w-24" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Hardware Revenue</h3>
                            <p className="text-4xl font-bold text-orange-500 mb-4">₹12,000 <span className="text-base font-normal text-slate-500">/ device</span></p>
                            <p className="text-slate-600">One-time sale for frictionless adoption. Plug-and-play device setup.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Repeat className="h-24 w-24" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">SaaS Subscription</h3>
                            <p className="text-4xl font-bold text-blue-400 mb-4">₹1,200 <span className="text-base font-normal text-slate-400">/ year</span></p>
                            <p className="text-slate-300">Recurring revenue for AI Tutor, LMS, cloud sync, and analytics.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TRACTION */}
            <section className="section-padding bg-blue-50 relative z-10">
                <div className="section-shell">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="section-eyebrow text-blue-600">TRACTION & VALIDATION</p>
                            <h2 className="section-heading text-slate-900 uppercase mb-6">Proven Product-Market Fit</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                                    <span className="text-slate-700 font-medium">Fully developed device with successful field testing.</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                                    <span className="text-slate-700 font-medium">Patent filed, proving strong IP positioning.</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                                    <span className="text-slate-700 font-medium">High classroom engagement in pilot deployments.</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                                    <span className="text-slate-700 font-medium">Interest from institutions for CSR projects.</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
                                <FileCheck className="h-8 w-8 text-blue-600 mb-2" />
                                <p className="font-bold text-slate-900">Patent Filed</p>
                                <p className="text-xs text-slate-500">Intellectual Property</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
                                <Award className="h-8 w-8 text-orange-500 mb-2" />
                                <p className="font-bold text-slate-900">Pilots Done</p>
                                <p className="text-xs text-slate-500">Field Tested</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. THE ASK */}
            <section className="section-padding bg-white relative z-10">
                <div className="section-shell">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="section-eyebrow text-orange-500">INVESTMENT</p>
                            <h2 className="section-heading text-slate-900 uppercase">Raising Pre-Seed</h2>
                            <p className="body-text mb-8">
                                We are raising <span className="font-bold text-slate-900">₹12 Lakhs</span> to initiate manufacturing, deploy the first 300 devices, and establish a revenue cycle within 12 months.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold text-slate-900">Product & Cloud R&D (30%)</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full w-[30%] bg-blue-600" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold text-slate-900">Hardware Procurement (25%)</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full w-[25%] bg-orange-500" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold text-slate-900">GTM Pilots (25%)</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full w-[25%] bg-green-500" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold text-slate-900">Operations & Support (15%)</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full w-[15%] bg-purple-500" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold text-slate-900">Legal & Compliance (5%)</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full w-[5%] bg-slate-500" />
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

                        {/* 8. THE TEAM */}
                        <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-200">
                            <h3 className="h3 text-slate-900 mb-6">The Team</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">HK</div>
                                    <div>
                                        <p className="font-bold text-slate-900">Ch. Hari Kiran</p>
                                        <p className="text-xs text-orange-500 font-bold uppercase tracking-wide mb-1">Founder</p>
                                        <p className="text-sm text-slate-600">Hardware engineering, embedded systems, and device innovation.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">NP</div>
                                    <div>
                                        <p className="font-bold text-slate-900">Y. Navyasanthi Prasad</p>
                                        <p className="text-xs text-orange-500 font-bold uppercase tracking-wide mb-1">Co-Founder</p>
                                        <p className="text-sm text-slate-600">Software engineering, AI integration, and OS development.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">RC</div>
                                    <div>
                                        <p className="font-bold text-slate-900">P. Laxmi Ram Charan</p>
                                        <p className="text-xs text-orange-500 font-bold uppercase tracking-wide mb-1">Director</p>
                                        <p className="text-sm text-slate-600">Strategy, school partnerships, business operations, and scaling.</p>
                                    </div>
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
