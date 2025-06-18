
"use client";

import type React from 'react';
import { createContext, useContext, useEffect } from 'react';

type Theme = "light"; // Only light theme is supported

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeProviderState {
  theme: Theme;
}

const initialState: ThemeProviderState = {
  theme: "light", 
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
}: ThemeProviderProps) {
  const theme: Theme = "light"; // Hardcode theme to light

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Always apply the light theme class
    root.classList.remove("dark"); // Remove dark if it was somehow set
    root.classList.add("light"); 
    
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
