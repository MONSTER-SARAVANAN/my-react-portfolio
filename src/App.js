import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from  "./skills/Skills";
import Projects from  "./projects/Projects";
import Contact from  "./contact/Contact";
import "./styles/app.css";
import Background from "./background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";
import Certificates from "./certificates/Certificates.jsx";
import Resume from "./resume/Resume.jsx";


const App = ()  => {
  return (
    <Router>
    <Nav />
    <Background />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <PlayerStats />
  </Router>
  );
};

export default App;
