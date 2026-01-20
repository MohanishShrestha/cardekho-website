import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
const aboutLinks = [
  { label: "About", href: "/about" },
  { label: "Careers With Us", href: "/careers" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Corporate Policies", href: "/corporate-policies" },
  { label: "Investors", href: "/investors" },
  { label: "FAQs", href: "/faqs" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      {/* Top Highlights Row */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-10 px-6 text-gray-700">
        {[
          {
            icon: "/trophy.png",
            title: "India's #1",
            subtitle: "Largest Auto portal",
          },
          { icon: "car.png", title: "Car Sold", subtitle: "Every 4 minute" },
          {
            icon: "tag.png",
            title: "Offers",
            subtitle: "Stay updated pay less",
          },
          {
            icon: "/compare.png",
            title: "Compare",
            subtitle: "Decode the right car",
          },
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <img src={item.icon} className="h-10" />
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <Separator />

      {/* Middle Footer Columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-12 text-gray-700">
        {/* About CarDekho */}
        {/* <Card className="p-4 bg-white border-none shadow-none">
          <h4 className="font-semibold mb-3">ABOUT CARDEKHO</h4>
          <ul className="space-y-2 text-sm">
            {[
              "About",
              "Careers With Us",
              "Terms & Conditions",
              "Privacy Policy",
              "Corporate Policies",
              "Investors",
              "FAQs",
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Card> */}
        <Card className="p-4 bg-white border-none shadow-none">
          <h4 className="font-semibold mb-3 text-green-600">ABOUT CARDEKHO</h4>

          <ul className="space-y-2 text-sm">
            {aboutLinks.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-muted-foreground hover:text-green-600 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Card>

        {/* Connect With Us */}
        <Card className="p-4 bg-white border-none shadow-none">
          <h4 className="font-semibold mb-3">CONNECT WITH US</h4>
          <ul className="space-y-2 text-sm">
            {[
              "Feedback",
              "Contact Us",
              "Advertise With Us",
              "Become Partner Dealer",
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Card>

        {/* Others */}
        <Card className="p-4 bg-white border-none shadow-none">
          <h4 className="font-semibold mb-3">OTHERS</h4>
          <ul className="space-y-2 text-sm">
            {[
              "TrucksDekho",
              "TyreDekho",
              "TractorsDekho",
              "Girnar Vision Fund",
              "Emergency Response",
              "Car Sales Trends",
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Card>

        {/* App Store + Ventures */}
        <Card className="p-4 bg-white border-none shadow-none">
          <h4 className="font-semibold mb-3">EXPERIENCE CARDEKHO APP</h4>
          <div className="flex gap-3 mb-6">
            <img src="/appstore.png" className="h-10 cursor-pointer" />
            <img src="/playstore.png" className="h-10 cursor-pointer" />
          </div>

          <h4 className="font-semibold mb-3">CARDEKHO GROUP VENTURES</h4>
          <div className="flex flex-col gap-3">
            {["/bikedekho.jpg", "/ruppy.png", "/zigwheels.jpg"].map(
              (icon, i) => (
                <img
                  key={i}
                  src={icon}
                  className="h-10 w-auto object-contain"
                />
              ),
            )}
          </div>
        </Card>
      </div>

      <Separator />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 text-sm text-gray-700">
        <p>© 2025 Girnar Software Pvt. Ltd.</p>

        <div className="flex items-center gap-4 mt-3 md:mt-0">
          <span className="font-semibold">Connect:</span>
          {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
            <Icon key={i} size={18} className="cursor-pointer" />
          ))}
        </div>
      </div>
    </footer>
  );
}
