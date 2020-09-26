import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <ul className="header__list">
        <li className="header__logo"></li>
        <li>About</li>
        <li>Experience</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Header;
