"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import type React from "react"; // Added import for React

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Static header for initial view */}
      <header
        className={`w-full z-40 bg-[#022461] transition-all duration-300 ${
          isScrolled ? "hidden" : "block"
        }`}
      >
        <div className="mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-4xl text-white/55 font-[family-name:var(--font-lora)] font-bold"
          >
            SPDS
          </Link>
          <nav className="hidden lg:block">
            <Nav />
          </nav>
          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white hover:text-black" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <MobileNav onLinkClick={handleLinkClick} />
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Sticky header for scrolled view */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isScrolled ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 border-b-4 border-red-600 bg-[#022461] shadow-lg backdrop-blur-lg`}
      >
        <div className="mx-auto px-4 py-4 flex justify-between items-center transition-all">
          <Link
            href="/"
            className="text-4xl text-white/55 font-[family-name:var(--font-lora)] font-bold"
          >
            SPDS
          </Link>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white hover:text-black" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <MobileNav onLinkClick={handleLinkClick} />
            </SheetContent>
          </Sheet>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <Nav />
          </nav>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
