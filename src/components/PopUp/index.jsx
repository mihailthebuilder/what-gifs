import "./PopUp.scss";

import { MAX_SCORE, RESPONSIVE_THRESHOLD } from "../../common/index.js";

const PopUp = ({ popupShow, popupMessage, closePopup, scoreAtLoss }) => {
  let popBackgClass = "popup-background";

  //the show class sets the visibility of the popup
  if (popupShow) {
    popBackgClass += " show";
  }
  let desktopWindow = window.innerWidth > RESPONSIVE_THRESHOLD;

  let [popupTitle, popupContent, popupButtonText] = ["", "", ""];

  switch (popupMessage) {
    case "how":
      popupTitle = "How it works";
      popupContent = (
        <div className="popup-content font-size-regular">
          <p>
            Welcome to the <span className="frostbite-color">What GIFs</span>{" "}
            memory game. The aim of the game is to make sure you don't
            {desktopWindow ? " click" : " tap"} the same GIF in a given level.
          </p>
          <p>
            {desktopWindow &&
              "You can play the GIF by hovering your cursor over it. "}
            The maximum score you can get is{" "}
            <span className="frostbite-color">{MAX_SCORE}</span>.{" "}
            <span className="yellow-color">
              And turn on the volume, you won't regret it.
            </span>
          </p>
          <p>
            Excited? You should be. It's an amazing game, very well-rated by
            IGN. Made by a budding rock superstar developer. A once in a
            lifetime opportunity.
          </p>
        </div>
      );
      popupButtonText = "Shut up and just start the damn game!";
      break;
    case "max":
      popupTitle = "You beat the game!";
      popupContent = (
        <div className="popup-content font-size-regular">
          <p>Congratulations, you reached the maximum score!</p>
          <p>
            You were expecting more, weren't you? A reward maybe? I don't have
            anything, just be proud of the bragging rights you get. People are
            gonna fall over you once you tell them about this achievement.
          </p>
          <p>...why are you still reading? Bugger off.</p>
        </div>
      );
      popupButtonText =
        "This is so addictive, I want to play again from the start!";
      break;
    default:
      popupTitle = "You lost T_T";
      popupContent = (
        <div className="popup-content font-size-regular">
          <p>Damn, you lost...what a shame (yawn).</p>
          {scoreAtLoss < MAX_SCORE / 3 ? (
            <p>
              And you only managed to get a score of{" "}
              <span className="frostbite-color">{scoreAtLoss}</span>?? I'm sorry
              to say this, but...it's pathetic. My cat can do better when he
              walks over my laptop.
            </p>
          ) : scoreAtLoss < (MAX_SCORE * 2) / 3 ? (
            <p>
              Well, at least you managed to get a score of{" "}
              <span className="frostbite-color">{scoreAtLoss}</span>. It's not
              too bad, a little better than my cat's personal best (
              {Math.floor(MAX_SCORE / 3)}). I know it doesn't say much, but you
              could've done better.
            </p>
          ) : (
            <p>
              You were so close too, with a score of{" "}
              <span className="frostbite-color">{scoreAtLoss}</span> (remember,
              the max score is {MAX_SCORE}). But that doesn't matter now, all is
              lost and you have to start again. I almost feel sorry for you.
            </p>
          )}
          <p>Better luck next time I guess.</p>
        </div>
      );
      popupButtonText = "Let me give it another shot!";
  }

  return (
    <div className={popBackgClass}>
      <div className="popup-wrapper">
        <div className="popup-title font-size-large">{popupTitle}</div>
        {popupContent}
        <button className="font-size-regular" onClick={closePopup}>
          {popupButtonText}
        </button>
      </div>
    </div>
  );
};

export default PopUp;
