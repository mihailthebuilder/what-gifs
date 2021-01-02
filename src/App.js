import "./App.scss";
import React, { useState } from "react";

import {
  CARD_DECK,
  levelToCardNum,
  pickCards,
  shuffleCards,
  MAX_SCORE,
  scoreToLevel,
  LEVEL_LOAD_TIME,
} from "./common/index.js";

import NavBar from "./components/NavBar";
import GameData from "./components/GameData";
import GifContainer from "./components/GifContainer";
import PopUp from "./components/PopUp";

import LoadingGif from "./LoadingGif.webp";

import EndGameSound from "./EndGame.mp3";
import RightAnswerSound from "./RightAnswer.mp3";
import WrongAnswerSound from "./WrongAnswer.mp3";

const App = () => {
  //current score, best score & level
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(1);

  //used to trigger what elements to show
  const [cardsVisible, setCardsVisible] = useState(false);
  const [levelLoadingVisible, setLevelLoadingVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(true);

  //message that will be used in the popup
  //starts with "how" value because the game will start with the "how this works" popup
  const [popupMessage, setPopupMessage] = useState("how");

  //current cards **and the order they are in**. latter is important because you can shuffle these cards
  const [currentCards, setCurrentCards] = useState(
    pickCards(levelToCardNum(level), CARD_DECK)
  );
  //cards that were already selected in the level
  const [selectedCards, setSelectedCards] = useState([]);

  //indicates whether at start of game
  const [gameStart, setGameStart] = useState(true);

  //holds the score when the popup for incorrect answer comes up (currentScore goes to 0 in the meantime)
  const [scoreAtLoss, setScoreAtLoss] = useState(0);

  //trigger for button close in popup modal
  const closePopup = () => {
    setPopupVisible(false);

    //if at the start of the game, show the loading image for level 1 with a LEVEL_LOAD_TIME duration instead of showing the cards
    if (gameStart) {
      setLevelLoadingVisible(true);

      setTimeout(() => {
        setLevelLoadingVisible(false);
        setCardsVisible(true);
        setGameStart(false);
        setCurrentCards(pickCards(levelToCardNum(1), CARD_DECK));
      }, LEVEL_LOAD_TIME);
    } else {
      setCardsVisible(true);
    }
  };

  //trigger for popup to show with the "how this works message"
  const howPopupShow = () => {
    setPopupMessage("how");
    setCardsVisible(false);
    setPopupVisible(true);
  };

  //checks whether we've clicked on a valid card
  const checkAnswer = (event) => {
    let cardId = event.target.closest(".card-wrapper").id;
    setCardsVisible(false);

    /* 3 scenarios...1)incorrect card picked...
     */
    if (selectedCards.includes(cardId)) {
      playSound(WrongAnswerSound);
      setPopupMessage("loss");
      setScoreAtLoss(currentScore);
      setPopupVisible(true);

      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }

      setCurrentScore(0);
      setSelectedCards([]);
      setLevel(1);
      setGameStart(true);
      //...2) correct card picked and max score reached...
    } else if (currentScore === MAX_SCORE - 1) {
      playSound(EndGameSound);
      setPopupMessage("max");
      setPopupVisible(true);

      setBestScore(MAX_SCORE);

      setCurrentScore(0);
      setSelectedCards([]);
      setLevel(1);
      setGameStart(true);
      //...3) correct card picked and max score not reached
    } else {
      playSound(RightAnswerSound);
      if (scoreToLevel(currentScore + 1, levelToCardNum) > level) {
        setLevel((previousValue) => previousValue + 1);
        setSelectedCards([]);
        setLevelLoadingVisible(true);

        //show the level loading screen
        setTimeout(() => {
          setLevelLoadingVisible(false);
          setCurrentCards(pickCards(levelToCardNum(level + 1), CARD_DECK));
          setCardsVisible(true);
        }, LEVEL_LOAD_TIME);
        //
      } else {
        setSelectedCards((previousArray) => previousArray.concat(cardId));
        setCurrentCards((previousCards) => shuffleCards(previousCards));
        setTimeout(() => setCardsVisible(true), 200);
      }
      //
      setCurrentScore((previousScore) => previousScore + 1);
    }
  };

  const playSound = (src) => {
    let audio = new Audio(src);
    audio.play();
  };

  return (
    <div>
      <PopUp
        popupShow={popupVisible}
        popupMessage={popupMessage}
        closePopup={closePopup}
        scoreAtLoss={scoreAtLoss}
      />
      <NavBar howPopupShow={howPopupShow} />
      <GameData
        level={level}
        currentScore={currentScore}
        bestScore={bestScore}
      />
      {/*GIFs container section */}
      {cardsVisible && (
        <div className="gif-cards-container">
          {currentCards.map((cardItem) => (
            <GifContainer
              key={cardItem.key}
              source={cardItem.key}
              title={cardItem.title}
              checkAnswer={checkAnswer}
            />
          ))}
        </div>
      )}
      {/*the level loading screen */}
      {levelLoadingVisible && (
        <div className="level-load-wrapper">
          <h1>Loading level {level}</h1>
          <img src={LoadingGif} alt="Loading GIF" />
        </div>
      )}
    </div>
  );
};

export default App;
