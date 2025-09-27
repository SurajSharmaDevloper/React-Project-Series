import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeProvider";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="fixed bottom-5 right-5">
      <button
        onClick={toggleTheme}
        className="relative p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors"
      >
        <Sun className={`h-5 w-5 transition-all ${theme === "dark" ? "scale-0 -rotate-90" : "scale-100 rotate-0"}`} />
        <Moon className={`absolute top-2 left-2 h-5 w-5 transition-all ${theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90"}`} />
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  );
};

export default DarkModeToggle;
