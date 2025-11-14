const tabs = [
  {
    title: "Whiteboard",
    description: "Write, erase, and highlight like a regular board — with instant undo.",
  },
  {
    title: "Content library",
    description: "Launch videos, notes, and PDFs from tidy playlists.",
  },
  {
    title: "Recording",
    description: "Capture lessons and share links automatically when online.",
  },
  {
    title: "Attendance",
    description: "Quick check-ins and basic analytics for coordinators.",
  },
];

export const SoftwareInterfaceSection = () => {
  return (
    <section id="software" className="section-padding bg-[#050C1F] text-white">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <p className="section-eyebrow">Software UI</p>
          <h2 className="section-heading">A clean and simple teaching dashboard</h2>
          <p className="section-subtitle">
            Everything a teacher needs is right where they expect it — no clutter, no extra clicks.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-4">
            {tabs.map((tab) => (
              <div key={tab.title} className="glass-panel p-6 text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">{tab.title}</p>
                <p className="mt-2 text-white/80">{tab.description}</p>
              </div>
            ))}
          </div>
          <div className="glass-panel rounded-[40px] bg-gradient-to-b from-white/10 to-transparent p-8">
            <div className="media-frame flex h-72 items-center justify-center text-sm text-white/50">
              Showcase UI mockups or short clips here
            </div>
            <p className="mt-4 text-xs text-white/60">
              Highlight screens for whiteboard, recording, content, attendance, and settings. Let visuals do most of the storytelling.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Zero learning curve", description: "Feels like WhatsApp and YouTube." },
            { title: "Offline-first", description: "Keep teaching even without network." },
            { title: "Multilingual", description: "Switch languages in one tap." },
            { title: "Accessible", description: "High contrast, keyboard friendly." },
          ].map((principle) => (
            <div key={principle.title} className="glass-panel p-5">
              <p className="text-sm uppercase tracking-wide text-white/60">Principle</p>
              <h3 className="mt-2 text-lg font-semibold">{principle.title}</h3>
              <p className="mt-2 text-white/70">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareInterfaceSection;
