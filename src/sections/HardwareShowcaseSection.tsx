const hardware = [
  {
    title: "ClassNova Stick",
    specs: ["Quad-core performance", "Dual-band WiFi", "HDMI plug & play"],
  },
  {
    title: "Smart Pen",
    specs: ["Natural writing feel", "Low-latency ink", "Magnetic dock"],
  },
  {
    title: "Wireless Mouse",
    specs: ["Presenter buttons", "Air navigation", "Rechargeable"],
  },
  {
    title: "Voice Mic",
    specs: ["Clear audio capture", "Noise reduction", "Long battery"],
  },
];

export const HardwareShowcaseSection = () => {
  return (
    <section id="hardware" className="section-padding bg-[#030814] text-white">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">Hardware</p>
            <h2 className="section-heading mt-4">Designed for the classroom. Built for impact.</h2>
            <p className="section-subtitle mt-4">
              A premium device with essential teaching accessories — ready for daily use.
            </p>
            <div className="mt-8 glass-panel p-6">
              <p className="text-base font-semibold text-white">Specs snapshot</p>
              <ul className="mt-4 space-y-2 text-white/70">
                {[
                  "4GB RAM · 64GB storage",
                  "Quad-core performance",
                  "Dual-band WiFi",
                  "HDMI plug & play",
                  "Ultra-low latency",
                ].map((spec) => (
                  <li key={spec} className="flex items-center gap-3 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A00]" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            {hardware.map((item) => (
              <div key={item.title} className="glass-panel bg-gradient-to-br from-white/10 to-transparent p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
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
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
              Shipping roadmap shared with every pilot partner during onboarding.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardwareShowcaseSection;
