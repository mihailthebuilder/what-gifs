import React, { useEffect } from "react";

import "./GifContainer.scss";

import { RESPONSIVE_THRESHOLD } from "../../common/index.js";

const GifContainer = ({ source, title, checkAnswer }) => {
  useEffect(() => {
    const cardWrapper = document.getElementById(source);

    const playGif = () => {
      //the GIFs are placed in the public folder because they're dynamically loaded one by one, not all at once
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

    //if desktop, only play GIF on hover, otherwise always play it
    if (window.innerWidth > RESPONSIVE_THRESHOLD) {
      cardWrapper.addEventListener("mouseenter", playGif);
      cardWrapper.addEventListener("mouseleave", stopPlayGif);
    } else {
      playGif();
    }

    return () => {
      if (window.innerWidth > RESPONSIVE_THRESHOLD) {
        cardWrapper.removeEventListener("mouseenter", playGif);
        cardWrapper.removeEventListener("mouseleave", stopPlayGif);
      }
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
