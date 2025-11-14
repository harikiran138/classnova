import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Contact Us",
    description: "Perfect for individual classrooms",
    features: [
      "ClassNova Device",
      "Mouse Pen & Remote",
      "4GB RAM / 64GB Storage",
      "Offline Mode",
      "Basic Content Library",
      "Email Support",
      "1 Year Warranty",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "Contact Us",
    description: "Ideal for schools & institutions",
    features: [
      "Everything in Starter",
      "Cloud Sync Enabled",
      "Advanced Content Library",
      "Screen Recording",
      "Priority Support",
      "Teacher Training",
      "2 Year Warranty",
      "Free Software Updates",
    ],
    popular: true,
  },
  {
    name: "Institution",
    price: "Custom",
    description: "For large deployments",
    features: [
      "Everything in Premium",
      "Bulk Pricing",
      "Dedicated Account Manager",
      "Custom Integrations",
      "On-site Training",
      "24/7 Support",
      "Extended Warranty",
      "Pilot Program Available",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Simple, <span className="text-gradient">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include the ClassNova device and essential accessories.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-3xl p-8 transition-smooth animate-fade-in ${
                  plan.popular
                    ? "border-2 border-primary shadow-glow scale-105"
                    : "border border-border/50 shadow-soft hover:shadow-glow"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="gradient-warm px-6 py-2 rounded-full text-white font-semibold shadow-soft">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Name */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-muted-foreground mt-2">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="py-4">
                    <div className="text-4xl font-bold text-primary">{plan.price}</div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <Check className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full py-6 rounded-full text-lg transition-bounce ${
                      plan.popular
                        ? "gradient-warm text-white shadow-glow hover:scale-105"
                        : "border-2 border-primary/30 hover:border-primary hover:bg-primary/5"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="text-center space-y-4 pt-8 animate-fade-in">
            <p className="text-lg text-muted-foreground">
              All prices exclude GST. Special discounts available for bulk orders and government institutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span>✓ Free Installation</span>
              <span>✓ Teacher Training Included</span>
              <span>✓ Easy EMI Options</span>
              <span>✓ 30-Day Money Back</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
