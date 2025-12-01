import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, User, GraduationCap } from "lucide-react";

const Team = () => {
    return (
        <div className="animate-fade-in bg-white min-h-screen pt-32 pb-20">
            {/* HERO */}
            <div className="section-shell mb-20 text-center">
                <p className="text-brand-blue-600 font-bold tracking-wider text-xl mb-2">THE TEAM</p>
                <h1 className="h1 text-slate-900 mb-6 uppercase">Built by Educators & Engineers</h1>
                <p className="body-text max-w-2xl mx-auto">
                    We combine deep pedagogical expertise with world-class engineering to solve the hardest problems in education.
                </p>
            </div>

            {/* FOUNDERS */}
            <section className="section-shell mb-32">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            name: "Ch. Hari Kiran",
                            role: "Founder",
                            bio: "Embedded systems, hardware prototyping, IoT architecture, device-level optimization.",
                            image: "bg-blue-100"
                        },
                        {
                            name: "Y. Navyasanthi Prasad",
                            role: "Co-Founder",
                            bio: "Machine learning pipelines, AI inference models, operating system engineering, UX automation.",
                            image: "bg-orange-100"
                        },
                        {
                            name: "P. Laxmi Ram Charan",
                            role: "Director",
                            bio: "Go-to-market execution, institutional partnerships, revenue strategy, commercialization frameworks.",
                            image: "bg-green-100"
                        }
                    ].map((member, i) => (
                        <div key={i} className="group p-8 rounded-[32px] bg-white border border-slate-200 hover:border-brand-blue-200 hover:shadow-xl transition-all duration-300">
                            <div className={`w-32 h-32 mx-auto rounded-full ${member.image} mb-6 flex items-center justify-center text-brand-blue-600`}>
                                <span className="text-3xl font-bold">{member.name.split(" ").map(n => n[0]).join("").substring(0, 2)}</span>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                                <p className="text-brand-blue-600 font-bold uppercase text-sm tracking-wide mb-4">{member.role}</p>
                                <p className="text-slate-600 mb-6 leading-relaxed">{member.bio}</p>
                                <div className="flex justify-center gap-4">
                                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 hover:text-brand-blue-600">
                                        <Linkedin className="h-5 w-5" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 hover:text-brand-blue-600">
                                        <Twitter className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ADVISORS */}
            <section className="section-shell">
                <div className="bg-slate-50 rounded-[40px] p-12 text-center border border-slate-200">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Advisors</h2>
                    <p className="text-slate-600 max-w-3xl mx-auto mb-8 text-lg">
                        To strengthen global scalability and academic relevance, we are currently onboarding advisors specializing in EdTech policy, artificial intelligence, and hardware system design.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Research collaborations",
                            "CSR & Govt. partnerships",
                            "Large-scale distribution",
                            "Global interoperability"
                        ].map((area, i) => (
                            <span key={i} className="px-6 py-3 bg-white rounded-full border border-slate-200 shadow-sm font-medium text-slate-700">
                                {area}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
