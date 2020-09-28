import React, { useState } from "react";
import "./Experience.css";

function Experience() {
  const cernerDesc = (
    <div className="experience__description">
      <h3>Software Engineer</h3>
      <p>
        <small>April 2019 - Present</small>
      </p>
      <ul className="experience__descBullet">
        <li>
          Develop large scaled object-oriented software that supports project,
          finance and resource management.
        </li>
        <li>
          Build and Deploy Time Logging integration with 3rd Party interface
          through SOAP and Oracle SQL.
        </li>
        <li>
          Implement a server monitor to achieve Server’s Health Visualization.
        </li>
      </ul>
    </div>
  );

  const [descBullet, setDescBullet] = useState(cernerDesc);
  const renderCerner = () => setDescBullet(cernerDesc);

  const renderCam2 = () =>
    setDescBullet(
      <div className="experience__description">
        <h3>Software Engineer</h3>
        <p>
          <small>May 2018 - August 2018</small>
        </p>
        <ul className="experience__descBullet">
          <li>
            Create RESTAPI to add, update and search camera in MongoDB for
            retrieving images from the live stream camera.
          </li>
          <li>
            Invent Python Wrapper to encapsulate functional code and package it
            for user to pip install the module.
          </li>
        </ul>
      </div>
    );

  const renderVisual = () =>
    setDescBullet(
      <div className="experience__description">
        <h3>Software Engineer</h3>
        <p>
          <small>January 2018 - May 2018</small>
        </p>
        <ul className="experience__descBullet">
          <li>
            Develop REST services and add feature to realize data visualization
            through dynamic web interaction.
          </li>
          <li>
            Integrate Microsoft API to provide translation for tweets in real
            time which increase user base by 20%.
          </li>
        </ul>
      </div>
    );

  return (
    <div className="experience">
      <h1>Where I've Worked</h1>
      <div className="experience__container">
        <div className="experience__verticalBar">
          <p onClick={renderCerner}>Cerner</p>
          <p onClick={renderCam2}>CAM2 Research Group</p>
          <p onClick={renderVisual}>Visual Data Analytics Group Purdue</p>
        </div>
        {descBullet}
      </div>
    </div>
  );
}

export default Experience;
