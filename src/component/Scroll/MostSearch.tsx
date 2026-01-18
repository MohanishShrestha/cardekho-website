import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState, type JSX } from "react";
import { categories, sampleCars } from "./Cardata";
import { Heart } from "lucide-react";

export default function MostSearch(): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>(categories[0]);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }, [activeTab]);

  const cars = sampleCars[activeTab] ?? [];

  // Track liked state per car by index
  const [likedCars, setLikedCars] = useState<Record<number, boolean>>({});

  const toggleLike = (index: number) => {
    setLikedCars((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <Card className="w-full shadow-xl border">
        <CardHeader>
          <div className="text-center items-center justify-between">
            <CardTitle className="text-lg md:text-3xl font-semibold">
              Most searched cars
            </CardTitle>

            {/* Tabs */}
            <nav className="hidden md:flex items-center gap-10 ml-6 mt-4">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveTab(c)}
                  className={`text-sm pb-2 border-b-2 ${
                    activeTab === c
                      ? "border-orange-500 text-orange-600 font-semibold"
                      : "border-transparent text-gray-600"
                  }`}
                >
                  {c}
                </button>
              ))}
            </nav>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {cars.slice(0, 4).map((car, i) => (
              <article
                key={i}
                className="bg-white rounded-lg shadow-sm border hover:shadow-md transition"
              >
                {/* Image */}
                <div className="relative h-36 md:h-44 bg-gray-100 rounded-t-lg overflow-hidden">
                  {car.tag && (
                    <span className="absolute left-3 top-3 bg-white text-xs px-2 py-1 rounded-full shadow text-gray-700 z-10">
                      {car.tag}
                    </span>
                  )}
                  <img
                    src={car.image}
                    alt={car.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Body */}
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm md:text-base font-medium text-gray-800">
                      {car.title}
                    </h3>
                    <button
                      onClick={() => toggleLike(i)}
                      className="p-1 rounded-full"
                    >
                      <Heart
                        size={18}
                        className={
                          likedCars[i]
                            ? "text-red-500 fill-red-500"
                            : "text-gray-400"
                        }
                      />
                    </button>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">
                    {car.price}
                  </p>

                  <div className="px-4 pb-4 mt-4">
                    <button className="w-full bg-orange-500 text-white text-sm py-2 rounded-xl hover:bg-orange-600 transition">
                      Pre-Book
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </CardContent>

        <div className="text-center mt-6">
          <button className="text-orange-500 font-medium flex items-center gap-2 mx-auto hover:underline">
            View All Upcoming Cars →
          </button>
        </div>
      </Card>
    </div>
  );
}