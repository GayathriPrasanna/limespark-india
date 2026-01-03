import ProductCard from "./ProductCard";
import dishWashImg from "@/assets/dish-wash.png";
import detergentImg from "@/assets/detergent.png";
import phenyleImg from "@/assets/phenyle.png";
import bathroomAcidImg from "@/assets/bathroom-acid.png";

const products = [
  {
    name: "Dish Wash Liquid",
    description: "Anti-bacterial formula that cuts through grease and leaves your dishes sparkling clean.",
    image: dishWashImg,
    features: ["Anti-Bacterial", "1.2 Liters", "Grease Cutting"],
    whatsappMessage: "Hello! I'd like to get a quote for Lime Spark Dish Wash Liquid (1.2 Liters).",
  },
  {
    name: "Premium Detergent Liquid",
    description: "High-performance cleaning for all fabrics. Gentle on clothes, tough on stains.",
    image: detergentImg,
    features: ["All Fabrics", "High Performance", "Color Safe"],
    whatsappMessage: "Hello! I'd like to get a quote for Lime Spark Premium Detergent Liquid.",
  },
  {
    name: "Perfumed Herbal Phenyle",
    description: "Perfumed herbal floor cleaner for a fragrant and hygienic home environment.",
    image: phenyleImg,
    features: ["Herbal Formula", "Long Lasting", "Fresh Fragrance"],
    whatsappMessage: "Hello! I'd like to get a quote for Lime Spark Perfumed Herbal Phenyle.",
  },
  {
    name: "Hygienic Bathroom Acid",
    description: "Strong hygienic home care solution for tough bathroom stains and deposits.",
    image: bathroomAcidImg,
    features: ["Heavy Duty", "Stain Removal", "Hygienic Clean"],
    whatsappMessage: "Hello! I'd like to get a quote for Lime Spark Hygienic Bathroom Acid.",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-brand/20 text-yellow-brand px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Products
          </span>
          <h2 className="font-brand text-4xl md:text-5xl font-bold text-foreground mb-4">
            Premium <span className="text-lime">Home Care</span> Range
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our complete range of hygienic cleaning solutions crafted with quality ingredients for your home.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              {...product}
              delay={`animation-delay-${(index + 1) * 100}`}
            />
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Need bulk orders or custom requirements?</p>
          <a
            href="https://wa.me/919182397646?text=Hello! I'm interested in bulk orders for Lime Spark products."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-lime text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-lime hover:opacity-90 transition-all"
          >
            Request Bulk Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
