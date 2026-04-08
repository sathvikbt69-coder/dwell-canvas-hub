import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolioOffice from "@/assets/portfolio-office.jpg";
import portfolioRetail from "@/assets/portfolio-retail.jpg";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioHotel from "@/assets/portfolio-hotel.jpg";
import portfolioCowork from "@/assets/portfolio-cowork.jpg";
import portfolioCafe from "@/assets/portfolio-cafe.jpg";

const filters = ["All", "Office", "Retail", "F&B", "Hospitality"];

const projects = [
  { img: portfolioOffice, title: "TechPark HQ", category: "Office", sqft: "12,000 sq.ft" },
  { img: portfolioRetail, title: "Luxe Boutique", category: "Retail", sqft: "3,500 sq.ft" },
  { img: portfolioRestaurant, title: "Ember Kitchen", category: "F&B", sqft: "4,200 sq.ft" },
  { img: portfolioHotel, title: "Grand Orchid Lobby", category: "Hospitality", sqft: "8,000 sq.ft" },
  { img: portfolioCowork, title: "CoLab Workspace", category: "Office", sqft: "6,500 sq.ft" },
  { img: portfolioCafe, title: "Brew & Bond Cafe", category: "F&B", sqft: "2,800 sq.ft" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding section-stone">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-copper text-sm tracking-[0.3em] uppercase mb-4 font-body">Our work</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Spaces we've transformed
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-heading transition-all ${
                active === f
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border/60"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group relative overflow-hidden rounded-xl shadow-sm"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white">{p.title}</h3>
                    <p className="text-white/70 text-sm font-body">
                      {p.category} · {p.sqft}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
