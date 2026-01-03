import { Linkedin, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center">
                <span className="text-primary-foreground font-brand font-bold text-lg">LS</span>
              </div>
              <span className="font-brand text-xl font-bold">
                Lime <span className="text-red-brand">Spark</span>
              </span>
            </div>
            <p className="text-background/70 text-sm">
              Premium home care products by S.S. Cottage Industries. 
              Experience the spark of purity in every drop.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#home" className="hover:text-lime transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-lime transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-lime transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-lime transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+918341767646" className="hover:text-lime">+91 83417 67646</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <a href="https://wa.me/919182397646" className="hover:text-lime">+91 91823 97646</a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <a href="https://www.linkedin.com/in/shaik-mabusubhani" target="_blank" rel="noopener noreferrer" className="hover:text-lime">
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2025 Lime Spark by S.S. Cottage Industries. All rights reserved.
          </p>
          <p className="text-background/40 text-xs mt-2">
            Dharanikota, Amaravathi - 522 020, Andhra Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
