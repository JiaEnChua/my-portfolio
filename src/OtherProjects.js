import React from "react";
import "./OtherProjects.css";
import Archive from "./Archive";

function OtherProjects() {
  return (
    <div className="otherProjects">
      <h1>Other Noteworthy Projects</h1>
      <div className="otherProjects__container">
        <Archive
          name={"Handi_glove, Fall 2018"}
          description={
            "Using Python Selenium webdriver to launch a 'search' on recruiting site. Navigation the desired page and parse the entire webpage. Crawl job information like title, company, location, salary and so on by using BautifulSoup. Generate a cvs spreadsheet and output information extracted online."
          }
        />
        <Archive
          name={"Dream Job Catcher, Fall 2017"}
          description={
            "Using Python Selenium webdriver to launch a 'search' on recruiting site. Navigation the desired page and parse the entire webpage. Crawl job information like title, company, location, salary and so on by using BautifulSoup. Generate a cvs spreadsheet and output information extracted online."
          }
        />
        <Archive />
      </div>
      <div className="otherProjects__container">
        <Archive />
        <Archive />
        <Archive />
      </div>
    </div>
  );
}

export default OtherProjects;
