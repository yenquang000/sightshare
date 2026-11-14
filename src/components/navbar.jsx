import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  { name: "Donate", href: "/donate" },
];

const navLinks = menuItems.filter((item) => item.name !== "Donate");
const cta = menuItems.find((item) => item.name === "Donate");

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href) => !href.includes("#") && pathname === href;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200",
        isScrolled || menuOpen
          ? "border-rule bg-ivory/95 backdrop-blur"
          : "border-rule/70 bg-ivory",
      )}
    >
      <nav className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-8">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <img src={Logo} alt="SightShare Logo" className="h-11 w-auto" />
          <span className="font-serif text-[21px] leading-none text-ink">
            Sightshare
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={cn(
                  "text-sm underline-offset-[6px] transition-colors duration-150",
                  isActive(item.href)
                    ? "text-ink underline decoration-brand decoration-[1.5px]"
                    : "text-smoke hover:text-ink",
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* CTA */}
          <Link
            to={cta.href}
            className={cn(
              "hidden rounded-[10px] border px-4 py-2 text-sm leading-none transition-colors sm:inline-flex",
              isActive(cta.href)
                ? "border-brand bg-brand text-ivory"
                : "border-ash text-ink hover:bg-halo",
            )}
          >
            {cta.name}
          </Link>

          {/* Mobile toggle button */}
          <button
            className="grid size-10 place-items-center rounded-[10px] border border-ash text-ink transition-colors hover:bg-halo lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden border-rule bg-ivory transition-[max-height] duration-300 lg:hidden",
          menuOpen ? "max-h-[80vh] border-t" : "max-h-0",
        )}
      >
        <ul className="mx-auto max-w-[1200px] px-5 py-2 sm:px-8">
          {menuItems.map((item) => (
            <li key={item.name} className="border-b border-rule last:border-b-0">
              <Link
                to={item.href}
                className="flex items-center justify-between py-4 font-serif text-xl"
                onClick={() => setMenuOpen(false)}
              >
                <span className={isActive(item.href) ? "mark" : undefined}>
                  {item.name}
                </span>
                <span className="text-sm font-sans text-smoke">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
