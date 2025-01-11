import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProperties from "@/components/FeaturedProperties";

const Properties = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="bg-secondary py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
              Our Properties
            </h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Explore our curated selection of premium properties in the most desirable locations
            </p>
          </div>
        </div>
        <FeaturedProperties />
      </div>
      <Footer />
    </div>
  );
};

export default Properties;