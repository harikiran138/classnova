import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const DidacSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/10 to-soft-blue/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-warm-glow/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl shadow-glow p-12 md:p-16 border border-primary/20 animate-fade-in">
            {/* Header */}
            <div className="text-center space-y-6 mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-warm px-6 py-3 rounded-full shadow-soft">
                <Calendar className="w-5 h-5 text-white" />
                <span className="text-white font-semibold text-lg">SPECIAL EVENT</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold">
                Experience ClassNova
                <span className="block mt-2 text-gradient">LIVE at DIDAC INDIA 2025</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join us at India's biggest education technology summit and see ClassNova transform classrooms in real-time
              </p>
            </div>

            {/* Event Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-secondary/50 p-6 rounded-2xl text-center space-y-3 hover:bg-secondary transition-smooth">
                <Calendar className="w-10 h-10 mx-auto text-primary" />
                <h3 className="font-semibold text-lg">Dates</h3>
                <p className="text-muted-foreground">Coming Soon</p>
              </div>
              
              <div className="bg-secondary/50 p-6 rounded-2xl text-center space-y-3 hover:bg-secondary transition-smooth">
                <MapPin className="w-10 h-10 mx-auto text-primary" />
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-muted-foreground">India Expo Centre</p>
              </div>
              
              <div className="bg-secondary/50 p-6 rounded-2xl text-center space-y-3 hover:bg-secondary transition-smooth">
                <Clock className="w-10 h-10 mx-auto text-primary" />
                <h3 className="font-semibold text-lg">Booth</h3>
                <p className="text-muted-foreground">To Be Announced</p>
              </div>
            </div>

            {/* What to Expect */}
            <div className="space-y-6 mb-12">
              <h3 className="text-2xl font-bold text-center">What You'll Experience</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "🎯 Live product demonstrations",
                  "👨‍🏫 Interactive teaching sessions",
                  "💬 One-on-one consultations",
                  "🎁 Special DIDAC pricing",
                  "📚 Educational content showcase",
                  "🤝 Partnership opportunities",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-background/50 p-4 rounded-xl"
                  >
                    <span className="text-2xl">{item.split(' ')[0]}</span>
                    <span className="text-foreground">{item.split(' ').slice(1).join(' ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="gradient-warm text-white px-8 py-6 text-lg rounded-full shadow-glow hover:scale-105 transition-bounce group"
              >
                Reserve Your Demo Slot
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-smooth"
              >
                Download Brochure
              </Button>
            </div>

            {/* Footer note */}
            <p className="text-center text-muted-foreground mt-8 text-sm">
              Limited demo slots available • First come, first served
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DidacSection;
