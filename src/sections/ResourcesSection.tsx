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
    <section id="resources" className="bg-[#050C1F] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Resources</p>
          <h2 className="mt-4 text-3xl font-semibold">Everything you need before saying “yes”</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {resources.map((resource) => (
            <div key={resource.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
              <p className="text-lg font-semibold text-white">{resource.title}</p>
              <p className="mt-3 text-white/70">{resource.description}</p>
              <button className="mt-6 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-wide text-white/80">
                Download brief
              </button>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-sm text-white/70">Subscribe to raw build notes + pilot debriefs</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              className="h-12 rounded-full border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-white/40"
              placeholder="Email or WhatsApp number"
            />
            <button className="h-12 rounded-full bg-white px-6 text-sm font-semibold text-[#050C1F]">Send updates</button>
          </div>
          <p className="mt-2 text-xs text-white/50">TODO: Wire up to marketing automation</p>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
