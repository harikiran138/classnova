const resources = [
  {
    title: "Prototype briefing deck",
    description: "Explains hardware rev-02 status, risks, and mitigation steps.",
  },
  {
    title: "Pilot governance checklist",
    description: "What procurement, legal, and IT should review before signing MoUs.",
  },
  {
    title: "Teacher feedback scripts",
    description: "Interview guide so districts can collect their own usability data.",
  },
];

export const ResourcesSection = () => {
  return (
    <section id="resources" className="section-padding bg-[#050C1F] text-white">
      <div className="section-shell">
        <div className="text-center space-y-4">
          <p className="section-eyebrow">Resources</p>
          <h2 className="section-heading">Everything you need before saying “yes”</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {resources.map((resource) => (
            <div key={resource.title} className="glass-panel p-6 text-left">
              <p className="text-lg font-semibold text-white">{resource.title}</p>
              <p className="mt-3 text-white/70">{resource.description}</p>
              <button className="btn-ghost-pill mt-6 border-white/30 text-xs uppercase tracking-wide text-white/80">
                Download brief
              </button>
            </div>
          ))}
        </div>
        <div className="mt-10 glass-panel p-6 text-center">
          <p className="text-sm text-white/70">Subscribe to raw build notes + pilot debriefs</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              className="h-12 rounded-full border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-white/40"
              placeholder="Email or WhatsApp number"
            />
            <button className="btn-pill h-12 bg-white px-6 text-sm font-semibold text-[#050C1F]">Send updates</button>
          </div>
          <p className="mt-2 text-xs text-white/50">TODO: Wire up to marketing automation</p>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
