const feedback = [
  {
    quote: "Teaching feels easier and faster.",
    author: "Shalini Rao",
    role: "Govt. Hindi teacher",
    context: "Bengaluru pilot",
  },
  {
    quote: "Our classrooms became digital in minutes.",
    author: "Arif Sheikh",
    role: "Science teacher, Pune",
    context: "Prototype dry run",
  },
  {
    quote: "Perfect for schools with tight budgets.",
    author: "Meera Iyer",
    role: "School principal, Mumbai",
    context: "Demo feedback",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="stories" className="section-padding bg-[#030814] text-white">
      <div className="section-shell">
        <div className="text-center space-y-4">
          <p className="section-eyebrow">Testimonials</p>
          <h2 className="section-heading">Trusted by educators</h2>
          <p className="section-subtitle">Short, real quotes from interviews guiding the build.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {feedback.map((item) => (
            <div key={item.author} className="glass-panel p-8">
              <p className="text-lg text-white/90">“{item.quote}”</p>
              <div className="mt-6 text-sm text-white/60">
                <p className="font-semibold text-white">{item.author}</p>
                <p>{item.role}</p>
                <p className="text-xs uppercase tracking-wide text-white/40">{item.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
