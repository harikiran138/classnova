const features = [
  {
    category: "Hardware",
    items: [
      "ClassNova Core mini PC",
      "10h battery pack",
      "Magnetic cable kit",
    ],
  },
  {
    category: "Teaching tools",
    items: ["Air mouse", "Digital pen", "Voice amplifier"],
  },
  {
    category: "Content",
    items: ["2,500+ curriculum-aligned lessons", "Local language packs", "Teacher guides"],
  },
  {
    category: "Software",
    items: ["Lesson playlists", "Participation analytics", "Offline sync"],
  },
];

export const FeatureGridSection = () => {
  return (
    <section className="bg-[#050C1F] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">All-in-one kit</p>
            <h2 className="mt-4 text-3xl font-semibold">Everything needed for a modern classroom</h2>
            <p className="mt-4 text-white/70">
              Hardware, software, content, and teacher support engineered to work reliably in schools with intermittent power or network.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.category} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-wide text-white/60">{feature.category}</p>
                  <ul className="mt-4 space-y-2 text-white/80">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-[#FF7A00]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">ClassNova OS</p>
            <h3 className="mt-4 text-2xl font-semibold">Teacher OS built with DIDAC feedback</h3>
            <p className="mt-4 text-white/70">
              App-less interface powered by curated playlists, QR attendance, and AI-assisted prep.
            </p>
            <div className="mt-10 space-y-6 text-sm text-white/70">
              <p>TODO: Replace placeholder card with retina-ready UI screenshots.</p>
              <div className="rounded-2xl bg-white/5 p-4 text-center text-white/80">
                Offline-first · Multilingual · Auto updates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGridSection;
