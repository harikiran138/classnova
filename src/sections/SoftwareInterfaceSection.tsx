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
    <section className="bg-[#050C1F] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Software</p>
          <h2 className="mt-4 text-3xl font-semibold">Simple for teachers. Powerful for admins.</h2>
          <p className="mt-4 text-white/70">
            No complex app store. Runs directly on the ClassNova Core with instant switch between Hindi, English, Marathi, Kannada, or Bengali.
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
            <div className="h-72 rounded-3xl border border-dashed border-white/15 bg-[#030814]" />
            <p className="mt-4 text-xs text-white/60">TODO: Swap with UI mockup carousel (PNG/WebM)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareInterfaceSection;
