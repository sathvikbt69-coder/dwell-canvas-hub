import { motion } from "framer-motion";
import { Clock, Shield, IndianRupee, Lightbulb, Users } from "lucide-react";

const differentiators = [
  { icon: Clock, title: "6-Week Delivery", desc: "Guaranteed project completion with milestone-based tracking" },
  { icon: IndianRupee, title: "Transparent Pricing", desc: "No hidden costs. Detailed BOQ before you commit" },
  { icon: Lightbulb, title: "ROI-Focused Design", desc: "Every design decision backed by workplace performance data" },
  { icon: Shield, title: "5-Year Warranty", desc: "Industry-leading warranty on materials and workmanship" },
  { icon: Users, title: "Dedicated PM", desc: "Single point of contact from discovery to handover" },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-copper text-sm tracking-[0.3em] uppercase mb-4 font-body">Our edge</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Why 100+ companies trust Forma
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <d.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{d.title}</h3>
              <p className="text-muted-foreground text-xs font-body leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
