export interface UnoPlayingCard {
  color: string;
  rank?: string;
}

const standardColors = ["red", "yellow", "green", "blue"];

function buildColorDeck(
  cards: UnoPlayingCard[],
  color: string
): UnoPlayingCard[] {
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

export const unoDeck: UnoPlayingCard[] = [
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
