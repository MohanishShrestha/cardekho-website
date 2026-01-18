import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CarSpecsCard() {
  const [select, setSelect] = useState<string>("");

  const options = ["btn1", "btn2", "btn3", "btn4"];

  const handleSelect = (option: string) => {
    console.log(option);
    setSelect(option);
  };

  return (
    <>
      <div className="w-full flex justify-center mt-6 gap-4 bg-black text-white py-6">
        {options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleSelect(option)}
            className={`rounded-full border w-30 py-12 hover:bg-white ${
              select === option
                ? "bg-orange-600 text-white"
                : "bg-white text-black"
            }`}
          >
            {`Button ${index + 1}`}
          </Button>
        ))}
      </div>
      
    </>
  );
}
