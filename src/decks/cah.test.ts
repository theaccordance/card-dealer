import { blackDeck, whiteDeck } from "./cah";

describe("Cards Against Humanity: Black Deck", () => {
  it("Export exists", () => expect(blackDeck).not.toBeUndefined());
  it("Each card contains properties 'color', 'text' and 'pick'", () => {
    const [card] = blackDeck;
    expect(card).toHaveProperty("color");
    expect(card).toHaveProperty("text");
    expect(card).toHaveProperty("pick");
  });
});

describe("Cards Against Humanity: White Deck", () => {
  it("Export exists", () => expect(whiteDeck).not.toBeUndefined());
  it("Each card contains properties 'text' and 'color'", () => {
    const [card] = whiteDeck;
    expect(card).toHaveProperty("color");
    expect(card).toHaveProperty("text");
  });
});
