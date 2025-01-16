"use client";

// import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 0);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const scrollToSection = (
  //   e: React.MouseEvent<HTMLAnchorElement>,
  //   id: string
  // ) => {
  //   e.preventDefault();
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const navItems = [
    "about",
    "services",
    "pricing",
    "why choose Us",
    "testimonials",
    "contact",
  ];

  const NavLinks = () => (
    <ul className="space-y-4 md:space-y-0 md:flex md:space-x-6">
      {navItems.map((item) => (
        <li key={item}>
          <Link
            href={`#${item}`}
            // onClick={(e) => scrollToSection(e, item)}
            className="text-gray-600 hover:text-gray-900 transition-colors block py-2 md:py-0"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="w-full z-10 transition-all duration-300 mx-auto">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-4xl text-blue-600 font-bold">
          SPDS
        </Link>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="mt-6">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
};

export default Header;
