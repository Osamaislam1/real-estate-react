import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="bg-secondary py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Get in touch with our team of real estate experts
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;