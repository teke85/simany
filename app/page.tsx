import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FAQ from "@/components/Faq";
import Help from "@/components/Help";

export default function Home() {
  return (
    <main className="text-gray-900 max-w-7xl mx-auto">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Help />
      <Footer />
    </main>
  );
}
