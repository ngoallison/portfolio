import React, { useEffect } from "react";
import Home from "../src/components/Home/Home";
import About from "../src/components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Navigation from "../src/components/Navbar";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./style.css";
import "../src/fonts/CocogooseThin.ttf";

import "../src/fonts/CocogooseLight.ttf";
import "../src/fonts/CocogooseUltra.ttf";

import Skills2 from "./components/Skills/Skills2";

// import Stars from "./components/Particle";

function App() {
  useEffect(() => {
    document.title = "Allison Ngo";
  }, []);

  return (
    <div className="App">
      <Navigation></Navigation>
      <div id="home">
        <Home></Home>
      </div>
      <div id="experience">
        <Experience></Experience>
      </div>
      <div id="projects">
        <Projects></Projects>
      </div>
      <div id="skills">
        <Skills2></Skills2>
        {/* <Skills></Skills> */}
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
