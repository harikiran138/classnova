import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, TrendingUp, Users, Star, MapPin } from "lucide-react";

const Projects = () => {
    return (
        <div className="animate-fade-in bg-white min-h-screen pt-32 pb-20">
            {/* HERO */}
            <div className="section-shell mb-20">
                <div className="text-center max-w-3xl mx-auto">
                    <p className="section-eyebrow text-[#2563EB]">OUR WORK</p>
                    <h1 className="section-heading text-[#0F172A] uppercase">Transforming Education, One School at a Time</h1>
                    <p className="section-subtitle text-[#64748B]">
                        Explore our pilot deployments, case studies, and impact metrics across India.
                    </p>
                </div>
            </div>

            {/* PROJECT SHOWCASE */}
            <section className="section-shell mb-24">
                <div className="grid gap-12">
                    {[
                        {
                            title: "Kendriya Vidyalaya Pilot",
                            desc: "Deployed ClassNova kits in 5 classrooms to test offline content sync and teacher adoption rates.",
                            tags: ["Deployment", "K-12", "Offline Sync"],
                            metrics: [
                                { label: "Teachers Trained", value: "15+" },
                                { label: "Hours Saved/Week", value: "8hrs" },
                                { label: "Student Engagement", value: "+40%" },
                            ],
                            image: "bg-blue-50", // Placeholder class
                        },
                        {
                            title: "Rural School Initiative",
                            desc: "Partnered with an NGO to bring digital learning to a remote village with zero internet connectivity.",
                            tags: ["Social Impact", "Rural", "Low Cost"],
                            metrics: [
                                { label: "Students Reached", value: "200+" },
                                { label: "Cost per Class", value: "₹15k" },
                                { label: "Uptime", value: "99.9%" },
                            ],
                            image: "bg-orange-50", // Placeholder class
                        },
                    ].map((project, i) => (
                        <div key={i} className="group grid lg:grid-cols-2 gap-8 items-center rounded-[32px] border border-slate-200 p-2 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                            <div className={`aspect-video rounded-[24px] ${project.image} flex items-center justify-center`}>
                                <p className="font-bold text-slate-400 uppercase tracking-widest">Project Image</p>
                            </div>
                            <div className="p-6 lg:p-8 space-y-6">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold uppercase tracking-wide">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-3xl font-bold text-[#0F172A]">{project.title}</h3>
                                <p className="text-lg text-[#64748B] leading-relaxed">{project.desc}</p>

                                <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-100">
                                    {project.metrics.map(metric => (
                                        <div key={metric.label}>
                                            <p className="text-2xl font-bold text-[#0F172A]">{metric.value}</p>
                                            <p className="text-xs text-[#64748B] uppercase font-bold tracking-wide mt-1">{metric.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <Button variant="ghost" className="text-[#FF7A00] hover:text-[#E66E00] hover:bg-orange-50 p-0 font-bold uppercase tracking-wide">
                                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ACHIEVEMENTS */}
            <section className="section-padding bg-[#0F172A] text-white">
                <div className="section-shell">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="section-eyebrow text-[#FF7A00]">ACHIEVEMENTS</p>
                            <h2 className="section-heading text-white uppercase">Recognition & Impact</h2>
                            <p className="text-slate-400 mt-4 text-lg">
                                We are proud to be recognized by leading institutions for our innovation in educational technology.
                            </p>
                            <div className="mt-8 space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Trophy className="h-6 w-6 text-yellow-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white">Best EdTech Startup 2024</h4>
                                        <p className="text-slate-400">Awarded by T-Hub Innovation Summit</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Star className="h-6 w-6 text-yellow-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white">Patent Pending Tech</h4>
                                        <p className="text-slate-400">For our offline-first sync architecture</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "Schools", value: "10+", icon: Users },
                                { label: "Students", value: "500+", icon: TrendingUp },
                                { label: "States", value: "3", icon: MapPin }, // Reusing MapPin from lucide-react (needs import if not global, but assuming context)
                                { label: "NPS Score", value: "72", icon: Star },
                            ].map((stat, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all">
                                    <stat.icon className="h-8 w-8 text-[#2563EB] mx-auto mb-4" />
                                    <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">{stat.label}</p>
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
