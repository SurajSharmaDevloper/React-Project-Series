import React from "react";
import { useTheme } from "../../context/ThemeContext";
import sun from "../../assets/sun.png"
import moon from "../../assets/moon.png"


const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div
            onClick={toggleTheme}
            className={`w-12 h-6 flex items-center rounded-full cursor-pointer border transition-all duration-300 ${isDark ? "bg-[#d9b8eb] border-[#a88fbf]" : "bg-yellow-300 border-[#e2d2d2]"
                }`}
        >
            <div
                className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${isDark ? "translate-x-6" : "translate-x-0"
                    } flex items-center justify-center`}
            >
                <img
                    src={isDark ? moon : sun}
                    alt="theme-icon"
                    className="w-4 h-4"
                />
            </div>
        </div>
    );
};

export default ThemeToggle;
