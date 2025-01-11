import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Maximize, Phone } from "lucide-react";

const PropertyDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811"
                alt="Property"
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="grid grid-cols-3 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811"
                  alt="Property view 1"
                  className="w-full h-24 object-cover rounded-lg cursor-pointer"
                />
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811"
                  alt="Property view 2"
                  className="w-full h-24 object-cover rounded-lg cursor-pointer"
                />
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811"
                  alt="Property view 3"
                  className="w-full h-24 object-cover rounded-lg cursor-pointer"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  Modern Villa with Pool
                </h1>
                <p className="text-2xl text-accent font-bold">$2,500,000</p>
              </div>

              <div className="flex justify-between text-gray-600 border-y py-4">
                <div className="flex items-center">
                  <Bed size={20} className="mr-2" />
                  <span>4 beds</span>
                </div>
                <div className="flex items-center">
                  <Bath size={20} className="mr-2" />
                  <span>3 baths</span>
                </div>
                <div className="flex items-center">
                  <Maximize size={20} className="mr-2" />
                  <span>3200 sqft</span>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-gray-600">
                  This stunning modern villa offers luxurious living spaces with high-end finishes throughout. 
                  Features include a gourmet kitchen, spacious primary suite, and resort-style pool.
                </p>
              </div>

              <Button className="w-full">
                <Phone className="mr-2" /> Contact Agent
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyDetails;