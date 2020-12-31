import "./NavBar.scss";
import Cat from "./cat.png";

const NavBar = ({ togglePopup }) => {
  return (
    <header className="font-size-regular">
      <nav>
        <div className="left-nav-wrapper">
          <img src={Cat} alt="Cat" />
          <span>What GIFs</span>
        </div>
        <div className="right-nav-wrapper" onClick={togglePopup}>
          How it works
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
