import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useState } from "react";

interface CarCardProps {
  title: string;
  price?: string;
  image: string;
  showButton?: boolean;
}

export default function Trending({ title, price, image, showButton }: CarCardProps) {
   const [liked, setLiked] = useState(false);
  return (
    <Card className="w-64 rounded-2xl p-0 shadow-xl border hover:shadow-2xl transition overflow-hidden">
      <CardContent className="p-0">
        <img src={image} className="w-full h-36 object-cover" />

        <div className="p-4 flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-sm">{title}</h3>
            {price && <p className="text-gray-500 text-xs mt-1">{price}</p>}
          </div>

          <button
            onClick={() => setLiked(!liked)}
            className="p-1 rounded-full"
          >
            <Heart
              size={18}
              className={liked ? "text-red-500 fill-red-500" : "text-gray-400"}
            />
          </button>
        </div>

        {showButton && (
          <div className="px-4 pb-4">
            <button className="w-full bg-green-500 text-white text-sm py-2 rounded-xl hover:bg-green-600 transition">
              Pre-Book
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
