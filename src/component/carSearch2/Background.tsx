import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import CustomDropdown from "@/navbar/CustomDropdown";
import { Input } from "@/components/ui/input";

const Background = () => {
  const [bgIndex, setBgIndex] = useState(0);

  const images = ["/car1.jpg", "/car2.jpg", "/car3.jpg"];

  // Auto-slide background
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden pt-16">
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center
        transition-all duration-700"
        style={{
          backgroundImage: `url(${images[bgIndex]})`,
        }}
      />

      {/* Overlay (optional dark shade) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Search + Dropdown */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 
      flex items-center w-full max-w-3xl gap-0">

        {/* Search Bar */}
        <div className="flex items-center flex-1 bg-white px-4 h-12 
        rounded-l-2xl shadow-lg border">
          <Search className="text-gray-500" size={18} />
          <Input
            placeholder="Search or Ask a Question"
            className="ml-2 flex-1 border-none shadow-none 
            focus-visible:ring-0 bg-transparent text-sm"
          />
        </div>

        {/* Dropdown */}
        <CustomDropdown
          label="All"
          items={["All Cars", "New Cars", "Used Cars"]}
          variant="outline"
          className="h-12 px-4 text-sm rounded-r-2xl rounded-l-none 
          hover:text-orange-500 border-l-0"
        />
      </div>
    </div>
  );
};

export default Background;
