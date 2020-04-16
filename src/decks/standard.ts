const suits: string[] = ["Clubs", "Diamonds", "Hearts", "Spades"];
const ranks: string[] = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
  "Ace",
];

function buildDeck(deck: object[], suit: string) {
  const cards = ranks.map((rank) => Object.assign({}, { suit, rank }));

  return deck.concat(cards);
}

const standardDeck: object[] = suits.reduce(buildDeck, []);

export default standardDeck;
