const testimonials = [
  {
    quote:
      "Our teachers stopped fearing technology. They carry the ClassNova kit like a lesson bag and set it up in minutes.",
    author: "Dr. Meera Singh",
    role: "Principal, Kendriya Vidyalaya",
  },
  {
    quote: "We digitized 400 classrooms in 3 weeks with existing staff. Adoption stayed above 92%.",
    author: "Rohan Patil",
    role: "Education Officer, Pune",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="stories" className="bg-[#030814] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Testimonials</p>
          <h2 className="mt-4 text-3xl font-semibold">Real classrooms. Real outcomes.</h2>
          <p className="mt-4 text-white/70">Video stories and long-form interviews launching November 2024.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-lg text-white/90">“{testimonial.quote}”</p>
              <div className="mt-6 text-sm text-white/60">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p>{testimonial.role}</p>
              </div>
              <div className="mt-4 rounded-2xl border border-dashed border-white/20 bg-[#050C1F] p-4 text-center text-xs text-white/60">
                TODO: Embed testimonial video thumbnail + play button
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
