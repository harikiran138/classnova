const partners = [
  "Central Square Foundation",
  "Dell Giving",
  "ICICI Foundation",
  "Mahindra Rise",
  "Azim Premji Foundation",
  "State ICT Cells",
];

export const PartnersSection = () => {
  return (
    <section className="bg-[#050C1F] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="rounded-[40px] border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Partners</p>
          <h2 className="mt-4 text-3xl font-semibold">Co-created with policy, CSR, and EdTech leaders</h2>
          <div className="mt-8 grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <div key={partner} className="rounded-3xl border border-white/10 bg-[#030814] px-4 py-6 text-sm uppercase tracking-wide text-white/70">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
