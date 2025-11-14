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
    <section id="stories" className="section-padding bg-[#030814] text-white">
      <div className="section-shell">
        <div className="text-center space-y-4">
          <p className="section-eyebrow">Educator feedback</p>
          <h2 className="section-heading">Quotes from the 12 interviews guiding the build</h2>
          <p className="section-subtitle">These are discovery conversations — not success stories. We record every session and turn them into design requirements.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {feedback.map((item) => (
            <div key={item.author} className="glass-panel p-8">
              <p className="text-lg text-white/90">“{item.quote}”</p>
              <div className="mt-6 text-sm text-white/60">
                <p className="font-semibold text-white">{item.author}</p>
                <p>{item.role}</p>
                <p className="text-xs uppercase tracking-wide text-white/40">{item.context}</p>
              </div>
              <div className="mt-4 media-frame text-center text-xs text-white/60">
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
