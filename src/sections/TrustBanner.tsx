const brands = [
  "Kendriya Vidyalaya",
  "Delhi Public School",
  "Reliance Foundation",
  "Teach For India",
  "Aditya Birla Schools",
  "Municipal Corp",
];

export const TrustBanner = () => {
  return (
    <section id="backed-by" className="section-padding bg-[#0A1628] text-white">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <p className="section-eyebrow">Backed by experts</p>
          <h2 className="section-heading">Developed with guidance from education leaders</h2>
          <p className="section-subtitle">Real partnerships in progress; more announced after pilot NDA lifts.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "IIT Madras", role: "Technical advisors" },
            { name: "Raspberry Pi Foundation", role: "Hardware platform" },
            { name: "AWS EdStart", role: "Cloud infrastructure" },
            { name: "NCERT Alignment", role: "Curriculum guidance" },
          ].map((partner) => (
            <div key={partner.name} className="glass-panel p-5">
              <p className="text-xl font-semibold">{partner.name}</p>
              <p className="text-sm text-white/60">{partner.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-[32px] border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-orange-500/20 px-6 py-7 text-center shadow-glow">
          <p className="text-lg font-semibold text-orange-200">🔬 Pilot program applications open (Jan–Mar 2026)</p>
          <p className="max-w-2xl text-sm text-white/80">
            We are selecting 10 schools for the first real-world deployment cycle. Get priority onboarding, dedicated success team, and lifetime pricing protection.
          </p>
          <button className="btn-pill bg-white text-[#0A1628] hover:-translate-y-0.5">Apply for pilot program</button>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
