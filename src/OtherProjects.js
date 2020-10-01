import React from "react";
import "./OtherProjects.css";
import LaunchIcon from "@material-ui/icons/Launch";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";

function OtherProjects() {
  const content = (
    <div className="otherProjects__section">
      <div className="otherProjects__icons">
        <div className="otherProjects__folderIcon">
          <FolderOpenIcon />
        </div>
        <div className="otherProjects__launchIcon">
          <LaunchIcon />
        </div>
      </div>
      <h3 className="otherProjects__title">Handi_glove, Fall 2018</h3>
      <p className="otherProjects__desc">
        Using Python Selenium webdriver to launch a 'search' on recruiting site.
        Navigation the desired page and parse the entire webpage. Crawl job
        information like title, company, location, salary and so on by using
        BautifulSoup. Generate a cvs spreadsheet and output information
        extracted online.
      </p>
    </div>
  );

  return (
    <div className="otherProjects">
      <h1>Other Noteworthy Projects</h1>
      <div className="otherProjects__container">
        {content}
        {content}
        {content}
      </div>
      <div className="otherProjects__container">
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}

export default OtherProjects;
