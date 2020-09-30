import React from "react";
import "./Home.css";
import { aboutMeRef } from "./Header";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <p>Hi, my name is</p>
        <br />

        <h1>JiaEn Chua</h1>
        <br />

        <h2>I build things for the web</h2>
        <br />
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
        <br />
        <div className="home__containerContact">
          <a href="mailto:chuajiaen23@gmail.com">Get In Touch</a>
        </div>
        <div ref={aboutMeRef}></div>
      </div>
    </div>
  );
}

export default Home;
