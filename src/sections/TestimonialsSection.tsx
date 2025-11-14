const feedback = [
  {
    quote:
      "If you keep the UI looking like the apps we already use, teachers will not need another cheat sheet.",
    author: "Shalini Rao",
    role: "Govt. Hindi teacher",
    context: "Interview · Bengaluru",
  },
  {
    quote: "I can carry this if it’s under 7 kilos. Please keep the battery indicator super visual.",
    author: "Arif Sheikh",
    role: "Science teacher, Pune",
    context: "Prototype dry run",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="stories" className="bg-[#030814] py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Educator feedback</p>
          <h2 className="mt-4 text-3xl font-semibold">Quotes from the 12 interviews guiding the build</h2>
          <p className="mt-4 text-white/70">These are discovery conversations — not success stories. We record every session and turn them into design requirements.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {feedback.map((item) => (
            <div key={item.author} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-lg text-white/90">“{item.quote}”</p>
              <div className="mt-6 text-sm text-white/60">
                <p className="font-semibold text-white">{item.author}</p>
                <p>{item.role}</p>
                <p className="text-xs uppercase tracking-wide text-white/40">{item.context}</p>
              </div>
              <div className="mt-4 rounded-2xl border border-dashed border-white/20 bg-[#050C1F] p-4 text-center text-xs text-white/60">
                Consent collected. Video snippets to be published post-editing.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
