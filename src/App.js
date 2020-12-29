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

const App = () => {
  const [score, setScore] = useState(new ScoreObj(0, 0));
  const [level, setLevel] = useState(scoreToLevel(0, levelToCardNum));
  const [maxScoreReached, setMaxScoreReached] = useState(false);

  const checkAnswer = (event) => {
    if (event.target.getAttribute("val") === "1") {
      setScore(new ScoreObj(score.current + 1, score.best));
    } else {
      let newBestScore =
        score.current > score.best ? score.current : score.best;
      setScore(new ScoreObj(0, newBestScore));
    }

    setCurrentCards(shuffleCards(currentCards));
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
  }, [level]);

  return (
    <div>
      <NavBar />
      <GameData level={level} score={score} />
      <button className="regular-font-size" onClick={checkAnswer} val="1">
        Correct Answer
      </button>
      <button className="regular-font-size" onClick={checkAnswer} val="0">
        Incorrect Answer
      </button>
      <button
        className="regular-font-size"
        onClick={resetMaxScoreReached}
        disabled={!maxScoreReached}
      >
        Reset maxScoreReached
      </button>
      <div>Current cards: {JSON.stringify(currentCards)}</div>
      <div>Max score: {MAX_SCORE}</div>
      <div>Max score reached? {maxScoreReached ? "yes" : "no"} </div>
    </div>
  );
};

export default App;
