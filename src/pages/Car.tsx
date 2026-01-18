import CarCarousel from "@/component/Scroll/CarCarousel";
import MostSearch from "@/component/Scroll/MostSearch";
import BrandSlider from "@/component/trending/BrandSlider";
import HomeSections from "@/component/trending/HomeSections";
import Background from "../component/carSearch2/Background";
import LatestCars from "@/component/LatestCars";
import CarSlider from "@/component/CarSlider";
import CarShowcase from "@/component/CarShowcase";

function Car() {
  return (
    <>
      <Background />

      <HomeSections />

      <MostSearch />

      <CarCarousel />

      <BrandSlider />

      <LatestCars />

      <CarSlider />

      <CarShowcase />

      {/* <CompareCarsSection /> */}
    </>
  );
}

export default Car;
