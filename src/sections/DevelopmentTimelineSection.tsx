const milestones = [
  {
    title: "Phase 1: Hardware & OS Stabilization",
    date: "Foundation",
    status: "Complete",
    description: "Designed the ClassNova hardware stack using Raspberry Pi architecture; achieved optimized power consumption, multi-interface connectivity, and low-latency projection performance.",
  },
  {
    title: "Phase 2: Pilot Deployment & UX Validation",
    date: "Validation",
    status: "Complete",
    description: "Conducted classroom-grade usability testing; integrated teacher feedback loops; optimized UI/UX and lesson-delivery efficiency.",
  },
  {
    title: "Phase 3: Peripheral & Security Extensions",
    date: "Expansion",
    status: "In Progress",
    description: "Integrated stylus and keyboard modules; deployed enhanced OS security layers; ensured compatibility with learning management systems and institutional authentication.",
  },
  {
    title: "Phase 4: AI-Driven Education & Commercial Rollout",
    date: "Scale",
    status: "Planned",
    description: "Released AI-powered tutor, mobile controller app, analytics dashboard, and multilingual content suite; scaled for commercial deployment across low-resource schools.",
  },
];

export const DevelopmentTimelineSection = () => {
  return (
    <section id="timeline" className="section-padding bg-slate-50 text-slate-900 border-y border-slate-200">
      <div className="section-shell">
        <div className="text-center space-y-4">
          <h2 className="section-heading text-orange-500 !text-4xl mb-2">Roadmap</h2>
          <p className="text-2xl font-bold text-slate-900">Product Development Timeline</p>
          <p className="section-subtitle text-slate-600">From hardware stabilization to AI-driven commercial scale.</p>
        </div>
        <div className="mt-12 space-y-6">
          {milestones.map((milestone) => (
            <div key={milestone.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-200 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">{milestone.date}</p>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900">{milestone.title}</h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs uppercase tracking-wide text-slate-600">
                  <span
                    className={`h-2 w-2 rounded-full ${milestone.status === "Complete"
                      ? "bg-emerald-500"
                      : milestone.status === "In Progress"
                        ? "bg-amber-500"
                        : "bg-slate-300"
                      }`}
                  />
                  {milestone.status}
                </span>
              </div>
              <p className="mt-3 text-slate-600 leading-relaxed">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentTimelineSection;
