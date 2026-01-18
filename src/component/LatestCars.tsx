import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";

interface CarItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
}

const cars: CarItem[] = [
  {
    id: "1",
    title: "1989 AUDI 90 QUATTRO",
    subtitle: "Premium",
    price: "Rs 20 lakhs",
    image: "/car1.jpg",
  },
  {
    id: "2",
    title: "1989 AUDI 90 QUATTRO",
    subtitle: "Premium",
    price: "Rs 40 lakhs",
    image: "/car2.jpg",
  },
  {
    id: "3",
    title: "1989 AUDI 90 QUATTRO",
    subtitle: "Premium",
    price: "Rs 60 lakhs",
    image: "/car3.jpg",
  },
];

export default function LatestCars() {
  return (
    <div className="w-full bg-white max-w-7xl mx-auto px-4 py-8 border shadow-xl rounded-2xl mt-10">
      <h2 className="text-center text-2xl font-bold mb-10">Latest Cars</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {cars.map((car) => (
          <Card
            key={car.id}
            className=" rounded-3xl p-0 shadow-xl border bg-white overflow-hidden"
          >
            <CardContent className="p-0 m-3 ">
              <img
                src={car.image}
                alt={car.title}
                className="w-full h-60 object-cover rounded-2xl"
              />

              <div className="p-6">
                <h3 className="font-semibold text-lg">{car.title}</h3>
                <p className="text-gray-500">{car.subtitle}</p>
                <p className="font-semibold mt-2">{car.price}</p>

                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full rounded-2xl mt-5 py-6 text-md">
                  BUY NOW
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="text-orange-500 font-medium flex items-center gap-2 mx-auto hover:underline">
          View All Upcoming Cars →
        </button>
      </div>
    </div>
  );
}
