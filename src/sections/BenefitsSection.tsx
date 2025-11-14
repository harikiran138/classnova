const benefits = [
  {
    title: "Budget friendly",
    detail: "₹12,000 per classroom vs ₹2 lakh smart boards",
  },
  {
    title: "Teacher adoption",
    detail: "Familiar interface with bilingual voice prompts",
  },
  {
    title: "Offline resilience",
    detail: "Works during outages with automatic sync later",
  },
  {
    title: "District visibility",
    detail: "Every session logged with zero manual effort",
  },
];

const stats = [
  { value: "85%", label: "Capex saved" },
  { value: "5 min", label: "Setup time" },
  { value: "12 hrs", label: "Battery backup" },
  { value: "4x", label: "Teacher adoption" },
];

export const BenefitsSection = () => {
  return (
    <section className="bg-[#050C1F] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">Why schools switch</p>
            <h2 className="mt-4 text-3xl font-semibold">Unbeatable ROI for governments and affordable schools</h2>
            <p className="mt-4 text-white/70">
              Proven deployments across multiple states with rigorous QA, onboarding, and 10-year refresh roadmap.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="mt-3 text-white/70">{benefit.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl bg-white/5 p-6 text-center">
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-white/60">
                Numbers based on pilots with Kendriya Vidyalaya, TFI, and multiple CSR deployments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
