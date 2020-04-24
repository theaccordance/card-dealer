import { blackDeck, whiteDeck } from "./cah";

describe("Cards Against Humanity: Black Deck", () => {
  it("export exists", () => expect(blackDeck).not.toBeUndefined());
});
describe("Cards Against Humanity: White Deck", () => {
  it("export exists", () => expect(whiteDeck).not.toBeUndefined());
});
