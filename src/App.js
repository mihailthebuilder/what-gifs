import "./App.scss";
import React, { useState, useEffect } from "react";

import {
  CARD_DECK,
  levelToCardNum,
  pickCards,
  shuffleCards,
  MAX_SCORE,
  scoreToLevel,
} from "./common/index.js";

import NavBar from "./components/NavBar";
import GameData from "./components/GameData";
import GifContainer from "./components/GifContainer";
import PopUp from "./components/PopUp";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [scoreAtLoss, setScoreAtLoss] = useState(0);

  const [level, setLevel] = useState(1);

  useEffect(() => {
    setLevel(scoreToLevel(currentScore, levelToCardNum));
  }, [currentScore]);

  const [currentCards, setCurrentCards] = useState(
    pickCards(levelToCardNum(level), CARD_DECK)
  );
  useEffect(() => {
    setCurrentCards(pickCards(levelToCardNum(level), CARD_DECK));
    setSelectedCards([]);
  }, [level]);

  const [selectedCards, setSelectedCards] = useState([]);

  const [cardsVisible, setCardsVisible] = useState(false);

  const checkAnswer = (event) => {
    let cardId = event.target.closest(".card-wrapper").id;

    if (selectedCards.includes(cardId)) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setScoreAtLoss(currentScore);
      setPopupMessage("loss");
      setPopupShow(true);
      setCardsVisible(false);

      setCurrentScore(0);
      setSelectedCards([]);
      setCurrentCards(pickCards(levelToCardNum(level), CARD_DECK));
    } else if (currentScore === MAX_SCORE - 1) {
      //I don't need to reset cards selected her because the level useEffect will reset it anyway
      setBestScore(MAX_SCORE);
      setCurrentScore(0);
      setPopupMessage("max");
      setPopupShow(true);
      setCardsVisible(false);
    } else {
      setCurrentScore((previousScore) => previousScore + 1);
      setSelectedCards((previousArray) => previousArray.concat(cardId));
    }
    setCurrentCards((previousCards) => shuffleCards(previousCards));
  };

  const [popupShow, setPopupShow] = useState(true);
  const [popupMessage, setPopupMessage] = useState("how");

  const togglePopup = () => {
    setPopupShow((previousValue) => !previousValue);
    setCardsVisible((previousValue) => !previousValue);
  };

  const howPopupShow = () => {
    setPopupMessage("how");
    togglePopup();
  };

  const cheat = () => {
    setCurrentScore(MAX_SCORE - 1);
  };

  return (
    <div>
      <PopUp
        popupShow={popupShow}
        popupMessage={popupMessage}
        closeButton={togglePopup}
        scoreAtLoss={scoreAtLoss}
      />
      <NavBar howPopupShow={howPopupShow} />
      <GameData
        level={level}
        currentScore={currentScore}
        bestScore={bestScore}
      />
      <button className="font-size-regular" onClick={cheat}>
        Cheat
      </button>
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
    </div>
  );
};

export default App;
