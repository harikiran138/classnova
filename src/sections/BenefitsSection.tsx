const benefits = [
  {
    title: "7 kg carry kit",
    detail: "Teachers tested the backpack during 22 dry runs — no trolley or cabling crew needed.",
    status: "Validated in lab",
  },
  {
    title: "Language-first UI",
    detail: "Prototype uses WhatsApp-like patterns so bilingual teachers could navigate in under 4 minutes.",
    status: "In usability testing",
  },
  {
    title: "Offline lesson vault",
    detail: "Core OS stores 90 lessons locally. Sync service is still being hardened for patchy LTE.",
    status: "In development",
  },
  {
    title: "Automated reporting",
    detail: "Pilot dashboard exports CSV logs; integration with DIKSHA is planned for Q2 FY26.",
    status: "Planned",
  },
];

const stats = [
  { value: "3", label: "Pilot classrooms ready", meta: "Bengaluru + Pune" },
  { value: "11", label: "Teachers onboarded", meta: "Through Jan 2025" },
  { value: "2", label: "Hardware revisions", meta: "Awaiting BIS cert" },
  { value: "6", label: "Content partners", meta: "MoUs drafted" },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="bg-[#050C1F] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">Why early adopters lean in</p>
            <h2 className="mt-4 text-3xl font-semibold">Transparent view of value before mass rollout</h2>
            <p className="mt-4 text-white/70">
              Every claim below is tied to current prototype evidence. If we don’t have the data yet, we say so and show the plan to get it.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-white/60">{benefit.status}</span>
                  </div>
                  <p className="mt-3 text-white/70">{benefit.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl bg-white/5 p-6 text-center">
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm text-white/70">{stat.label}</p>
                    <p className="text-xs text-white/50">{stat.meta}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-white/60">
                Data updated 15 Nov 2025. We’ll publish refreshed numbers after each pilot sprint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
