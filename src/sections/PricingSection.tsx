const plans = [
  {
    name: "Prototype tour",
    price: "₹0",
    cadence: "15-min video call",
    status: "Open",
    highlights: ["Live OS walkthrough", "Hardware teardown", "Timeline Q&A"],
  },
  {
    name: "Pilot locker",
    price: "₹25,000",
    cadence: "refundable deposit",
    status: "Waitlist",
    featured: true,
    highlights: ["1 classroom kit", "Onsite onboarding", "Weekly check-ins"],
  },
  {
    name: "District charter",
    price: "Custom",
    cadence: "co-build scope",
    status: "Exploring",
    highlights: ["Fleet sizing workshop", "Data governance", "Impact measurement"],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-[#030814] text-white">
      <div className="section-shell">
        <div className="text-center space-y-4">
          <p className="section-eyebrow">Access models</p>
          <h2 className="section-heading">What engaging with the prototype looks like</h2>
          <p className="section-subtitle">
            We’re not selling thousands of kits yet. Instead, we open tightly scoped touchpoints with refundable deposits and shared milestones.
          </p>
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
              <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-white/60">
                <span className={`h-2 w-2 rounded-full ${plan.status === "Open" ? "bg-emerald-400" : plan.status === "Waitlist" ? "bg-amber-400" : "bg-white/40"}`} />
                {plan.status}
              </span>
              <ul className="mt-8 space-y-3 text-white/80">
                {plan.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#FF7A00]" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="btn-ghost-pill mt-8 w-full justify-center border-white/30 text-sm">
                {plan.status === "Open" ? "Book walkthrough" : plan.status === "Waitlist" ? "Join waitlist" : "Co-design charter"}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-white/10 bg-[#050C1F] p-6 text-center text-sm text-white/70">
          Deposits are 100% refundable until hardware ships. We document every milestone so finance and procurement teams stay aligned.
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
