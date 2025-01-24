import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/Faq";
import Help from "@/components/Help";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroCarousel from "@/components/HeroCarousel";
import Marquee from "@/components/Marquee";

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
    </main>
  );
}
