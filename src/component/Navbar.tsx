import { Button } from "@/components/ui/button";
import CustomDropdown from "@/component/CustomDropdown";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      {/* FOR TOP NAV KO */}
      <div className="w-full flex items-center justify-between px-12 py-1 border-b">
        {/* Logo YETA */}
        <div className="flex items-center mx-3 my-2 pl-8">
          <Link to="/">
          <img
            src="/carprelogo.JPG"
            alt="CarDekho"
            className="h-10 w-auto object-contain min-w-[100px]"
          />
          </Link>
        </div>

        <div className=" flex justify-center gap-8 text-sm font-medium text-gray-900 ">
          <CustomDropdown
            label="NEW CARS"
            items={[
              "Upcoming",
              "Popular",
              "Electric",
              "New Cars",
              "Popular Brands",
            ]}
          />

          <CustomDropdown
            label="USED CARS"
            items={["Buy Used Car", "Used Electric cars", "Sell Used Car"]}
          />

          <CustomDropdown
            label="NEWS & REVIEWS"
            items={["Top News", "User Review", "Tips & Advice"]}
          />

          <p className="flex items-center gap-1 text-lg">Contact</p>
        </div>

        <Button
          variant="default"
          className="flex items-center gap-1 bg-green-600 text-white hover:bg-green-700 h-10 px-4"
        >
          <User size={18} /> Sign In
        </Button>
      </div>
    </div>
  );
}
