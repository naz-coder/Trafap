import "./App.css";
import { BrowserRouter as Route, Routes, Router } from "react-router-dom";
import Nav_Home from "./components/Nav_Home/nav";
import Home from "./pages/Home/home";

function App() {
  return (
    <div className="container">
      <Nav_Home />
      <Home />
    </div>
  );
}

export default App;
