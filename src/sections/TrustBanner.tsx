import { School } from "lucide-react";

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
    <section id="backed-by" className="section-padding bg-slate-50 border-y border-slate-100">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center space-y-4">

          <h2 className="section-heading text-[#0F172A] uppercase">Developed with guidance from education leaders</h2>
          <p className="section-subtitle text-[#64748B]">Real partnerships in progress; more announced after pilot NDA lifts.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "IIT Madras", role: "Technical advisors" },
            { name: "Raspberry Pi Foundation", role: "Hardware platform" },
            { name: "AWS EdStart", role: "Cloud infrastructure" },
            { name: "NCERT Alignment", role: "Curriculum guidance" },
          ].map((partner) => (
            <div key={partner.name} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-blue-200">
              <p className="text-xl font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">{partner.name}</p>
              <p className="text-sm font-medium text-[#64748B] uppercase tracking-wide mt-1">{partner.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-[32px] border border-blue-100 bg-blue-50 px-6 py-8 text-center shadow-sm">
          <p className="text-lg font-bold text-[#2563EB] flex items-center gap-2">
            <School className="w-6 h-6" />
            PARTNER SCHOOLS PROGRAM (ADMISSIONS OPEN)
          </p>
          <p className="max-w-2xl text-sm text-[#475569] font-medium">
            We are selecting 10 schools for the first deployment cycle. Get priority onboarding, dedicated success team, and lifetime pricing protection.
          </p>
          <button className="btn-primary-pill bg-[#FF7A00] text-white hover:bg-[#E66E00] shadow-md hover:shadow-lg transition-all px-8 py-3 rounded-full font-bold uppercase text-sm tracking-wide">
            Apply for partner program
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
