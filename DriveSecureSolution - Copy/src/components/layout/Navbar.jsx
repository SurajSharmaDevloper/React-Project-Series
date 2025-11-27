import React, { useState, useRef, useEffect } from "react";
import Logo from "../base/Logo";
import ProfileIcon from "../base/ProfileIcon";
import { useAuth } from "../../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import NotificationDropdown from "../base/NotificationDropdown";

const myNotifications = [
  "New dealer registered",
  "Stock updated",
  "Order delivered successfully"
];

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/login", { replace: true });
  };

  // close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow p-5  absolute top-0 left-0 ">
      <nav className="flex justify-between items-center">
        <div>
          <Logo />
        </div>

        <div className="max-[700px]:hidden">
          <h1 className="text-3xl font-semibold text-secondary">
            Drive Secure <span className="text-primary">Solution</span>
          </h1>
        </div>

        <div className="relative flex justify-center items-center gap-2" ref={ref}>
          <button
            type="button"
            onClick={() => setOpen((s) => !s)}
            className="flex items-center gap-3 px-3 py-1 rounded hover:bg-gray-100"
            aria-expanded={open}
            aria-haspopup="true"
          >
            <ProfileIcon />
            <div className="text-left">
              <div className="text-sm font-medium text-gray-800">
                {user?.username || "User"}
              </div>
              <div className="text-xs text-gray-500">{user?.role || "-"}</div>
            </div>


          </button>
          <NotificationDropdown notifications={myNotifications} />

          {open && (
            <div className="absolute right-10 top-10 mt-2 w-48 bg-white border rounded shadow-lg z-50">
              <div className="p-3 border-b">
                <div className="text-sm font-semibold">{user?.username}</div>
                <div className="text-xs text-gray-500">{user?.role}</div>
              </div>
              <div className="p-2">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-sm text-red-600"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
