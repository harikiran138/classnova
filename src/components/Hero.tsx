import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-accent/20">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-warm-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-soft-blue/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* DIDAC Badge */}
          <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-soft border border-border/50 animate-scale-in">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Meet us at <span className="text-primary font-semibold">DIDAC INDIA 2025</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Turn Any Projector Into a
            <span className="block mt-2 text-gradient">Smart Classroom</span>
            <span className="block text-4xl md:text-5xl mt-4 text-muted-foreground font-normal">
              — Instantly.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ClassNova transforms traditional projectors into powerful digital smart boards—
            <span className="text-foreground font-medium"> affordable, offline-first, and built for every teacher</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="gradient-warm text-white px-8 py-6 text-lg rounded-full shadow-glow hover:scale-105 transition-bounce group"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-6 text-lg rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-smooth"
            >
              Experience at DIDAC
            </Button>
          </div>

          {/* Device Illustration Placeholder */}
          <div className="pt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative mx-auto max-w-4xl">
              <div className="aspect-video bg-card rounded-3xl shadow-glow border border-border/50 overflow-hidden flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-warm rounded-3xl shadow-soft flex items-center justify-center animate-float">
                    <span className="text-4xl">📚</span>
                  </div>
                  <p className="text-muted-foreground">ClassNova Device Showcase</p>
                </div>
              </div>
              {/* Floating icons around device */}
              <div className="absolute -top-6 -left-6 bg-card p-4 rounded-2xl shadow-soft animate-float">
                <span className="text-3xl">✏️</span>
              </div>
              <div className="absolute -top-6 -right-6 bg-card p-4 rounded-2xl shadow-soft animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-3xl">🎯</span>
              </div>
              <div className="absolute -bottom-6 left-1/4 bg-card p-4 rounded-2xl shadow-soft animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-3xl">💡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
