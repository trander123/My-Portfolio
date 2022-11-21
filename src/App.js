import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Router } from "./Router";

function App() {
  const [isDark, setIsDark] = useState(false);
  const handleToggleTheme = () => {
    setIsDark((currVal) => !currVal);
  };

  useEffect(() => {
    alert(
      "Site is under construction sorry for the inconvenience.\nBut here is latest commit."
    );
  }, []);

  return (
    <div className={`${isDark && "dark"}`}>
      <div className="flex dark:bg-zinc-900">
        <Navbar />
        <div className="pt-2 px-4 w-full dark:text-white min-h-screen">
          <Header handleToggleTheme={handleToggleTheme} isDark={isDark} />
          <Router />
        </div>
      </div>
    </div>
  );
}

export default App;
