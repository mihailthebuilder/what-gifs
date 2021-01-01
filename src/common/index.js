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

const shuffleCards = (cards) => {
  return cards.sort(() => 0.5 - Math.random());
};

const LEVEL_LOAD_TIME = 3000;

const RESPONSIVE_THRESHOLD = 1366;

export {
  CARD_DECK,
  levelToCardNum,
  pickCards,
  shuffleCards,
  MAX_SCORE,
  scoreToLevel,
  LEVEL_LOAD_TIME,
  RESPONSIVE_THRESHOLD,
};
