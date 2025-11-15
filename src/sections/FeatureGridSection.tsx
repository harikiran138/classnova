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
    <section id="features" className="section-padding bg-slate-50">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="section-eyebrow">Key features</p>
            <h2 className="section-heading mt-4 text-slate-900">Built for everyday lessons</h2>
            <p className="section-subtitle mt-4">
              Shortcuts teachers love, presented in a simple, consistent dashboard.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-lg font-semibold text-slate-900">{feature.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
            <p className="section-eyebrow text-slate-500">Software UI</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">A clean, teacher-first dashboard</h3>
            <p className="mt-4 text-slate-600">
              Whiteboard, content, recording, attendance, and settings live in one row. No hidden menus, no distractions.
            </p>
            <div className="mt-10 space-y-4 text-sm text-slate-600">
              <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-5 text-center">
                Drop in product shots or short clips to show the flow.
              </div>
              <div className="rounded-2xl bg-slate-900/90 p-4 text-center text-white/90">
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
