import Trending from "./Trending";


export default function TrendingSection() {
  const trending = [
    { title: "BMW Speedtop", image: "/car1.jpg" },
    { title: "BMW Speedtop", image: "/car2.jpg" },
    { title: "BMW Speedtop", image: "/car3.jpg" },
    { title: "BMW Speedtop", image: "/gtr.JPG" },
  ];

  return (
    <div className="bg-white w-full p-8 border shadow-xl rounded-2xl  mt-4">
      <h2 className="text-2xl font-semibold mb-4  text-center gap-2">
        <span>🔥</span> Trending Now
      </h2>

      <div className="w-full flex flex-wrap justify-center gap-6">
        {trending.map((car, i) => (
          <Trending key={i} title={car.title} image={car.image} />
        ))}
      </div>

    </div>
  );
}
