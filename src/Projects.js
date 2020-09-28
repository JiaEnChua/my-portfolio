import React from "react";
import "./Projects.css";
import Project from "./Project";

function Projects() {
  return (
    <div className="projects">
      <h1>Some things I've Built</h1>
      <Project
        youtubeLink={"https://www.youtube.com/watch?v=YKlenuIY43s"}
        name={"Amazon Clone"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        githubLink={"https://github.com/JiaEnChua/amazon-clone"}
        projLink={"https://clone-b869b.web.app/"}
      />
      <Project
        youtubeLink={"https://www.youtube.com/watch?v=YKlenuIY43s"}
        name={"WhatsApp Clone"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        githubLink={"https://github.com/JiaEnChua/amazon-clone"}
        projLink={"https://clone-b869b.web.app/"}
      />
    </div>
  );
}

export default Projects;
