// src/context/AuthContext.js
import React, { createContext, useState } from "react";

export const AuthContext = createContext();
// const { user } = useContext(AuthContext);
// console.log("Logged in user:", user);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
