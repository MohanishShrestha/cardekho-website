import Trending from "./Trending";

export default function UpcomingCarsSection() {
  const upcoming = [
    { title: "Chevrolet Corvette ZR1X", price: "Rs. 75 Lakhs", image: "/tucson.JPG" },
    { title: "Chevrolet Corvette ZR1X", price: "Rs. 75 Lakhs", image: "/corolla.JPG" },
    { title: "Chevrolet Corvette ZR1X", price: "Rs. 75 Lakhs", image: "/model3.JPG" },
    { title: "Chevrolet Corvette ZR1X", price: "Rs. 75 Lakhs", image: "/mustang.JPG" },
  ];

  return (
    <div className="bg-white w-full border p-6  shadow-xl rounded-2xl mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Upcoming Cars</h2>

      <div className=" w-full flex flex-wrap justify-center gap-6">
        {upcoming.map((car, i) => (
          <Trending
            key={i}
            title={car.title}
            price={car.price}
            image={car.image}
            showButton
          />
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="text-orange-500 font-medium flex items-center gap-2 mx-auto hover:underline">
          View All Upcoming Cars →
        </button>
      </div>
    </div>
  );
}
