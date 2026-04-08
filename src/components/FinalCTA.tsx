import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section id="contact" className="section-padding section-stone border-y border-border/40">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground italic leading-tight">
            Transform your office
            <br />
            <span className="text-gradient-copper">in 6 weeks</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 mb-10 font-body max-w-xl mx-auto">
            Let's discuss your project. No obligations, no pressure — just a
            conversation about what's possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-base gap-2"
              asChild
            >
              <a href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20interior%20design%20services" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full px-8 text-base gap-2"
              asChild
            >
              <a href="tel:+919876543210">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-copper text-white hover:bg-copper/90 rounded-full px-8 text-base"
              onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Free Estimate
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
