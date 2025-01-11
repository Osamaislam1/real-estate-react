import { Shield, Home, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Agents",
    description: "Our agents are carefully selected and highly experienced professionals."
  },
  {
    icon: Home,
    title: "Wide Property Range",
    description: "Access to an extensive portfolio of properties to match your needs."
  },
  {
    icon: Clock,
    title: "Fast & Efficient",
    description: "We ensure a smooth and quick process from search to closing."
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Your satisfaction is our top priority throughout the entire journey."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            We're committed to providing exceptional service and making your real estate experience seamless
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;