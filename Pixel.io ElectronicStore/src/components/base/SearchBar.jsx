import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react"; // If you don't use lucide, I can replace with SVG

export default function SearchBar() {
    const categories = ["All Categories", "Electronics", "Fashion", "Home", "Sports"];
    const [selected, setSelected] = useState("All Categories");
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className="w-full max-w-2xl border border-gray-300 rounded-lg flex items-center px-4 py-2 bg-white">

            {/* Dropdown */}
            <div ref={dropdownRef} className="max-[600px]:hidden relative flex items-center">
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-1 text-sm font-medium text-gray-600"
                >
                    {selected}
                    <span className={`text-[10px] transition ${open ? "rotate-180" : ""}`}>
                        <ChevronDown size={14} />
                    </span>
                </button>

                {open && (
                    <div className="absolute top-8 left-0 bg-white border border-gray-300 text-gray-600 shadow-lg rounded-md w-40 z-50">
                        {categories.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setSelected(item);
                                    setOpen(false);
                                }}
                                className="w-full text-left px-3 py-1.5 hover:bg-gray-100 text-sm"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Divider */}
            <div className="mx-3 w-px h-5 bg-gray-300" />

            {/* Input */}
            <input
                type="text"
                placeholder="Search for items"
                className="grow outline-none text-sm placeholder-gray-400"
            />

            {/* Search Icon */}
            <Search size={18} className="text-gray-500 cursor-pointer hover:text-gray-700" />
        </div>
    );
}
