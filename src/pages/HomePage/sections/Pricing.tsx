import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PricingSection() {
  const plans = [
    {
      tag: "Airport Transfer",
      price: "From $120",
      description: "Seamless transportation to and from Nashville International Airport (BNA).",
      features: [
        "Meet & Greet service",
        "Flight tracking",
        "Complimentary wait time",
        "Luggage assistance"
      ],
      primaryButton: { text: "Book Transfer", href: "#" }
    },
    {
      tag: "Hourly Charter",
      price: "$95/hr",
      highlight: "Most Popular",
      description: "Flexible, as-directed service for meetings, events, or city tours.",
      features: [
        "3-hour minimum",
        "Dedicated chauffeur",
        "Unlimited stops",
        "Vehicle stays on location"
      ],
      primaryButton: { text: "Reserve Hourly", href: "#" }
    },
    {
      tag: "Special Events",
      price: "Custom",
      description: "Tailored transportation for weddings, prom, or corporate events.",
      features: [
        "Dedicated event coordinator",
        "Multi-vehicle logistics",
        "On-site management available",
        "Customized amenities"
      ],
      primaryButton: { text: "Request Quote", href: "#" }
    }
  ];

  return (
    <section data-webild-section="pricing" id="pricing" className="relative w-full py-24 bg-background">
      <div className="w-content-width mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal variant="fade">
            <Tag text="Pricing" className="mb-4" />
          </ScrollReveal>
          <TextAnimation
            text="Transparent Rates for Luxury Travel"
            variant="fade-blur"
            tag="h2"
            gradientText={false}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          />
          <ScrollReveal variant="fade" delay={0.2}>
            <p className="text-lg text-accent">
              Choose the service that best fits your needs. For custom itineraries or special events, please request a quote.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ScrollReveal variant="fade" key={index} delay={0.1 * index} className="h-full">
              <Card className={`relative h-full flex flex-col p-8 ${plan.highlight ? 'ring-2 ring-primary-cta' : ''}`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-cta text-primary-cta-text text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {plan.highlight}
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{plan.tag}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  </div>
                  <p className="text-accent">{plan.description}</p>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-foreground">
                        <Check className="w-5 h-5 text-primary-cta shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Button
                    text={plan.primaryButton.text}
                    href={plan.primaryButton.href}
                    variant={plan.highlight ? "primary" : "secondary"}
                    className="w-full justify-center"
                  />
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}