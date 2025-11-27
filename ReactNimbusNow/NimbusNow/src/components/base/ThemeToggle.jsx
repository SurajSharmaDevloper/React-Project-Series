import React, { useState } from "react";
import sun from "../../assets/sun.png"
import moon from "../../assets/moon.png"


const ThemeToggle = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <div
            onClick={() => setEnabled(!enabled)}
            className={`w-12 h-6 flex items-center rounded-full  cursor-pointer border border-[#e2d2d2] transition-all duration-300 ${enabled ? "bg-[#d9b8eb]" : "bg-yellow-300"
                }`}
        >
            <div
                className={`w-6 h-6  rounded-full bg-white shadow-md transform transition-transform duration-300 ${enabled ? "translate-x-6" : "translate-x-0 "
                    } flex items-center justify-center`}
            >
                <img
                    src={enabled ? moon : sun}
                    alt="icon"
                    className="w-4 h-4"
                />
            </div>
        </div>
    );
};

export default ThemeToggle;
