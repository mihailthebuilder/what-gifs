import "./App.scss";
import React, { useState, useEffect } from "react";

import {
  CARD_DECK,
  levelToCardNum,
  pickCards,
  ScoreObj,
} from "./common/index.js";

const App = () => {
  const [score, setScore] = useState(new ScoreObj(0, 0));
  const [level, setLevel] = useState(1);
  const [scoreStartLevel, setScoreStartLevel] = useState(0);

  const checkAnswer = (event) => {
    if (event.target.getAttribute("val") === "1") {
      setScore(new ScoreObj(score.current + 1, score.best));

      if (score.current > levelRounds + scoreStartLevel - 2) {
        setLevel(level + 1);
        setScoreStartLevel(score.current + 1);
      }
    } else {
      let newBestScore =
        score.current > score.best ? score.current : score.best;
      setScore(new ScoreObj(0, newBestScore));
      setLevel(1);
      setScoreStartLevel(0);
    }
  };

  const [levelRounds, setLevelRounds] = useState(levelToCardNum(level));
  useEffect(() => {
    setLevelRounds(levelToCardNum(level));
  }, [level]);

  /*
  const [currentCards, setCurrentCards] = useState(
    pickCards(levelRounds, CARD_DECK)
  );
  useEffect(() => {
    setCurrentCards(levelRounds, CARD_DECK);
  }, [levelRounds]);*/

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
      <div># of rounds in level: {levelRounds}</div>
      <div>Score at level start: {scoreStartLevel}</div>
    </div>
  );
};

export default App;
