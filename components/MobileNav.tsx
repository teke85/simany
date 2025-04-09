import Link from "next/link";
import React from "react";

interface links {
  id: number;
  title: string;
  url: string;
}

interface MobileNavProps {
  onLinkClick: () => void;
}

const links = [
  {
    id: 1,
    title: "About",
    url: "/about-our-driving-school",
  },
  {
    id: 2,
    title: "Services",
    url: "/services",
  },
  {
    id: 3,
    title: "Subjects We Teach",
    url: "/subjects",
  },
  {
    id: 4,
    title: "Pricing",
    url: "/pricing",
  },
  {
    id: 5,
    title: "Gallery & Review",
    url: "/gallery",
  },
  {
    id: 6,
    title: "Contact Us",
    url: "/contact",
  },
];

const MobileNav: React.FC<MobileNavProps> = ({ onLinkClick }) => {
  return (
    <nav className="flex flex-col items-left space-y-10 justify-center h-full">
      {links.map((link) => (
        <Link
          className="duration-500 text-black relative"
          key={link.id}
          href={link.url}
          onClick={onLinkClick}
        >
          <span className="text-4xl">{link.title}</span>
        </Link>
      ))}
    </nav>
  );
};
export default MobileNav;
