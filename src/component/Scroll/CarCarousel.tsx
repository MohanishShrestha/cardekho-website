import React, { useEffect, useRef, useState, type JSX } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import { categories, sampleCars } from "./Cardata";

export default function CarCarousel(): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>(categories[0]);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const onPrev = () => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: -Math.round(width * 0.8),
      behavior: "smooth",
    });
  };

  const onNext = () => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: Math.round(width * 0.8),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }, [activeTab]);

  const cars = sampleCars[activeTab] ?? [];
  const [likedCars, setLikedCars] = useState<Record<number, boolean>>({});

  const toggleLike = (index: number) => {
    setLikedCars((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Card className="w-full rounded-xl shadow-lg border">
        <CardHeader>
          <div className="text-center items-center justify-between ">
            <CardTitle className="text-lg md:text-3xl font-semibold">
              Latest Cars
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="relative">
            {/* Slider area */}
            <div className="overflow-hidden">
              <div
                ref={sliderRef}
                className="flex grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-6 px-4"
                aria-label="car slider"
              >
                {cars.length === 0 ? (
                  <div className="text-gray-500 italic px-4">
                    No cars for this category yet.
                  </div>
                ) : (
                  cars.map((car, i) => (
                    <article
                      key={i}
                      className="min-w-[260px] md:min-w-[300px] snap-start bg-white rounded-lg shadow-sm border"
                    >
                      {/* image area */}
                      <div className="relative h-36 md:h-44 bg-gray-100 rounded-t-lg overflow-hidden">
                        <img
                          src={car.image}
                          alt={car.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* card body */}
                      <div className="p-4 text-center">
                        <div className="flex justify-center items-center gap-2">
                          <h3 className="text-sm md:text-base font-medium text-gray-800 ">
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

                        {/* ⭐ Rating stars */}
                        <div className="flex justify-center mt-2">
                          {[...Array(5)].map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              size={16}
                              className={
                                starIndex < Math.round(car.rating ?? 0)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>

                        <div className="mt-4">
                          <Button
                            variant="outline"
                            className=" text-sm pl-6 pr-6 text-white bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600 hover:text-white"
                          >
                            Details
                          </Button>
                        </div>
                      </div>
                    </article>
                  ))
                )}
              </div>
            </div>

            {/* Prev / Next buttons */}
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 ">
              <Button
                variant="default"
                size="icon"
                className="p-2 bg-white/80 border text-black  hover:bg-white rounded-full"
                onClick={onNext}
                aria-label="Next cars"
              >
                <ChevronRight size={18} />
              </Button>
            </div>

            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <Button
                variant="default"
                size="icon"
                className="p-2 bg-white/80 border text-black  hover:bg-white rounded-full"
                onClick={onPrev}
                aria-label="Previous cars"
              >
                <ChevronLeft size={18} />
              </Button>
            </div>
          </div>

          <div className="text-center mt-6">
            <button className="text-green-500 font-medium flex items-center gap-2 mx-auto hover:underline">
              View All Latest Cars →
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
