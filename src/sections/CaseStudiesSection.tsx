const scenarios = [
  {
    org: "Rural Karnataka govt. cluster",
    hypothesis: "Before: 8 classrooms shared 1 outdated smart board, causing delays and missed lessons. After: 2 portable kits rotate easily, no extra staff needed, every class gets interactive lessons on time.",
    proofNeeded: "Measure setup time and lesson completion rate before and after kit deployment over 4 weeks.",
    status: "Scheduled Jan 2026",
  },
  {
    org: "CSR-funded city schools",
    hypothesis: "Before: ICT rooms sat unused due to broken smart boards and high maintenance. After: Portable kits replace old boards, rooms are used daily, and maintenance costs drop.",
    proofNeeded: "Track energy and maintenance savings, and room usage, before and after kit installation with facility teams.",
    status: "Scoping",
  },
];

export const CaseStudiesSection = () => {
  return (
    <section id="impact" className="section-padding bg-white">
      <div className="section-shell">
        <div className="text-center space-y-4">
          <p className="section-eyebrow">Impact scenarios</p>
          <h2 className="section-heading text-slate-900">What we’re validating with pilots</h2>
          <p className="section-subtitle">We publish real hypotheses up front so partners know exactly what’s being measured.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {scenarios.map((scenario) => (
            <div key={scenario.org} className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex items-center justify-between text-sm uppercase tracking-wide text-slate-500">
                <span>{scenario.org}</span>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">{scenario.status}</span>
              </div>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-[#FF7A00]">Hypothesis</p>
                  <p className="mt-2 text-slate-700">{scenario.hypothesis}</p>
                </div>
                <div className="rounded-2xl bg-slate-900 p-4 text-white">
                  <p className="text-xs uppercase tracking-wide text-emerald-200">What we need to measure</p>
                  <p className="mt-2 text-white/90">{scenario.proofNeeded}</p>
                </div>
              </div>
              <button className="mt-6 btn-pill border border-slate-300 bg-white text-slate-900">
                Get Updates
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
