import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Mail, Phone } from "lucide-react";

const DemoBooking = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/10 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-warm-glow/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-soft-blue/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-glow p-8 md:p-12 border border-primary/20 animate-fade-in">
            {/* Header */}
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-bold">
                See ClassNova in <span className="text-gradient">Action</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Book a personalized demo and discover how ClassNova can transform your classroom
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* School Name */}
                <div className="space-y-2">
                  <Label htmlFor="school" className="text-foreground">School / Institution Name *</Label>
                  <Input
                    id="school"
                    placeholder="Enter institution name"
                    className="rounded-xl border-border/50 focus:border-primary transition-smooth"
                  />
                </div>

                {/* Contact Person */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Your Name *</Label>
                  <Input
                    id="name"
                    placeholder="Full name"
                    className="rounded-xl border-border/50 focus:border-primary transition-smooth"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@school.com"
                    className="rounded-xl border-border/50 focus:border-primary transition-smooth"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="rounded-xl border-border/50 focus:border-primary transition-smooth"
                  />
                </div>

                {/* Institution Type */}
                <div className="space-y-2">
                  <Label htmlFor="type" className="text-foreground">Institution Type *</Label>
                  <Select>
                    <SelectTrigger className="rounded-xl border-border/50 focus:border-primary transition-smooth">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="school">School</SelectItem>
                      <SelectItem value="college">College</SelectItem>
                      <SelectItem value="coaching">Coaching Center</SelectItem>
                      <SelectItem value="ngo">NGO</SelectItem>
                      <SelectItem value="govt">Government Body</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Interest Type */}
                <div className="space-y-2">
                  <Label htmlFor="interest" className="text-foreground">Primary Interest *</Label>
                  <Select>
                    <SelectTrigger className="rounded-xl border-border/50 focus:border-primary transition-smooth">
                      <SelectValue placeholder="Select interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="demo">Product Demo</SelectItem>
                      <SelectItem value="pilot">Pilot Program</SelectItem>
                      <SelectItem value="purchase">Purchase Inquiry</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Additional Information</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your requirements, number of classrooms, preferred demo date..."
                  rows={4}
                  className="rounded-xl border-border/50 focus:border-primary transition-smooth resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-warm text-white py-6 rounded-full text-lg shadow-glow hover:scale-105 transition-bounce group"
                >
                  Book Your Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </div>

              {/* Privacy Note */}
              <p className="text-center text-sm text-muted-foreground pt-4">
                Your information is safe with us. We'll only use it to schedule your demo.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center space-y-4 animate-fade-in">
            <p className="text-muted-foreground">Or reach out directly:</p>
            <div className="flex flex-wrap justify-center gap-6 text-foreground font-medium">
              <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> demo@classnova.in</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 XXXXX XXXXX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoBooking;
