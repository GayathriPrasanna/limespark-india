import { Phone, MessageCircle, MapPin, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-lime/10 text-lime px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="font-brand text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact <span className="text-lime">Lime Spark</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions or want to place an order? We're here to help you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-up">
            <div className="bg-card rounded-2xl p-6 shadow-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-lime flex items-center justify-center shrink-0 shadow-lime">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Primary Contact</h4>
                <a href="tel:+918341767646" className="text-lime hover:underline font-medium text-lg">
                  +91 83417 67646
                </a>
                <p className="text-muted-foreground text-sm">Call us anytime for inquiries</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card flex items-start gap-4 animate-fade-up animation-delay-100">
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shrink-0 shadow-md">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                <a 
                  href="https://wa.me/919182397646" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline font-medium text-lg"
                >
                  +91 91823 97646
                </a>
                <p className="text-muted-foreground text-sm">Quick responses via WhatsApp</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card flex items-start gap-4 animate-fade-up animation-delay-200">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 shadow-md">
                <Linkedin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/shaik-mabusubhani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Shaik Mabu Subhani
                </a>
                <p className="text-muted-foreground text-sm">Connect with our owner</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card flex items-start gap-4 animate-fade-up animation-delay-300">
              <div className="w-12 h-12 rounded-xl gradient-red flex items-center justify-center shrink-0 shadow-red">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Location</h4>
                <p className="text-foreground font-medium">S.S. Cottage Industries</p>
                <p className="text-muted-foreground text-sm">Dharanikota, Amaravathi - 522 020</p>
                <p className="text-muted-foreground text-sm">Andhra Pradesh, India</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Form / CTA */}
          <div className="bg-card rounded-2xl p-8 shadow-elevated animate-fade-up animation-delay-200">
            <h3 className="font-brand text-2xl font-bold text-foreground mb-6">
              Quick Inquiry
            </h3>
            <p className="text-muted-foreground mb-8">
              The fastest way to reach us is through WhatsApp. Click the button below to start a conversation!
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/919182397646?text=Hello! I'm interested in Lime Spark products and would like more information."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-500 text-primary-foreground py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-colors shadow-md"
              >
                <MessageCircle className="w-6 h-6" />
                Message on WhatsApp
              </a>
              
              <a
                href="tel:+918341767646"
                className="flex items-center justify-center gap-3 w-full gradient-lime text-primary-foreground py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lime"
              >
                <Phone className="w-6 h-6" />
                Call +91 83417 67646
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                <strong className="text-foreground">Owner:</strong> Shaik Mabu Subhani
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
