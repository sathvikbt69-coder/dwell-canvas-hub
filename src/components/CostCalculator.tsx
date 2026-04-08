import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const spaceTypes = [
  { id: "office", label: "Office", rate: [1800, 3500] },
  { id: "retail", label: "Retail", rate: [2000, 4000] },
  { id: "fnb", label: "F&B", rate: [2500, 5000] },
  { id: "hospitality", label: "Hospitality", rate: [3000, 6000] },
];

const tiers = [
  { id: "essential", label: "Essential", multiplier: 1 },
  { id: "signature", label: "Signature", multiplier: 1.5 },
  { id: "bespoke", label: "Bespoke", multiplier: 2.2 },
];

const CostCalculator = () => {
  const [spaceType, setSpaceType] = useState("office");
  const [sqft, setSqft] = useState(3000);
  const [tier, setTier] = useState("signature");
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const space = spaceTypes.find((s) => s.id === spaceType)!;
  const t = tiers.find((t) => t.id === tier)!;
  const low = Math.round((space.rate[0] * sqft * t.multiplier) / 100000);
  const high = Math.round((space.rate[1] * sqft * t.multiplier) / 100000);

  return (
    <section id="calculator" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-copper text-sm tracking-[0.3em] uppercase mb-4 font-body">
            Instant estimate
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Cost Calculator
          </h2>
          <p className="text-muted-foreground mt-4 font-body">
            Get a ballpark estimate in 30 seconds
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          {/* Space type */}
          <div className="mb-8">
            <label className="text-sm text-muted-foreground font-body mb-3 block">Space Type</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {spaceTypes.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSpaceType(s.id)}
                  className={`py-3 px-4 rounded-lg text-sm font-heading transition-all ${
                    spaceType === s.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sqft slider */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm text-muted-foreground font-body">Area (sq.ft)</label>
              <span className="text-foreground font-heading font-semibold">{sqft.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={500}
              max={50000}
              step={500}
              value={sqft}
              onChange={(e) => setSqft(Number(e.target.value))}
              className="w-full accent-primary h-2 bg-secondary rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1 font-body">
              <span>500</span>
              <span>50,000</span>
            </div>
          </div>

          {/* Tier */}
          <div className="mb-8">
            <label className="text-sm text-muted-foreground font-body mb-3 block">Design Tier</label>
            <div className="grid grid-cols-3 gap-3">
              {tiers.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTier(t.id)}
                  className={`py-3 px-4 rounded-lg text-sm font-heading transition-all ${
                    tier === t.id
                      ? "bg-copper text-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Estimate */}
          <div className="bg-secondary/60 rounded-xl p-6 text-center mb-8">
            <p className="text-sm text-muted-foreground font-body mb-2">Estimated Investment</p>
            <p className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              ₹{low}L — ₹{high}L
            </p>
            <p className="text-xs text-muted-foreground mt-2 font-body">
              *Approximate range. Final quote after site visit.
            </p>
          </div>

          {!showForm ? (
            <Button
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base"
              onClick={() => setShowForm(true)}
            >
              Get Detailed Quote →
            </Button>
          ) : !submitted ? (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <Input placeholder="Your Name" required className="bg-secondary border-border text-foreground rounded-lg" />
              <Input placeholder="Phone Number" type="tel" required className="bg-secondary border-border text-foreground rounded-lg" />
              <Input placeholder="Email (optional)" type="email" className="bg-secondary border-border text-foreground rounded-lg" />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base"
              >
                Send My Quote
              </Button>
            </form>
          ) : (
            <div className="text-center py-6">
              <p className="text-primary text-lg font-heading font-semibold">Thank you! 🎉</p>
              <p className="text-muted-foreground font-body mt-2">
                We'll call you within 2 hours with a detailed estimate.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CostCalculator;
