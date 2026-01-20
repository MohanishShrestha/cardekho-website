import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Feedback() {
  return (
    <div className="min-h-screen bg-background px-6 py-12 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold md:text-5xl text-green-600">
            Feedback
          </h1>
          <p className="mt-3 text-muted-foreground text-lg">
            We value your feedback. Help us improve CarDekho by sharing your
            experience.
          </p>
        </div>
        <Separator className="mb-10 bg-green-500" />
        <Card className="rounded-2xl border-green-400 max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl text-green-600">
              Share Your Feedback
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>Your suggestions and feedback help us enhance our services.</p>
            <p>
              Please reach out via email or contact form to share your thoughts.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
