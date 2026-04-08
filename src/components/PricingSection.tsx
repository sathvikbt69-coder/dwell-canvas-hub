import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Essential",
    range: "₹1,800 – ₹2,500",
    unit: "per sq.ft",
    desc: "Clean, functional design for cost-conscious businesses",
    features: ["Space planning", "Basic 3D renders", "Standard materials", "45-day timeline", "1-year warranty"],
    accent: false,
  },
  {
    name: "Signature",
    range: "₹2,800 – ₹4,000",
    unit: "per sq.ft",
    desc: "Premium design with brand-aligned aesthetics",
    features: ["Full 3D visualization", "Custom furniture", "Premium materials", "42-day timeline", "3-year warranty", "Brand integration"],
    accent: true,
  },
  {
    name: "Bespoke",
    range: "₹4,500+",
    unit: "per sq.ft",
    desc: "Luxury, one-of-a-kind spaces with world-class finishes",
    features: ["Architectural design", "Imported finishes", "Smart office tech", "Dedicated team", "5-year warranty", "Concierge service"],
    accent: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-copper text-sm tracking-[0.3em] uppercase mb-4 font-body">Investment</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Transparent pricing tiers
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 flex flex-col hover:shadow-md transition-shadow ${
                plan.accent ? "border-copper/50 ring-1 ring-copper/20" : ""
              }`}
            >
              {plan.accent && (
                <span className="text-xs bg-copper/15 text-copper px-3 py-1 rounded-full self-start mb-4 font-body font-medium">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-xl font-semibold text-foreground">{plan.name}</h3>
              <p className="font-heading text-3xl font-bold text-foreground mt-3">{plan.range}</p>
              <p className="text-muted-foreground text-sm font-body">{plan.unit}</p>
              <p className="text-muted-foreground text-sm font-body mt-4 mb-6">{plan.desc}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm font-body text-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full ${
                  plan.accent
                    ? "bg-copper text-white hover:bg-copper/90"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
                onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Quote
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
