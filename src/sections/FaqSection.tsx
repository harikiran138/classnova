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
    <section id="faq" className="section-padding bg-[#030814] text-white">
      <div className="section-shell">
        <div className="text-center space-y-4">
          <p className="section-eyebrow">FAQ</p>
          <h2 className="section-heading">Questions district teams ask us</h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faq.map((item) => (
            <div key={item.question} className="glass-panel p-6">
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
