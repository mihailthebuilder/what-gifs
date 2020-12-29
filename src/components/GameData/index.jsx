import React from "react";
import "./GameData.scss";

const GameData = ({ level, score }) => {
  return (
    <div className="game-data-wrapper font-size-regular">
      <div className="level">Level: {level}</div>
      <div className="score-wrapper">
        <span className="current-score">Current score: {score.current}</span>
        <span className="best-score">Best score: {score.best}</span>
      </div>
    </div>
  );
};

export default GameData;
