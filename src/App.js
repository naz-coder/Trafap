import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Route, Routes, Router } from "react-router-dom";
import Nav_Home from "./components/Nav_Home/nav";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";

function App() {
  return (
    <div className="container">
      {/* <Home /> */}
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
