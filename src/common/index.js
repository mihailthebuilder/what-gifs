function CardItem(key, title) {
  this.key = key;
  this.title = title;
}

const CARD_DECK = [
  new CardItem("awkward", "Awkward Erm"),
  new CardItem("bored", "Bored Cat"),
  new CardItem("ohgod", "Oh God Reaction"),
  new CardItem("doggystyle", "Doggy Style Fail"),
  new CardItem("rwow", "R & R Wow"),
  new CardItem("failhome", "Fail Home Video"),
  new CardItem("letmein", "Let Me In"),
  new CardItem("icehockey", "Ouch Ice Hockey"),
  new CardItem("bros", "Best Bros Friendship"),
  new CardItem("weekend", "Mood Monday"),
  new CardItem("office", "The Office Get Out"),
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
  return level;
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

const isScrolledIntoView = (el) => {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  // Only completely visible elements return true:
  const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  // Partially visible elements return true:
  //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
};

export {
  CARD_DECK,
  levelToCardNum,
  pickCards,
  ScoreObj,
  shuffleCards,
  MAX_SCORE,
  scoreToLevel,
  isScrolledIntoView,
};
