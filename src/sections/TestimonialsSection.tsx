const feedback = [
  {
    quote: "Before ClassNova, I struggled to keep students engaged. With the kit, lessons are interactive and my workload is lighter. My class is more focused than ever.",
    author: "Shalini Rao",
    role: "Govt. Hindi teacher",
    context: "Bengaluru pilot",
  },
  {
    quote: "We had no digital tools and felt left behind. After installing ClassNova, our classrooms went digital in minutes. Now, students participate more and I save time every day.",
    author: "Arif Sheikh",
    role: "Science teacher, Pune",
    context: "Prototype dry run",
  },
  {
    quote: "Budget constraints made upgrades impossible. ClassNova fit our needs perfectly—affordable, easy, and effective. Our teachers are happier and students are learning better.",
    author: "Meera Iyer",
    role: "School principal, Mumbai",
    context: "Demo feedback",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="stories" className="section-padding bg-slate-900 text-white">
      <div className="section-shell">
        <div className="text-center space-y-4">
          <p className="section-eyebrow">Testimonials</p>
          <h2 className="section-heading text-white">Trusted by educators</h2>
          <p className="section-subtitle text-white/70">Short quotes from teacher interviews guiding the build.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {feedback.map((item) => (
            <div key={item.author} className="surface-panel p-8">
              <p className="text-lg text-white">“{item.quote}”</p>
              <div className="mt-6 text-sm text-white/70">
                <p className="font-semibold text-white">{item.author}</p>
                <p>{item.role}</p>
                <p className="text-xs uppercase tracking-wide text-white/50">{item.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
