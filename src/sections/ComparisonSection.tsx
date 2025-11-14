const rows = [
  {
    feature: "Capex per classroom",
    board: "₹2-3 lakh",
    classnova: "₹12,000",
  },
  {
    feature: "Installation time",
    board: "1-2 days",
    classnova: "5 minutes",
  },
  {
    feature: "Works offline",
    board: "No",
    classnova: "Yes",
  },
  {
    feature: "Teacher adoption",
    board: "30%",
    classnova: "90%+",
  },
];

export const ComparisonSection = () => {
  return (
    <section className="bg-[#030814] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Comparison</p>
          <h2 className="mt-4 text-3xl font-semibold">Smart board vs ClassNova</h2>
          <p className="mt-4 text-white/70">Interactive calculator arriving soon.</p>
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
        <p className="mt-4 text-center text-xs text-white/50">TODO: Add slider to calculate savings across classroom counts.</p>
      </div>
    </section>
  );
};

export default ComparisonSection;
