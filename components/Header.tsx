"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

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
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-22 w-22 text-white hover:text-black" />
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
    </header>
  );
};

export default Header;
