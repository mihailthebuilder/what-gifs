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

export { CARD_DECK };
