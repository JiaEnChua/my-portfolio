import React from "react";
import "./Archive.css";
import LaunchIcon from "@material-ui/icons/Launch";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";

function Archive({ name, description }) {
  return (
    <div className="archive">
      <div className="archive__container">
        <div className="archive__containerIcons">
          <div className="archive__containerIconsFolderIcon">
            <FolderOpenIcon />
          </div>
          <div className="archive__containerIconsLaunchIcon">
            <LaunchIcon />
          </div>
        </div>
        <h3 className="archive__title">{name}</h3>
        <p className="archive__desc">{description}</p>
      </div>
    </div>
  );
}

export default Archive;
