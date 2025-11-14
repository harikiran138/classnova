export const DidacBannerSection = () => {
  return (
    <section id="didac" className="section-padding bg-[#050C1F] text-white">
      <div className="section-shell">
        <div className="rounded-[40px] border border-[#FF7A00]/40 bg-gradient-to-r from-[#120A02] to-[#050C1F] p-10 text-center shadow-glow">
          <p className="section-eyebrow text-[#FFB36D]">Prototype lab @ DIDAC</p>
          <h2 className="mt-4 text-3xl font-semibold">Touch the working kit, meet the build team</h2>
          <p className="mt-4 text-white/80">
            We’re showing the exact units that go into pilot classrooms. No hidden firmware or staged videos — just raw builds and honest timelines.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Days to go", value: "42" },
              { label: "Prototype slots", value: "48" },
              { label: "People per slot", value: "4" },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl bg-white/10 px-6 py-4">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="text-sm uppercase tracking-wide text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button className="btn-pill bg-white text-[#050C1F]">
              Reserve prototype time
            </button>
            <button className="btn-ghost-pill border-white/30 text-white">
              Download briefing notes
            </button>
          </div>
          <p className="mt-3 text-xs text-white/50">Countdown + slot availability auto-syncs from Airtable (TODO hook-up).</p>
        </div>
      </div>
    </section>
  );
};

export default DidacBannerSection;
