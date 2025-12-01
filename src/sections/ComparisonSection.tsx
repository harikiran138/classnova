const rows = [
  {
    feature: "Capex per classroom",
    board: "₹2-3 lakh",
    classnova: "₹12,000",
  },
  {
    feature: "Installation time",
    board: "1-2 days",
    classnova: "10 min",
  },
  {
    feature: "Works offline",
    board: "No",
    classnova: "Yes (Native)",
  },
  {
    feature: "Teacher adoption",
    board: "Low (Complex)",
    classnova: "High (Simple UI)",
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
                <th className="px-6 py-4">New Smart Board</th>
                <th className="px-6 py-4">ClassNova Upgrade</th>
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
        <p className="mt-4 text-center text-xs text-white/50">*One-time hardware cost. Optional cloud subscription available.</p>
      </div>
    </section>
  );
};

export default ComparisonSection;
