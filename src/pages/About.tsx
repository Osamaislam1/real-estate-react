import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="bg-secondary py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
              About Us
            </h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Learn more about our commitment to excellence in real estate
            </p>
          </div>
        </div>
        <AboutUs />
        <WhyChooseUs />
      </div>
      <Footer />
    </div>
  );
};

export default About;