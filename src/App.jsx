import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage.jsx";
import AboutMe from "./About.jsx";
import Portfolio from "./Portfolio.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";

import logo from "./assets/logo.png";

function App() {
  return (
    <Router>
      <nav>    
        <img src={logo} className="logo" />  
        <Link to="/">Homepage </Link>
        <Link to="/about">About Me</Link>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Contact">Contact</Link>
      </nav>

      
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
