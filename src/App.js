import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Router } from "./Router";

function App() {
  const [isDark, setIsDark] = useState(false);
  const handleToggleTheme = () => {
    setIsDark((currVal) => !currVal);
  };

  return (
    <div className={`${isDark && "dark"}`}>
      <div className="flex dark:bg-zinc-900">
        <Navbar />
        <main className="pt-2 px-4 w-full dark:text-white min-h-screen">
          <Header handleToggleTheme={handleToggleTheme} isDark={isDark} />
          <Router />
        </main>
      </div>
    </div>
  );
}

export default App;
