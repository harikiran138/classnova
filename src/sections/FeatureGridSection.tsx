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
    <section id="features" className="section-padding bg-[#050C1F] text-white">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="section-eyebrow">Key features</p>
            <h2 className="section-heading mt-4">Clean, modern tools teachers actually use</h2>
            <p className="section-subtitle mt-4">
              Use a tidy grid of cards or icons to showcase the top capabilities.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="glass-panel p-5 text-white">
                  <p className="text-lg font-semibold">{feature.title}</p>
                  <p className="mt-2 text-sm text-white/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel bg-gradient-to-b from-white/10 to-transparent p-8">
            <p className="section-eyebrow text-white/60">Software UI</p>
            <h3 className="mt-4 text-2xl font-semibold">A clean, simple teaching dashboard</h3>
            <p className="mt-4 text-white/70">
              Highlight screens for whiteboard, recording, content, attendance, and settings. Let visuals explain the flow with minimum text.
            </p>
            <div className="mt-10 space-y-4 text-sm text-white/70">
              <div className="rounded-2xl border border-dashed border-white/15 bg-[#02060F] p-5 text-center">
                Showcase UI mockups or embed real screenshots in this frame.
              </div>
              <div className="rounded-2xl bg-white/5 p-4 text-center text-white/80">
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
