import { Dealer, standardDeck, unoDeck } from "./index";

describe("card-dealer module", () => {
  it("'Dealer' exists as an export", () => expect(Dealer).not.toBeUndefined());
  it("'standardDeck' exist as an export", () =>
    expect(standardDeck).not.toBeUndefined());
  it("'unoDeck' exists as an export", () =>
    expect(unoDeck).not.toBeUndefined());
});
