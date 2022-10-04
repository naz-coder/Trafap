import "./App.css";
import Nav_Home from "./components/Nav_Home/nav";
import { BrowserRouter as Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Nav_Home />
      <h1>Testing</h1>
    </div>
  );
}

export default App;
