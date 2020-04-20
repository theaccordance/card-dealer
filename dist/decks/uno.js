"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const standardColors = ["red", "yellow", "green", "blue"];
function buildColorDeck(cards, color) {
  const standardRanks = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "skip",
    "draw-two",
    "reverse",
  ];
  const colorCards = [
    { color, rank: "0" },
    ...standardRanks.map((rank) => Object.assign({}, { color, rank })),
    ...standardRanks.map((rank) => Object.assign({}, { color, rank })),
  ];
  return cards.concat(colorCards);
}
exports.unoDeck = [
  { color: "wild" },
  { color: "wild" },
  { color: "wild" },
  { color: "wild" },
  { color: "wild", rank: "draw-four" },
  { color: "wild", rank: "draw-four" },
  { color: "wild", rank: "draw-four" },
  { color: "wild", rank: "draw-four" },
  ...standardColors.reduce(buildColorDeck, []),
];
