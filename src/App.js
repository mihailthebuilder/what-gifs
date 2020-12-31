import "./App.scss";
import React, { useState, useEffect } from "react";

import {
  CARD_DECK,
  levelToCardNum,
  pickCards,
  ScoreObj,
  shuffleCards,
  MAX_SCORE,
  scoreToLevel,
} from "./common/index.js";

import NavBar from "./components/NavBar";
import GameData from "./components/GameData";
import GifContainer from "./components/GifContainer";

const App = () => {
  const [score, setScore] = useState(new ScoreObj(0, 0));
  const [level, setLevel] = useState(scoreToLevel(0, levelToCardNum));
  const [maxScoreReached, setMaxScoreReached] = useState(false);

  const checkAnswerCard = (event) => {
    if (event.target.getAttribute("val") === "1") {
      setScore(
        (previousScore) =>
          new ScoreObj(previousScore.current + 1, previousScore.best)
      );
    } else {
      setScore((previousScore) => {
        let newBestScore =
          previousScore.current > previousScore.best
            ? previousScore.current
            : previousScore.best;
        return new ScoreObj(0, newBestScore);
      });
    }
  };

  useEffect(() => {
    if (score.current === MAX_SCORE) {
      setScore(new ScoreObj(0, MAX_SCORE - 1));
      setLevel(scoreToLevel(0, levelToCardNum));
      setMaxScoreReached(true);
    } else setLevel(scoreToLevel(score.current, levelToCardNum));
  }, [score]);

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
      setScore((previousScore) => {
        let newBestScore =
          previousScore.current > previousScore.best
            ? previousScore.current
            : previousScore.best;
        return new ScoreObj(0, newBestScore);
      });
      setSelectedCards([]);
    } else {
      setScore(
        (previousScore) =>
          new ScoreObj(previousScore.current + 1, previousScore.best)
      );
      setSelectedCards((previousArray) => previousArray.concat(cardId));
    }
    setCurrentCards((previousCards) => shuffleCards(previousCards));
  };

  return (
    <div>
      <NavBar />
      <GameData level={level} score={score} />
      <button className="regular-font-size" onClick={checkAnswerCard} val="1">
        Correct Answer
      </button>
      <button className="regular-font-size" onClick={checkAnswerCard} val="0">
        Incorrect Answer
      </button>
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
