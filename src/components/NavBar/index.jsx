import React from "react";
import "./NavBar.scss";

const NavBar = ({ score }) => {
  return (
    <header className="font-size-regular">
      <nav>
        <div id="nav-logo-wrapper">
          <span>Tech News</span>
          <span id="nav-logo-red">Asia</span>
        </div>
        <ul id="right-nav-wrapper">
          <li>Home</li>
          <li>Contact</li>
        </ul>
        <div id="dropdown-button-wrapper"></div>
      </nav>
    </header>
  );
};

export default NavBar;
