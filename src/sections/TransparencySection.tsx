const metrics = [
  { label: "Pilot classrooms", value: "3", note: "2 Bengaluru, 1 Pune" },
  { label: "Hardware readiness", value: "82%", note: "Rev-02, pending BIS" },
  { label: "Software modules", value: "6 / 9", note: "Whiteboard + media shipped" },
  { label: "Known risks", value: "4", note: "Battery supply, UI localization, etc." },
];

const risks = [
  {
    title: "Battery supply chain",
    mitigation: "Dual vendors shortlisted; safety testing in Dec.",
  },
  {
    title: "Content licensing",
    mitigation: "Interim OER playlists + partner MoUs in review.",
  },
];

export const TransparencySection = () => {
  return (
    <section id="transparency" className="bg-[#01040B] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Transparency</p>
          <h2 className="mt-4 text-3xl font-semibold">Live dashboard — same numbers we share with pilot partners</h2>
          <p className="mt-4 text-white/70">Updated manually every Friday at 6pm IST.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-4xl font-semibold text-white">{metric.value}</p>
              <p className="mt-2 text-sm uppercase tracking-wide text-white/60">{metric.label}</p>
              <p className="mt-1 text-xs text-white/50">{metric.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {risks.map((risk) => (
            <div key={risk.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-wide text-white/50">Risk</p>
              <h3 className="mt-2 text-xl font-semibold">{risk.title}</h3>
              <p className="mt-3 text-white/70">{risk.mitigation}</p>
            </div>
          ))}
          <div className="rounded-3xl border border-dashed border-white/15 bg-transparent p-6 text-sm text-white/60">
            <p className="text-white/80">Want deeper detail?</p>
            <p className="mt-2">We can share raw pilot dashboards + bill of materials on NDA.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
