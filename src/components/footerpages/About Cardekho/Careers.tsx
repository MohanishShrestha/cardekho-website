import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Careers() {
  return (
    <div className="min-h-screen bg-background px-6 py-12 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl text-green-600">
            Careers With Us
          </h1>
          <p className="mx-auto max-w-3xl text-muted-foreground text-lg">
            Join CarDekho and help shape the future of digital car buying with
            innovation and impact.
          </p>
        </div>
        <Separator className="mb-12 bg-green-500" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Engineering",
            "Design",
            "Marketing",
            "Sales",
            "Data & AI",
            "Operations",
          ].map((role) => (
            <Card key={role} className="rounded-2xl border-green-400">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">{role}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Work with talented teams, solve real-world problems, and grow
                your career with us.
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
