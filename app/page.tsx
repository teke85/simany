import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/Faq";
import Help from "@/components/Help";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroCarousel from "@/components/HeroCarousel";
import Marquee from "@/components/Marquee";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Driving Lessons in Mongu | Simany Driving School",
  description:
    "Learn to drive with Simany Driving School in Mongu. We offer comprehensive driving courses, experienced instructors, and flexible scheduling options.",
  keywords: [
    "driving school Mongu",
    "driving lessons",
    "learn to drive",
    "Simany",
    "driver education Mongu",
  ],
};

export default function Home() {
  return (
    <main className="text-gray-900 max-w-9xl mx-auto">
      <HeroCarousel />
      <Marquee />
      <About />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <FAQ />
      <Help />
      {/* <CallUs /> */}
      {/* Add structured data for local business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DrivingSchool",
            name: "Simany Driving School",
            url: "https://www.simanydrivingschool.online",
            logo: "https://www.simanydrivingschool.online/logo.png",
            description:
              "Professional driving school in Mongu offering comprehensive driving lessons.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Room 12 Napsa Building",
              addressLocality: "Mongu",
              addressRegion: "Western Province",
              addressCountry: "Zambia",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-15.2545", // Replace with actual coordinates
              longitude: "23.1506", // Replace with actual coordinates
            },
            telephone: "+260 979944220", // Replace with actual phone
            openingHours: "Mo-Fr 08:00-17:00",
            priceRange: "ZMW 3000",
          }),
        }}
      />
    </main>
  );
}
