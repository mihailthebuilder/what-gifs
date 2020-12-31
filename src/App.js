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

  const [level, setLevel] = useState(scoreToLevel(0, levelToCardNum));
  const [maxScoreReached, setMaxScoreReached] = useState(false);

  useEffect(() => {
    if (currentScore === MAX_SCORE) {
      setCurrentScore(0);
      setBestScore(MAX_SCORE - 1);
      setLevel(scoreToLevel(0, levelToCardNum));
      setMaxScoreReached(true);
    } else setLevel(scoreToLevel(currentScore, levelToCardNum));
  }, [currentScore]);

  const resetMaxScoreReached = (event) => {
    setMaxScoreReached(false);
  };

  const [currentCards, setCurrentCards] = useState(
    pickCards(levelToCardNum(level), CARD_DECK)
  );
  useEffect(() => {
    setCurrentCards(pickCards(levelToCardNum(level), CARD_DECK));
    setSelectedCards([]);
  }, [level]);

  const [selectedCards, setSelectedCards] = useState([]);

  const checkAnswer = (event) => {
    let cardId = event.target.closest(".card-wrapper").id;

    if (selectedCards.includes(cardId)) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }

      setCurrentScore(0);
      setSelectedCards([]);
    } else {
      setCurrentScore((previousScore) => previousScore + 1);
      setSelectedCards((previousArray) => previousArray.concat(cardId));
    }
    setCurrentCards((previousCards) => shuffleCards(previousCards));
  };

  const [popupShow, setPopupShow] = useState(true);
  const [popupMessage, setPopupMessage] = useState("how");

  const togglePopup = () => setPopupShow((previousValue) => !previousValue);

  return (
    <div>
      <PopUp
        popupShow={popupShow}
        popupMessage={popupMessage}
        togglePopup={togglePopup}
      />
      <NavBar togglePopup={togglePopup} />
      <GameData
        level={level}
        currentScore={currentScore}
        bestScore={bestScore}
      />
      <button
        className="regular-font-size"
        onClick={resetMaxScoreReached}
        disabled={!maxScoreReached}
      >
        Reset maxScoreReached
      </button>
      <div>Max score: {MAX_SCORE}</div>
      <div>Max score reached? {maxScoreReached ? "yes" : "no"} </div>
      <div className="instructions">
        {window.innerWidth > 768
          ? "Hover to play the GIF"
          : "Start scrolling to play the GIFs"}
      </div>
      <div>Selected cards: {selectedCards.join(", ")}</div>
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
    </div>
  );
};

export default App;
