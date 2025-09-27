import React, { useState } from "react";
import { CircleUserRound, User, LogOut, Settings, Route } from "lucide-react";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Profile", icon: <User className="w-4 h-4 mr-2" /> },
    { name: "Track Order", icon: <Route className="w-4 h-4 mr-2" /> },
    { name: "Settings", icon: <Settings className="w-4 h-4 mr-2" /> },
    { name: "Logout", icon: <LogOut className="w-4 h-4 mr-2" /> },
  ];

  return (
    <div className="relative">
      {/* Profile Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <CircleUserRound className="w-6 h-6 font-medium text-gray-800 dark:text-gray-200" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg overflow-hidden z-50">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className="flex items-center w-full px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={() => {
                console.log(`${item.name} clicked`);
                setOpen(false);
              }}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
