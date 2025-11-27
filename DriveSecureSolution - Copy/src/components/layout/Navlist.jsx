import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { href } from "react-router-dom";

const Navlist = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const navItems = [
    {
      label: "Insurance",
      dropdown: [
        { name: "New Insurance", href: "#" },
        { name: "Renew Insurance", href: "#" },
      ],
    },
    { label: "Wallet", href: "#" },
    { label: "Invoice", href: "#" },
    { label: "Commission Statement", href: "#" },
    {
      label: "Other Services",
      dropdown: [
        { name: "Endorsement", href: "#" },
        { name: "Cancellation", href: "#" },
        { name: "Price List", href: "#" },
        { name: "Policy Download", href: "#" },
        { name: "Price MIS", href: "#" },
      ],
    },
  ];

  return (
    <nav className="bg-secondary border-b border-gray-200 hidden fixed z-99 top-[104px] left-0 w-full max-[1070px]:block max-[680px]:top-[calc(100%-)] max-[680px]:left-0 max-[680px]:w-64 max-[680px]:h-[calc(100%-104px)] max-[680px]:fixed max-[680px]:z-999">
      <div className=" mx-auto px-4 max-[680px]:py-5 ">
        <ul className="flex flex-wrap max-[680px]:flex-nowrap max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-5 items-center justify-start space-x-6 py-3 text-gray-700 font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="relative group text-neutral-200">
              {item.dropdown ? (
                <>
                  {/* Dropdown trigger */}
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center space-x-1 hover:text-[#e36e53] transition"
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} />
                  </button>

                  {/* Dropdown menu */}
                  <div
                    className={`absolute left-0 mt-2 w-44 bg-secondary border rounded-md transition-all duration-200 z-50 ${
                      openDropdown === item.label
                        ? "block"
                        : "hidden group-hover:block"
                    }`}
                  >
                    <ul className="py-2">
                      {item.dropdown.map((sub, i) => (
                        <li key={i}>
                          <a
                            href={sub.href}
                            className="block px-4 py-2 text-sm hover:text-[#e36e53] hover:bg-gray-700"
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <a href={item.href} className="hover:text-[#e36e53] transition">
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navlist;
