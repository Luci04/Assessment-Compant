import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [Error, setError] = useState(null);

  const login = (name, password) => {
    if (name === "avinash" && password === "12345678") {
      console.log(name, password);
      localStorage.setItem("CurrentUser-", name);
      setUser(name);
    } else {
      if (name !== "avinash") {
        setError("Incorrect UserName");
      } else if (password !== "12345678") {
        setError("Incorrect Password");
      } else {
        setError("Incorrect UserName and Password");
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("CurrentUser-");
    setUser(null);
  };

  useEffect(() => {
    const PrevUser = localStorage.getItem("CurrentUser-");
    if (PrevUser) {
      setUser(PrevUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, Error }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
