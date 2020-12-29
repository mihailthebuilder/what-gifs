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

const App = () => {
  const [score, setScore] = useState(new ScoreObj(0, 0));
  const [level, setLevel] = useState(1);

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
    setLevel(scoreToLevel(score.current, levelToCardNum));
  }, [score]);

  const [currentCards, setCurrentCards] = useState(
    pickCards(levelToCardNum(level), CARD_DECK)
  );
  useEffect(() => {
    setCurrentCards(pickCards(levelToCardNum(level), CARD_DECK));
  }, [level]);

  return (
    <div>
      <button className="regular-font-size" onClick={checkAnswer} val="1">
        Correct Answer
      </button>
      <button className="regular-font-size" onClick={checkAnswer} val="0">
        Incorrect Answer
      </button>
      <div>Current score: {score.current}</div>
      <div>Best score: {score.best}</div>
      <div>Level: {level}</div>
      <div>Current cards: {JSON.stringify(currentCards)}</div>
      <div>Max score: {MAX_SCORE}</div>
    </div>
  );
};

export default App;
