const plans = [
  {
    name: "Basic",
    price: "₹0",
    cadence: "Single classroom",
    blurb: "Essential features for smaller setups.",
    highlights: ["Smart whiteboard", "Offline content", "Lesson recording"],
  },
  {
    name: "Standard",
    price: "₹25,000",
    cadence: "Refundable pilot kit",
    blurb: "Best value for schools ready to modernize.",
    featured: true,
    highlights: ["Recording + sharing", "Teacher training", "Priority support"],
  },
  {
    name: "Premium",
    price: "Custom",
    cadence: "Multi-campus",
    blurb: "4GB RAM · 64GB storage · Pen, mouse, mic included.",
    highlights: ["Bulk deployment", "Data governance", "Co-design roadmap"],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-[#030814] text-white">
      <div className="section-shell">
        <div className="text-center space-y-4">
          <p className="section-eyebrow">Pricing</p>
          <h2 className="section-heading">Simple pricing for every institution</h2>
          <p className="section-subtitle">Flexible for schools, NGOs, and districts. Bulk discounts available.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 shadow-soft transition-smooth hover:-translate-y-1 ${plan.featured ? "border-[#FF7A00] bg-[#120A02]" : "border-white/10 bg-white/5"}`}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">{plan.name}</p>
              <div className="mt-4 text-4xl font-semibold text-white">{plan.price}</div>
              <p className="text-sm text-white/60">{plan.cadence}</p>
              <p className="mt-3 text-sm text-white/70">{plan.blurb}</p>
              <ul className="mt-8 space-y-3 text-white/80">
                {plan.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#FF7A00]" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="btn-ghost-pill mt-8 w-full justify-center border-white/30 text-sm">
                {plan.featured ? "Start pilot" : "Talk to us"}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-white/10 bg-[#050C1F] p-6 text-center text-sm text-white/70">
          All pricing discussions come with transparent milestones, shared documentation, and 100% refundable deposits until hardware ships.
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
