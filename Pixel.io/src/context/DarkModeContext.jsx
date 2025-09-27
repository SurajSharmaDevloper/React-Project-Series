import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const DarkModeContext = createContext();

// Provider component
export const DarkModeProvider = ({ children }) => {
  // Initialize state from localStorage (or default false)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("darkMode");
      return stored ? JSON.parse(stored) : false;
    }
    return false;
  });

  // Toggle dark mode
  const toggleDarkMode = () => setIsDark((prev) => !prev);

  // Apply/remove dark class & store in localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook
export const useDarkMode = () => useContext(DarkModeContext);
