import "./PopUp.scss";

import { MAX_SCORE } from "../../common/index.js";

const PopUp = ({ show, message }) => {
  let popBackgClass = "popup-background";
  if (show) {
    popBackgClass += " show";
  }
  let desktopWindow = window.innerWidth > 768;

  return (
    <div className={popBackgClass}>
      <div className="popup-wrapper">
        <div className="popup-title">How it works</div>
        <div className="popup-content font-size-regular">
          <p>
            Welcome to the What GIFs memory game. The aim of the game is to make
            sure you don't the same GIF in a given level.
          </p>
          <p>
            You can play the GIF by
            {desktopWindow ? " hovering over it" : " scrolling it into view"}.
            The maximum score you can get is {MAX_SCORE}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
