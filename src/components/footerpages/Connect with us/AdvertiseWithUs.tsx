import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AdvertiseWithUs() {
  return (
    <div className="min-h-screen bg-background px-6 py-12 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold md:text-5xl text-green-600">
            Advertise With Us
          </h1>
          <p className="mt-3 text-muted-foreground text-lg">
            Promote your brand to millions of car buyers on CarDekho.
          </p>
        </div>
        <Separator className="mb-10 bg-green-500" />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "High Visibility",
            "Targeted Audience",
            "Performance Insights",
            "Flexible Campaigns",
          ].map((benefit) => (
            <Card key={benefit} className="rounded-2xl border-green-400">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">
                  {benefit}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Advertise smarter and achieve better engagement with CarDekho.
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
