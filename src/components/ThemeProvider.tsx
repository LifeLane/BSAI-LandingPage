
"use client";

import type React from 'react';
import { createContext, useContext, useEffect } from 'react';

type Theme = "dark"; // Only dark theme is supported

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeProviderState {
  theme: Theme;
  // setTheme function is removed as theme is fixed
}

const initialState: ThemeProviderState = {
  theme: "dark", 
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
}: ThemeProviderProps) {
  const theme: Theme = "dark"; // Hardcode theme to dark

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Always apply the dark theme class
    root.classList.remove("light"); // Remove light if it was somehow set
    root.classList.add("dark"); 
    
    // Remove localStorage interaction as theme is fixed
    // localStorage.setItem(storageKey, theme); 
  }, []); // Empty dependency array, runs once on mount

  const value = {
    theme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
