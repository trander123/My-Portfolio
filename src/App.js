import "./App.css";
import { Navbar } from "./components/Navbar";
import { Router } from "./Router";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
