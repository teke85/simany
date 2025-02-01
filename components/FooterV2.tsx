import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#022461] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Pages Column */}
          <div className="space-y-4 font-[family-name:var(--font-rethink)]">
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about-our-driving-school"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/gallery"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Gallery
              </Link>
            </nav>
          </div>

          {/* Resources Column */}
          <div className="space-y-4 font-[family-name:var(--font-rethink)]">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/high-way-code"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Highway Code
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Simany Student Application Form
              </Link>
              <Link
                href="/faq"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Faq
              </Link>
            </nav>
          </div>

          {/* Terms Column */}
          <div className="space-y-4 font-[family-name:var(--font-rethink)]">
            <h3 className="text-lg font-semibold mb-4">Terms</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms & conditions
              </Link>
            </nav>
          </div>

          {/* Socials Column */}
          <div className="space-y-4 font-[family-name:var(--font-rethink)]">
            <h3 className="text-lg font-semibold mb-4">Socials</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-white hover:text-gray-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-400 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-12 pt-8 border-t border-gray-800 font-[family-name:var(--font-rethink)]">
          <p className="text-gray-400 text-sm">
            © Copyright {new Date().getFullYear()} Simany Professional Driving
            School (PTY) LTD.
          </p>
        </div>
      </div>
    </footer>
  );
}
