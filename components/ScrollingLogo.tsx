import Image from "next/image";
import React from "react";

const images = [
  {
    id: 1,
    src: "/assets/images/gallery/Rtsa_logo.png",
    alt: "Description of image 1",
  },
];

function ScrollingLogo() {
  return (
    <div className="flex items-center justify-center flex-col gap-2">
      {images.map((image) => (
        <Image
          key={image.id}
          src={image.src}
          alt={image.alt}
          width={40}
          height={40}
          priority
        />
      ))}
      <span className="font-bold text-sm">RTSA ACCREDITED</span>
    </div>
  );
}

export default ScrollingLogo;
