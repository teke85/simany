"use client";

import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-10 p-3 rounded-full bg-red-500 text-white/90 shadow-lg z-50 transition-opacity duration-300"
          aria-label="Scroll to top"
        >
          <span className="text-xl">↑</span>
        </button>
      )}
    </>
  );
};

export default BackToTop;
