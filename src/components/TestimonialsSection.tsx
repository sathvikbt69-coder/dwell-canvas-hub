import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Worqo transformed our 15,000 sq.ft office in just 5 weeks. Employee satisfaction went up 40% within the first quarter.",
    name: "Priya Sharma",
    role: "VP Operations, TechStack India",
    metric: "40% ↑ employee satisfaction",
  },
  {
    quote: "The ROI was undeniable. Our new restaurant design increased average dwell time by 25 minutes and revenue by 30%.",
    name: "Arjun Mehta",
    role: "Founder, Ember Kitchen",
    metric: "30% ↑ revenue",
  },
  {
    quote: "They delivered on time, on budget, and the design exceeded our expectations. Our retail space footfall doubled.",
    name: "Kavitha Reddy",
    role: "Director, Luxe Group",
    metric: "2× footfall increase",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-copper text-sm tracking-[0.3em] uppercase mb-4 font-body">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Results that speak for themselves
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-copper text-copper" />
                ))}
              </div>
              <p className="text-foreground font-body leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="border-t border-border/40 pt-4">
                <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs font-body">{t.role}</p>
                <span className="inline-block mt-3 text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-heading">
                  {t.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
