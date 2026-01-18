import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Heart, MapPin, Search, User } from "lucide-react";
import CustomDropdown from "./CustomDropdown";

export default function Test() {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      {/* FOR TOP NAV KO */}
      <div className="w-full flex items-center justify-between px-12 py-1 border-b pt-3 pb-3">
        {/* Logo YETA */}
        <div className="flex items-center pr-4">
          <img
            src="/cardekho-logo-hd.png"
            alt="CarDekho"
            className="h-10 w-auto object-contain min-w-[100px]"
          />
        </div>

        {/* Category + Search yeta bata suru */}
        <div className="flex items-center gap-3 w-full max-w-3xl mx-6">
          {/* Category Button dropdown ko lagi */}
          <CustomDropdown
            label="All"
            items={["All Cars", "New Cars", "Used Cars"]}
            variant="outline"
            className="rounded-full px-4 py-5 hover:text-orange-500"
          />

          {/* Search Bar */}
          <div className="flex items-center flex-1 border rounded-full bg-white px-4 h-10">
            <Search className="text-gray-500" size={18} />
            <Input
              placeholder="Search or Ask a Question"
              className="ml-2 border-none shadow-none focus-visible:ring-0 bg-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-800">
          <CustomDropdown label="English" items={["English", "Hindi"]} className="hover:text-orange-500" />

          <Button variant="ghost" size="icon" className="hover:text-orange-500">
            <Heart size={22} />
          </Button>

          <Button variant="ghost" className="flex items-center gap-1 hover:text-orange-500">
            <User size={18} /> Login / Register
          </Button>
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className="w-full bg-white">
        <div className="w-full flex  gap-8 px-6 py-3 text-sm font-medium text-gray-900 border-b">
          {/* {["NEW CARS", "USED CARS", "NEWS & REVIEWS", "VIDEOS"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="flex items-center gap-1 hover:text-orange-600"
            >
              {item} <ChevronDown size={14} />
            </Button>
          ))} */}

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

          <CustomDropdown
            label="VIDEOS"
            items={["Video Reviews", "Car Comparisons", "News & Events"]}
            hover={true}
            className="hover:text-orange-500"
          />

          <div className="text-gray-600 flex-1 flex justify-end">
            <CustomDropdown
              label="Bangalore"
              items={["Bangalore", "Delhi", "Mumbai"]}
              icon={<MapPin size={18} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
