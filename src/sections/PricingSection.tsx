const plans = [
  {
    name: "Basic",
    price: "₹0",
    cadence: "Single classroom",
  blurb: "Perfect for small classrooms. Get started with interactive teaching at no cost.",
    highlights: ["Smart whiteboard", "Offline content", "Lesson recording"],
  },
  {
    name: "Standard",
    price: "₹25,000",
    cadence: "Refundable pilot kit",
  blurb: "Upgrade your school with our pilot kit. Easy setup, full support, and risk-free trial.",
    featured: true,
    highlights: ["Recording + sharing", "Teacher training", "Priority support"],
  },
  {
    name: "Premium",
    price: "Custom",
    cadence: "Multi-campus",
  blurb: "Custom solutions for large campuses. Includes all hardware, training, and ongoing support.",
    highlights: ["Bulk deployment", "Data governance", "Co-design roadmap"],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-slate-50">
      <div className="section-shell">
        <div className="text-center space-y-4">
          <p className="section-eyebrow">Pricing</p>
          <h2 className="section-heading text-slate-900">Simple pricing for every institution</h2>
          <p className="section-subtitle">Flexible for schools, NGOs, and districts. Bulk discounts available.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 transition-smooth hover:-translate-y-1 ${plan.featured ? "border-[#FF7A00] bg-white shadow-[0_25px_60px_rgba(249,115,22,0.2)]" : "border-slate-200 bg-white shadow-sm"}`}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{plan.name}</p>
              <div className="mt-4 text-4xl font-semibold text-slate-900">{plan.price}</div>
              <p className="text-sm text-slate-500">{plan.cadence}</p>
              <p className="mt-3 text-sm text-slate-600">{plan.blurb}</p>
              <ul className="mt-8 space-y-3 text-slate-700">
                {plan.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#FF7A00]" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                className={`btn-pill mt-8 w-full justify-center ${plan.featured ? "bg-[#FF7A00] text-white" : "border border-slate-300 text-slate-900"}`}
              >
                {plan.featured ? "Start Pilot" : "Contact Sales"}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 text-center text-sm text-slate-600">
          Every plan includes clear milestones, easy documentation, and a 100% refundable deposit until your hardware ships. No hidden fees.
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
