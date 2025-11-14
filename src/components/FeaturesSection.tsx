import { 
  Presentation, 
  Share2, 
  Video, 
  Cloud, 
  WifiOff, 
  BarChart3, 
  BookMarked, 
  PenTool,
  Monitor,
  Lock
} from "lucide-react";

const features = [
  {
    icon: Presentation,
    title: "Smart Whiteboard",
    description: "Write, draw, and annotate naturally on any surface",
  },
  {
    icon: Share2,
    title: "Screen Sharing",
    description: "Share content from any device wirelessly",
  },
  {
    icon: Video,
    title: "Content Recording",
    description: "Record and share lessons for later viewing",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description: "Auto-save and access content anywhere",
  },
  {
    icon: WifiOff,
    title: "Offline-First",
    description: "Full functionality without internet",
  },
  {
    icon: BarChart3,
    title: "Teacher Dashboard",
    description: "Track engagement and progress easily",
  },
  {
    icon: BookMarked,
    title: "Lesson Library",
    description: "Access thousands of ready-made lessons",
  },
  {
    icon: PenTool,
    title: "Annotation Tools",
    description: "Highlight, sketch, and emphasize key points",
  },
  {
    icon: Monitor,
    title: "Multi-Device Support",
    description: "Works with laptops, tablets, and phones",
  },
  {
    icon: Lock,
    title: "Safe Exam Mode",
    description: "Secure environment for assessments",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Everything Your <span className="text-gradient">Classroom Needs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful features designed to make teaching easier and learning more engaging
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-2xl shadow-soft hover:shadow-glow transition-smooth border border-border/50 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="space-y-4">
                  <div className="inline-flex p-4 bg-gradient-warm rounded-xl shadow-soft group-hover:scale-110 transition-bounce">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-8 animate-fade-in">
            <p className="text-lg text-muted-foreground mb-4">
              ...and many more features being added every month
            </p>
            <div className="inline-flex items-center gap-2 text-primary font-medium">
              <span>✨</span>
              <span>Made simple for teachers, powerful for students</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
