"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change state when scrolled past 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 1 }}
      animate={{ y: isScrolled ? 0 : -100, opacity: isScrolled ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 border-b-4 border-red-600 ${
        isScrolled
          ? "bg-[#022461] shadow-lg backdrop-blur-lg"
          : "bg-transparent"
      }`}
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
  );
};

export default Header;
