"use client";

import CustomCarousel from "@/components/CustomCarousel";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen pt-50 h-screen w-full flex items-center justify-center bg-gray-300"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="p-8 md:w-1/2 flex font-[family-name:var(--font-lora)] flex-col items-start justify-center mb-8 md:mb-0">
          <h1 className="text-xl lg:text-5xl tracking-normal text-start font-bold mb-4">
            Welcome to Simany Professional Driving School Limited
          </h1>
          <p className="text-xl mb-8 font-[family-name:var(--font-rethink)]">
            Your First Choice Driving School.
          </p>
          <a
            href="#contact"
            className="bg-red-500 font-[family-name:var(--font-rethink)] text-white px-6 py-3 rounded-full cursor-pointer text-lg font-semibold hover:bg-yellow-600 transition-colors"
          >
            Get in touch
          </a>
        </div>
        <div className="md:w-1/2 h-full">
          <CustomCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
