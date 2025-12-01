import { Target, Eye, Heart, Globe, Wifi, Users, Zap } from "lucide-react";

const MissionSection = () => {
    return (
        <section className="pt-20 pb-10 bg-white relative overflow-hidden">
            <div className="section-shell relative z-10">
                {/* Who We Are */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
                        <span className="text-sm font-semibold tracking-wide text-blue-700 uppercase">About ClassNova</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Bridging the Digital Divide with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Intelligent Classroom Infrastructure</span>
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed text-justify">
                        ClassNova is a deep-tech EdTech company developing AI-powered, infrastructure-agnostic smart classroom technologies engineered for high-scalability, low-latency performance, and uninterrupted offline operation. Our product ecosystem bridges the digital learning divide by transforming any basic projector into a fully interactive digital classroom — delivering cost-optimized, digitally immersive pedagogy for regions traditionally excluded from technological advancements.
                    </p>
                </div>

                {/* Mission & Vision Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-all group">
                        <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            <Target className="h-7 w-7 text-red-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                        <p className="text-slate-600 leading-relaxed">
                            To democratize digital education by deploying highly affordable, plug-and-play classroom intelligence solutions that operate seamlessly across low-resource, low-bandwidth, and rural academic environments.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-slate-900 text-white hover:shadow-xl transition-all group">
                        <div className="h-14 w-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform">
                            <Eye className="h-7 w-7 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-slate-300 leading-relaxed">
                            To establish a globally scalable smart-learning architecture in which every student — from metropolitan institutions to remote schools — gains equitable access to personalized, AI-augmented learning experiences.
                        </p>
                    </div>
                </div>

                {/* Values / Philosophy */}
                <div className="bg-blue-50 rounded-[40px] p-8 md:p-12 border border-blue-100">
                    <div className="text-center mb-12">
                        <h2 className="section-heading text-blue-600 !text-4xl mb-2">OUR PHILOSOPHY</h2>
                        <p className="text-2xl font-bold text-slate-900">What We Stand For</p>
                        <p className="body-text max-w-2xl mx-auto">
                            ClassNova’s innovation philosophy is rooted in accessibility, permanence, and impact at scale. We prioritize engineering that solves real-world infrastructure challenges.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Heart, title: "Affordability", desc: "Without compromise." },
                            { icon: Wifi, title: "Offline Reliability", desc: "In unstable network regions." },
                            { icon: Users, title: "Teacher Friendly", desc: "Zero-learning-curve interfaces." },
                            { icon: Zap, title: "Sustainability", desc: "Long-term operational impact." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 text-center">
                                <div className="mx-auto h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-3">
                                    <item.icon className="h-5 w-5" />
                                </div>
                                <h4 className="font-bold text-slate-900">{item.title}</h4>
                                <p className="text-sm text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-slate-700 font-medium italic">
                            "We aim to replace inequality with opportunity by building technology that evolves with every classroom — not just the privileged ones."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
