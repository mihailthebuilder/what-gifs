import "./PopUp.scss";

import { MAX_SCORE } from "../../common/index.js";

const PopUp = ({ popupShow, popupMessage, togglePopup }) => {
  let popBackgClass = "popup-background";
  if (popupShow) {
    popBackgClass += " show";
  }
  let desktopWindow = window.innerWidth > 768;

  return (
    <div className={popBackgClass}>
      <div className="popup-wrapper">
        <div className="popup-title font-size-large">How it works</div>
        <div className="popup-content font-size-regular">
          <p>
            Welcome to the <span className="frostbite-color">What GIFs</span>{" "}
            memory game. The aim of the game is to make sure you don't
            {desktopWindow ? " click" : " tap"} the same GIF in a given level.
          </p>
          <p>
            You can play the GIF by
            {desktopWindow ? " hovering over it" : " scrolling it into view"}.
            The maximum score you can get is{" "}
            <span className="frostbite-color">{MAX_SCORE}</span>.
          </p>
        </div>
        <button className="font-size-regular" onClick={togglePopup}>
          Understood, now let me play the damn game!
        </button>
      </div>
    </div>
  );
};

export default PopUp;
