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
    <section id="backed-by" className="bg-[#0A1628] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Backed by experts</p>
          <h2 className="mt-3 text-3xl font-semibold">Developed with guidance from education leaders</h2>
          <p className="mt-2 text-white/70">Real partnerships in progress; more announced after pilot NDA lifts.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "IIT Madras", role: "Technical advisors" },
            { name: "Raspberry Pi Foundation", role: "Hardware platform" },
            { name: "AWS EdStart", role: "Cloud infrastructure" },
            { name: "NCERT Alignment", role: "Curriculum guidance" },
          ].map((partner) => (
            <div key={partner.name} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xl font-semibold">{partner.name}</p>
              <p className="text-sm text-white/60">{partner.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-orange-500/20 px-6 py-7 text-center">
          <p className="text-lg font-semibold text-orange-200">🔬 Pilot program applications open (Jan–Mar 2026)</p>
          <p className="max-w-2xl text-sm text-white/80">
            We are selecting 10 schools for the first real-world deployment cycle. Get priority onboarding, dedicated success team, and lifetime pricing protection.
          </p>
          <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0A1628]">Apply for pilot program</button>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
