const team = [
  {
    name: "Ch. Hari Kiran",
    role: "Founder",
    note: "Embedded systems, hardware prototyping, IoT architecture, device-level optimization.",
  },
  {
    name: "Y. Navyasanthi Prasad",
    role: "Co-Founder",
    note: "Machine learning pipelines, AI inference models, operating system engineering, UX automation.",
  },
  {
    name: "P. Laxmi Ram Charan",
    role: "Director",
    note: "Go-to-market execution, institutional partnerships, revenue strategy, commercialization frameworks.",
  },
];

const advisorFocusAreas = [
  "Research collaborations",
  "CSR & Govt. partnerships",
  "Large-scale distribution",
  "Global interoperability",
];

export const TeamSection = () => {
  return (
    <section id="team" className="pt-0 pb-20 bg-white text-slate-900">
      <div className="section-shell">
        <div className="text-center space-y-4">
          <h2 className="section-heading text-slate-900 !text-4xl">Leadership</h2>
          <p className="text-xl font-bold text-slate-700">Built by Engineers & Educators</p>
          <p className="section-subtitle text-slate-600 max-w-2xl mx-auto">
            The leadership integrates hardware engineering, artificial intelligence, and large-scale EdTech deployment expertise.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
              <div className="h-12 w-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                {member.name.split(" ").map(n => n[0]).join("").substring(0, 2)}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
              <p className="text-sm uppercase tracking-wide text-orange-500 font-bold mt-1">{member.role}</p>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">{member.note}</p>
            </div>
          ))}
        </div>

        {/* Advisors Section */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10 text-center">
          <h3 className="section-heading text-slate-900 !text-4xl mb-4">Advisors</h3>
          <p className="text-xl font-bold text-slate-700 mb-4">Strengthening Global Scalability</p>
          <p className="text-slate-600 max-w-3xl mx-auto mb-8">
            To strengthen global scalability and academic relevance, we are currently onboarding advisors specializing in EdTech policy, artificial intelligence, and hardware system design.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {advisorFocusAreas.map((area) => (
              <span key={area} className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
