import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background px-6 py-12 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-4xl font-bold text-green-600 text-center">
          Privacy Policy
        </h1>
        <Separator className="mb-8 bg-green-500" />
        <Card className="rounded-2xl border-green-400">
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Your privacy is important to us. We collect data only to improve
              user experience.
            </p>
            <p>
              Personal data is protected using industry-standard security
              practices.
            </p>
            <p>We do not sell user information to third parties.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
