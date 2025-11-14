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
    <section id="software" className="bg-[#050C1F] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">UI/UX design phase</p>
          <h2 className="mt-4 text-3xl font-semibold">Software teachers actually love using</h2>
          <p className="mt-4 text-white/70">
            Built after interviewing 200+ teachers. Interfaces feel familiar (WhatsApp cues, YouTube simplicity) and switch languages instantly.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-4">
            {tabs.map((tab) => (
              <div key={tab.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">{tab.title}</p>
                <p className="mt-2 text-white/80">{tab.description}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-8">
            <div className="h-72 rounded-3xl border border-dashed border-white/15 bg-[#030814] flex items-center justify-center text-sm text-white/50">
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
            <div key={principle.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
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
