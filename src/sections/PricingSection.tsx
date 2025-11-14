const plans = [
  {
    name: "Starter",
    price: "₹12,000",
    cadence: "per classroom",
    highlights: ["Core hardware kit", "Offline OS", "Teacher tools"],
  },
  {
    name: "District",
    price: "₹10,500",
    cadence: "200+ classrooms",
    highlights: ["Central dashboard", "Bulk onboarding", "Priority support"],
    featured: true,
  },
  {
    name: "CSR + NGO",
    price: "Custom",
    cadence: "Impact grants",
    highlights: ["Content partnerships", "Field ops", "Impact reporting"],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="bg-[#030814] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Pricing</p>
          <h2 className="mt-4 text-3xl font-semibold">One kit. Multiple deployment models.</h2>
          <p className="mt-4 text-white/70">
            Financing available for government tenders and CSR foundations.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border ${plan.featured ? "border-[#FF7A00] bg-[#120A02]" : "border-white/10 bg-white/5"} p-8`}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">{plan.name}</p>
              <div className="mt-4 text-4xl font-semibold text-white">{plan.price}</div>
              <p className="text-sm text-white/60">{plan.cadence}</p>
              <ul className="mt-8 space-y-3 text-white/80">
                {plan.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#FF7A00]" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white">
                Talk to sales
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-white/10 bg-[#050C1F] p-6 text-center text-sm text-white/70">
          Includes 3-year warranty, swap program, and quarterly in-person teacher refreshers.
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
