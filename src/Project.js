import React from "react";
import "./Project.css";
import LaunchIcon from "@material-ui/icons/Launch";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";

function AmazonClone({
  youtubeLink,
  name,
  desc,
  techStack,
  githubLink,
  projLink,
  left_or_right,
  even,
}) {
  return (
    <div className={`project ${even}`}>
      <div className="project__left">
        <iframe src={youtubeLink} allowFullScreen="allowfullscreen"></iframe>
      </div>
      <div className="project__right">
        <h3 className={`project__rightTitle ${left_or_right}`}>{name}</h3>
        <p className="project__rightDesc">{desc}</p>
        {techStack}
        <div className={`project__rightBottom ${left_or_right}`}>
          <Link to={githubLink}>
            <GitHubIcon />
          </Link>
          <Link to={projLink}>
            <LaunchIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AmazonClone;
