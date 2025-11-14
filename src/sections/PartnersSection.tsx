const partners = [
  { name: "Central Square Foundation", status: "Advisory" },
  { name: "Dell Giving", status: "MoU" },
  { name: "ICICI Foundation", status: "Exploring" },
  { name: "Mahindra Rise", status: "Hardware" },
  { name: "Azim Premji Foundation", status: "Content" },
  { name: "State ICT Cells", status: "Pilot" },
];

export const PartnersSection = () => {
  return (
    <section id="partners" className="bg-[#050C1F] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="rounded-[40px] border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Partners</p>
          <h2 className="mt-4 text-3xl font-semibold">Who’s helping us validate ClassNova</h2>
          <div className="mt-8 grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <div key={partner.name} className="rounded-3xl border border-white/10 bg-[#030814] px-4 py-6 text-sm uppercase tracking-wide text-white/70">
                <div>{partner.name}</div>
                <span className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-[10px] text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                  {partner.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
