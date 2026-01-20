import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background px-6 py-12 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-4xl font-bold text-green-600 text-center">
          Terms & Conditions
        </h1>
        <Separator className="mb-8 bg-green-500" />
        <Card className="rounded-2xl border-green-400">
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              By accessing CarDekho, you agree to comply with our platform rules
              and policies.
            </p>
            <p>
              Users must provide accurate information and use the platform
              responsibly.
            </p>
            <p>
              CarDekho reserves the right to modify services and policies at any
              time.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
