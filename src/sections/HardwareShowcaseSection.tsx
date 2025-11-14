const hardware = [
  {
    title: "ClassNova Core",
    specs: ["Quad-core CPU", "Dual-band Wi-Fi", "64GB onboard"],
  },
  {
    title: "Teaching Controller",
    specs: ["Air mouse", "Laser pointer", "Haptic feedback"],
  },
  {
    title: "Voice Amplifier",
    specs: ["15W output", "Neckband mic", "USB-C charging"],
  },
];

export const HardwareShowcaseSection = () => {
  return (
    <section id="hardware" className="bg-[#030814] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/50">Hardware stack</p>
            <h2 className="mt-4 text-3xl font-semibold">Built for Indian classrooms. Field tested in 200+ schools.</h2>
            <p className="mt-4 text-white/70">
              Rugged casing, passive cooling, and modular accessories keep the kit operational even after daily transport.
            </p>
            <div className="mt-8 rounded-[32px] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">3D preview</p>
              <div className="mt-4 h-64 rounded-2xl border border-dashed border-white/20 bg-[#050C1F]" />
              <p className="mt-3 text-xs text-white/50">TODO: Embed interactive 3D hardware viewer</p>
            </div>
          </div>
          <div className="space-y-6">
            {hardware.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="text-sm text-white/60">Includes</span>
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
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
              Includes LMS-ready Android app + Windows mode, USB-C charging, and 24/7 remote diagnostics.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardwareShowcaseSection;
