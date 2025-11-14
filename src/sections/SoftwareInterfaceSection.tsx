const tabs = [
  {
    title: "Lesson Flow",
    description: "Teacher launches curated playlists aligned to NCERT, SCERT, or custom content with two taps.",
  },
  {
    title: "Participation",
    description: "Real-time pulse on engagement with mood check-ins, quizzes, and attendance QR.",
  },
  {
    title: "Insights",
    description: "Weekly digest for principals and district teams with actionable adoption metrics.",
  },
];

export const SoftwareInterfaceSection = () => {
  return (
    <section id="software" className="section-padding bg-[#050C1F] text-white">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <p className="section-eyebrow">UI/UX design phase</p>
          <h2 className="section-heading">Software teachers actually love using</h2>
          <p className="section-subtitle">
            Built after interviewing 200+ teachers. Interfaces feel familiar (WhatsApp cues, YouTube simplicity) and switch languages instantly.
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
              UI mockup (Figma) preview coming soon
            </div>
            <p className="mt-4 text-xs text-white/60">
              Request the interactive prototype during demos. Screens include whiteboard, PDF annotator, recording view, and analytics dashboard.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Zero learning curve", description: "If you can use WhatsApp, you can use ClassNova." },
            { title: "Offline-first", description: "Every module works with zero connectivity." },
            { title: "10+ languages", description: "Interface localized for Hindi, Marathi, Kannada, Bengali, more." },
            { title: "Accessible design", description: "WCAG 2.1 AA color contrast + keyboard friendly." },
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
