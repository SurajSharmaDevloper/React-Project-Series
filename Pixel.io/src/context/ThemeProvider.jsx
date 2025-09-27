import React, { createContext, useContext, useState, useEffect } from "react";

// Create Context
const ThemeProviderContext = createContext({
  theme: "system",
  setTheme: () => {},
});

export const ThemeProvider = ({ children, defaultTheme = "system", storageKey = "theme" }) => {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(storageKey) || defaultTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = (currentTheme) => {
      root.classList.remove("light", "dark");

      if (currentTheme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
        root.classList.add(systemTheme);
        return;
      }

      root.classList.add(currentTheme);
    };

    applyTheme(theme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => theme === "system" && applyTheme("system");
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const setTheme = (newTheme) => {
    localStorage.setItem(storageKey, newTheme);
    setThemeState(newTheme);
  };

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

// Custom hook
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
