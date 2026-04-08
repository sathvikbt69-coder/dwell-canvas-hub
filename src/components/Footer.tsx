import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/30 px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-2xl text-foreground mb-4">
            Worqo<span className="text-copper">.</span>
          </h3>
          <p className="text-muted-foreground text-sm font-body leading-relaxed">
            Premium commercial interior design studio based in Bangalore. We craft spaces that perform.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm font-body text-muted-foreground">
            <li>Office Interiors</li>
            <li>Retail Spaces</li>
            <li>F&B Interiors</li>
            <li>Hospitality Design</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-sm font-body text-muted-foreground">
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Process</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm font-body text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>42, Indiranagar, Bangalore 560038, Karnataka, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              hello@forma.design
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between text-xs text-muted-foreground font-body">
        <p>© 2026 Forma Interiors. All rights reserved.</p>
        <p>Designed with precision in Bangalore.</p>
      </div>
    </footer>
  );
};

export default Footer;
