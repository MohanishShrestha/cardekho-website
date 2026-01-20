import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import '../practiseOnly/test.css'

interface CarItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

const cars: CarItem[] = [
  {
    id: "1",
    title: "BMW SPEEDTOP",
    description:
      "The BMW Speedtop is a new, limited-production shooting brake concept car based on the M8 Competition, unveiled in 2025",
    price: "Rs 4 lakhs",
    image: "/car1.jpg",
  },
  {
    id: "2",
    title: "BMW SPEEDTOP",
    description:
      "The BMW Speedtop is a new, limited-production shooting brake concept car based on the M8 Competition, unveiled in 2025",
    price: "Rs 6 lakhs",
    image: "/car2.jpg",
  },
  {
    id: "3",
    title: "BMW SPEEDTOP",
    description:
      "The BMW Speedtop is a new, limited-production shooting brake concept car based on the M8 Competition, unveiled in 2025",
    price: "Rs 6 lakhs",
    image: "/car3.jpg",
  },
];

export default function CarShowcase() {
  return (
    <div className="w-full bg-white max-w-7xl mx-auto px-4 py-8 mt-10 rounded-xl shadow-2xl border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {cars.map((car) => (
          <Card
            key={car.id}
            className=" bg-white shadow-lg border p-0 overflow-hidden gap-0 "
          >
            {/* Image */}
            <div className="relative w-full h-54 md:h-62 card2-wrapper">
              <img src={car.image} alt={car.title} className="card1-img" />
            </div>

            {/* Card body */}
            <div className="-mt-10 relative bg-white  card1-wrapper">
              <CardContent className="bg-white  p-6  shadow-md ">
                {/* Title */}
                <h3 className="font-bold text-lg">{car.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-1 leading-snug">
                  {car.description}
                </p>

                {/* Price */}
                <p className="font-bold text-lg mt-3">{car.price}</p>

                {/* Buttons */}
                <div className="flex items-center gap-3 mt-6">
                  {/* Buy Now */}
                  <Button
                    variant="outline"
                    className="flex-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full text-md"
                  >
                    Buy Now
                  </Button>

                  {/* Cart */}
                  <Button
                    variant="outline"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center"
                  >
                    <ShoppingCart size={20} />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
