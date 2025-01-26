import React from "react";
import CustomMarquee from "./CustomMarquee";
import ScrollingLogo from "./ScrollingLogo";

const Marquee = () => {
  const numberOfLogos = 15;
  return (
    <div className="w-full bg-gray-100 py-4">
      <CustomMarquee play={true} speed={70}>
        <div className="flex space-x-8">
          {Array.from({ length: numberOfLogos }).map((_, index) => (
            <ScrollingLogo key={index} />
          ))}
        </div>
      </CustomMarquee>
    </div>
  );
};

export default Marquee;
