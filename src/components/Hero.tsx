import heroImage from "@/assets/hero-lime-splash.jpg";
import { MessageCircle, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fresh lime splash"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card/90 via-card/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-lime-light/80 backdrop-blur-sm text-lime-dark px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            Premium Home Care Products
          </div>
          
          <h1 className="font-brand text-5xl md:text-7xl font-bold mb-6 animate-fade-up animation-delay-100">
            Experience the{" "}
            <span className="text-lime">Spark</span>{" "}
            of <span className="text-red-brand">Purity</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up animation-delay-200">
            Hygienic home care solutions crafted with care. From sparkling dishes to 
            fresh floors, Lime Spark brings you premium cleaning power for every corner of your home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 gradient-lime text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-lime hover:opacity-90 transition-all hover:scale-105"
            >
              Explore Products
            </a>
            <a
              href="https://wa.me/919182397646?text=Hello! I'm interested in Lime Spark products."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-card text-foreground border-2 border-lime px-8 py-4 rounded-full text-lg font-semibold hover:bg-lime-light transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
