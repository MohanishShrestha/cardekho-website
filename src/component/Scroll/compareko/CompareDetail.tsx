import CompareTable from "../../CompareTable";
import {
  cars,
  basicInfoFeatures,
  engineFeatures,
  dimensionFeatures,
  safetyFeatures,
  interiorFeatures,
  exteriorFeatures,
} from "../Cardata";

export default function CompareDetail() {
  return (
    <div className="p-6 space-y-6">

      <CompareTable
        cars={cars}
        features={basicInfoFeatures}
        title="Basic Information"
        capation="General Specs"
      />

      <CompareTable
        cars={cars}
        features={engineFeatures}
        title="Engine & Performance"
        capation="Engine Comparison"
      />

      <CompareTable
        cars={cars}
        features={dimensionFeatures}
        title="Dimensions"
        capation="Body Measurement Comparison"
      />

      <CompareTable
        cars={cars}
        features={safetyFeatures}
        title="Safety Features"
        capation="Safety Comparison"
      />

      <CompareTable
        cars={cars}
        features={interiorFeatures}
        title="Interior Features"
        capation="Interior Comparison"
      />

      <CompareTable
        cars={cars}
        features={exteriorFeatures}
        title="Exterior Features"
        capation="Exterior Comparison"
      />

    </div>
  );
}
