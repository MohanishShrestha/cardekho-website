import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function FAQs() {
  return (
    <div className="min-h-screen bg-background px-6 py-12 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-4xl font-bold text-green-600">FAQs</h1>
        <Separator className="mb-8 bg-green-500" />
        <div className="space-y-4">
          {[
            "How do I buy a car?",
            "Are listings verified?",
            "Is my data secure?",
          ].map((q) => (
            <Card key={q} className="rounded-2xl border-green-400">
              <CardHeader>
                <CardTitle className="text-lg text-green-600">{q}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Yes, CarDekho ensures transparency, verified listings, and a
                secure platform for users.
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
