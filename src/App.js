import "./App.css";
import { createContext, useState } from "react";
import Homepage from "./components/Homepage";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Homepage toggleTheme={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
