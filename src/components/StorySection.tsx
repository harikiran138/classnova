import { BookOpen, Wifi, DollarSign, Zap } from "lucide-react";

const problems = [
  { icon: BookOpen, text: "Outdated teaching tools limit learning" },
  { icon: Wifi, text: "Poor internet connectivity in rural areas" },
  { icon: DollarSign, text: "Expensive smart boards beyond budget" },
  { icon: Zap, text: "Complex setup requiring technical expertise" },
];

const StorySection = () => {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Problem */}
          <div className="text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              The <span className="text-primary">Challenge</span> Every School Faces
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quality education shouldn't be limited by outdated infrastructure or budget constraints.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-glow transition-smooth group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <problem.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-bounce" />
                  <p className="text-foreground font-medium">{problem.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-warm opacity-5 rounded-3xl blur-3xl" />
            <div className="relative bg-card p-12 rounded-3xl shadow-glow border border-primary/20">
              <div className="text-center space-y-6">
                <div className="inline-block p-4 bg-gradient-warm rounded-2xl shadow-soft">
                  <span className="text-5xl">💡</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Meet <span className="text-gradient">ClassNova</span>
                </h2>
                <p className="text-2xl text-foreground font-medium max-w-3xl mx-auto">
                  Convert ANY projector into a full-featured smart classroom
                </p>
                <div className="grid md:grid-cols-3 gap-6 pt-8">
                  {[
                    { emoji: "💰", title: "Affordable", desc: "Up to 70% cost savings" },
                    { emoji: "📡", title: "Offline-First", desc: "Works without internet" },
                    { emoji: "⚡", title: "Instant Setup", desc: "Ready in 5 minutes" },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="space-y-3 p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-smooth"
                    >
                      <span className="text-4xl">{feature.emoji}</span>
                      <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Teacher Connection */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-primary text-lg font-medium">
              <span>❤️</span>
              <span>Built with teachers in mind</span>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No training needed. No renovation required. Just plug in and start teaching better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
