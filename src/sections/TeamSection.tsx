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
    <section id="team" className="bg-[#050C1F] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Team</p>
          <h2 className="mt-4 text-3xl font-semibold">4 builders shipping the prototype + advisors keeping us honest</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {team.map((member) => (
            <div key={member.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm uppercase tracking-wide text-white/60">{member.role}</p>
              <p className="mt-3 text-white/70">{member.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Advisors</p>
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
