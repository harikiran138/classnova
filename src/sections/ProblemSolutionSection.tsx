const highlights = [
  {
    label: "Works without internet",
    detail: "Offline-first, syncs when online",
  },
  {
    label: "3-click setup",
    detail: "HDMI + power + remote",
  },
  {
    label: "Teacher-ready UI",
    detail: "No training decks required",
  },
  {
    label: "Budget friendly",
    detail: "Starts at ₹12,000",
  },
];

const essentials = [
  {
    title: "Smart core",
    body: "Mini PC with ClassNova OS, HDMI input, and classroom-safe controls.",
  },
  {
    title: "Teaching tools",
    body: "Whiteboard, content playlists, annotation, lesson recording, sharing.",
  },
  {
    title: "Support kit",
    body: "Digital pen, wireless remote, microphone, WhatsApp support team.",
  },
];

export const ProblemSolutionSection = () => {
  return (
    <section id="what-is-classnova" className="section-padding bg-white">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="section-eyebrow text-slate-500">What is ClassNova?</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight text-slate-900">
            The classroom upgrade—no hassle, no learning curve
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Instantly make any TV or projector interactive. Track lessons. Engage every student. All with one simple kit.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{item.label}</p>
                <p className="mt-2 text-base font-medium text-slate-900">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="section-eyebrow text-slate-500">What’s inside</p>
          <h3 className="text-2xl font-semibold text-slate-900">Everything you need, ready to teach</h3>
          <div className="mt-8 space-y-4">
            {essentials.map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-900">{card.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4 text-sm text-emerald-900">
            No installation fees. No maintenance contracts. Ready to pilot in 2 weeks.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
