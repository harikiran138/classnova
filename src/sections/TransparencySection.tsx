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
    <section id="transparency" className="bg-slate-100 py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow text-slate-500">Transparency</p>
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-slate-900">
            Live dashboard — same numbers we share with pilot partners
          </h2>
          <p className="mt-4 text-base text-slate-600">Updated manually every Friday at 6pm IST.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-4xl font-semibold text-slate-900">{metric.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.4em] text-slate-500">{metric.label}</p>
              <p className="mt-1 text-sm text-slate-500">{metric.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {risks.map((risk) => (
            <div key={risk.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Risk</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">{risk.title}</h3>
              <p className="mt-3 text-base text-slate-600">{risk.mitigation}</p>
            </div>
          ))}
          <div className="rounded-[32px] border border-dashed border-slate-300 bg-white p-8 text-sm text-slate-600">
            <p className="text-sm font-semibold text-slate-900">Want deeper detail?</p>
            <p className="mt-2 text-base">We can share raw pilot dashboards + bill of materials on NDA.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
