import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CompareAddModal from "./CompareAddModal";
import type { CarCompare } from "./compareData";
import { useNavigate } from "react-router-dom";

export default function CompareCarsSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [selectedComparisons, setSelectedComparisons] = useState<CarCompare[]>(
    []
  );
  const [modalOpen, setModalOpen] = useState(false);

  // Load existing comparisons
  useEffect(() => {
    const saved = localStorage.getItem("compare_list");
    if (saved) setSelectedComparisons(JSON.parse(saved));
  }, []);

  // Save updated list
  useEffect(() => {
    localStorage.setItem("compare_list", JSON.stringify(selectedComparisons));
  }, [selectedComparisons]);

  const scrollLeft = () =>
    sliderRef.current?.scrollBy({ left: -350, behavior: "smooth" });

  const scrollRight = () =>
    sliderRef.current?.scrollBy({ left: 350, behavior: "smooth" });

  const handleAddComparison = (car: CarCompare) => {
    setSelectedComparisons((prev) => [...prev, car]);
  };

  const navigate = useNavigate();

  const goToCompare = () => {
    navigate("/compare");
  };

  return (
    <Card className="p-4 md:p-6 m-6">
      <div className="flex justify-between">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
          Compare to buy the right car
        </h2>

        <button
          className="px-4 py-2 bg-orange-500 text-white rounded mb-4 "
          onClick={() => setModalOpen(true)}
        >
          Add To Compare
        </button>
      </div>

      {modalOpen && (
        <CompareAddModal
          onClose={() => setModalOpen(false)}
          onAdd={handleAddComparison}
        />
      )}

      {/* Scrollable list */}
      <div className="relative">
        <div ref={sliderRef} className="flex gap-6 overflow-x-auto pb-4">
          {selectedComparisons.map((c) => (
            <div
              key={c.id}
              className="min-w-[320px] border rounded-xl bg-white shadow"
            >
              <div className="flex relative">
                <img
                  src={c.image1}
                  className="w-1/2 h-38 object-cover bg-gray-100"
                />
                <img
                  src={c.image2}
                  className="w-1/2 h-38 object-cover bg-gray-100"
                />

                <span className="absolute left-1/2 top-1/2 bg-black text-white text-xs px-3 py-1 rounded-full -translate-x-1/2 -translate-y-1/2">
                  VS
                </span>
              </div>

              <div className="p-4">
                <div className="grid grid-cols-2 text-sm gap-4">
                  <div>
                    <p className="text-gray-500">{c.brand1}</p>
                    <p className="font-medium">{c.car1}</p>
                    <p className="text-xs text-gray-500">{c.price1}</p>
                  </div>

                  <div>
                    <p className="text-gray-500">{c.brand2}</p>
                    <p className="font-medium">{c.car2}</p>
                    <p className="text-xs text-gray-500">{c.price2}</p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-4 text-orange-600 border-orange-300"
                >
                  {c.car1} vs {c.car2}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border border-orange-400 shadow p-2 rounded hidden md:block"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border border-orange-400 shadow p-2 rounded hidden md:block"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      {/* Footer */}
      <div className="mt-4">
        <a
          onClick={goToCompare}
          className="text-orange-600 text-sm font-medium flex items-center"
        >
          View All Car Comparisons →
        </a>
      </div>
    </Card>
  );
}
