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
    <section id="deployment" className="bg-[#050C1F] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Deployment</p>
          <h2 className="mt-4 text-3xl font-semibold">4 steps to digitize a classroom</h2>
          <p className="mt-4 text-white/70">
            District teams can deploy 100 classrooms a week with existing technicians.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
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
      </div>
    </section>
  );
};

export default SetupStepsSection;
