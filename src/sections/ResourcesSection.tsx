const resources = [
  {
    title: "Smart Classroom Readiness Checklist",
    description: "PDF guide for district procurement teams",
  },
  {
    title: "Teacher onboarding handbook",
    description: "Step-by-step runbook with multilingual scripts",
  },
  {
    title: "Impact measurement template",
    description: "Spreadsheet to capture adoption + learning indicators",
  },
];

export const ResourcesSection = () => {
  return (
    <section className="bg-[#050C1F] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Resources</p>
          <h2 className="mt-4 text-3xl font-semibold">Prep kits for DIDAC meetings</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {resources.map((resource) => (
            <div key={resource.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
              <p className="text-lg font-semibold text-white">{resource.title}</p>
              <p className="mt-3 text-white/70">{resource.description}</p>
              <button className="mt-6 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-wide text-white/80">
                Download PDF
              </button>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-sm text-white/70">Subscribe for deployment stories + product updates</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              className="h-12 rounded-full border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-white/40"
              placeholder="Email or WhatsApp number"
            />
            <button className="h-12 rounded-full bg-white px-6 text-sm font-semibold text-[#050C1F]">Notify me</button>
          </div>
          <p className="mt-2 text-xs text-white/50">TODO: Wire up to marketing automation</p>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
