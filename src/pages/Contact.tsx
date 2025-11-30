import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
    return (
        <div className="animate-fade-in bg-slate-50 min-h-screen pt-32 pb-20">
            <div className="section-shell">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="section-eyebrow text-[#2563EB]">GET IN TOUCH</p>
                    <h1 className="section-heading text-[#0F172A] uppercase">Let's Build the Future of Learning</h1>
                    <p className="section-subtitle text-[#64748B]">
                        Have questions about the pilot program? Want a demo? We're here to help.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-slate-200">
                        <h3 className="text-2xl font-bold text-[#0F172A] uppercase mb-8">Send us a message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#0F172A] uppercase">Name</label>
                                    <input type="text" className="w-full h-12 rounded-xl border border-slate-200 px-4 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#0F172A] uppercase">Institution</label>
                                    <input type="text" className="w-full h-12 rounded-xl border border-slate-200 px-4 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all" placeholder="School Name" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#0F172A] uppercase">Email</label>
                                <input type="email" className="w-full h-12 rounded-xl border border-slate-200 px-4 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all" placeholder="john@school.edu" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#0F172A] uppercase">Message</label>
                                <textarea className="w-full h-32 rounded-xl border border-slate-200 p-4 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all resize-none" placeholder="Tell us about your requirements..." />
                            </div>
                            <Button className="w-full h-14 text-lg shadow-lg shadow-orange-500/20">
                                SEND MESSAGE
                                <Send className="ml-2 h-5 w-5" />
                            </Button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-8">
                        <div className="bg-[#0F172A] rounded-[32px] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                            <h3 className="text-2xl font-bold uppercase mb-8 relative z-10">Contact Info</h3>
                            <div className="space-y-8 relative z-10">
                                <div className="flex items-start gap-6">
                                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-6 w-6 text-[#FF7A00]" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Email Us</p>
                                        <p className="text-lg font-medium mt-1">founders@classnova.com</p>
                                        <p className="text-lg font-medium">support@classnova.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="h-6 w-6 text-[#FF7A00]" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Call Us</p>
                                        <p className="text-lg font-medium mt-1">+91 98765 43210</p>
                                        <p className="text-sm text-slate-400 mt-1">Mon-Fri, 9am - 6pm IST</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="h-6 w-6 text-[#FF7A00]" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Visit Us</p>
                                        <p className="text-lg font-medium mt-1">
                                            T-Hub, IIIT Hyderabad Campus,<br />
                                            Gachibowli, Hyderabad,<br />
                                            Telangana 500032
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="h-64 rounded-[32px] bg-slate-200 border border-slate-300 flex items-center justify-center">
                            <p className="text-slate-500 font-bold uppercase tracking-wide">Map Integration Placeholder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
