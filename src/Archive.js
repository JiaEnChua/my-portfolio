import React from "react";
import "./Archive.css";
import LaunchIcon from "@material-ui/icons/Launch";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";

function Archive({ name, description }) {
  return (
    <div className="archive">
      <div className="otherProjects__section">
        <div className="otherProjects__icons">
          <div className="otherProjects__folderIcon">
            <FolderOpenIcon />
          </div>
          <div className="otherProjects__launchIcon">
            <LaunchIcon />
          </div>
        </div>
        <h3 className="otherProjects__title">{name}</h3>
        <p className="otherProjects__desc">{description}</p>
      </div>
    </div>
  );
}

export default Archive;
