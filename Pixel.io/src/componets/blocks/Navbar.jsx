import React, { useState } from "react";
import Logo from "../base/Logo";
import Input from "../base/Input";
import { NavLink } from "react-router-dom";
import { CircleUserRound, Menu, X } from "lucide-react"; // Hamburger icons
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Sales", path: "/sales" },
    { name: "Orders", path: "/orders" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-neutral-50 dark:bg-neutral-950 ">
      <div className="container mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        <div className="flex items-center justify-center gap-5">
          {/* Desktop Links */}
          <ul className="hidden md:flex gap-4">
            {links.map((link) => (
              <li className="px-3 py-2" key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? " text-indigo-600 "
                      : "text-neutral-700 dark:text-neutral-300  hover:text-indigo-600 transition-colors"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* Search Input (hidden on small screens) */}
          <div className=" mx-4 hidden md:block">
            <Input placeholder="Search product..." />
          </div>

          <div className=" hidden md:flex justify-center items-center">
            <ProfileDropdown />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden z-100 w-full p-5 mx-auto pb-4 flex flex-col gap-2 fixed top-[56px] left-0 bg-neutral-50 ">
          {/* Search Input */}
          <Input placeholder="Search product..." />

          {/* Links */}
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
