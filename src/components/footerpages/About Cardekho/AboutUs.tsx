import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background px-6 py-12 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight  md:text-5xl text-green-600">
            About CarDekho
          </h1>
          <p className="mx-auto max-w-3xl text-muted-foreground text-lg">
            CarDekho is your trusted digital marketplace for discovering,
            comparing, and buying cars with confidence. We bridge the gap
            between car buyers and sellers using technology, transparency, and
            trust.
          </p>
        </div>

        <Separator className="mb-12 bg-green-500" />

        {/* Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <Card className="rounded-2xl shadow-sm border-green-500">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              Our mission is to simplify the car buying journey by providing
              accurate information, genuine listings, and a seamless digital
              experience. We aim to empower users to make informed decisions
              without pressure or confusion.
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm border-green-500">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              We envision a future where buying or selling a car is as easy as
              shopping online. CarDekho strives to become the most reliable
              automotive platform by continuously innovating and putting
              customers first.
            </CardContent>
          </Card>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-semibold  text-center text-green-600">
            What We Offer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Wide Car Listings",
                desc: "Browse new and used cars from verified dealers and individual sellers across multiple brands.",
              },
              {
                title: "Smart Comparison",
                desc: "Compare cars based on price, features, mileage, and specifications to find the perfect match.",
              },
              {
                title: "Trusted Information",
                desc: "Access expert reviews, ratings, and detailed specifications backed by reliable data.",
              },
              {
                title: "User-Friendly Platform",
                desc: "Enjoy a fast, responsive, and intuitive interface built with modern web technologies.",
              },
              {
                title: "Secure Experience",
                desc: "We prioritize user privacy and data security to ensure a safe browsing experience.",
              },
              {
                title: "End-to-End Support",
                desc: "From discovery to decision, CarDekho supports you at every step of your car journey.",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="rounded-2xl shadow-sm border-green-400"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-green-600">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="text-center">
          <h3 className="mb-4 text-2xl font-semibold  text-green-600">
            Why Choose CarDekho?
          </h3>
          <p className="mx-auto max-w-3xl text-muted-foreground text-lg leading-relaxed">
            With a customer-first approach, cutting-edge technology, and a
            commitment to transparency, CarDekho makes car buying smarter,
            faster, and more reliable. Whether you are buying your first car or
            upgrading to your dream vehicle, we are here to help you drive
            forward.
          </p>
        </div>
      </div>
    </div>
  );
}
