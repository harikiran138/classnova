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
    <section id="backed-by" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <p className="section-eyebrow text-blue-400">Backed by experts</p>
          <h2 className="section-heading text-white">Developed with guidance from education leaders</h2>
          <p className="section-subtitle text-slate-400">Real partnerships in progress; more announced after pilot NDA lifts.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "IIT Madras", role: "Technical advisors" },
            { name: "Raspberry Pi Foundation", role: "Hardware platform" },
            { name: "AWS EdStart", role: "Cloud infrastructure" },
            { name: "NCERT Alignment", role: "Curriculum guidance" },
          ].map((partner) => (
            <div key={partner.name} className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:border-blue-500/30">
              <p className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">{partner.name}</p>
              <p className="text-sm text-slate-400">{partner.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-[32px] border border-blue-500/30 bg-blue-500/10 px-6 py-7 text-center shadow-[0_0_40px_rgba(59,130,246,0.15)] backdrop-blur-md">
          <p className="text-lg font-semibold text-blue-200">🔬 Pilot program applications open (Jan–Mar 2026)</p>
          <p className="max-w-2xl text-sm text-blue-200/80">
            We are selecting 10 schools for the first real-world deployment cycle. Get priority onboarding, dedicated success team, and lifetime pricing protection.
          </p>
          <button className="btn-primary-pill hover:-translate-y-0.5 shadow-glow">Apply for pilot program</button>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
