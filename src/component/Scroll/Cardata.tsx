type CarItem = {
  id: string;
  title: string;
  price: string;
  tag?: string;
  image: string;
  cta?: string;
  rating?: number;
};

export const categories = ["Audi", "BMW", "Bugatti", "Chevrolet", "Ferrari"];

export const sampleCars: Record<string, CarItem[]> = {
  Audi: [
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car1.jpg",
      cta: "View November Offers",
      rating: 4.2,
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car2.jpg",
      cta: "View November Offers",
      rating: 3.2,
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car3.jpg",
      cta: "View November Offers",
      rating: 4.5,
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/x5.JPG",
      cta: "View November Offers",
      rating: 3.5,
    },
    {
      id: "nexon",
      title: "Tata Nexon",
      price: "Rs 7.32 - 14.05 Lakh*",
      image: "/gtr.JPG",
      cta: "View November Offers",
      rating: 4.1,
    },
    {
      id: "fronx",
      title: "Maruti FRONX",
      price: "Rs 6.85 - 11.98 Lakh*",
      image: "/model3.JPG",
      cta: "View November Offers",
      rating: 3.8,
    },
    {
      id: "fortuner",
      title: "Toyota Fortuner",
      price: "Rs 33.65 - 48.85 Lakh*",
      image: "/mustang.JPG",
      cta: "View November Offers",
      rating: 4.7,
    },
  ],

  BMW: [
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/x5.JPG",
      cta: "View November Offers",
      rating: 4.3,
    },
    {
      id: "nexon",
      title: "Tata Nexon",
      price: "Rs 7.32 - 14.05 Lakh*",
      image: "/gtr.JPG",
      cta: "View November Offers",
      rating: 4.0,
    },
    {
      id: "fronx",
      title: "Maruti FRONX",
      price: "Rs 6.85 - 11.98 Lakh*",
      image: "/model3.JPG",
      cta: "View November Offers",
      rating: 3.9,
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car1.jpg",
      cta: "View November Offers",
      rating: 4.4,
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car2.jpg",
      cta: "View November Offers",
      rating: 3.7,
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car3.jpg",
      cta: "View November Offers",
      rating: 4.6,
    },
    {
      id: "fortuner",
      title: "Toyota Fortuner",
      price: "Rs 33.65 - 48.85 Lakh*",
      image: "/mustang.JPG",
      cta: "View November Offers",
      rating: 4.8,
    },
  ],

  Bugatti: [
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car2.jpg",
      cta: "View November Offers",
      rating: 4.1,
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car3.jpg",
      cta: "View November Offers",
      rating: 3.5,
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/x5.JPG",
      cta: "View November Offers",
      rating: 4.3,
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car1.jpg",
      cta: "View November Offers",
      rating: 3.9,
    },
    {
      id: "nexon",
      title: "Tata Nexon",
      price: "Rs 7.32 - 14.05 Lakh*",
      image: "/gtr.JPG",
      cta: "View November Offers",
      rating: 4.0,
    },
    {
      id: "fronx",
      title: "Maruti FRONX",
      price: "Rs 6.85 - 11.98 Lakh*",
      image: "/model3.JPG",
      cta: "View November Offers",
      rating: 3.7,
    },
    {
      id: "fortuner",
      title: "Toyota Fortuner",
      price: "Rs 33.65 - 48.85 Lakh*",
      image: "/mustang.JPG",
      cta: "View November Offers",
      rating: 4.9,
    },
  ],

  Chevrolet: [
    {
      id: "nexon",
      title: "Tata Nexon",
      price: "Rs 7.32 - 14.05 Lakh*",
      image: "/gtr.JPG",
      cta: "View November Offers",
      rating: 4.1,
    },
    {
      id: "fronx",
      title: "Maruti FRONX",
      price: "Rs 6.85 - 11.98 Lakh*",
      image: "/model3.JPG",
      cta: "View November Offers",
      rating: 3.9,
    },
    {
      id: "fortuner",
      title: "Toyota Fortuner",
      price: "Rs 33.65 - 48.85 Lakh*",
      image: "/mustang.JPG",
      cta: "View November Offers",
      rating: 4.8,
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car1.jpg",
      cta: "View November Offers",
      rating: 4.2,
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car2.jpg",
      cta: "View November Offers",
      rating: 3.6,
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car3.jpg",
      cta: "View November Offers",
      rating: 4.5,
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/x5.JPG",
      cta: "View November Offers",
      rating: 3.8,
    },
  ],

  Ferrari: [
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/x5.JPG",
      cta: "View November Offers",
      rating: 4.3,
    },
    {
      id: "nexon",
      title: "Tata Nexon",
      price: "Rs 7.32 - 14.05 Lakh*",
      image: "/gtr.JPG",
      cta: "View November Offers",
      rating: 4.0,
    },
    {
      id: "fronx",
      title: "Maruti FRONX",
      price: "Rs 6.85 - 11.98 Lakh*",
      image: "/model3.JPG",
      cta: "View November Offers",
      rating: 3.9,
    },
    {
      id: "fortuner",
      title: "Toyota Fortuner",
      price: "Rs 33.65 - 48.85 Lakh*",
      image: "/mustang.JPG",
      cta: "View November Offers",
      rating: 4.7,
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car1.jpg",
      cta: "View November Offers",
      rating: 4.4,
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car2.jpg",
      cta: "View November Offers",
      rating: 3.6,
    },
    {
      id: "venue",
      title: "Hyundai Venue",
      price: "Rs 7.90 - 15.69 Lakh*",
      image: "/car3.jpg",
      cta: "View November Offers",
      rating: 4.5,
    },
  ],
};

export interface Feature {
  label: string;
  keys: keyof Car;
}

export interface Car {
  model: string;

  // Basic Info
  price: string;
  mileage: string;
  fuelType: string;

  // Engine & Performance
  engine: string;
  power: string;
  torque: string;
  transmission: string;

  // Dimensions
  length: string;
  width: string;
  height: string;
  bootSpace: string;
  groundClearance: string;

  // Safety
  airbags: string;
  abs: string;
  brakingSystem: string;

  // Interior
  touchscreen: string;
  speakerCount: string;
  seatMaterial: string;
  climateControl: string;

  // Exterior
  alloyWheels: string;
  ledLights: string;
  sunroof: string;
}

export const cars: Car[] = [
  {
    model: "Honda City",

    // Basic Info
    price: "Rs 12.5 Lakh",
    mileage: "18 km/l",
    fuelType: "Petrol",

    // Engine & Performance
    engine: "1498 cc",
    power: "119 bhp",
    torque: "145 Nm",
    transmission: "Manual/Automatic",

    // Dimensions
    length: "4583 mm",
    width: "1748 mm",
    height: "1489 mm",
    bootSpace: "506 L",
    groundClearance: "165 mm",

    // Safety
    airbags: "6",
    abs: "Yes",
    brakingSystem: "Disc + Drum",

    // Interior
    touchscreen: "8-inch Display",
    speakerCount: "8 Speakers",
    seatMaterial: "Leather",
    climateControl: "Automatic",

    // Exterior
    alloyWheels: "Yes",
    ledLights: "LED Headlamps",
    sunroof: "Yes",
  },

  {
    model: "Hyundai Verna",

    // Basic Info
    price: "Rs 13.2 Lakh",
    mileage: "20 km/l",
    fuelType: "Petrol",

    // Engine & Performance
    engine: "1482 cc Turbo",
    power: "158 bhp",
    torque: "253 Nm",
    transmission: "Manual/Automatic",

    // Dimensions
    length: "4535 mm",
    width: "1765 mm",
    height: "1475 mm",
    bootSpace: "528 L",
    groundClearance: "170 mm",

    // Safety
    airbags: "6",
    abs: "Yes",
    brakingSystem: "Disc + Disc",

    // Interior
    touchscreen: "10.25-inch Display",
    speakerCount: "6 Speakers",
    seatMaterial: "Fabric/Leather",
    climateControl: "Automatic Dual Zone",

    // Exterior
    alloyWheels: "Yes",
    ledLights: "Full LED Setup",
    sunroof: "Yes",
  },
];

export const basicInfoFeatures: Feature[] = [
  { label: "Price", keys: "price" },
  { label: "Mileage", keys: "mileage" },
  { label: "Fuel Type", keys: "fuelType" },
];

export const engineFeatures: Feature[] = [
  { label: "Engine", keys: "engine" },
  { label: "Power", keys: "power" },
  { label: "Torque", keys: "torque" },
  { label: "Transmission", keys: "transmission" },
];

export const dimensionFeatures: Feature[] = [
  { label: "Length", keys: "length" },
  { label: "Width", keys: "width" },
  { label: "Height", keys: "height" },
  { label: "Boot Space", keys: "bootSpace" },
  { label: "Ground Clearance", keys: "groundClearance" },
];

export const safetyFeatures: Feature[] = [
  { label: "Airbags", keys: "airbags" },
  { label: "ABS", keys: "abs" },
  { label: "Braking System", keys: "brakingSystem" },
];

export const interiorFeatures: Feature[] = [
  { label: "Touchscreen", keys: "touchscreen" },
  { label: "Speakers", keys: "speakerCount" },
  { label: "Seat Material", keys: "seatMaterial" },
  { label: "Climate Control", keys: "climateControl" },
];

export const exteriorFeatures: Feature[] = [
  { label: "Alloy Wheels", keys: "alloyWheels" },
  { label: "LED Lights", keys: "ledLights" },
  { label: "Sunroof", keys: "sunroof" },
];
