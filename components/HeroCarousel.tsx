"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Welcome to Simany Professional Driving School Limited",
    subtitle: "Your First Choice Driving School.",
    image:
      "https://media.istockphoto.com/id/1318536036/photo/driving-school-or-test-beautiful-young-woman-learning-how-to-drive-car-together-with-her.jpg?s=1024x1024&w=is&k=20&c=JPQgkzT4Nm8JaYTCSXedmfpFERCfXOXymlIdNim-09s=",
  },
  {
    title: "Driving Safely Is Our Top Priority",
    subtitle: "Learn from experienced instructors in a safe environment",
    image:
      "https://media.istockphoto.com/id/187078652/photo/teenager-driving.jpg?s=1024x1024&w=is&k=20&c=mSv6mFq9_kpZP-vfbt3uebDBRUwB69ceggjuwGjBxcs=",
  },
  {
    title: "Start Your Journey Today",
    subtitle: "Get your license with confidence",
    image: "/placeholder.svg?height=600&width=1200",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Carousel */}
      <div
        className="absolute inset-0 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full"
            style={{ left: `${index * 100}%` }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative h-full container mx-auto px-4 flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl mb-8">{slide.subtitle}</p>
                <a
                  href="#contact"
                  className="bg-red-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-600 transition-colors inline-block"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
