const faq = [
  {
    question: "Does it work without constant internet?",
    answer: "Yes. Sync once over Wi-Fi. All lessons, quizzes, and analytics queue offline.",
  },
  {
    question: "How do we train teachers?",
    answer: "2-hour session + WhatsApp hotline. Adoption kits available in 5 languages.",
  },
  {
    question: "Is maintenance included?",
    answer: "Onsite swaps + remote diagnostics + 3-year warranty standard.",
  },
];

export const FaqSection = () => {
  return (
    <section id="faq" className="bg-[#030814] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold">Questions district teams ask us</h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faq.map((item) => (
            <div key={item.question} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between text-left">
                <p className="text-lg font-semibold text-white">{item.question}</p>
                <span className="text-2xl text-white/50">+</span>
              </div>
              <p className="mt-3 text-white/70">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
