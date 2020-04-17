import { unoDeck } from "./uno";

describe("Uno Card Deck", () => {
  it("export exists", () => expect(unoDeck).not.toBeUndefined());
  it("deck contains 108 cards", () => expect(unoDeck).toHaveLength(108));
  it("uno card contains property `color`", () => {
    const [card] = unoDeck;
    expect(card).toHaveProperty("color");
  });
});
