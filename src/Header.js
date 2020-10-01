import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-scroll";

function Header() {
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
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
