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
    <section id="stories" className="section-padding bg-slate-50 border-t border-slate-100">
      <div className="section-shell">
        <div className="text-center space-y-4 mb-16">
          <p className="section-eyebrow text-[#2563EB]">TESTIMONIALS</p>
          <h2 className="section-heading text-[#0F172A] uppercase">Trusted by educators</h2>
          <p className="section-subtitle text-[#64748B]">Short quotes from teacher interviews guiding the build.</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {feedback.map((item) => (
            <div key={item.author} className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300">
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-blue-100 font-serif leading-none">“</span>
                <p className="relative text-lg text-[#334155] leading-relaxed italic z-10 pt-4">{item.quote}</p>
              </div>
              <div className="mt-8 border-t border-slate-100 pt-6">
                <p className="font-bold text-[#0F172A]">{item.author}</p>
                <p className="text-sm text-[#64748B]">{item.role}</p>
                <p className="text-xs font-bold uppercase tracking-wide text-[#2563EB] mt-2">{item.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
