import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MapPin, Building, DollarSign } from "lucide-react";

const PropertySearch = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Dream Home</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Use our advanced search to find the perfect property that matches your criteria
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Location"
                className="pl-10"
              />
            </div>

            <Select>
              <SelectTrigger className="w-full">
                <Building className="mr-2 h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full">
                <DollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-500k">$0 - $500k</SelectItem>
                <SelectItem value="500k-1m">$500k - $1M</SelectItem>
                <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                <SelectItem value="2m+">$2M+</SelectItem>
              </SelectContent>
            </Select>

            <Button className="w-full">
              <Search className="mr-2" size={20} />
              Search
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {['Apartments', 'Houses', 'Villas', 'Office Spaces', 'Retail', 'Land'].map((tag) => (
              <Button key={tag} variant="outline" size="sm">
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;