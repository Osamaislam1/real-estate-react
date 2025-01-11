import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Home } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
                alt="Our Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">About Us</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  We Help People Find Their
                  <span className="text-accent"> Dream Home</span>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  With over 20 years of experience in the real estate industry, we've helped thousands of people find their perfect homes. Our commitment to excellence and customer satisfaction has made us one of the most trusted names in real estate.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Award className="text-accent" size={24} />,
                    title: "Expert Agents",
                    description: "Professional and experienced agents at your service"
                  },
                  {
                    icon: <Users className="text-accent" size={24} />,
                    title: "Happy Clients",
                    description: "Thousands of satisfied customers trust us"
                  },
                  {
                    icon: <Home className="text-accent" size={24} />,
                    title: "Wide Selection",
                    description: "Extensive portfolio of properties to choose from"
                  },
                  {
                    icon: <ArrowRight className="text-accent" size={24} />,
                    title: "Fast Process",
                    description: "Quick and efficient property transactions"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-white/50 transition-colors">
                    <div className="shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Learn More About Us
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;