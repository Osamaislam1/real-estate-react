import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-12 space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-up">
              Discover Your Perfect
              <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent"> Home</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Explore properties for sale and rent in your area with trusted real estate agents
            </p>
          </div>

          {/* Search Box */}
          <div 
            className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Enter Location"
                  className="pl-10 bg-white/50 backdrop-blur-sm border-gray-200 focus:border-accent"
                />
              </div>

              <div>
                <Select>
                  <SelectTrigger className="bg-white/50 backdrop-blur-sm border-gray-200 focus:border-accent">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select>
                  <SelectTrigger className="bg-white/50 backdrop-blur-sm border-gray-200 focus:border-accent">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-500k">$0 - $500k</SelectItem>
                    <SelectItem value="500k-1m">$500k - $1M</SelectItem>
                    <SelectItem value="1m+">$1M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                <Search className="mr-2" size={20} />
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div 
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { number: "1000+", label: "Properties" },
              { number: "500+", label: "Happy Clients" },
              { number: "10+", label: "Years Experience" },
              { number: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;