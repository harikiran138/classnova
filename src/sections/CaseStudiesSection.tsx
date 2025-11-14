const stories = [
  {
    org: "Reliance Foundation Schools",
    before: "Each smart board required dedicated IT. Teachers avoided using them after the first month.",
    after: "ClassNova kits rotated across 40 classrooms with 94% daily usage.",
  },
  {
    org: "Teach For India",
    before: "Volunteers carried laptops, dongles, cables every day.",
    after: "ClassNova backpack stays in each center with always-on playlists.",
  },
];

export const CaseStudiesSection = () => {
  return (
    <section className="bg-[#050C1F] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Success stories</p>
          <h2 className="mt-4 text-3xl font-semibold">Proof from metros to rural clusters</h2>
          <p className="mt-4 text-white/70">Detailed PDF case studies drop mid-October.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {stories.map((story) => (
            <div key={story.org} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="text-sm uppercase tracking-wide text-white/60">{story.org}</div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#160B02] p-4">
                  <p className="text-xs uppercase tracking-wide text-[#FF9A3C]">Before</p>
                  <p className="mt-2 text-white/80">{story.before}</p>
                </div>
                <div className="rounded-2xl bg-[#071334] p-4">
                  <p className="text-xs uppercase tracking-wide text-emerald-300">After</p>
                  <p className="mt-2 text-white/80">{story.after}</p>
                </div>
              </div>
              <button className="mt-6 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-wide text-white">
                Download 2-page brief
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
