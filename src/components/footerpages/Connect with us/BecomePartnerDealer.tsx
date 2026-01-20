import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function BecomePartnerDealer() {
  return (
    <div className="min-h-screen bg-background px-6 py-12 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold md:text-5xl text-green-600">
            Become a Partner Dealer
          </h1>
          <p className="mt-3 text-muted-foreground text-lg">
            Partner with CarDekho to grow your dealership and reach more
            customers.
          </p>
        </div>
        <Separator className="mb-10 bg-green-500" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Increased Leads",
            "Verified Customers",
            "Dealer Dashboard",
            "Brand Trust",
            "Marketing Support",
            "Analytics",
          ].map((feature) => (
            <Card key={feature} className="rounded-2xl border-green-400">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">
                  {feature}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Unlock powerful tools and benefits as a CarDekho partner dealer.
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
