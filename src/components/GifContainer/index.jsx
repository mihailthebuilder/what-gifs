import React, { useEffect } from "react";

import "./GifContainer.scss";

import {
  isScrolledIntoView,
  RESPONSIVE_THRESHOLD,
} from "../../common/index.js";

const GifContainer = ({ source, title, checkAnswer }) => {
  useEffect(() => {
    const cardWrapper = document.getElementById(source);

    const playGif = () => {
      cardWrapper.querySelector(
        "img"
      ).src = `${process.env.PUBLIC_URL}/gifs/original/${source}.gif`;
      cardWrapper.classList.add("yellow-font");
    };

    const stopPlayGif = () => {
      cardWrapper.querySelector(
        "img"
      ).src = `${process.env.PUBLIC_URL}/gifs/images/${source}.jpg`;
      cardWrapper.classList.remove("yellow-font");
    };

    const checkElemInView = () => {
      if (isScrolledIntoView(cardWrapper)) {
        playGif();
      } else {
        stopPlayGif();
      }
    };

    if (window.innerWidth > RESPONSIVE_THRESHOLD) {
      cardWrapper.addEventListener("mouseenter", playGif);
      cardWrapper.addEventListener("mouseleave", stopPlayGif);
    } else {
      window.addEventListener("scroll", checkElemInView);
    }

    return () => {
      cardWrapper.removeEventListener("mouseenter", playGif);
      cardWrapper.removeEventListener("mouseleave", stopPlayGif);
      cardWrapper.removeEventListener("scroll", checkElemInView);
    };
  }, [source]);

  return (
    <div className="card-wrapper" id={source} onClick={checkAnswer}>
      <img
        src={`${process.env.PUBLIC_URL}/gifs/images/${source}.jpg`}
        alt={title}
      />
      <div className="title font-size-regular">{title}</div>
    </div>
  );
};

export default GifContainer;
