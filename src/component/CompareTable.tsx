import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Car, Feature } from "./Scroll/Cardata";

interface CompareTableProps {
  cars: Car[];
  features: Feature[];
  title?: string;
  capation?: string;
}

function extractNumber(value: string): number {
  const cleaned = value.replace(/[^0-9.]/g, "");
  return parseFloat(cleaned) || 0;
}

export default function CompareTable({
  cars,
  features,
  title,
  capation,
}: CompareTableProps) {
  return (
    <div className="p-9 m-5 shadow-md border rounded-xl bg-white">
      {title && (
        <h2 className="text-xl font-bold mb-4 text-orange-700">{title}</h2>
      )}

      <Table>
        <TableCaption className="text-orange-600">{capation}</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="text-orange-600 p-4 text-xl">Feature</TableHead>
            {cars.map((car) => (
              <TableHead key={car.model} className="text-orange-600 p-4 text-xl">
                {car.model}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {features.map((f) => {
            const numericValues = cars.map((car) => extractNumber(car[f.keys]));

            const maxValue = Math.max(...numericValues);
            console.log(numericValues);
            console.log(maxValue);

            return (
              <TableRow key={f.keys}>
                <TableCell className="font-medium p-4">{f.label}</TableCell>

                {cars.map((car, i) => {
                  const value = car[f.keys];
                  const numeric = numericValues[i];

                  const isMax = numeric === maxValue;
                  const allEqual = numericValues.every(
                    (v) => v === numericValues[0]
                  );

                  return (
                    <TableCell
                      key={i}
                      className={`p-4 font-semibold ${
                        allEqual
                          ? ""
                          : isMax
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
