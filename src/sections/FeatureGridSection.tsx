import { CheckCircle2 } from "lucide-react";

const features = [
  { title: "Smart whiteboard", description: "Write, annotate, and highlight in seconds." },
  { title: "Screen recording", description: "Capture lessons for later or absent students." },
  { title: "Offline content", description: "Teach without internet — sync when back online." },
  { title: "Cloud sync", description: "Auto-upload notes and recordings securely." },
  { title: "Content library", description: "Videos, notes, and PDFs ready to launch." },
  { title: "Easy sharing", description: "Send materials on WhatsApp or email instantly." },
  { title: "Multi-device access", description: "Use from phone, laptop, or tablet." },
  { title: "Lightweight & portable", description: "Carry the kit anywhere on campus." },
  { title: "Secure & private", description: "Class data stays encrypted and protected." },
];

export const FeatureGridSection = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="section-eyebrow text-[#2563EB]">KEY FEATURES</p>
            <h2 className="section-heading mt-4 text-[#0F172A] uppercase">Built for everyday lessons</h2>
            <p className="section-subtitle mt-4 text-[#64748B]">
              Shortcuts teachers love, presented in a simple, consistent dashboard.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-blue-200">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#2563EB]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-lg font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">{feature.title}</p>
                  <p className="mt-2 text-sm text-[#64748B]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-xl">
            <p className="section-eyebrow text-[#64748B]">SOFTWARE UI</p>
            <h3 className="mt-4 text-2xl font-bold text-[#0F172A] uppercase">A clean, teacher-first dashboard</h3>
            <p className="mt-4 text-[#64748B] font-medium">
              Whiteboard, content, recording, attendance, and settings live in one row. No hidden menus, no distractions.
            </p>
            <div className="mt-10 space-y-4 text-sm text-[#64748B]">
              <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-8 text-center">
                <p className="font-bold text-slate-400">UI PREVIEW PLACEHOLDER</p>
              </div>
              <div className="rounded-2xl bg-[#0F172A] p-4 text-center text-white font-medium shadow-lg">
                Whiteboard · File manager · Recording · Content library
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGridSection;
