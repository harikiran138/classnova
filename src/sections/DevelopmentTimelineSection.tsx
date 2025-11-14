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
    <section id="timeline" className="bg-[#030814] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Roadmap</p>
          <h2 className="mt-4 text-3xl font-semibold">Exactly where we are in the build</h2>
          <p className="mt-4 text-white/70">If a milestone slips, we update this section first. Investors and pilot partners see the same view.</p>
        </div>
        <div className="mt-12 space-y-6">
          {milestones.map((milestone) => (
            <div key={milestone.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/50">{milestone.date}</p>
                  <h3 className="text-2xl font-semibold">{milestone.title}</h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-white/60">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      milestone.status === "Complete"
                        ? "bg-emerald-400"
                        : milestone.status === "In progress"
                        ? "bg-amber-400"
                        : "bg-white/40"
                    }`}
                  />
                  {milestone.status}
                </span>
              </div>
              <p className="mt-3 text-white/70">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentTimelineSection;
