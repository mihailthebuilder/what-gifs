import React, { useEffect } from "react";

import "./GifContainer.scss";

const GifContainer = ({ source, title }) => {
  const playGif = (event) => {
    let imgElem = event.target.closest(".card-wrapper").querySelector("img");
    imgElem.src = `${process.env.PUBLIC_URL}/gifs/original/${source}.gif`;
  };

  const stopPlayGif = (event) => {
    let imgElem = event.target.closest(".card-wrapper").querySelector("img");
    imgElem.src = `${process.env.PUBLIC_URL}/gifs/images/${source}.jpg`;
  };

  //clean up event listeners
  useEffect(() => {
    return () => {
      const cardWrapper = document.getElementById(source);
      cardWrapper.removeEventListener("mouseenter", playGif);
      cardWrapper.removeEventListener("mouseleave", stopPlayGif);
    };
  });

  return (
    <div
      className="card-wrapper"
      onMouseEnter={playGif}
      onMouseLeave={stopPlayGif}
      id={source}
    >
      <img
        src={`${process.env.PUBLIC_URL}/gifs/images/${source}.jpg`}
        alt={title}
      />
      <div className="title font-size-regular">{title}</div>
    </div>
  );
};

export default GifContainer;
