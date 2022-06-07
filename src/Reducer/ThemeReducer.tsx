import React, { useState, createContext } from "react";

// interface
type IContextTheme = {
  theme: string;
  setTheme: (c: string) => void;
};

interface IThemeProvider {
  children: React.ReactNode;
}

export const ThemeContext = createContext<IContextTheme>({
  theme: "light",
  setTheme: () => {},
});

export const ThemeReducer = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState<string>("light");

  const handleClick = () => {
    localStorage.setItem("theme", theme);
    setTheme(theme === "light" ? "dark" : "light");
    const THeme = localStorage.getItem("theme");
    if (THeme === "light") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };
  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {/* <button onClick={handleClick} className="py-2 px-5 bg-blue-500">
        {theme === "light" ? "🌙" : "☀️"}
      </button> */}
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeReducer;
