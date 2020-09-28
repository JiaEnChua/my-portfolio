import React from "react";
import "./Project.css";
import LaunchIcon from "@material-ui/icons/Launch";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";

function AmazonClone({ youtubeLink, name, desc, githubLink, projLink }) {
  return (
    <div className="project">
      <div className="project__left">
        <iframe width="500" height="315" src={youtubeLink}></iframe>
      </div>
      <div className="project__right">
        <h3>{name}</h3>
        <br />
        <p>{desc}</p>
        <br />
        <Link to={githubLink}>
          <GitHubIcon />
        </Link>
        <Link to={projLink}>
          <LaunchIcon />
        </Link>
      </div>
    </div>
  );
}

export default AmazonClone;
