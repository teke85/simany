import Link from "next/link";
import React from "react";

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
    title: "Gallery & Review",
    url: "/gallery",
  },
  {
    id: 4,
    title: "Contact Us",
    url: "/contact",
  },
];

const MobileNav = () => {
  return (
    <nav className="flex flex-col">
      {links.map((link) => (
        <Link
          className="duration-500 text-black relative"
          key={link.id}
          href={link.url}
        >
          <span>{link.title}</span>
        </Link>
      ))}
    </nav>
  );
};

export default MobileNav;
