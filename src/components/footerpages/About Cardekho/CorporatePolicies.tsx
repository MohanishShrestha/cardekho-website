import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function CorporatePolicies() {
  return (
    <div className="min-h-screen bg-background px-6 py-12 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-4xl font-bold text-green-600 text-center">
          Corporate Policies
        </h1>
        <Separator className="mb-8 bg-green-500" />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Code of Conduct",
            "Ethics & Compliance",
            "Diversity & Inclusion",
            "Data Security",
          ].map((policy) => (
            <Card key={policy} className="rounded-2xl border-green-400">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">
                  {policy}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Our policies ensure transparency, fairness, and responsible
                business practices.
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
