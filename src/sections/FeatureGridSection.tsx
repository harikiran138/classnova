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
    <section id="features" className="section-padding relative">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="section-eyebrow text-blue-400">Key features</p>
            <h2 className="section-heading mt-4 text-white">Built for everyday lessons</h2>
            <p className="section-subtitle mt-4 text-slate-400">
              Shortcuts teachers love, presented in a simple, consistent dashboard.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10">
                  <p className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">{feature.title}</p>
                  <p className="mt-2 text-sm text-slate-400 group-hover:text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-2xl">
            <p className="section-eyebrow text-slate-500">Software UI</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">A clean, teacher-first dashboard</h3>
            <p className="mt-4 text-slate-400">
              Whiteboard, content, recording, attendance, and settings live in one row. No hidden menus, no distractions.
            </p>
            <div className="mt-10 space-y-4 text-sm text-slate-400">
              <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-5 text-center">
                Drop in product shots or short clips to show the flow.
              </div>
              <div className="rounded-2xl bg-black/40 p-4 text-center text-white/90 border border-white/10">
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
