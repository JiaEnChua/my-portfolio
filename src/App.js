import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import OtherProjects from "./OtherProjects";
import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";

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
        <Header></Header>
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="app__aboutMe"
          >
            <AboutMe />
          </div>
        </Element>
        <Element name="experience">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="app__experience"
          >
            <Experience />
          </div>
        </Element>
        <Element name="project">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="app__projects"
          >
            <Projects />
          </div>
        </Element>
        <Element name="otherProjects">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="app__otherProjects"
          >
            <OtherProjects />
          </div>
        </Element>
        <Element name="footer">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="app__projects"
          >
            <Footer />
          </div>
        </Element>
      </div>
    </Router>
  );
}

export default App;
