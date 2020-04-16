import standardDeck from "./standard";

describe("Standard Deck", () => {
  it("export exists", () => expect(standardDeck).not.toBeUndefined());
  it("returns 52 cards", () => expect(standardDeck).toHaveLength(52));
});
