const team = [
  {
    name: "Nikita Sharma",
    role: "Hardware + Supply",
    note: "Ex-Tesla manufacturing engineer working on ruggedization.",
  },
  {
    name: "Harsh Vyas",
    role: "Product + Ops",
    note: "Former Teach For India fellow. Owns pilot playbooks.",
  },
  {
    name: "Rhea Paul",
    role: "Software Lead",
    note: "Previously at Byju's. Leads teacher OS.",
  },
  {
    name: "Arjun Narayan",
    role: "Design + Research",
    note: "Coaches every usability interview and Figma handoff.",
  },
];

const advisors = [
  { name: "Dr. Kavita Rao", focus: "Curriculum" },
  { name: "Siddharth Roy", focus: "Govt. procurement" },
];

export const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-white text-slate-900">
      <div className="section-shell">
        <div className="text-center space-y-4">
          <p className="section-eyebrow text-blue-600">Team</p>
          <h2 className="section-heading text-slate-900">4 builders shipping the prototype + advisors keeping us honest</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {team.map((member) => (
            <div key={member.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
              <p className="text-sm uppercase tracking-wide text-slate-500">{member.role}</p>
              <p className="mt-3 text-slate-600">{member.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="section-eyebrow text-slate-500">Advisors</p>
          <div className="mt-4 flex flex-wrap gap-4">
            {advisors.map((advisor) => (
              <span key={advisor.name} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                {advisor.name} · {advisor.focus}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">Full-time hires open once pilot metrics are public.</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
