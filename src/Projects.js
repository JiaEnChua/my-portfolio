import React from "react";
import "./Projects.css";
import Project from "./Project";

function Projects() {
  return (
    <div className="projects">
      <h1>Some things I've Built</h1>
      <div className="projects__container">
        <Project
          youtubeLink={"https://www.youtube.com/embed/YKlenuIY43s"}
          name={"Amazon Clone"}
          desc={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          }
          techStack={
            <div className={`project__rightTechStack right`}>
              <p>ReactJs</p>
              <p>Stripe API</p>
              <p>Firestore</p>
              <p>FireBase Cloud Function</p>
            </div>
          }
          githubLink={"https://github.com/JiaEnChua/amazon-clone"}
          projLink={"https://clone-b869b.web.app/"}
        />
        <Project
          youtubeLink={"https://www.youtube.com/embed/YKlenuIY43s"}
          name={"WhatsApp Clone"}
          desc={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
          techStack={
            <div className={`project__rightTechStack left`}>
              <p className="left">ReactJs</p>
              <p className="left">Google Auth</p>
              <p className="left">Firestore</p>
              <p className="left">FireBase Hosting</p>
            </div>
          }
          githubLink={"https://github.com/JiaEnChua/amazon-clone"}
          projLink={"https://clone-b869b.web.app/"}
          left_or_right={"left"}
          even={"even"}
        />
        <Project
          youtubeLink={"https://www.youtube.com/embed/YKlenuIY43s"}
          name={"YelpCamp"}
          desc={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          techStack={
            <div className={`project__rightTechStack`}>
              <p>NodeJs</p>
              <p>PassportJs</p>
              <p>MongoDB</p>
              <p>Heroku</p>
            </div>
          }
          githubLink={"https://github.com/JiaEnChua/amazon-clone"}
          projLink={"https://clone-b869b.web.app/"}
        />
      </div>
    </div>
  );
}

export default Projects;
