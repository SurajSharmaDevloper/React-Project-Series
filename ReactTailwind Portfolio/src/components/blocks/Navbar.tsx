// src/components/Navbar.tsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "@/components/blocks/DarkModeToggle";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close menu after navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white border-neutral-600 dark:bg-neutral-950 relative z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-glow  text-xl mg:text-2xl lg:text-2xl text-neutral-900 font-bold whitespace-nowrap dark:text-neutral-100">
            Suraj<span className="text-indigo-500 text-glow">Sharma.in</span>
          </span>
        </Link>

        {/* Right buttons */}
        <div className="flex items-center space-x-3 md:order-2">
          <DarkModeToggle />

          {/* Hamburger */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="inline-flex items-center w-8 h-8 justify-center md:hidden"
            aria-controls="navbar-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon />
          </Button>
        </div>

        {/* Nav links */}
        <div
          id="navbar-menu"
          ref={menuRef}
          className={`${
            isOpen ? "block animate-slideDown" : "hidden"
          } absolute top-full left-0 w-full md:static md:block md:w-auto md:order-1`}
        >
          <ul
            className="flex flex-col font-medium p-4 md:p-0 mt-1 border border-neutral-100 
            rounded-b-lg bg-neutral-50 md:space-x-8 rtl:space-x-reverse md:flex-row 
            md:mt-0 md:border-0 md:bg-neutral-50 dark:bg-neutral-950 md:dark:bg-neutral-950 
            dark:border-gray-700"
          >
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-2 px-3 md:p-0 rounded-sm transition-colors
                    ${
                      location.pathname === link.path
                        ? "text-white bg-indigo-700 md:bg-transparent md:text-indigo-700 md:dark:text-indigo-500"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-700 md:dark:hover:text-indigo-500 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-100 md:dark:hover:bg-transparent"
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
