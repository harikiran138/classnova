import { Heart, User, GraduationCap, Microscope } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Primary Teacher, Delhi",
    quote: "ClassNova has transformed how I teach. My students are more engaged, and I can finally use digital content without struggling with technology.",
    icon: User,
  },
  {
    name: "Rajesh Kumar",
    role: "Principal, Government School, Bihar",
    quote: "We couldn't afford smart boards, but ClassNova gave us everything we needed at a fraction of the cost. Our teachers love it!",
    icon: GraduationCap,
  },
  {
    name: "Anjali Verma",
    role: "Science Teacher, Maharashtra",
    quote: "The offline mode is a game-changer for us. No more worrying about internet connectivity during important lessons.",
    icon: Microscope,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 text-primary text-xl font-medium mb-4">
              <Heart className="w-6 h-6 fill-current" />
              <span>Loved by Teachers</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Real Stories from Real <span className="text-gradient">Educators</span>
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-3xl shadow-soft hover:shadow-glow transition-smooth border border-border/50 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-6">
                  {/* Quote */}
                  <div className="relative">
                    <span className="text-6xl text-primary/20 absolute -top-4 -left-2">"</span>
                    <p className="relative text-foreground leading-relaxed italic pt-4">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center shadow-soft text-white">
                      <testimonial.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="text-center pt-8 animate-fade-in">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join <span className="text-primary font-semibold">thousands of educators</span> who are transforming their classrooms with ClassNova
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
