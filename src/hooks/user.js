'use client';
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem('user');
      try {
        if (storedValue) {
          const parsedUser = JSON.parse(storedValue);
          setUser(parsedUser);
        }
      } catch (error) {
        localStorage.removeItem('user'); // Remove corrupt data
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
