"use client";

import type React from "react";
import { type ReactNode, useEffect, useRef } from "react";

interface MarqueeProps {
  children: ReactNode;
  play: boolean;
  speed?: number;
}

const CustomMarquee: React.FC<MarqueeProps> = ({
  children,
  play,
  speed = 50,
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    if (!marqueeElement) return;

    const marqueeAnimation = marqueeElement.animate(
      [{ transform: "translateX(100%)" }, { transform: "translateX(-100%)" }],
      {
        duration: speed * 1000,
        iterations: Number.POSITIVE_INFINITY,
      }
    );

    if (!play) {
      marqueeAnimation.pause();
    } else {
      marqueeAnimation.play();
    }

    return () => {
      marqueeAnimation.cancel();
    };
  }, [play, speed]);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div ref={marqueeRef} className="inline-block">
        {children}
      </div>
    </div>
  );
};

export default CustomMarquee;
