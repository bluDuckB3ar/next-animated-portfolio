import { useState } from "react";
import Link from "next/link";

/**
 * Navbar component for the website.
 * This component renders the navigation bar for the website.
 * It includes a logo and links to different pages.
 * It also includes a mobile menu for smaller screens.
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24 xl:px-42">
      <Link href="/" className="hidden md:block text-sky-900 text-sm font-bold flex items-center">
        <span className="flex text-orange-500">duck</span>
        <span className="text-blue-500">b3ar</span>
      </Link>

      <div className="hidden md:flex gap-10 align-center flex-row">
        {links.map((link) => (
          <Link key={link.title} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <button className="flex-col gap-2 flex" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="w-10 h-1 rounded-full bg-orange-500"></div>
          <div className="w-10 h-1 rounded-full bg-orange-500"></div>
          <div className="w-10 h-1 rounded-full bg-orange-500"></div>
        </button>

        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-screen h-screen gap-10 flex-col flex justify-center align-middle items-center bg-gray-900">
            {links.map((link) => (
              <Link key={link.title} href={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

const links = [
  { url: "/", title: "Home" },
  { url: "/blog", title: "Blog" },
  { url: "/contact", title: "Contact" },
  { url: "/support", title: "Support" },
];
