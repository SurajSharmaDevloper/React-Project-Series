// src/components/Navbar.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "@/components/blocks/DarkModeToggle";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-neutral-600 dark:bg-neutral-950 relative z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            SurajSharma.in
          </span>
        </Link>

        {/* Right buttons */}
        <div className="flex items-center space-x-3 md:order-2">
          {/* Dark mode button (no functionality) */}
          <DarkModeToggle />

          {/* CTA */}
          

          {/* Hamburger */}
          <Button
            type="button"
            variant="none"
            size="icon"
            className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm
            rounded-lg md:hidden  "
            aria-controls="navbar-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon/>
          </Button>
        </div>

        {/* Nav links */}
        <div
          id="navbar-menu"
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full md:static md:block md:w-auto md:order-1`}
        >
          <ul
            className="flex flex-col font-medium p-4 md:p-0 mt-1 border border-gray-100 
            rounded-b-lg bg-neutral-50 md:space-x-8 rtl:space-x-reverse md:flex-row 
            md:mt-0 md:border-0 md:bg-neutral-50 dark:bg-neutral-950 md:dark:bg-neutral-950 
            dark:border-gray-700"
          >
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm 
                md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 
                dark:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 
                dark:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 
                dark:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 
                dark:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
