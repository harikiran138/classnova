import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, TrendingUp, Users, Star, MapPin } from "lucide-react";

const Projects = () => {
    return (
        <div className="animate-fade-in bg-white min-h-screen pt-32 pb-20">
            {/* HERO */}
            <div className="section-shell mb-20">
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-[#2563EB] font-bold tracking-wider text-xl mb-2">OUR JOURNEY</p>
                    <h1 className="section-heading text-[#0F172A] uppercase">Transforming Education, One School at a Time</h1>
                    <p className="section-subtitle text-[#64748B]">
                        Celebrating our victories and the impact we've made across the educational landscape.
                    </p>
                </div>
            </div>

            {/* WHERE WE WON */}
            <section className="section-shell mb-24">
                <div className="text-center mb-12">
                    <h2 className="section-heading text-slate-900 uppercase !text-3xl">Where We Won</h2>
                    <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
                        Recognized for excellence and innovation on prestigious platforms.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="group rounded-[32px] overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300">
                        <div className="aspect-[4/3] relative overflow-hidden">
                            <img
                                src="/Gen-E-Summit.JPG"
                                alt="Gen-E-Summit Win"
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 bg-white">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Gen-E Summit</h3>
                            <p className="text-slate-600 text-justify">I, along with my team from NSRIT, secured Third Place 🏆 in the Start-up Pitchathon conducted as part of the Gen E-Summit’25 at ANITS, organized by the Institution’s Innovation Council (IIC) in association with IEEE and the BizVERVE Club. The event provided a fantastic platform to pitch our innovative ideas, gain valuable feedback from industry experts, and compete with some of the brightest minds.</p>
                        </div>
                    </div>
                    <div className="group rounded-[32px] overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300">
                        <div className="aspect-[4/3] relative overflow-hidden">
                            <img
                                src="/Samyuktha.jpg"
                                alt="Samyuktha Competition Win"
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 bg-white">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Samyuktha</h3>
                            <p className="text-slate-600 text-justify">I am proud to share that I secured the distinguished position of Winner 🏆 in the Startup Pitch Arena held as part of Samyukta 2025 – National-Level Student Innovation Summit at ANIL Neerukonda Institute of Technology & Sciences (ANITS). This achievement was under the Department of CSE, in collaboration with the departments of CSM, CSD, IT, ECE, EEE, and Mechanical Engineering, and supported by multiple innovation and entrepreneurship partners.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ACHIEVEMENTS */}
            <section className="section-padding bg-slate-50 border-t border-slate-200">
                <div className="section-shell">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-orange-500 font-bold tracking-wider text-xl mb-2">ACHIEVEMENTS</p>
                            <h2 className="section-heading text-slate-900 uppercase">Recognition & Impact</h2>
                            <p className="text-slate-600 mt-4 text-lg">
                                We are proud to be recognized by leading institutions for our innovation in educational technology.
                            </p>
                            <div className="mt-8 space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <Trophy className="h-6 w-6 text-yellow-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900">Winner - Startup Pitch Arena</h4>
                                        <p className="text-slate-600">Samyukta 2025 (National Level Summit)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <Star className="h-6 w-6 text-yellow-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900">Third Place - Pitchathon</h4>
                                        <p className="text-slate-600">Gen E-Summit’25 (ANITS)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Students Impacted", value: "500+", icon: TrendingUp },
                                { label: "States Reached", value: "3", icon: MapPin },
                                { label: "NPS Score", value: "72", icon: Star },
                                { label: "Awards Won", value: "2", icon: Trophy },
                            ].map((stat, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 text-center hover:border-blue-200 hover:shadow-lg transition-all shadow-sm flex flex-col items-center justify-center h-full">
                                    <stat.icon className="h-8 w-8 text-blue-600 mb-3" />
                                    <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
