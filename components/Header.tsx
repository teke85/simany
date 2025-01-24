"use client";

// import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

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

  // const navItems = [
  //   { name: "about", scroll: true },
  //   { name: "services", scroll: true },
  //   { name: "pricing", scroll: false },
  //   { name: "why choose Us", scroll: true },
  //   { name: "testimonials", scroll: true },
  //   { name: "contact", scroll: false },
  // ];

  // const NavLinks = () => (
  //   <ul className="space-y-4 font-[family-name:var(--font-rethink)] md:space-y-0 md:flex md:space-x-6">
  //     {navItems.map((item) => (
  //       <li key={item.name}>
  //         {item.scroll ? (
  //           <a
  //             href={`${item.name}`}
  //             // onClick={(e) => scrollToSection(e, item.name)}
  //             className="text-gray-600 hover:text-gray-900 transition-colors block py-2 md:py-0"
  //           >
  //             {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
  //           </a>
  //         ) : (
  //           <Link
  //             href={`/${item.name.toLowerCase()}`} // Navigate to separate pages for "Pricing" and "Contact"
  //             className="text-gray-600 hover:text-gray-900 transition-colors block py-2 md:py-0"
  //           >
  //             {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
  //           </Link>
  //         )}
  //       </li>
  //     ))}
  //   </ul>
  // );

  return (
    <header className="w-full z-10 transition-all duration-300 mx-auto border-b-4 border-red-600">
      <div className="bg-[#022461] mx-auto px-4 py-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-4xl text-white/55 font-[family-name:var(--font-lora)] font-bold"
        >
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
            <MobileNav />
            {/* <nav className="mt-6">
              <NavLinks />
            </nav> */}
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <Nav />
          {/* <NavLinks /> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
