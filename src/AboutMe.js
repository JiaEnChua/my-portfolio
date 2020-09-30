import React from "react";
import "./AboutMe.css";
import { experienceRef } from "./Header";

function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="aboutMe__container">
        <h1>About Me</h1>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <br />
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
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
        <div ref={experienceRef}></div>
      </div>
    </div>
  );
}

export default AboutMe;
