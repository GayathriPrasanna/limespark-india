import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+918341767646"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 gradient-lime rounded-full flex items-center justify-center shadow-lime hover:scale-110 transition-transform animate-bounce-slow"
      aria-label="Call Now"
    >
      <Phone className="w-7 h-7 text-primary-foreground" />
    </a>
  );
};

export default FloatingCallButton;
