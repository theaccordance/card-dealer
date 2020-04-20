"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
  "ace",
];
function buildDeck(deck, suit) {
  const cards = ranks.map((rank) => Object.assign({}, { suit, rank }));
  return deck.concat(cards);
}
exports.standardDeck = suits.reduce(buildDeck, []);
