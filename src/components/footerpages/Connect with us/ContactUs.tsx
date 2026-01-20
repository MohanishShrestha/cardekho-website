import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-background px-6 py-12 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold md:text-5xl text-green-600">
            Contact Us
          </h1>
          <p className="mt-3 text-muted-foreground text-lg">
            Get in touch with CarDekho for support, queries, or business
            inquiries.
          </p>
        </div>
        <Separator className="mb-10 bg-green-500" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Customer Support",
            "Business Enquiries",
            "Technical Assistance",
          ].map((item) => (
            <Card key={item} className="rounded-2xl border-green-400">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">{item}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Reach out to our {item.toLowerCase()} team for quick assistance.
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
