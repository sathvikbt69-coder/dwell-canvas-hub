import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const problems = [
  "Months of delays & missed deadlines",
  "Cookie-cutter designs that don't reflect your brand",
  "Hidden costs & budget overruns",
  "Poor space utilization killing productivity",
  "No single point of accountability",
];

const solutions = [
  "Guaranteed 6-week delivery timeline",
  "ROI-focused design that boosts performance",
  "Transparent pricing with zero surprises",
  "Space planning backed by workplace data",
  "Dedicated project manager from day one",
];

const ProblemSolution = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-copper text-sm tracking-[0.3em] uppercase mb-4 font-body">Why us</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            The problem with most interior firms
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10"
          >
            <h3 className="font-heading text-xl font-semibold text-destructive mb-6">
              ✕ The Old Way
            </h3>
            <ul className="space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-body">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 border-primary/30"
          >
            <h3 className="font-heading text-xl font-semibold text-primary mb-6">
              ✓ The Worqo Way
            </h3>
            <ul className="space-y-4">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-body">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
