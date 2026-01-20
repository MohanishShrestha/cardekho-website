import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import CustomDropdown from "@/component/CustomDropdown";
import { Input } from "@/components/ui/input";

const Background = () => {
  const [bgIndex, setBgIndex] = useState(0);

  const images = ["/car1.jpg", "/car2.jpg", "/car3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden pt-16">
      {/* Background images */}
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
            ${index === bgIndex ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Search + Dropdown */}
      <div
        className="absolute bottom-34  left-1/2 -translate-x-1/2 z-20
        flex items-center w-full max-w-3xl gap-0"
      >
        {/* Search Bar */}
        <div
          className="flex items-center flex-1  px-4 h-12
          rounded-l-2xl shadow-lg  bg-white/40"
        >
          <Search className="text-gray-600 " size={24} />
          <Input
            placeholder="Search or Ask a Question"
            className="ml-2 flex-1 border-none shadow-none
            focus-visible:ring-0 bg-transparent text-sm text-gray-800"
          />
        </div>

        {/* Dropdown */}
        <CustomDropdown
          label="All"
          items={["All Cars", "New Cars", "Used Cars"]}
          className="h-12 px-4 text-sm rounded-r-2xl rounded-l-none bg-white/20
           border-white/40 "
        />
      </div>
    </div>
  );
};

export default Background;
