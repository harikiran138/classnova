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
    <section id="impact" className="bg-[#050C1F] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Impact scenarios</p>
          <h2 className="mt-4 text-3xl font-semibold">What we still need to validate with real pilots</h2>
          <p className="mt-4 text-white/70">Instead of recycling old success stories, we’re publishing the hypotheses we will test with partner schools.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {scenarios.map((scenario) => (
            <div key={scenario.org} className="rounded-3xl border border-white/10 bg-white/5 p-8">
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
