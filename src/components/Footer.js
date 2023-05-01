import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h1>Get In Touch</h1>
      <p className="footer__desc">
        My inbox is always open. Whether you have a question or just want to say
        hi, I'll try my best to get back to you!
      </p>
      <div className="footer__Contact">
        <a href="mailto:chuajiaen23@gmail.com">Say Hello</a>
      </div>
      <p className="footer__credits">
        <small>
          Built by <i>Jia En Chua</i>, Design Inspired by{" "}
          <a href="https://brittanychiang.com/">
            <i>Brittany Chiang</i>
          </a>
        </small>
      </p>
    </div>
  );
}

export default Footer;
