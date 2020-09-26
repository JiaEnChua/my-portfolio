import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <p>Hi, my name is</p>
        <h1>JiaEn Chua</h1>
        <h2>I build things for the web</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="about__containerContact">
          <a href="mailto:chuajiaen23@gmail.com">Get In Touch</a>
        </div>
      </div>
    </div>
  );
}

export default About;