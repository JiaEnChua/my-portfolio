import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="aboutMe__container">
        <h1>About Me</h1>
        <br />
        <p>
          I always have a passion for building things and it was until my first
          CS class in Purdue University that introduces me to the world of
          programming. During my time in Purdue, I took part in different
          research opportunities and summer internship to learn more about
          software development.
        </p>
        <br />
        <p>
          I am highly motivated to learn and adapt to fast-changing technologies
          and environments. Shortly after graduation, I join Cerner Corporation
          where I work on a wide spectrum of challenging projects ranging from
          front end design to 3rd party integration.
        </p>
        <br />
        <p>Here are a few technologies I've been working with recently.</p>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.Js</li>
          <li>FireBase</li>
          <li>MERN Stack</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
