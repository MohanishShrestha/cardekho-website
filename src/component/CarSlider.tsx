import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlideType {
  image: string;
  title: string;
  description: string;
}

const slides: SlideType[] = [
  {
    image: "/mustang.JPG",
    title: "2022 Audi RS Q E Tron",
    description:
      "2022 Audi RS Q e-tron — a futuristic electric rally car built for the Dakar Rally, blending electric motors with a range-extender engine for extreme off-road performance. Two high-performance electric motors — one on each axle — derived from Audi’s Formula E technology.",
  },
  {
    image: "/car1.jpg",
    title: "Audi R8 Performance",
    description:
      "The Audi R8 Performance features a naturally aspirated V10 engine with extreme acceleration and race-ready handling, built using Audi Sport engineering.",
  },
  {
    image: "/car3.jpg",
    title: "Audi E-tron GT",
    description:
      "The Audi E-tron GT is a fully electric grand tourer known for its incredible design, luxury interior, and a dual-motor system offering instant torque.",
  },
];

export default function CarSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[index];

  return (
    <div className="flex flex-col md:flex-row bg-white max-w-7xl mx-auto px-4 py-8 mt-10 border shadow-2xl rounded-xl gap-6">
      {/* IMAGE SECTION */}
      <div className="relative w-full md:w-1/2 h-80 rounded-xl overflow-hidden shadow-lg">
        <img
          src={current.image}
          className="w-full h-full object-cover transition-all duration-500"
          alt={current.title}
        />

        {/* PREVIOUS BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full "
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* NEXT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* TEXT SECTION */}
      <div className="bg-white p-6 rounded-xl  w-full md:w-1/2 flex flex-col justify-between border shadow-lg ">
        <div>
          <h2 className="text-2xl font-bold mb-4">{current.title}</h2>
          <p className="text-gray-700 leading-relaxed">{current.description}</p>
        </div>

        <div className="flex justify-center md:justify-start">
          <Button className="mt-6 bg-orange-500 hover:bg-orange-600 items-center text-white w-fit">
            For More Information
          </Button>
        </div>
      </div>
    </div>
  );
}
