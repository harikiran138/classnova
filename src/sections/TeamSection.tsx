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
    <section id="team" className="section-padding bg-[#050C1F] text-white">
      <div className="section-shell">
        <div className="text-center space-y-4">
          <p className="section-eyebrow">Team</p>
          <h2 className="section-heading">4 builders shipping the prototype + advisors keeping us honest</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {team.map((member) => (
            <div key={member.name} className="glass-panel p-6">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm uppercase tracking-wide text-white/60">{member.role}</p>
              <p className="mt-3 text-white/70">{member.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 glass-panel p-6">
          <p className="section-eyebrow text-white/60">Advisors</p>
          <div className="mt-4 flex flex-wrap gap-4">
            {advisors.map((advisor) => (
              <span key={advisor.name} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/70">
                {advisor.name} · {advisor.focus}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/50">Full-time hires open once pilot metrics are public.</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
