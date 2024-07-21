'use client';

import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/support", label: "Support" },
  ];
  return (
    <nav className="flex justify-between p-6">
      <div className="flex items-center">
        <h1 className="text-4xl font-bold">duckb3ar</h1>
      </div>
      <div className="flex items-center">
        {navLinks.map((navLink) => (
          <Link key={navLink.href} href={navLink.href} className="text-xl mx-4">
            {navLink.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;


