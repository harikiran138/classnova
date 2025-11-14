const steps = [
  {
    title: "Plug the core",
    description: "Connect the ClassNova Core to any projector or HDMI display.",
  },
  {
    title: "Pair teaching tools",
    description: "Wireless mouse, air pen, and voice amp pair instantly via Bluetooth.",
  },
  {
    title: "Sync local language pack",
    description: "Load curated, multilingual lesson packs over Wi-Fi once.",
  },
  {
    title: "Teach anywhere",
    description: "Carry the kit room-to-room. No internet dependency while teaching.",
  },
];

export const SetupStepsSection = () => {
  return (
    <section id="deployment" className="section-padding bg-[#050C1F] text-white">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <p className="section-eyebrow">Deployment</p>
          <h2 className="section-heading">4 steps to digitize a classroom</h2>
          <p className="section-subtitle">
            District teams can deploy 100 classrooms a week with existing technicians.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative glass-panel p-6">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl font-semibold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-white/70">{step.description}</p>
              <div className="absolute -top-3 -right-3 rounded-full border border-white/20 bg-[#0A1628] px-3 py-1 text-xs text-white/60">
                5 min
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="max-w-4xl rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 text-center shadow-soft">
            <p className="section-eyebrow text-white/60">Prototype render</p>
            <h3 className="mt-2 text-2xl font-semibold">Watch the 3-minute setup simulation</h3>
            <div className="mt-6 aspect-video w-full rounded-2xl border border-dashed border-white/20 bg-[#02060F] flex items-center justify-center">
              <button className="btn-ghost-pill">
                <span className="mr-2 text-lg" aria-hidden>
                  ▶
                </span>
                Play prototype demo
              </button>
            </div>
            <p className="mt-4 text-sm text-white/60">Rendered walkthrough of the deployment flow. Real-world recording arrives after pilot.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupStepsSection;
