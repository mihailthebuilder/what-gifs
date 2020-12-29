import React from "react";
import "./NavBar.scss";
import Cat from "./cat.png";

const NavBar = ({ score }) => {
  return (
    <header className="regular-font-size">
      <nav>
        <div className="left-nav-wrapper">
          <img src={Cat} alt="Cat" />
          <span>What GIFs</span>
        </div>
        <div className="right-nav-wrapper">How it works</div>
      </nav>
    </header>
  );
};

export default NavBar;
