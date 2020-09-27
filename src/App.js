import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import About from "./About";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    return () => {
      // cleanup
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <About />
      <div data-aos="fade-up" className="app__aboutMe">
        <AboutMe />
      </div>
      <div data-aos="fade-up" className="app__experience">
        <Experience />
      </div>

      {/* 
      <Projects />
      <Footer /> */}
    </div>
  );
}

export default App;
