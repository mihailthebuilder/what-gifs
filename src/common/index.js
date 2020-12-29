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
  /*new CardItem("shocked", "Shocked", "", ""),
  new CardItem("horriblelaugh", "Horrible Laugh", "", ""),*/
];

const levelToCardNum = (level) => {
  return level * 2 + 1;
};

const scoreToLevel = (score, levelToNum) => {
  let level = 0;
  let scoreAtLevel = 0;
  while (scoreAtLevel <= score) {
    level++;
    scoreAtLevel += levelToNum(level);
  }
  return level - 1;
};

const getMaxScore = (cardDeck, levelToNum) => {
  let sum = 0;
  for (let i = 1; levelToNum(i) <= cardDeck.length; i++) {
    sum += levelToNum(i);
  }

  return sum;
};

const MAX_SCORE = getMaxScore(CARD_DECK, levelToCardNum);

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

const shuffleCards = (cards) => {
  return cards.sort(() => 0.5 - Math.random());
};

export {
  CARD_DECK,
  levelToCardNum,
  pickCards,
  ScoreObj,
  shuffleCards,
  MAX_SCORE,
};
