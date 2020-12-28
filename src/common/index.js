function CardItem(key, title, gifSrc, imgSrc) {
  this.key = key;
  this.title = title;
  this.gifSrc = gifSrc;
  this.imgSrc = imgSrc;
}

const CARD_DECK = [
  new CardItem("holla", "Holla There", "", ""),
  new CardItem("wazap", "Whatsuuup", "", ""),
  new CardItem("fight", "Fight fight!", "", ""),
  new CardItem("awkward", "Awkwaaaard...", "", ""),
  new CardItem("saywhat", "Say Whaat???", "", ""),
  new CardItem("noway", "Nooo Wayy", "", ""),
  new CardItem("dead", "Dead", "", ""),
  new CardItem("shocked", "Shocked", "", ""),
  new CardItem("horriblelaugh", "Horrible Laugh", "", ""),
];

const levelToCardNum = (level) => {
  return level * 2 + 1;
};

const pickCards = (cardNum, cardDeck) => {
  return cardDeck
    .slice()
    .sort(() => 0.5 - Math.random())
    .slice(0, cardNum);
};

function ScoreObj(currentScore, bestScore) {
  this.current = currentScore;
  this.best = bestScore;
}

export { CARD_DECK, levelToCardNum, pickCards, ScoreObj };
