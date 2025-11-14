type FeatureStatus = "ready" | "beta" | "planned";

type FeatureItem = {
  label: string;
  status: FeatureStatus;
};

const features: { category: string; items: FeatureItem[] }[] = [
  {
    category: "Hardware",
    items: [
      { label: "ClassNova Core mini PC", status: "ready" },
      { label: "10h battery pack", status: "beta" },
      { label: "Magnetic cable kit", status: "ready" },
    ],
  },
  {
    category: "Teaching tools",
    items: [
      { label: "Air mouse / presenter", status: "ready" },
      { label: "Digital pen", status: "beta" },
      { label: "Voice amplifier", status: "planned" },
    ],
  },
  {
    category: "Content",
    items: [
      { label: "2,500+ curriculum lessons", status: "beta" },
      { label: "Regional language packs", status: "planned" },
      { label: "Teacher guides", status: "ready" },
    ],
  },
  {
    category: "Software",
    items: [
      { label: "Lesson playlists", status: "ready" },
      { label: "Participation analytics", status: "beta" },
      { label: "AI note summaries", status: "planned" },
    ],
  },
];

const statusStyles: Record<FeatureStatus, { label: string; className: string }> = {
  ready: {
    label: "Ready",
    className: "bg-emerald-500/20 text-emerald-200",
  },
  beta: {
    label: "Beta",
    className: "bg-blue-500/20 text-blue-200",
  },
  planned: {
    label: "Planned",
    className: "bg-slate-500/20 text-slate-200",
  },
};

export const FeatureGridSection = () => {
  return (
    <section id="features" className="section-padding bg-[#050C1F] text-white">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="section-eyebrow">All-in-one kit</p>
            <h2 className="section-heading mt-4">Everything needed for a modern classroom</h2>
            <p className="section-subtitle mt-4">
              Hardware, software, content, and teacher support engineered to work reliably in schools with intermittent power or network.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.category} className="glass-panel p-6">
                  <p className="text-sm uppercase tracking-wide text-white/60">{feature.category}</p>
                  <ul className="mt-4 space-y-3 text-white/80">
                    {feature.items.map((item) => (
                      <li key={item.label} className="flex items-center justify-between gap-3 text-sm">
                        <span className="flex items-center gap-2">
                          <span className="text-[#FF7A00]">•</span>
                          {item.label}
                        </span>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${statusStyles[item.status].className}`}>
                          {statusStyles[item.status].label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel bg-gradient-to-b from-white/10 to-transparent p-8">
            <p className="section-eyebrow text-white/60">ClassNova OS</p>
            <h3 className="mt-4 text-2xl font-semibold">Teacher OS built with DIDAC feedback</h3>
            <p className="mt-4 text-white/70">
              App-less interface powered by curated playlists, QR attendance, and AI-assisted prep. Usability tests with 25 teachers informed every interaction.
            </p>
            <div className="mt-10 space-y-6 text-sm text-white/70">
              <p className="rounded-2xl border border-dashed border-white/15 bg-[#02060F] p-6 text-center">
                Figma prototype preview coming soon. Request the interactive mockup during demos.
              </p>
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
