import { motion } from "framer-motion";

const metrics = [
  { value: "100+", label: "Projects Completed" },
  { value: "2M+", label: "Sq.ft Delivered" },
  { value: "3", label: "Cities Served" },
  { value: "98%", label: "Client Satisfaction" },
];

const clients = [
  "Infosys", "Wipro", "TCS", "Flipkart", "Swiggy", "Razorpay",
  "PhonePe", "Myntra", "Zerodha", "Byju's", "Ola", "Practo",
];

const TrustBar = () => {
  return (
    <section className="section-stone border-y border-border/40">
      {/* Metrics */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-heading text-3xl md:text-4xl font-bold text-foreground">{m.value}</p>
            <p className="text-muted-foreground text-sm mt-1 font-body">{m.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Client marquee */}
      <div className="border-t border-border/40 py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((name, i) => (
            <span
              key={i}
              className="mx-8 text-muted-foreground/60 text-lg font-heading tracking-wider uppercase"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
