import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import About from "./About";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    return () => {
      // cleanup
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <About />
        <div data-aos="fade-up" className="app__aboutMe">
          <AboutMe />
        </div>
        <div data-aos="fade-up" className="app__experience">
          <Experience />
        </div>
        <div data-aos="fade-up" className="app__projects">
          <Projects />
        </div>

        {/* 
      <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
