import { motion } from "framer-motion";
import { Building2, Store, UtensilsCrossed, Hotel } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Office Interiors",
    desc: "Modern workspaces that boost productivity and reflect your brand culture. From startups to enterprise HQs.",
  },
  {
    icon: Store,
    title: "Retail Spaces",
    desc: "Customer-first retail environments designed to maximize footfall, dwell time, and conversion.",
  },
  {
    icon: UtensilsCrossed,
    title: "F&B Interiors",
    desc: "Restaurants, cafes, and bars that create unforgettable dining experiences and keep guests coming back.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    desc: "Hotels and resorts that blend luxury with functionality for world-class guest experiences.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-copper text-sm tracking-[0.3em] uppercase mb-4 font-body">What we do</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Spaces we specialize in
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-copper/40 transition-colors"
            >
              <s.icon className="w-10 h-10 text-copper mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
