import React, { useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import Home from "../src/components/Home/Home";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./style.css";

function App() {
  useEffect(() => {
    document.title = "Allison Ngo";
  }, []);

  return (
    <div className="App">
      <div id="navigation">
        <Navigation></Navigation>
      </div>
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
        <Skills></Skills>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
