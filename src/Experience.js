import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience">
      <h2>Where I've Worked</h2>
      <div className="experience__container">
        <div className="experience__verticalBar">
          <p>Cerner</p>
          <p>CAM2</p>
          <p>Cerner</p>
          <p>Aeste Works</p>
        </div>
        <div className="experience__description">
          <h3>Software Engineer</h3>
          <p>
            <small>April 2019 - Present</small>
          </p>
          <ul className="experience__descBullet">
            <li>
              Develop large scaled object-oriented software that supports
              project, finance and resource management.
            </li>
            <li>
              Build and Deploy Time Logging integration with 3rd Party interface
              through SOAP and Oracle SQL.
            </li>
            <li>
              Implement a server monitor to achieve Server’s Health
              Visualization.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
