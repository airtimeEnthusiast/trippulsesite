import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Policy from "./Pages/Policy";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="header-content">
            <Link to="/about" className="logo-title">
              <img src={require("./logo.png")} className="App-logo" alt="Trip Pulse Logo" />
              <h1>Trip Pulse</h1>
            </Link>
            <nav className="App-nav">
              <a href="mailto:trippulsecontact@gmail.com">Contact</a>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>

        <footer className="App-footer">
          <div className="footer-content">
            <p>&copy; 2025 TripPulse. All rights reserved.</p>
            <Link to="/policy" className="footer-link">Private Policy</Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;