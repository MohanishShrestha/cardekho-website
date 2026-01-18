import TrendingSection from "./TrendingSection";
import UpcomingCarsSection from "./UpcomingCarsSection";

export default function HomeSections() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <TrendingSection />
      <UpcomingCarsSection />
    </div>
  );
}
