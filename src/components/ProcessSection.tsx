import { motion } from "framer-motion";

const steps = [
  { week: "Week 1", title: "Discovery", desc: "Site visit, requirement mapping, brand understanding" },
  { week: "Week 2", title: "Planning", desc: "Space planning, budgeting, material selection" },
  { week: "Week 2–3", title: "Design", desc: "3D renders, mood boards, final design approval" },
  { week: "Week 3–5", title: "Execution", desc: "Construction, fit-out, quality checks" },
  { week: "Week 5–6", title: "Finishing", desc: "Furnishing, branding elements, final detailing" },
  { week: "Week 6", title: "Handover", desc: "Final walkthrough, documentation, warranty" },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-copper text-sm tracking-[0.3em] uppercase mb-4 font-body">How it works</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            From blank canvas to move-in ready
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-copper rounded-full -translate-x-1.5 mt-2 z-10" />

              {/* Content */}
              <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <span className="text-copper text-xs font-body tracking-wider uppercase">{step.week}</span>
                <h3 className="font-heading text-xl font-semibold text-foreground mt-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm font-body mt-2">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
