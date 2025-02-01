"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    image:
      "https://media.istockphoto.com/id/1270375911/photo/happy-african-girl-with-driving-license-showing-thumb-up.jpg?s=1024x1024&w=is&k=20&c=I_2jKJn0A9Ifg9ZYVGsDAJvE-FJb_8iBgvbrHtpccRs=",
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

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Carousel */}
      <AnimatePresence initial={false} custom={currentSlide}>
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            custom={currentSlide}
            variants={{
              enter: (direction: number) => ({
                x: direction > 0 ? "100%" : "-100%",
                opacity: 0,
              }),
              center: { x: 0, opacity: 1 },
              exit: (direction: number) => ({
                x: direction < 0 ? "100%" : "-100%",
                opacity: 0,
              }),
            }}
            initial="enter"
            animate={index === currentSlide ? "center" : "exit"}
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className={`absolute inset-0 w-full h-full ${
              index === currentSlide ? "block" : "hidden"
            }`}
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
            <div className="relative h-full container mx-auto px-16 lg:px-10 flex items-center">
              <motion.div
                className="max-w-2xl text-white font-[family-name:var(--font-rethink)]"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                <motion.h1
                  variants={textVariants}
                  custom={0}
                  className="text-4xl lg:text-6xl font-bold mb-4"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  variants={textVariants}
                  custom={1}
                  className="text-xl mb-8"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.a
                  href="#contact"
                  variants={textVariants}
                  custom={2}
                  className="bg-red-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-600/80 transition-colors inline-block"
                >
                  Get Started
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

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
