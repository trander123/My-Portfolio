
import "./App.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Router } from "./Router";

function App() {
  return (
    <div className="flex dark:bg-zinc-900">
      <Navbar />
      <div className="pt-2 px-4 w-full dark:text-white min-h-screen">
        <Header/>
        <Router />
      </div>
    </div>
  );
}

export default App;
