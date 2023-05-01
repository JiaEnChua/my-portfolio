import React, { useEffect } from "react";
import "./OtherProjects.css";
import Archive from "./Archive";
import Aos from "aos";
import "aos/dist/aos.css";

function OtherProjects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    return () => {
      // cleanup
    };
  }, []);
  return (
    <div className="otherProjects">
      <h1>Other Noteworthy Projects</h1>
      <div className="otherProjects__container">
        <div className="otherProjects__containerRow">
          <div className="otherProjects__containerBox">
            <div data-aos="fade-zoom-in" data-aos-delay="600">
              <a href="https://jiaenchua.github.io/#handi_glove">
                <Archive
                  name={"Handi_glove, Fall 2018"}
                  description={
                    "Using Python Selenium webdriver to launch a 'search' on recruiting site. Navigation the desired page and parse the entire webpage. Crawl job information like title, company, location, salary and so on by using BautifulSoup. Generate a cvs spreadsheet and output information extracted online."
                  }
                />
              </a>
            </div>
          </div>
          <div className="otherProjects__containerBox">
            <div data-aos="fade-zoom-in" data-aos-delay="700">
              <a href="https://jiaenchua.github.io/#jobCrawler">
                <Archive
                  name={"Dream Job Catcher, Fall 2017"}
                  description={
                    "Using Python Selenium webdriver to launch a 'search' on recruiting site. Navigation the desired page and parse the entire webpage. Crawl job information like title, company, location, salary and so on by using BautifulSoup. Generate a cvs spreadsheet and output information extracted online."
                  }
                />
              </a>
            </div>
          </div>
          <div className="otherProjects__containerBox">
            <div data-aos="fade-zoom-in" data-aos-delay="800">
              <a href="https://jiaenchua.github.io/#spark">
                <Archive
                  name={"Autonomous Obstacle-avoiding Robot, Spring 2017"}
                  description={
                    "I co-wrote the software for this robot. I invented the logic and convinced my teammates of the efficiency of my solution in terms of space complexity. Space is important in this competition because we are using 9S12C micro-controller which does not have a decent amount of memory space. I utilized tool like GDB to efficiently debug the program and I make sure the code is human-readable."
                  }
                />
              </a>
            </div>
          </div>
        </div>
        <div className="otherProjects__containerRow">
          <div className="otherProjects__containerBox">
            <div data-aos="fade-zoom-in" data-aos-delay="600">
              <a href="https://jiaenchua.github.io/#pdf">
                <Archive
                  name={"PDF Generator, Fall 2017"}
                  description={
                    "Generate a PDF version of map being viewed. Using DroneDeploy API to extract an array of images and merge them on a canvas by computing the proper coordinates. Use a proxy server to wrap the link provided by API to enable CORS protocol."
                  }
                />
              </a>
            </div>
          </div>
          <div className="otherProjects__containerBox">
            <div data-aos="fade-zoom-in" data-aos-delay="700">
              <Archive 
                name={'Coming soon...'}
              />
            </div>
          </div>
          <div className="otherProjects__containerBox">
            <div data-aos="fade-zoom-in" data-aos-delay="800">
              <Archive
                name={'Coming soon...'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherProjects;
