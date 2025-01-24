"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
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
        <h2 className="text-4xl font-bold text-center text-[#022461] mb-8">
          Our Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
        <Reviews />
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
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
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-gray-300"
              onClick={() => navigateImage("prev")}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-gray-300"
              onClick={() => navigateImage("next")}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
