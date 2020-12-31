import React from "react";
import "./GameData.scss";

const GameData = ({ level, currentScore, bestScore }) => {
  return (
    <div className="game-data-wrapper font-size-regular">
      <div className="level">Level: {level}</div>
      <div className="score-wrapper">
        <span className="current-score">Current score: {currentScore}</span>
        <span className="best-score">Best score: {bestScore}</span>
      </div>
    </div>
  );
};

export default GameData;
