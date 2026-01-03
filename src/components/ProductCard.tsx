import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  features: string[];
  whatsappMessage: string;
  delay?: string;
}

const ProductCard = ({ name, description, image, features, whatsappMessage, delay = "" }: ProductCardProps) => {
  const whatsappLink = `https://wa.me/919182397646?text=${encodeURIComponent(whatsappMessage)}`;
  
  return (
    <div className={`group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-fade-up ${delay}`}>
      {/* Image Container */}
      <div className="relative bg-gradient-to-b from-sky/50 to-card p-6 flex items-center justify-center h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-auto object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="font-brand text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-lime-light text-lime-dark px-3 py-1 rounded-full font-medium"
            >
              {feature}
            </span>
          ))}
        </div>
        
        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-lime/10 border-2 border-lime text-lime font-semibold py-3 rounded-xl hover:bg-lime hover:text-primary-foreground transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          Get Quote on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
