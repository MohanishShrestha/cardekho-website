import { Button } from "@/components/ui/button";
import CustomDropdown from "@/navbar/CustomDropdown";
import { User } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      {/* FOR TOP NAV KO */}
      <div className="w-full flex items-center justify-between px-12 py-1 border-b">
        {/* Logo YETA */}
        <div className="flex items-center m-3 pl-8">
          <img
            src="/cardekho-logo-hd.png"
            alt="CarDekho"
            className="h-10 w-auto object-contain min-w-[100px]"
          />
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
            hover={true}
            className="hover:text-orange-500 "
          />

          <CustomDropdown
            label="USED CARS"
            items={["Buy Used Car", "Used Electric cars", "Sell Used Car"]}
            hover={true}
            className="hover:text-orange-500"
          />

          <CustomDropdown
            label="NEWS & REVIEWS"
            items={["Top News", "User Review", "Tips & Advice"]}
            hover={true}
            className="hover:text-orange-500"
          />

          <p className="flex items-center gap-1 text-lg">Contact</p>
        </div>

        <Button
          variant="default"
          className="flex items-center gap-1 bg-orange-600 text-white hover:bg-orange-700 h-10 px-4"
        >
          <User size={18} /> Sign In
        </Button>
      </div>
    </div>
  );
}
