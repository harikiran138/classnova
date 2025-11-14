const highlights = [
  "Works with any projector or TV",
  "No training or IT team needed",
  "Offline-first, syncs when online",
  "Built for government, private, NGO schools",
];

const miniCards = [
  {
    title: "Plug-and-play core",
    body: "Connect via HDMI, power on, and the teaching OS appears instantly.",
  },
  {
    title: "All tools included",
    body: "Whiteboard, content library, lesson recording, sharing — all built in.",
  },
  {
    title: "Trusted rollout",
    body: "Pilot-ready hardware with transparent timelines and support.",
  },
];

export const ProblemSolutionSection = () => {
  return (
    <section id="problem" className="section-padding bg-[#050C1F] text-white">
      <div className="section-shell grid gap-16 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="section-eyebrow text-[#FFB36D]">What is ClassNova?</p>
          <h2 className="section-heading mt-4">A compact device that modernizes any classroom</h2>
          <p className="section-subtitle mt-4">
            ClassNova brings digital teaching tools, content, and recording into one simple system designed for teachers.
          </p>
          <div className="mt-10 space-y-3 text-base text-white/80">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-sm uppercase tracking-wide">
                <span className="h-2 w-2 rounded-full bg-[#FF7A00]" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="section-eyebrow text-emerald-300">How it fits</p>
          <h2 className="section-heading mt-4">All essentials inside one kit</h2>
          <div className="mt-10 space-y-4">
            {miniCards.map((card) => (
              <div key={card.title} className="glass-panel p-6">
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-white/70">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[28px] border border-white/15 bg-white/5 p-5 text-sm text-white/70">
            Built for busy teachers: no training decks, no external technicians, no waiting for network.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
