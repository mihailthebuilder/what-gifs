function CardItem(id, title, gifSrc, imgSrc) {
  this.id = id;
  this.title = title;
  this.gifSrc = gifSrc;
  this.imgSrc = imgSrc;
}

const CARD_DECK = [
  CardItem("holla", "Holla There", "", ""),
  CardItem("wazap", "Whatsuuup", "", ""),
  CardItem("fight", "Fight fight!", "", ""),
  CardItem("awkward", "Awkwaaaard...", "", ""),
  CardItem("saywhat", "Say Whaat???", "", ""),
  CardItem("noway", "Nooo Wayy", "", ""),
  CardItem("dead", "Dead", "", ""),
  CardItem("shocked", "Shocked", "", ""),
  CardItem("horriblelaugh", "Horrible Laugh", "", ""),
];

export { CARD_DECK };
