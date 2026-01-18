
import { useState } from "react";
import { carDatabase, type CarCompare } from "./compareData"; 

type Props = {
  onClose: () => void;
  onAdd: (car: CarCompare) => void;
};

export default function CompareAddModal({ onClose, onAdd }: Props) {
  const brands = Object.keys(carDatabase);

  const [brand1, setBrand1] = useState<string>("");
  const [model1, setModel1] = useState<string>("");

  const [brand2, setBrand2] = useState<string>("");
  const [model2, setModel2] = useState<string>("");

  const createComparison = () => {
    if (!brand1 || !brand2 || !model1 || !model2) {
      alert("Please select both brands and models.");
      return;
    }

    const m1 = carDatabase[brand1].find((m) => m.name === model1);
    const m2 = carDatabase[brand2].find((m) => m.name === model2);

    if (!m1 || !m2) {
      alert("Selected model not found.");
      return;
    }

    const newComparison: CarCompare = {
      id: Date.now().toString(),
      brand1,
      car1: m1.name,
      price1: m1.price,
      image1: m1.image,
      brand2,
      car2: m2.name,
      price2: m2.price,
      image2: m2.image,
    };

    onAdd(newComparison);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-lg font-semibold">Add Comparison</h2>

        {/* Brand 1 */}
        <label className="block text-sm font-medium text-gray-700">Brand 1</label>
        <select
          value={brand1}
          onChange={(e) => {
            setBrand1(e.target.value);
            setModel1(""); // reset model when brand changes
          }}
          className="mt-1 w-full rounded border px-3 py-2"
        >
          <option value="">Select Brand</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <label className="mt-3 block text-sm font-medium text-gray-700">Model 1</label>
        <select
          value={model1}
          onChange={(e) => setModel1(e.target.value)}
          disabled={!brand1}
          className="mt-1 w-full rounded border px-3 py-2 disabled:opacity-60"
        >
          <option value="">Select Model</option>
          {brand1 &&
            carDatabase[brand1].map((m) => (
              <option key={m.name} value={m.name}>
                {m.name}
              </option>
            ))}
        </select>

        {/* Brand 2 */}
        <label className="mt-4 block text-sm font-medium text-gray-700">Brand 2</label>
        <select
          value={brand2}
          onChange={(e) => {
            setBrand2(e.target.value);
            setModel2("");
          }}
          className="mt-1 w-full rounded border px-3 py-2"
        >
          <option value="">Select Brand</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <label className="mt-3 block text-sm font-medium text-gray-700">Model 2</label>
        <select
          value={model2}
          onChange={(e) => setModel2(e.target.value)}
          disabled={!brand2}
          className="mt-1 w-full rounded border px-3 py-2 disabled:opacity-60"
        >
          <option value="">Select Model</option>
          {brand2 &&
            carDatabase[brand2].map((m) => (
              <option key={m.name} value={m.name}>
                {m.name}
              </option>
            ))}
        </select>

        <div className="mt-6 flex gap-3">
          <button
            onClick={createComparison}
            className="flex-1 rounded bg-orange-500 px-4 py-2 text-white"
          >
            Add
          </button>

          <button
            onClick={onClose}
            className="rounded border px-4 py-2 text-gray-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
