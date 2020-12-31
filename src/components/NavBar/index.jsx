import "./NavBar.scss";
import Cat from "./cat.png";

const NavBar = ({ howPopupShow }) => {
  return (
    <header className="font-size-regular">
      <nav>
        <div className="left-nav-wrapper">
          <img src={Cat} alt="Cat" />
          <span>What GIFs</span>
        </div>
        <div className="right-nav-wrapper" onClick={howPopupShow}>
          How it works
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
