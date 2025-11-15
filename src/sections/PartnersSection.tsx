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
    <section id="partners" className="section-padding bg-white">
      <div className="section-shell">
        <div className="rounded-[40px] border border-slate-200 bg-slate-50 p-8">
          <p className="section-eyebrow">Partners</p>
          <h2 className="section-heading mt-4 text-slate-900">Working with institutions across India</h2>
          <p className="section-subtitle mt-3">Use logos or simple pills for a clean, premium grid.</p>
          <div className="mt-8 grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <div key={partner} className="rounded-2xl border border-slate-200 bg-white py-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Partner</p>
                <p className="mt-2 text-base font-semibold text-slate-900">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
