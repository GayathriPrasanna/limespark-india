import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-lime flex items-center justify-center shadow-lime">
              <span className="text-primary-foreground font-brand font-bold text-lg">LS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-brand text-xl font-bold text-lime">
                Lime <span className="text-red-brand">Spark</span>
              </span>
              <span className="text-[10px] text-muted-foreground -mt-1">By S.S. Cottage Industries</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-lime transition-colors font-medium">Home</a>
            <a href="#products" className="text-foreground hover:text-lime transition-colors font-medium">Products</a>
            <a href="#about" className="text-foreground hover:text-lime transition-colors font-medium">About</a>
            <a href="#contact" className="text-foreground hover:text-lime transition-colors font-medium">Contact</a>
          </nav>

          {/* CTA Button */}
          <a
            href="tel:+918341767646"
            className="hidden md:flex items-center gap-2 gradient-lime text-primary-foreground px-4 py-2 rounded-full font-medium shadow-lime hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-up">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-foreground hover:text-lime transition-colors font-medium">Home</a>
              <a href="#products" className="text-foreground hover:text-lime transition-colors font-medium">Products</a>
              <a href="#about" className="text-foreground hover:text-lime transition-colors font-medium">About</a>
              <a href="#contact" className="text-foreground hover:text-lime transition-colors font-medium">Contact</a>
              <a
                href="tel:+918341767646"
                className="flex items-center gap-2 gradient-lime text-primary-foreground px-4 py-2 rounded-full font-medium shadow-lime justify-center"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
