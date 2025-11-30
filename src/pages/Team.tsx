import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";

const Team = () => {
    return (
        <div className="animate-fade-in bg-white min-h-screen pt-32 pb-20">
            {/* HERO */}
            <div className="section-shell mb-20 text-center">
                <p className="section-eyebrow text-[#2563EB]">THE TEAM</p>
                <h1 className="h1 text-[#0F172A] mb-6 uppercase">Built by Educators & Engineers</h1>
                <p className="body-text max-w-2xl mx-auto">
                    We combine deep pedagogical expertise with world-class engineering to solve the hardest problems in education.
                </p>
            </div>

            {/* FOUNDERS */}
            <section className="section-shell mb-32">
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {[
                        {
                            name: "Hari Kiran",
                            role: "Co-Founder & CEO",
                            bio: "Ex-Product Manager at EdTech Unicorn. 10+ years in education policy and scaling B2B sales.",
                            image: "bg-blue-100"
                        },
                        {
                            name: "Technical Co-Founder",
                            role: "CTO",
                            bio: "Ex-Google Engineer. Specialist in offline-first architecture and edge computing.",
                            image: "bg-orange-100"
                        }
                    ].map((member, i) => (
                        <div key={i} className="group p-8 rounded-[32px] bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                            <div className={`w-32 h-32 mx-auto rounded-full ${member.image} mb-6 flex items-center justify-center text-4xl`}>
                                👨‍💻
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-[#0F172A] mb-1">{member.name}</h3>
                                <p className="text-[#2563EB] font-bold uppercase text-sm tracking-wide mb-4">{member.role}</p>
                                <p className="text-slate-600 mb-6 leading-relaxed">{member.bio}</p>
                                <div className="flex justify-center gap-4">
                                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 hover:text-[#2563EB]">
                                        <Linkedin className="h-5 w-5" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 hover:text-[#2563EB]">
                                        <Twitter className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ADVISORS */}
            <section className="section-padding bg-slate-50 border-y border-slate-200">
                <div className="section-shell">
                    <div className="text-center mb-16">
                        <h2 className="section-heading text-[#0F172A] uppercase">Backed by Industry Leaders</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Dr. A. Kumar", role: "Former Director, CBSE", desc: "Curriculum Strategy" },
                            { name: "S. Reddy", role: "VP Engineering, BigTech", desc: "Technical Architecture" },
                            { name: "M. Singh", role: "Founder, Unicorn EdTech", desc: "GTM Strategy" }
                        ].map((advisor, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 text-center">
                                <div className="w-20 h-20 mx-auto rounded-full bg-slate-100 mb-4 flex items-center justify-center text-2xl">
                                    🎓
                                </div>
                                <h4 className="text-lg font-bold text-[#0F172A]">{advisor.name}</h4>
                                <p className="text-slate-500 text-sm font-medium mb-2">{advisor.role}</p>
                                <p className="text-[#2563EB] text-xs font-bold uppercase tracking-wide">{advisor.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
