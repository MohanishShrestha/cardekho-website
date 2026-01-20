import { Separator } from "@/components/ui/separator";

export default function Investors() {
  return (
    <div className="min-h-screen bg-background px-6 py-12 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="mb-4 text-4xl font-bold text-green-600">Investors</h1>
        <Separator className="mb-8 bg-green-500" />
        <p className="mx-auto max-w-3xl text-muted-foreground text-lg">
          CarDekho is backed by strong investors who believe in our long-term
          vision, growth, and innovation.
        </p>
      </div>
    </div>
  );
}
