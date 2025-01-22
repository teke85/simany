import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    title: "About",
    url: "/about",
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
    title: "Contact Us",
    url: "/contact",
  },
];

const Nav = () => {
  return (
    <nav className="flex gap-4">
      {links.map((link) => (
        <Link
          className="duration-500 text-black relative"
          key={link.id}
          href={link.url}
        >
          <span className="font-[family-name:var(--font-rethink)]">
            {link.title}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
