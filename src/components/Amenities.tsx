import { Bath, Bed, Car, Wifi, Tv, Utensils, DumbbellIcon, Trees } from "lucide-react";

const Amenities = () => {
  const amenities = [
    { icon: Bath, title: "Modern Bathrooms", description: "Luxurious bathrooms with premium fixtures" },
    { icon: Bed, title: "Spacious Bedrooms", description: "Comfortable rooms with ample natural light" },
    { icon: Car, title: "Parking Space", description: "Secure parking for residents and guests" },
    { icon: Wifi, title: "High-Speed Internet", description: "Fast and reliable connectivity" },
    { icon: Tv, title: "Entertainment", description: "Smart home entertainment systems" },
    { icon: Utensils, title: "Modern Kitchen", description: "Fully equipped kitchen with appliances" },
    { icon: DumbbellIcon, title: "Fitness Center", description: "State-of-the-art gym facilities" },
    { icon: Trees, title: "Garden Area", description: "Beautiful landscaped outdoor spaces" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">Amenities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary">
            Premium Features for
            <span className="text-accent"> Modern Living</span>
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Experience luxury living with our carefully curated selection of premium amenities designed for your comfort and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group p-6 bg-secondary rounded-xl hover:bg-accent/5 transition-colors duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                  <amenity.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-primary">{amenity.title}</h4>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;