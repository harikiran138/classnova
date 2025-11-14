const challenges = [
  {
    title: "Smart board procurement",
    description: "₹2-3 lakh capex, 12-week delivery, needs specialized installation",
  },
  {
    title: "Teacher adoption",
    description: "Complex software, daily updates, training fatigue",
  },
  {
    title: "Maintenance",
    description: "Bulky hardware, fragile pens, no offline fallback",
  },
];

const solutions = [
  {
    title: "Plug-and-play hardware",
    description: "₹12,000 kit works with any projector or TV, installs under 10 minutes",
  },
  {
    title: "Teacher-first design",
    description: "Familiar interface, curated content packs, zero learning curve",
  },
  {
    title: "Offline-first software",
    description: "Sync once, teach forever. Works during outages with no loss",
  },
];

export const ProblemSolutionSection = () => {
  return (
    <section id="problem" className="bg-[#050C1F] py-24 text-white">
      <div className="container mx-auto grid gap-16 px-4 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF7A00]">The gap</p>
          <h2 className="mt-4 text-3xl font-semibold">Smart classrooms never scaled for India</h2>
          <p className="mt-4 text-lg text-white/70">
            Most solutions were built for metro budgets, assume perfect connectivity, and require specialist maintenance teams.
          </p>
          <div className="mt-10 space-y-6">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-wide text-white/60">Challenge</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">The ClassNova approach</p>
          <h2 className="mt-4 text-3xl font-semibold">Designed for Government + Affordable schools</h2>
          <p className="mt-4 text-lg text-white/70">
            Built with the realities of Indian classrooms: intermittent power, legacy projectors, busy teachers, and strict budgets.
          </p>
          <div className="mt-10 space-y-6">
            {solutions.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
                <p className="text-sm uppercase tracking-wide text-white/60">Solution</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
