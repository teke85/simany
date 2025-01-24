import React from "react";
import CustomMarquee from "./CustomMarquee";
import ScrollingLogo from "./ScrollingLogo";

const Marquee = () => {
  return (
    <div className="w-full bg-gray-100 py-4">
      <CustomMarquee play={true} speed={100}>
        <div className="flex space-x-8">
          <ScrollingLogo />
          <ScrollingLogo />
          <ScrollingLogo />
          <ScrollingLogo />
          <ScrollingLogo />
          <ScrollingLogo />
          <ScrollingLogo />
          <ScrollingLogo />
          <ScrollingLogo />
          <ScrollingLogo />
          <ScrollingLogo />
          <ScrollingLogo />
          <ScrollingLogo />
          <ScrollingLogo />
          <ScrollingLogo />
        </div>
      </CustomMarquee>
    </div>
  );
};

export default Marquee;
