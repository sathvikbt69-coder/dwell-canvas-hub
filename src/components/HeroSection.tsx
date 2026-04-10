import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroTextShadow = "0px 4px 20px rgba(0,0,0,0.6), 0px 2px 8px rgba(0,0,0,0.4)";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background video — no overlay */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl"
        >
          {/* Glass container for text */}
          <div
            className="rounded-xl p-6 md:p-8"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          >
            <p
              className="text-sm font-body tracking-[0.3em] uppercase mb-6"
              style={{ color: "rgba(255,255,255,0.9)", textShadow: heroTextShadow }}
            >
              Commercial Interior Design — Bangalore
            </p>
            <h1
              className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
              style={{ color: "#FFFFFF", textShadow: heroTextShadow }}
            >
              We transform empty spaces into{" "}
              <span className="italic text-copper">high-performance</span>{" "}
              workspaces that drive business growth.
            </h1>
            <p
              className="text-lg md:text-xl font-body max-w-xl mb-10"
              style={{ color: "rgba(255,255,255,0.9)", textShadow: heroTextShadow }}
            >
              Designed to improve productivity, employee retention, and brand perception.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-base"
                style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
                onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Free Estimate
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/60 text-white hover:bg-white/10 rounded-full px-8 text-base bg-transparent"
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Our Work
              </Button>
            </div>

            <p
              className="text-sm mt-8 font-body"
              style={{ color: "rgba(255,255,255,0.9)", textShadow: heroTextShadow }}
            >
              ✦ 100+ offices delivered across Bangalore
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="text-xs tracking-widest uppercase font-body"
          style={{ color: "rgba(255,255,255,0.8)", textShadow: heroTextShadow }}
        >
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 animate-scroll-down text-white/80" />
      </div>
    </section>
  );
};

export default HeroSection;
