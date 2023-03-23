import React, { ReactNode } from "react";
import { useState } from "react";
import { createContext } from "react";

interface Props {
  children: ReactNode;
}

interface ThemeContextValue {
  currentTheme: string | null;
  setCurrentTheme: (theme: string | null) => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  currentTheme: null,
  setCurrentTheme: () => {},
});

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<string | null>(
    localStorage.getItem("theme") || "dark"
  );
  const value: ThemeContextValue = { currentTheme, setCurrentTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
