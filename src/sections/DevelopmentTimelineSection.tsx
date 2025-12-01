const milestones = [
  {
    title: "Rev-02 hardware assembled",
    date: "Aug 2025",
    status: "Complete",
    description: "Battery + optics locked. Awaiting BIS paperwork uploads.",
  },
  {
    title: "Software beta in classrooms",
    date: "Nov 2025",
    status: "In progress",
    description: "Whiteboard + media player working on prototype units. Analytics module under build.",
  },
  {
    title: "First live pilot",
    date: "Jan 2026",
    status: "Scheduled",
    description: "2 schools (Bengaluru + Pune) testing rotation model with real lessons.",
  },
  {
    title: "Scaled district charter",
    date: "Jun 2026",
    status: "Planned",
    description: "Launch procurement toolkit + fleet management once pilot metrics hit targets.",
  },
];

export const DevelopmentTimelineSection = () => {
  return (
    <section id="timeline" className="section-padding bg-slate-50 text-slate-900 border-y border-slate-200">
      <div className="section-shell">
        <div className="text-center space-y-4">
          <p className="section-eyebrow text-orange-500">Roadmap</p>
          <h2 className="section-heading text-slate-900">Exactly where we are in the build</h2>
          <p className="section-subtitle text-slate-600">If a milestone slips, we update this section first. Investors and pilot partners see the same view.</p>
        </div>
        <div className="mt-12 space-y-6">
          {milestones.map((milestone) => (
            <div key={milestone.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-200 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">{milestone.date}</p>
                  <h3 className="text-2xl font-semibold text-slate-900">{milestone.title}</h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs uppercase tracking-wide text-slate-600">
                  <span
                    className={`h-2 w-2 rounded-full ${milestone.status === "Complete"
                        ? "bg-emerald-500"
                        : milestone.status === "In progress"
                          ? "bg-amber-500"
                          : "bg-slate-300"
                      }`}
                  />
                  {milestone.status}
                </span>
              </div>
              <p className="mt-3 text-slate-600">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentTimelineSection;
