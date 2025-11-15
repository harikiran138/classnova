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
    <section id="backed-by" className="section-padding bg-slate-50">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <p className="section-eyebrow">Backed by experts</p>
          <h2 className="section-heading text-slate-900">Developed with guidance from education leaders</h2>
          <p className="section-subtitle">Real partnerships in progress; more announced after pilot NDA lifts.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "IIT Madras", role: "Technical advisors" },
            { name: "Raspberry Pi Foundation", role: "Hardware platform" },
            { name: "AWS EdStart", role: "Cloud infrastructure" },
            { name: "NCERT Alignment", role: "Curriculum guidance" },
          ].map((partner) => (
            <div key={partner.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xl font-semibold text-slate-900">{partner.name}</p>
              <p className="text-sm text-slate-500">{partner.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-[32px] border border-orange-200 bg-orange-50 px-6 py-7 text-center shadow-[0_30px_80px_rgba(249,115,22,0.25)]">
          <p className="text-lg font-semibold text-[#B94700]">🔬 Pilot program applications open (Jan–Mar 2026)</p>
          <p className="max-w-2xl text-sm text-[#713000]">
            We are selecting 10 schools for the first real-world deployment cycle. Get priority onboarding, dedicated success team, and lifetime pricing protection.
          </p>
          <button className="btn-primary-pill hover:-translate-y-0.5">Apply for pilot program</button>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
