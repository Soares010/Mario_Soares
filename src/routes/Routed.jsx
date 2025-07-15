import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";

const Routed = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routed;
