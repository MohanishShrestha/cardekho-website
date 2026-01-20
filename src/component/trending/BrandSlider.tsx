export default function BrandSlider() {
  const brands = [
    {
      name: "Lamborghini",
      img: "/lambo.png",
      link: "https://www.lamborghini.com/en-en#val-ht",
    },
    { name: "BMW", img: "/bmw.jpg", link: "https://www.bmw.com/en/index.html" },
    { name: "Ford", img: "/ford.png", link: "https://www.ford.com/" },
    { name: "Toyota", img: "/toyota.png", link: "https://www.toyota.com/" },
    {
      name: "Ferrari",
      img: "/ferrari.png",
      link: "https://www.ferrari.com/en-EN",
    },
    { name: "KIA", img: "/kia.png", link: "https://www.kia.com/us/en" },
    { name: "Audi", img: "/audi.png", link: "https://www.audiusa.com/en/" },
  ];

  const loopBrands = [...brands, ...brands];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 mt-10 ">
      <h2 className="text-center text-2xl font-bold mb-6 text-green-500">Popular Brands</h2>

      <div className="relative overflow-hidden w-full group">
        <div className="scroll-track flex gap-16 whitespace-nowrap">
          {loopBrands.map((b, i) => (
            <a
              key={i}
              href={b.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center px-6 cursor-pointer"
            >
              <img src={b.img} className="w-24 h-24 object-contain" />
              <p className="mt-2 text-sm">{b.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
