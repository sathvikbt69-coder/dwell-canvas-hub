import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/90" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl"
        >
          <p className="text-copper text-sm font-body tracking-[0.3em] uppercase mb-6">
            Commercial Interior Design — Bangalore
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground mb-6">
            We transform empty spaces into{" "}
            <span className="text-gradient-copper italic">high-performance</span>{" "}
            workspaces in 6 weeks
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-body max-w-xl mb-10">
            Designed to boost productivity, retention, and brand perception.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-base"
              onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Free Estimate
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary rounded-full px-8 text-base"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Our Work
            </Button>
          </div>

          <p className="text-muted-foreground text-sm mt-8 font-body">
            ✦ 100+ offices delivered across Bangalore
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest uppercase font-body">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-scroll-down" />
      </div>
    </section>
  );
};

export default HeroSection;
