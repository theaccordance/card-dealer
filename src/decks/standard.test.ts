import { standardDeck } from "./standard";

describe("Standard Deck", () => {
  it("export exists", () => expect(standardDeck).not.toBeUndefined());
  it("returns 52 cards", () => expect(standardDeck).toHaveLength(52));
  it("Each card is an object with properties 'suit' and 'rank'", () => {
    const card = standardDeck[0];
    expect(card).not.toBeUndefined();
    expect(card).toHaveProperty("suit");
    expect(card).toHaveProperty("rank");
  });
});
