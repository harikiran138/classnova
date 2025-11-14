const scenarios = [
  {
    org: "Rural Karnataka govt. cluster",
    hypothesis: "Rotate 2 kits across 8 classrooms without additional staff.",
    proofNeeded: "Measure setup time + lesson completion rate over 4 weeks.",
    status: "Scheduled Jan 2026",
  },
  {
    org: "CSR-funded city schools",
    hypothesis: "Swap outdated smart boards with portable kits to unlock unused ICT rooms.",
    proofNeeded: "Track energy + maintenance savings with facility teams.",
    status: "Scoping",
  },
];

export const CaseStudiesSection = () => {
  return (
    <section id="impact" className="section-padding bg-[#050C1F] text-white">
      <div className="section-shell">
        <div className="text-center space-y-4">
          <p className="section-eyebrow">Impact scenarios</p>
          <h2 className="section-heading">What we still need to validate with real pilots</h2>
          <p className="section-subtitle">Instead of recycling old success stories, we’re publishing the hypotheses we will test with partner schools.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {scenarios.map((scenario) => (
            <div key={scenario.org} className="glass-panel p-8">
              <div className="flex items-center justify-between text-sm uppercase tracking-wide text-white/60">
                <span>{scenario.org}</span>
                <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/60">{scenario.status}</span>
              </div>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-[#160B02] p-4">
                  <p className="text-xs uppercase tracking-wide text-[#FF9A3C]">Hypothesis</p>
                  <p className="mt-2 text-white/80">{scenario.hypothesis}</p>
                </div>
                <div className="rounded-2xl bg-[#071334] p-4">
                  <p className="text-xs uppercase tracking-wide text-emerald-300">What we need to measure</p>
                  <p className="mt-2 text-white/80">{scenario.proofNeeded}</p>
                </div>
              </div>
              <button className="mt-6 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-wide text-white">
                Follow progress email
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
