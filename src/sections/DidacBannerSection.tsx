export const DidacBannerSection = () => {
  return (
    <section id="didac" className="bg-[#050C1F] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="rounded-[40px] border border-[#FF7A00]/40 bg-gradient-to-r from-[#120A02] to-[#050C1F] p-10 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[#FFB36D]">DIDAC India 2025</p>
          <h2 className="mt-4 text-3xl font-semibold">Book a live ClassNova experience</h2>
          <p className="mt-4 text-white/80">
            Hall 7 · Booth E-24 · Live lesson simulations every hour. Experience the full kit + teacher workflow in 6 minutes.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Days to go", value: "42" },
              { label: "Demo slots", value: "96" },
              { label: "Seats", value: "6 per slot" },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl bg-white/10 px-6 py-4">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="text-sm uppercase tracking-wide text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
          <button className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#050C1F]">
            Reserve a slot
          </button>
          <p className="mt-3 text-xs text-white/50">TODO: Hook up countdown to actual event date</p>
        </div>
      </div>
    </section>
  );
};

export default DidacBannerSection;
