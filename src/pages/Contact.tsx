import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

const Contact = () => {
    return (
        <div className="animate-fade-in bg-white min-h-screen pt-32 pb-20">
            {/* HERO */}
            <div className="section-shell mb-16 text-center">
                <p className="section-eyebrow text-[#2563EB]">GET IN TOUCH</p>
                <h1 className="h1 text-[#0F172A] mb-6 uppercase">Let's Build the Future</h1>
                <p className="body-text max-w-2xl mx-auto">
                    Have questions about the pilot program? Want to schedule a demo? We're here to help.
                </p>
            </div>

            <div className="section-shell">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl shadow-blue-900/5 border border-slate-200">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2563EB]">
                                <MessageSquare className="h-5 w-5" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0F172A] uppercase">Send us a message</h3>
                        </div>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Name</label>
                                    <input type="text" className="w-full h-12 rounded-xl border border-slate-200 px-4 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all bg-slate-50 focus:bg-white" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Institution</label>
                                    <input type="text" className="w-full h-12 rounded-xl border border-slate-200 px-4 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all bg-slate-50 focus:bg-white" placeholder="School Name" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email</label>
                                <input type="email" className="w-full h-12 rounded-xl border border-slate-200 px-4 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all bg-slate-50 focus:bg-white" placeholder="john@school.edu" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Message</label>
                                <textarea className="w-full h-32 rounded-xl border border-slate-200 p-4 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all resize-none bg-slate-50 focus:bg-white" placeholder="Tell us about your requirements..." />
                            </div>
                            <Button className="w-full h-14 text-lg bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-500/20">
                                SEND MESSAGE
                                <Send className="ml-2 h-5 w-5" />
                            </Button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-8">
                        <div className="bg-[#0F172A] rounded-[32px] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                            {/* Background Mesh */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />

                            <h3 className="text-2xl font-bold uppercase mb-8 relative z-10">Contact Info</h3>
                            <div className="space-y-8 relative z-10">
                                <div className="flex items-start gap-6 group">
                                    <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF7A00] transition-colors duration-300">
                                        <Mail className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Email Us</p>
                                        <p className="text-lg font-medium mt-1">founders@classnova.com</p>
                                        <p className="text-lg font-medium">support@classnova.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF7A00] transition-colors duration-300">
                                        <Phone className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Call Us</p>
                                        <p className="text-lg font-medium mt-1">+91 98765 43210</p>
                                        <p className="text-sm text-slate-400 mt-1">Mon-Fri, 9am - 6pm IST</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF7A00] transition-colors duration-300">
                                        <MapPin className="h-6 w-6 text-white" />
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
                        <div className="h-64 rounded-[32px] bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden relative group">
                            <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Hyderabad&zoom=12&size=600x300&sensor=false')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="relative z-10 bg-white/80 backdrop-blur px-6 py-3 rounded-full shadow-sm">
                                <p className="text-slate-600 font-bold uppercase tracking-wide text-sm flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-[#FF7A00]" />
                                    View on Google Maps
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
