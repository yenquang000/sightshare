import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/ss-logo.png";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "About Us", href: "/#about" },
  { name: "Our Team", href: "/team" },
  { name: "Impacts", href: "/impacts" },
  { name: "Chapters", href: "/chapters" },
  { name: "Gallery", href: "/gallery" },
  { name: "Partnerships", href: "/partnerships" },
];

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50">
      <nav className="mx-auto flex items-center justify-between px-6 py-2 bg-white shadow-md lg:px-12">
        {/* Logo */}
        <Link
          to="/"
          className="cursor-pointer flex items-center gap-2 text-[#59769d] font-serif"
        >
          <img src={Logo} alt="SightShare Logo" className="h-20 w-auto" />
          <span className="text-xl font-bold">Sightshare</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden gap-8 text-sm lg:flex font-medium text-[#59769d] font-serif">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className="text-gray-700 hover:text-black transition-colors duration-150 hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute top-full left-0 w-full bg-white shadow-md lg:hidden transition-all duration-250",
          menuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden",
        )}
      >
        <ul className="flex flex-col items-center gap-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className="text-gray-700 text-lg hover:underline "
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
