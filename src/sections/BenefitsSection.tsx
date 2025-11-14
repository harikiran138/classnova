const benefits = [
  { title: "Modernizes affordably", detail: "Retrofit existing screens instead of buying new smart boards." },
  { title: "Reduces clutter", detail: "One kit replaces multiple devices and chargers." },
  { title: "Boosts teaching quality", detail: "Teachers get consistent tools, recording, and sharing." },
  { title: "Supports every school", detail: "Works for rural, private, and NGO setups." },
  { title: "Fits existing infra", detail: "No civil work, no rewiring, no network dependency." },
  { title: "Saves time", detail: "Setup to teaching in under two minutes." },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-[#050C1F] text-white">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="section-eyebrow">Benefits</p>
            <h2 className="section-heading mt-4">Why schools choose ClassNova</h2>
            <p className="section-subtitle mt-4">Short, direct reasons any principal can scan quickly.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="glass-panel p-5">
                  <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{benefit.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel bg-gradient-to-b from-white/10 to-transparent p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Impact snapshot</p>
            <ul className="mt-6 space-y-4 text-white">
              {["Modern classrooms in minutes", "Works with existing budgets", "Trusted by teachers before scale", "Built for low-bandwidth India"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-base">
                  <span className="h-2 w-2 rounded-full bg-[#FF7A00]" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/60">Ask for detailed ROI numbers, pilot dashboards, and playbooks during the demo.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
