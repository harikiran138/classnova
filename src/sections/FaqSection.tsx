const faq = [
  {
    question: "Is the hardware certified yet?",
    answer: "EMI/EMC tests are complete; BIS filing happens in January. Until then, pilots run under supervised exemptions.",
  },
  {
    question: "What data do you actually have?",
    answer: "Setup times, UI click paths, and offline resilience were measured in lab + teacher dry runs. Learning gains will be captured only after live pilots.",
  },
  {
    question: "How does support work before launch?",
    answer: "Founders + two engineers travel for every pilot. We publish post-mortems weekly so stakeholders see fixes in motion.",
  },
];

export const FaqSection = () => {
  return (
    <section id="faq" className="section-padding bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="section-shell">
        <div className="text-center space-y-4">
          <p className="section-eyebrow text-orange-500">FAQ</p>
          <h2 className="section-heading text-slate-900">Questions district teams ask us</h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faq.map((item) => (
            <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-200 transition-all">
              <div className="flex items-center justify-between text-left">
                <p className="text-lg font-semibold text-slate-900">{item.question}</p>
                <span className="text-2xl text-slate-400">+</span>
              </div>
              <p className="mt-3 text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
