import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import OtherProjects from './components/OtherProjects';
import Footer from './components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Element } from 'react-scroll';

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    return () => {
      // cleanup
    };
  }, []);

  return (
    <Router>
      <div className='App'>
        <Header></Header>
        <Element name='home' style={{ background: 'antiquewhite' }}>
          <Home />
        </Element>
        <Element name='about'>
          <div
            data-aos='fade-up'
            data-aos-duration='500'
            className='app__aboutMe'
          >
            <AboutMe />
          </div>
        </Element>
        <Element
          name='experience'
          style={{ background: 'rgb(245 255 234 / 77%)' }}
        >
          <div
            data-aos='fade-up'
            data-aos-duration='500'
            className='app__experience'
          >
            <Experience />
          </div>
        </Element>
        <Element name='project'>
          <div
            data-aos='fade-up'
            data-aos-duration='500'
            className='app__projects'
          >
            <Projects />
          </div>
        </Element>
        <Element name='otherProjects' style={{ background: 'aliceblue' }}>
          <div
            data-aos='fade-up'
            data-aos-duration='500'
            className='app__otherProjects'
          >
            <OtherProjects />
          </div>
        </Element>
        <Element name='footer'>
          <div
            data-aos='fade-up'
            data-aos-duration='500'
            className='app__projects'
          >
            <Footer />
          </div>
        </Element>
      </div>
    </Router>
  );
}

export default App;
