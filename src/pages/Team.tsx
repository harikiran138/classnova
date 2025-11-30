import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";

const team = [
    {
        name: "Hari Kiran",
        role: "Founder & CEO",
        bio: "Ex-Google, 10+ years in EdTech. Built 3 products from 0 to 1.",
        image: "bg-blue-100", // Placeholder
    },
    {
        name: "Aditya Rao",
        role: "CTO",
        bio: "AI Researcher, IIT Bombay. Expert in Edge Computing & Computer Vision.",
        image: "bg-orange-100", // Placeholder
    },
    {
        name: "Sarah Jenkins",
        role: "Head of Growth",
        bio: "Scaled 2 startups to Series A. Expert in B2B School Sales.",
        image: "bg-slate-100", // Placeholder
    },
];

const advisors = [
    {
        name: "Dr. Ramesh Mashelkar",
        role: "Scientific Advisor",
        bio: "Former DG, CSIR. Padma Vibhushan.",
    },
    {
        name: "Vinod Khosla",
        role: "Strategic Advisor",
        bio: "Founder, Khosla Ventures (Example).",
    },
];

const Team = () => {
    return (
        <div className="animate-fade-in bg-white min-h-screen pt-32 pb-20">
            <div className="section-shell">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <p className="section-eyebrow text-[#2563EB]">THE TEAM</p>
                    <h1 className="section-heading text-[#0F172A] uppercase">Builders & Visionaries</h1>
                    <p className="section-subtitle text-[#64748B]">
                        A diverse team of engineers, educators, and operators on a mission to transform education.
                    </p>
                </div>

                {/* FOUNDERS */}
                {/* FOUNDERS - COMPACT HORIZONTAL */}
                <div className="grid lg:grid-cols-3 gap-6 mb-24">
                    {team.map((member) => (
                        <div key={member.name} className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                            <div className={`w-20 h-20 rounded-full ${member.image} flex-shrink-0 border-2 border-white shadow-md`} />
                            <div className="text-left">
                                <h3 className="text-lg font-bold text-[#0F172A]">{member.name}</h3>
                                <p className="text-[#2563EB] text-xs font-bold uppercase tracking-wide mb-1">{member.role}</p>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-blue-50 hover:text-[#2563EB]">
                                        <Linkedin className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-blue-50 hover:text-[#2563EB]">
                                        <Twitter className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ADVISORS */}
                <div className="bg-slate-50 rounded-[32px] p-12 border border-slate-100">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-[#0F172A] uppercase">Backed By Industry Leaders</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {advisors.map((advisor) => (
                            <div key={advisor.name} className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                                <div className="h-16 w-16 rounded-full bg-slate-200 flex-shrink-0" />
                                <div>
                                    <h4 className="text-lg font-bold text-[#0F172A]">{advisor.name}</h4>
                                    <p className="text-[#2563EB] text-xs font-bold uppercase tracking-wide">{advisor.role}</p>
                                    <p className="text-sm text-[#64748B] mt-1">{advisor.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
