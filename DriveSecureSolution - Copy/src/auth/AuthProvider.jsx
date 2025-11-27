import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = sessionStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  // keep session in sync
  useEffect(() => {
    if (user) sessionStorage.setItem("user", JSON.stringify(user));
    else sessionStorage.removeItem("user");
  }, [user]);

  // Login logic with 3 roles
  const login = async (username, password) => {
    let role = null;

    if (username === "admin" && password === "1234") role = "Admin";
    else if (username === "dealer" && password === "dealer123") role = "Dealer";
    else if (username === "issuer" && password === "issuer123") role = "Issuer";

    if (role) {
      const fakeUser = { username, role };
      setUser(fakeUser);
      // return the user object so callers can redirect based on role
      return fakeUser;
    }
    return null;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
