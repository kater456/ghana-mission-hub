import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-earth text-cream">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-gold to-terracotta py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Join Us in Making a Difference
          </h3>
          <p className="text-cream/90 mb-6 max-w-2xl mx-auto">
            Together, we can bring hope, healing, and the love of Christ to communities across Ghana and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="inline-flex items-center justify-center gap-2 bg-cream text-earth font-semibold px-8 py-4 rounded-xl hover:bg-cream/90 transition-all shadow-elevated"
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </Link>
            <Link
              to="/get-involved"
              className="inline-flex items-center justify-center gap-2 border-2 border-cream text-cream font-semibold px-8 py-4 rounded-xl hover:bg-cream/10 transition-all"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Mission House Ghana" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-display font-bold text-xl">Mission House</h4>
                <p className="text-cream/70 text-sm">Ghana</p>
              </div>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed mb-6">
              A Christian mission organization committed to spreading the Gospel and supporting vulnerable communities across Ghana and beyond.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/about" className="text-cream/80 hover:text-gold transition-colors">About Us</Link>
              <Link to="/mission" className="text-cream/80 hover:text-gold transition-colors">Mission & Vision</Link>
              <Link to="/programs" className="text-cream/80 hover:text-gold transition-colors">Our Programs</Link>
              <Link to="/partners" className="text-cream/80 hover:text-gold transition-colors">Partners & Donors</Link>
              <Link to="/blog" className="text-cream/80 hover:text-gold transition-colors">News & Blog</Link>
            </nav>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Get Involved</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/donate" className="text-cream/80 hover:text-gold transition-colors">Make a Donation</Link>
              <Link to="/get-involved" className="text-cream/80 hover:text-gold transition-colors">Volunteer</Link>
              <Link to="/get-involved" className="text-cream/80 hover:text-gold transition-colors">Become a Partner</Link>
              <Link to="/get-involved" className="text-cream/80 hover:text-gold transition-colors">Mission Trips</Link>
              <Link to="/contact" className="text-cream/80 hover:text-gold transition-colors">Contact Us</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:info@missionhouseghana.org" className="flex items-start gap-3 text-cream/80 hover:text-gold transition-colors">
                <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                <span>info@missionhouseghana.org</span>
              </a>
              <a href="tel:+233246865747" className="flex items-start gap-3 text-cream/80 hover:text-gold transition-colors">
                <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                <span>+233 24 686 5747</span>
              </a>
              <div className="flex items-start gap-3 text-cream/80">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>Accra, Ghana<br />West Africa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/60 text-sm">
            © {new Date().getFullYear()} Mission House Ghana. All rights reserved.
          </p>
          <p className="text-cream/60 text-sm italic">
            "For though I am free from all, I have made myself a servant to all" — 1 Corinthians 9:19
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
