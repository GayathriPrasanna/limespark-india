import { Shield, Leaf, Award, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Every product is manufactured with strict quality control standards.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Formulated with environment-conscious ingredients.",
  },
  {
    icon: Award,
    title: "Trusted Brand",
    description: "Years of experience in home care manufacturing.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Dedicated to customer satisfaction and support.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <span className="inline-block bg-lime-light text-lime-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="font-brand text-4xl md:text-5xl font-bold text-foreground mb-6">
              S.S. Cottage <span className="text-red-brand">Industries</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              At S.S. Cottage Industries, we believe in delivering premium quality home care products 
              that make everyday cleaning effortless. Our Lime Spark range is crafted with care, 
              combining powerful cleaning agents with refreshing fragrances.
            </p>
            <p className="text-muted-foreground mb-8">
              Based in Dharanikota, Amaravathi, we are committed to producing hygienic solutions 
              that protect your family while being gentle on the environment.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex items-start gap-3 p-4 bg-secondary/50 rounded-xl animate-fade-up animation-delay-${(index + 1) * 100}`}
                >
                  <div className="w-10 h-10 rounded-lg gradient-lime flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                    <p className="text-muted-foreground text-xs">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-lime-light rounded-2xl p-8 text-center shadow-card">
                <span className="font-brand text-5xl font-bold text-lime">4+</span>
                <p className="text-lime-dark font-medium mt-2">Premium Products</p>
              </div>
              <div className="bg-yellow-brand/20 rounded-2xl p-8 text-center shadow-card mt-8">
                <span className="font-brand text-5xl font-bold text-yellow-brand">100%</span>
                <p className="text-foreground font-medium mt-2">Quality Focus</p>
              </div>
              <div className="bg-red-brand/10 rounded-2xl p-8 text-center shadow-card">
                <span className="font-brand text-5xl font-bold text-red-brand">24/7</span>
                <p className="text-foreground font-medium mt-2">Support Ready</p>
              </div>
              <div className="bg-sky rounded-2xl p-8 text-center shadow-card mt-8">
                <span className="font-brand text-5xl font-bold text-foreground">AP</span>
                <p className="text-muted-foreground font-medium mt-2">Made in Andhra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
