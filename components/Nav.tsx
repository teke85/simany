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
    title: "Gallery & Reviews",
    url: "/gallery",
  },
  {
    id: 5,
    title: "Pricing",
    url: "/pricing",
  },
  {
    id: 6,
    title: "Contact Us",
    url: "/contact",
  },
];

const Nav = () => {
  return (
    <nav className="flex gap-4 items-center uppercase font-bold justify-center">
      {links.map((link) => (
        <Link
          className="duration-500 text-white relative"
          key={link.id}
          href={link.url}
        >
          <span className="hover:text-red-500 duration-300 font-bold font-[family-name:var(--font---font-rethink)]">
            {link.title}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
