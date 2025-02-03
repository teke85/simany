"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Globe, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function Navigation() {
  return (
    <nav className="w-full bg-white hidden lg:block">
      {/* Top bar */}
      <div className="container font-[family-name:var(--font-rethink)] mx-auto px-8 py-2 flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <select className="bg-transparent border-none outline-none">
              <option>English</option>
            </select>
          </div>
          <div className="flex gap-3">
            <Link
              href="https://facebook.com"
              className="hover:text-red-500 duration-300"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="https://twitter.com" className="hover:text-red-500">
              <Twitter className="w-4 h-4" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="hover:text-red-500 duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            akabeswaimasikusnr@gmail.com
          </Link>
          <Link href="#" className="flex items-center gap-2">
            <Button variant="destructive">
              <Phone className="w-4 h-4" />
              (+260)-979944220
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
