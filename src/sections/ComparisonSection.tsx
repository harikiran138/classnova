const rows = [
  {
    feature: "Capex per classroom",
    board: "₹2-3 lakh",
    classnova: "₹25k pilot kit*",
  },
  {
    feature: "Installation time",
    board: "1-2 days",
    classnova: "Measured 6 min",
  },
  {
    feature: "Works offline",
    board: "No",
    classnova: "Prototype: Yes",
  },
  {
    feature: "Teacher adoption",
    board: "30%",
    classnova: "TBD (target 80%)",
  },
];

export const ComparisonSection = () => {
  return (
    <section id="comparison" className="section-padding bg-[#030814] text-white">
      <div className="section-shell">
        <div className="text-center space-y-4">
          <p className="section-eyebrow">Comparison</p>
          <h2 className="section-heading">How we stack up today (and what’s still unproven)</h2>
          <p className="section-subtitle">Numbers marked with * will change after live pilots. We publish updates in the transparency dashboard.</p>
        </div>
        <div className="mt-10 overflow-hidden rounded-[32px] border border-white/10">
          <table className="w-full text-left text-white/80">
            <thead className="bg-white/5 text-sm uppercase tracking-wide text-white/60">
              <tr>
                <th className="px-6 py-4">Metric</th>
                <th className="px-6 py-4">Smart board</th>
                <th className="px-6 py-4">ClassNova</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-t border-white/5">
                  <td className="px-6 py-4 font-semibold text-white">{row.feature}</td>
                  <td className="px-6 py-4">{row.board}</td>
                  <td className="px-6 py-4 font-semibold text-[#FF9A3C]">{row.classnova}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-xs text-white/50">*Pilot pricing covers manufacturing + onsite support. Calculator will launch once BOM is finalized.</p>
      </div>
    </section>
  );
};

export default ComparisonSection;
