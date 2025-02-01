"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reviews from "@/components/Reviews";

const images = [
  {
    src: "/assets/images/gallery/galleryimage_1.jpg",
    alt: "Gallery image 1",
  },
  {
    src: "/assets/images/gallery/galleryimage_2.jpg",
    alt: "Gallery image 2",
  },
  { src: "/assets/images/gallery/galleryimage_3.jpg", alt: "Gallery image 3" },
  { src: "/assets/images/gallery/galleryimage_4.jpg", alt: "Gallery image 4" },
  { src: "/assets/images/gallery/galleryimage_5.jpg", alt: "Gallery image 5" },
  { src: "/assets/images/gallery/galleryimage_6.jpg", alt: "Gallery image 6" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const newIndex =
      direction === "prev"
        ? (selectedImage - 1 + images.length) % images.length
        : (selectedImage + 1) % images.length;
    setSelectedImage(newIndex);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-[#022461] mb-8"
        >
          Our Gallery
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => openImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </motion.div>
        <Reviews />
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeImage}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
                onClick={closeImage}
              >
                <X className="w-8 h-8" />
              </button>
              <Image
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
