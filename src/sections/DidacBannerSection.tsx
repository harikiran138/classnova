export const DidacBannerSection = () => {
  return (
    <section id="didac" className="section-padding bg-[#050C1F] text-white">
      <div className="section-shell">
        <div className="rounded-[40px] border border-[#FF7A00]/40 bg-gradient-to-r from-[#120A02] to-[#050C1F] p-10 text-center shadow-glow">
          <p className="section-eyebrow text-[#FFB36D]">ClassNova @ DIDAC India</p>
          <h2 className="mt-4 text-3xl font-semibold">See the device live, talk to the team</h2>
          <p className="mt-4 text-white/80">
            Experience the full kit, explore the software, and plan your pilot in one session.
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
            <button className="btn-pill bg-white text-[#050C1F]">Reserve a meeting slot</button>
            <button className="btn-ghost-pill border-white/30 text-white">Download brochure</button>
          </div>
          <p className="mt-3 text-xs text-white/50">Slots limited. Each walkthrough is a 20-minute hands-on experience.</p>
        </div>
      </div>
    </section>
  );
};

export default DidacBannerSection;
