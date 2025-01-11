import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertySearch from "@/components/PropertySearch";
import FeaturedProperties from "@/components/FeaturedProperties";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Amenities from "@/components/Amenities";
import Testimonials from "@/components/Testimonials";
import ScheduleViewing from "@/components/ScheduleViewing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PropertySearch />
      <FeaturedProperties />
      <AboutUs />
      <WhyChooseUs />
      <Amenities />
      <Testimonials />
      <ScheduleViewing />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;