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
    <section id="resources" className="section-padding bg-white text-slate-900">
      <div className="section-shell">
        <div className="text-center space-y-4">
          <p className="section-eyebrow text-blue-600">Resources</p>
          <h2 className="section-heading text-slate-900">Everything you need before saying “yes”</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {resources.map((resource) => (
            <div key={resource.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
              <p className="text-lg font-semibold text-slate-900">{resource.title}</p>
              <p className="mt-3 text-slate-600">{resource.description}</p>
              <button className="mt-6 rounded-full border border-slate-300 px-4 py-2 text-xs uppercase tracking-wide text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                Download brief
              </button>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="text-sm text-slate-600">Subscribe to raw build notes + pilot debriefs</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              className="h-12 rounded-full border border-slate-300 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
              placeholder="Email or WhatsApp number"
            />
            <button className="h-12 rounded-full bg-slate-900 px-6 text-sm font-semibold text-white hover:bg-slate-800 transition-colors">Send updates</button>
          </div>
          <p className="mt-2 text-xs text-slate-400">TODO: Wire up to marketing automation</p>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
