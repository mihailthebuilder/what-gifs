import "./PopUp.scss";

import { MAX_SCORE } from "../../common/index.js";

const PopUp = ({ popupShow, popupMessage, closeButton }) => {
  let popBackgClass = "popup-background";
  if (popupShow) {
    popBackgClass += " show";
  }
  let desktopWindow = window.innerWidth > 768;

  let [popupTitle, popupContent, popupButtonText] =
    popupMessage === "how"
      ? [
          "How it works",
          <div className="popup-content font-size-regular">
            <p>
              Welcome to the <span className="frostbite-color">What GIFs</span>{" "}
              memory game. The aim of the game is to make sure you don't
              {desktopWindow ? " click" : " tap"} the same GIF in a given level.
            </p>
            <p>
              You can play the GIF by
              {desktopWindow
                ? " hovering your cursor over it"
                : " scrolling it into view"}
              . The maximum score you can get is{" "}
              <span className="frostbite-color">{MAX_SCORE}</span>.
            </p>
          </div>,
          "Understood, now let me play the damn game!",
        ]
      : [
          "You beat the game!",
          <div className="popup-content font-size-regular">
            <p>Congratulations, you reached the maximum score!</p>
            <p>
              You were expecting more, weren't you? A reward maybe? I don't have
              anything, just be proud of the bragging rights you get. People are
              gonna fall over you once you tell them about this achievement.
            </p>
            <p>...why are you still reading? Bugger off.</p>
          </div>,
          "This is so addictive, let me play again!",
        ];

  return (
    <div className={popBackgClass}>
      <div className="popup-wrapper">
        <div className="popup-title font-size-large">{popupTitle}</div>
        {popupContent}
        <button className="font-size-regular" onClick={closeButton}>
          {popupButtonText}
        </button>
      </div>
    </div>
  );
};

export default PopUp;
