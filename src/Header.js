import React, { useRef, useState, useEffect } from "react";
import "./Header.css";
import { Link, Element } from "react-scroll";

let aboutMeRef;
let experienceRef;

function Header() {
  aboutMeRef = useRef(null);
  experienceRef = useRef(null);

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  // console.log("Scrolled or not >>> ", scrolled);

  return (
    <div className="header">
      <ul className="header__list">
        <li
          onClick={() =>
            aboutMeRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          About
        </li>
        <li
          onClick={() =>
            experienceRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Experience
        </li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Header;
export { aboutMeRef, experienceRef };
