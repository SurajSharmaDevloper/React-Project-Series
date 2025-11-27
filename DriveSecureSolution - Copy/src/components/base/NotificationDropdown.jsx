import React, { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";

const NotificationDropdown = ({ notifications = [] }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const count = notifications.length;

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            {/* BELL ICON */}
            <div className="relative cursor-pointer" onClick={() => setOpen(!open)}>
                <Bell className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                {count > 0 && (
                    <span className="
            absolute -top-1 -right-1 
            bg-green-600 text-white text-xs font-semibold 
            w-5 h-5 flex items-center justify-center rounded-full shadow-md
          ">
                        {count}
                    </span>
                )}
            </div>

            {/* DROPDOWN */}
            {open && (
                <div className="
          absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-neutral-300
          z-50 overflow-hidden
        ">
                    <div className="px-4 py-2 font-semibold border-b border-neutral-300 bg-gray-50">
                        Notifications ({count})
                    </div>

                    <div className="max-h-60 overflow-y-auto">
                        {count > 0 ? (
                            notifications.map((note, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 text-sm border-b border-neutral-300 last:border-b-0  hover:bg-gray-100"
                                >
                                    {note}
                                </div>
                            ))
                        ) : (
                            <div className="px-4 py-3 text-sm text-gray-500">
                                No new notifications
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotificationDropdown;
