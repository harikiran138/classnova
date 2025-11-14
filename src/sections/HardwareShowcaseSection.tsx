const hardware = [
  {
    title: "ClassNova Core",
    specs: ["Quad-core ARM CPU", "Dual-band Wi-Fi + Ethernet", "64GB eMMC storage"],
    confidence: "confirmed",
  },
  {
    title: "Teaching Controller",
    specs: ["Air mouse + presenter", "Laser pointer", "Haptic cues"],
    confidence: "beta",
  },
  {
    title: "Voice Amplifier",
    specs: ["15W speaker", "Neckband microphone", "USB-C charging"],
    confidence: "testing",
  },
];

const confidenceStyles: Record<typeof hardware[number]["confidence"], string> = {
  confirmed: "bg-emerald-400/15 text-emerald-200",
  beta: "bg-amber-400/15 text-amber-200",
  testing: "bg-blue-400/15 text-blue-200",
};

export const HardwareShowcaseSection = () => {
  return (
    <section id="hardware" className="section-padding bg-[#030814] text-white">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">Hardware stack</p>
            <h2 className="section-heading mt-4">Engineered for Indian classrooms</h2>
            <p className="section-subtitle mt-4">
              Rugged casing, passive cooling, and modular accessories designed with school lab realities. Currently in beta testing, shipping February 2026.
            </p>
            <div className="mt-8 glass-panel p-6">
              <p className="section-eyebrow text-white/60">Prototype renders</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {["Front view", "Port layout", "Exploded view"].map((label) => (
                  <div key={label} className="rounded-2xl border border-dashed border-white/15 bg-[#050C1F] p-4 text-center text-xs text-white/60">
                    {label}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-white/50">Actual photos shared with pilot schools under NDA.</p>
            </div>
          </div>
          <div className="space-y-6">
            {hardware.map((item) => (
              <div key={item.title} className="glass-panel bg-gradient-to-br from-white/10 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs uppercase tracking-wide ${confidenceStyles[item.confidence]}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
                    {item.confidence}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-white/80">
                  {item.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A00]" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="rounded-3xl border border-blue-500/30 bg-blue-500/10 p-5 text-sm text-blue-100">
              <p>⚠️ Prototype disclosure: Specifications may refine after January 2026 pilot testing. We will always communicate changes transparently.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardwareShowcaseSection;
