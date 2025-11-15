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
    <section id="software" className="section-padding bg-slate-100">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <p className="section-eyebrow">Software UI</p>
          <h2 className="section-heading text-slate-900">A clean and simple teaching dashboard</h2>
          <p className="section-subtitle">
            Everything a teacher needs is right where they expect it — no clutter, no extra clicks.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-4">
            {tabs.map((tab) => (
              <div key={tab.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{tab.title}</p>
                <p className="mt-2 text-slate-700">{tab.description}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[40px] border border-slate-200 bg-white p-8 shadow-xl">
            <div className="media-frame flex h-72 items-center justify-center border-slate-200 bg-slate-50 text-sm text-slate-500">
              Showcase UI mockups or short clips here
            </div>
            <p className="mt-4 text-xs text-slate-500">
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
            <div key={principle.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm uppercase tracking-wide text-slate-500">Principle</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{principle.title}</h3>
              <p className="mt-2 text-slate-600">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareInterfaceSection;
