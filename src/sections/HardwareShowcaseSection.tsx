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
    <section id="hardware" className="section-padding bg-white">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">Hardware</p>
            <h2 className="section-heading mt-4 text-slate-900">Designed for classrooms, tested on the ground</h2>
            <p className="section-subtitle mt-4">
              Every accessory ships in the box so teachers can start in under 10 minutes.
            </p>
            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-base font-semibold text-slate-900">Specs snapshot</p>
              <ul className="mt-4 space-y-2 text-slate-600">
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
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <ul className="mt-4 space-y-2 text-slate-600">
                  {item.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A00]" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 text-sm text-emerald-900">
              Shipping roadmap shared with every pilot partner during onboarding.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardwareShowcaseSection;
